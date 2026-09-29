(function () {
  "use strict";

  const QS = window.QUESTIONS;
  const BY_ID = Object.fromEntries(QS.map(q => [q.id, q]));
  const KNOW = QS.filter(q => !q.scenario).map(q => q.id);
  const SCEN = QS.filter(q => q.scenario).map(q => q.id);
  const EXAM_DATE = new Date(2026, 9, 2);   // viernes 2 oct 2026, 1 pm
  const PASS = 60;
  const KEY = "togaf-ogea103-v1";
  const $app = document.getElementById("app");

  // ---------- persistence ----------
  const blank = () => ({ attempts: [], qstats: {}, planDone: {}, theme: null });
  let store = blank();
  try { store = Object.assign(blank(), JSON.parse(localStorage.getItem(KEY)) || {}); } catch (e) {}
  const save = () => { try { localStorage.setItem(KEY, JSON.stringify(store)); } catch (e) {} };

  if (store.theme) document.documentElement.dataset.theme = store.theme;

  // ---------- helpers ----------
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const pct = (c, t) => t ? Math.round(100 * c / t) : 0;
  const fmtDate = d => new Date(d).toLocaleString("es-MX", { day: "2-digit", month: "short", hour: "2-digit", minute: "2-digit" });
  const stat = id => store.qstats[id] || { seen: 0, correct: 0, wrong: 0, last: null };
  const wrongIds = () => QS.filter(q => stat(q.id).last === false).map(q => q.id);
  const unseenIds = () => QS.filter(q => !stat(q.id).seen).map(q => q.id);
  const masteredCount = () => QS.filter(q => stat(q.id).last === true).length;

  function splitScenario(q) {
    if (!q.scenario) return { scen: null, ask: q.q };
    const m = q.q.split(/\n?Refer to the [Ss]cenario\s*-?\s*\n?/);
    if (m.length > 1) {
      const body = m[0].replace(/^Please read this scenario prior to answering the question\.?\s*\n?/, "");
      return { scen: body, ask: m.slice(1).join("\n") };
    }
    return { scen: q.q, ask: "" };
  }

  function record(id, ok) {
    const s = stat(id);
    s.seen++; ok ? s.correct++ : s.wrong++; s.last = ok;
    store.qstats[id] = s;
  }

  // ---------- countdown ----------
  function renderCountdown() {
    const today = new Date(); today.setHours(0, 0, 0, 0);
    const days = Math.round((EXAM_DATE - today) / 864e5);
    const el = document.getElementById("countdown");
    el.innerHTML = days > 0 ? `Examen vie 2 oct, 1 pm · faltan <b>${days}</b> día${days === 1 ? "" : "s"}`
      : days === 0 ? "<b>¡Hoy es el examen! Éxito 💪</b>" : "Examen: 2 oct 2026";
  }

  // ---------- study plan ----------
  const PLAN = [
    { date: new Date(2026, 8, 29), title: "Conocimiento I · 3–4 h", text: "Conocimiento 1–75 en modo estudio (≈2 h). Lee la explicación y el truco aunque aciertes. Cierra repasando las falladas.", sets: [{ label: "Estudiar conocimiento 1–75", ids: () => KNOW.slice(0, 75), mode: "study" }, { label: "Repasar falladas", ids: wrongIds, mode: "study" }] },
    { date: new Date(2026, 8, 30), title: "Conocimiento II + Escenarios · 5–6 h", text: `Conocimiento 76–${KNOW.length} (≈2 h), después los ${SCEN.length} escenarios (≈3 h): identifica la fase del ADM y la técnica de TOGAF que resuelve el problema. Cierra con falladas.`, sets: [{ label: `Estudiar conocimiento 76–${KNOW.length}`, ids: () => KNOW.slice(75), mode: "study" }, { label: `Estudiar ${SCEN.length} escenarios`, ids: () => SCEN.slice(), mode: "study" }, { label: "Repasar falladas", ids: wrongIds, mode: "study" }] },
    { date: new Date(2026, 9, 1), title: "Vuelta completa + Simulacro · 5–6 h", text: "Las 183 en aleatorio (≈2.5 h; las falladas se repiten al final), repaso de falladas y un simulacro con tiempo. Meta: ≥80%. Duerme temprano.", sets: [{ label: "Las 183 en aleatorio", ids: () => shuffle(QS.map(q => q.id)), mode: "study" }, { label: "Repasar falladas", ids: wrongIds, mode: "study" }, { label: "Simulacro de examen", ids: null, mode: "exam" }] },
    { date: new Date(2026, 9, 2), title: "Mañana del examen · 1 h máx.", text: "Sólo repasar falladas y leer trucos. Termina a las 11:00, come bien y llega descansado a la 1 pm. Nada de simulacros hoy.", sets: [{ label: "Repasar falladas", ids: wrongIds, mode: "study" }] }
  ];

  // ---------- session ----------
  let S = null;
  let timerHandle = null;

  function start(opts) {
    let ids = opts.ids;
    if (!ids || !ids.length) { alertBox("No hay preguntas para esta selección. ¡Buen trabajo!"); return; }
    if (opts.shuffle) ids = shuffle(ids);
    S = {
      mode: opts.mode, label: opts.label, ids: ids.slice(), base: ids.length, idx: 0,
      answers: {}, first: {}, repeat: new Set(), requeue: opts.requeue !== false && opts.mode === "study",
      started: Date.now(), limit: opts.limit || 0, planDay: opts.planDay
    };
    renderQuestion();
  }

  function startExam(planDay) {
    const ids = shuffle(KNOW).slice(0, 40).concat(shuffle(SCEN).slice(0, 8));
    start({ mode: "exam", label: "Simulacro (40 + 8)", ids, limit: 150 * 60, planDay });
  }

  function startTimer() {
    clearInterval(timerHandle);
    const tick = () => {
      const el = document.getElementById("timer");
      if (!S) return clearInterval(timerHandle);
      const left = S.limit - Math.floor((Date.now() - S.started) / 1000);
      if (left <= 0) { clearInterval(timerHandle); finish(); return; }
      if (el) el.textContent = `⏱ ${Math.floor(left / 60)}:${String(left % 60).padStart(2, "0")}`;
    };
    timerHandle = setInterval(tick, 1000);
    tick();
  }

  function alertBox(msg) {
    $app.innerHTML = `<div class="card"><p style="font-size:16px;color:var(--text)">${esc(msg)}</p><div class="row" style="margin-top:12px"><button class="btn primary" onclick="App.home()">Volver al inicio</button></div></div>`;
  }

  // ---------- question view ----------
  function renderQuestion() {
    const id = S.ids[S.idx];
    const q = BY_ID[id];
    const isRepeat = S.repeat.has(S.idx);
    const answered = S.mode === "study" ? (isRepeat ? S.answers["r" + S.idx] : S.answers[id]) : null;
    const chosen = S.mode === "exam" ? S.answers[id] : answered;
    const { scen, ask } = splitScenario(q);
    const firstCount = Object.keys(S.first).length;
    const firstOk = Object.values(S.first).filter(Boolean).length;
    const progress = S.mode === "exam" ? Object.keys(S.answers).length : firstCount;

    let optsHtml = q.opts.map(([k, t]) => {
      let cls = "opt";
      if (S.mode === "study" && answered) {
        if (k === q.ans) cls += " correct"; else if (k === answered) cls += " wrong";
      } else if (chosen === k) cls += " sel";
      const dis = S.mode === "study" && answered ? "disabled" : "";
      return `<button class="${cls}" ${dis} onclick="App.answer('${k}')"><span class="k">${k}</span><span>${esc(t)}</span></button>`;
    }).join("");

    let fb = "";
    if (S.mode === "study" && answered) fb = feedbackHtml(q, answered);

    const imgs = q.imgs.map(src => `<img class="qimg" src="${src}" alt="Figura de la pregunta ${q.id}" onclick="App.zoom(this.src)">`).join("");
    const last = S.idx >= S.ids.length - 1;

    $app.innerHTML = `
      <div class="qhead">
        <div class="row">
          <span class="pill">${esc(S.label)}</span>
          <span class="pill">Pregunta #${q.id}</span>
          ${q.scenario ? '<span class="pill warn">Escenario</span>' : ""}
          ${isRepeat ? '<span class="pill bad">Repaso: la fallaste antes</span>' : ""}
        </div>
        <div class="row">
          ${S.mode === "study" ? `<span class="pill ok">Score: ${firstOk}/${firstCount} (${pct(firstOk, firstCount)}%)</span>` : `<span class="pill" id="timer"></span>`}
          <span class="muted" style="font-size:14px">${Math.min(S.idx + 1, S.ids.length)} / ${S.ids.length}</span>
        </div>
      </div>
      <div class="bar"><span style="width:${pct(progress, S.base)}%"></span></div>
      <div class="card" style="margin-top:14px">
        ${scen ? `<div class="qtext scen">${esc(scen)}</div>` : ""}
        <div class="${scen ? "qask" : "qtext"}">${esc(ask)}</div>
        ${imgs}
        <div class="opts">${optsHtml}</div>
        ${fb}
      </div>
      <div class="nav">
        <div class="row">
          ${S.mode === "exam" ? `<button class="btn" ${S.idx === 0 ? "disabled" : ""} onclick="App.go(-1)">← Anterior</button>` : ""}
          <button class="btn" onclick="App.finish()">Terminar ${S.mode === "exam" ? "examen" : "sesión"}</button>
        </div>
        <div class="row">
          ${S.mode === "exam"
            ? (last ? `<button class="btn primary" onclick="App.finish()">Entregar y calificar</button>` : `<button class="btn primary" onclick="App.go(1)">Siguiente →</button>`)
            : `<button class="btn primary" ${answered ? "" : "disabled"} onclick="App.next()">${last ? "Ver resultados" : "Siguiente →"}</button>`}
        </div>
      </div>
      <p class="kbd">Atajos: teclas A–D (o 1–4) para responder · Enter / → para avanzar${S.mode === "exam" ? " · ← para regresar" : ""}.</p>`;
    if (S.limit) startTimer();
    window.scrollTo({ top: 0 });
  }

  function feedbackHtml(q, chosen) {
    const ok = chosen === q.ans;
    const correctText = q.opts.find(o => o[0] === q.ans)[1];
    const note = q.pdfAns !== q.ans ? `<p class="muted" style="font-size:14px">⚠️ El PDF marca <b>${q.pdfAns}</b>; esta guía usa <b>${q.ans}</b> (ver explicación).</p>` : "";
    return `<div class="fb ${ok ? "ok" : "bad"}">
      <div class="verdict">${ok ? "✓ ¡Correcto!" : `✗ Incorrecto — elegiste ${chosen}. La respuesta es ${q.ans}.`}</div>
      ${ok ? "" : `<p style="margin:4px 0 8px"><b>${q.ans}.</b> ${esc(correctText)}</p>`}
      <div>${esc(q.exp)}</div>
      <div class="tip"><b>Para recordar:</b> ${esc(q.tip)}</div>
      ${note}
      ${q.votes ? `<p class="muted" style="font-size:13px;margin:8px 0 0">Votos de la comunidad: ${esc(q.votes)}</p>` : ""}
    </div>`;
  }

  function answer(k) {
    const id = S.ids[S.idx];
    const q = BY_ID[id];
    if (S.mode === "exam") { S.answers[id] = k; renderQuestion(); return; }
    const isRepeat = S.repeat.has(S.idx);
    const keyA = isRepeat ? "r" + S.idx : id;
    if (S.answers[keyA]) return;
    S.answers[keyA] = k;
    const ok = k === q.ans;
    if (!isRepeat && !(id in S.first)) { S.first[id] = ok; record(id, ok); save(); }
    else if (isRepeat) { store.qstats[id].last = ok; save(); }
    if (!ok && S.requeue) { S.ids.push(id); S.repeat.add(S.ids.length - 1); }
    renderQuestion();
  }

  function next() {
    if (S.idx >= S.ids.length - 1) return finish();
    S.idx++; renderQuestion();
  }
  function go(d) {
    const n = S.idx + d;
    if (n < 0 || n >= S.ids.length) return;
    S.idx = n; renderQuestion();
  }

  function finish() {
    clearInterval(timerHandle);
    if (!S) return home();
    let items;
    if (S.mode === "exam") {
      items = S.ids.map(id => ({ id, chosen: S.answers[id] || null, ok: S.answers[id] === BY_ID[id].ans }));
      items.forEach(it => record(it.id, it.ok));
    } else {
      items = Object.keys(S.first).map(Number).map(id => ({ id, chosen: S.answers[id], ok: S.first[id] }));
    }
    if (!items.length) { S = null; return home(); }
    const k = items.filter(i => !BY_ID[i.id].scenario), s = items.filter(i => BY_ID[i.id].scenario);
    const correct = items.filter(i => i.ok).length;
    const att = {
      date: Date.now(), mode: S.mode, label: S.label, total: items.length, correct, pct: pct(correct, items.length),
      kTotal: k.length, kCorrect: k.filter(i => i.ok).length, sTotal: s.length, sCorrect: s.filter(i => i.ok).length,
      mins: Math.round((Date.now() - S.started) / 60000)
    };
    store.attempts.push(att);
    if (S.planDay != null) store.planDone[S.planDay] = true;
    save();
    const done = S; S = null;
    renderResults(att, items, done.mode === "exam" ? done.ids.length !== items.length : false);
  }

  // ---------- results ----------
  let lastResult = null;
  function renderResults(att, items, _, filter) {
    lastResult = { att, items };
    filter = filter || "wrong";
    const pass = att.pct >= PASS;
    const prev = store.attempts.length > 1 ? store.attempts[store.attempts.length - 2] : null;
    const delta = prev ? att.pct - prev.pct : null;
    const shown = items.filter(i => filter === "all" || !i.ok);
    $app.innerHTML = `
      <h1>Resultado del intento</h1>
      <p class="muted">${esc(att.label)} · ${fmtDate(att.date)} · ${att.mins} min</p>
      <div class="grid" style="margin-top:12px">
        <div class="card"><div class="muted">Score</div><div class="stat" style="color:var(--${pass ? "ok" : "bad"})">${att.pct}%</div><p>${att.correct} de ${att.total} correctas · ${pass ? "Aprobado (≥60%)" : "Por debajo del 60%"}</p></div>
        <div class="card"><div class="muted">Conocimiento</div><div class="stat">${att.kTotal ? pct(att.kCorrect, att.kTotal) + "%" : "—"}</div><p>${att.kCorrect}/${att.kTotal}</p></div>
        <div class="card"><div class="muted">Escenarios</div><div class="stat">${att.sTotal ? pct(att.sCorrect, att.sTotal) + "%" : "—"}</div><p>${att.sCorrect}/${att.sTotal}</p></div>
        <div class="card"><div class="muted">vs. intento anterior</div><div class="stat">${delta == null ? "—" : (delta >= 0 ? "+" : "") + delta + " pts"}</div><p>${prev ? "Anterior: " + prev.pct + "%" : "Primer intento"}</p></div>
      </div>
      <div class="row" style="margin-top:16px">
        <button class="btn primary" onclick="App.retryWrong()">Repasar las ${items.filter(i => !i.ok).length} falladas</button>
        <button class="btn" onclick="App.home()">Inicio</button>
      </div>
      <h2>Retroalimentación</h2>
      <div class="seg"><button class="${filter === "wrong" ? "on" : ""}" onclick="App.resFilter('wrong')">Sólo incorrectas</button><button class="${filter === "all" ? "on" : ""}" onclick="App.resFilter('all')">Todas</button></div>
      <div class="card" style="margin-top:12px;padding-top:4px">
        ${shown.length ? shown.map(it => reviewItem(it)).join("") : '<p style="padding:12px 0">¡Sin errores en este intento! 🎉</p>'}
      </div>`;
    window.scrollTo({ top: 0 });
  }

  function reviewItem(it) {
    const q = BY_ID[it.id];
    const { scen, ask } = splitScenario(q);
    const imgs = q.imgs.map(src => `<img class="qimg" src="${src}" alt="" onclick="App.zoom(this.src)">`).join("");
    const opts = q.opts.map(([k, t]) => {
      let cls = "opt"; if (k === q.ans) cls += " correct"; else if (k === it.chosen) cls += " wrong";
      return `<div class="${cls}"><span class="k">${k}</span><span>${esc(t)}</span></div>`;
    }).join("");
    return `<div class="review-item">
      <div class="row" style="margin-bottom:6px"><span class="pill">#${q.id}</span>${q.scenario ? '<span class="pill warn">Escenario</span>' : ""}<span class="pill ${it.ok ? "ok" : "bad"}">${it.ok ? "Correcta" : it.chosen ? "Incorrecta" : "Sin responder"}</span></div>
      ${scen ? `<details><summary class="muted">Ver escenario</summary><div class="qtext scen" style="margin-top:8px">${esc(scen)}</div></details>` : ""}
      <div class="qtext" style="font-weight:600;margin-top:6px">${esc(ask)}</div>${imgs}
      <div class="opts">${opts}</div>
      ${it.chosen ? feedbackHtml(q, it.chosen) : feedbackHtml(q, "—").replace("elegiste —", "no respondiste")}
    </div>`;
  }

  // ---------- home ----------
  function home() {
    clearInterval(timerHandle);
    S = null;
    renderCountdown();
    const atts = store.attempts;
    const best = atts.length ? Math.max(...atts.map(a => a.pct)) : null;
    const today = new Date(); today.setHours(0, 0, 0, 0);
    const wrong = wrongIds().length, unseen = unseenIds().length, mastered = masteredCount();

    const planHtml = PLAN.map((d, i) => {
      const isToday = d.date.getTime() === today.getTime();
      const dstr = d.date.toLocaleDateString("es-MX", { weekday: "short", day: "numeric", month: "short" });
      return `<div class="day ${isToday ? "today" : ""} ${store.planDone[i] ? "done" : ""}">
        <div class="d">Día ${i + 1}<small>${dstr}</small></div>
        <div class="body card" style="padding:12px 14px"><h3>${d.title}</h3><p style="margin:0 0 10px">${esc(d.text)}</p>
          <div class="row">${d.sets.map((s, j) => `<button class="btn ${j === 0 ? "primary" : ""}" onclick="App.plan(${i},${j})">${esc(s.label)}</button>`).join("")}</div>
        </div></div>`;
    }).join("");

    $app.innerHTML = `
      <h1>Prepárate para el OGEA-103</h1>
      <p class="muted">Todas las preguntas del PDF con retroalimentación en español y un truco para recordar cada respuesta. Cada intento guarda su score en este navegador.</p>

      <div class="grid" style="margin-top:14px">
        <div class="card"><div class="muted">Dominadas</div><div class="stat">${mastered}<span class="muted" style="font-size:16px">/${QS.length}</span></div><div class="bar" style="margin-top:6px"><span style="width:${pct(mastered, QS.length)}%;background:var(--ok)"></span></div></div>
        <div class="card"><div class="muted">Por repasar</div><div class="stat" style="color:var(--bad)">${wrong}</div><p>Falladas en su último intento</p></div>
        <div class="card"><div class="muted">Sin ver</div><div class="stat">${unseen}</div><p>Preguntas aún no respondidas</p></div>
        <div class="card"><div class="muted">Mejor score</div><div class="stat">${best == null ? "—" : best + "%"}</div><p>${atts.length} intento${atts.length === 1 ? "" : "s"}</p></div>
      </div>

      <h2>Modos de práctica</h2>
      <div class="grid">
        <div class="card click" onclick="App.mode('all')"><h3>📘 Examen completo</h3><p>Las ${QS.length} preguntas en orden. Retroalimentación inmediata; las falladas se repiten al final.</p></div>
        <div class="card click" onclick="App.mode('random')"><h3>🔀 Completo aleatorio</h3><p>Las ${QS.length} en orden aleatorio, con retroalimentación inmediata.</p></div>
        <div class="card click" onclick="App.mode('exam')"><h3>⏱ Simulacro</h3><p>40 de conocimiento + 8 escenarios, 150 min. Calificación y retroalimentación al final.</p></div>
        <div class="card click" onclick="App.mode('wrong')"><h3>🔁 Repasar falladas</h3><p>${wrong} pregunta${wrong === 1 ? "" : "s"} que fallaste la última vez.</p></div>
        <div class="card click" onclick="App.mode('know')"><h3>🧠 Sólo conocimiento</h3><p>${KNOW.length} preguntas de fundamentos (Parte 1).</p></div>
        <div class="card click" onclick="App.mode('scen')"><h3>🏢 Sólo escenarios</h3><p>${SCEN.length} preguntas de escenario (Parte 2).</p></div>
        <div class="card click" onclick="App.mode('unseen')"><h3>✨ No vistas</h3><p>${unseen} pregunta${unseen === 1 ? "" : "s"} que aún no respondes.</p></div>
      </div>

      <h2>Plan intensivo (29 sep – 2 oct)</h2>
      <div class="days">${planHtml}</div>

      <h2>Historial de intentos</h2>
      ${atts.length ? historyHtml(atts) : '<p class="muted">Aún no hay intentos. ¡Empieza con el Día 1 hoy!</p>'}

      <h2>Consejos para el examen</h2>
      <div class="card"><ul style="margin:0;padding-left:20px">
        <li>OGEA-103 combina Parte 1 (40 preguntas de conocimiento) y Parte 2 (8 escenarios con puntaje gradual). Se aprueba con 60% en cada parte.</li>
        <li>En escenarios, identifica primero <b>en qué fase del ADM</b> estás y qué <b>técnica</b> resuelve el problema (Stakeholder Management, Readiness Assessment, Trade-offs, Gap Analysis, Compliance Review…).</li>
        <li>Desconfía de opciones con "todos los modelos posibles", "sin revisión", "sólo los stakeholders poderosos" o que posponen la seguridad o el riesgo.</li>
        <li>Varias preguntas del PDF se repiten con otras palabras: si dominas el patrón, aciertas todas sus variantes.</li>
      </ul></div>
      <p class="muted" style="font-size:13px;margin-top:20px">${store.attempts.length ? `<button class="btn" onclick="App.reset()">Borrar mi progreso</button>` : ""}</p>`;
    window.scrollTo({ top: 0 });
  }

  function historyHtml(atts) {
    const last = atts.slice(-20);
    const w = 600, h = 150, bw = w / Math.max(last.length, 1);
    const bars = last.map((a, i) => {
      const bh = Math.max(2, (a.pct / 100) * (h - 20));
      const color = a.pct >= PASS ? "var(--ok)" : "var(--bad)";
      return `<rect x="${i * bw + bw * 0.15}" y="${h - bh}" width="${bw * 0.7}" height="${bh}" rx="3" fill="${color}"><title>${a.pct}% · ${esc(a.label)}</title></rect>
        <text x="${i * bw + bw / 2}" y="${h - bh - 4}" text-anchor="middle" font-size="11" fill="var(--muted)">${a.pct}</text>`;
    }).join("");
    const passY = h - (PASS / 100) * (h - 20);
    const rows = atts.slice().reverse().slice(0, 30).map(a => `<tr><td>${fmtDate(a.date)}</td><td>${esc(a.label)}</td><td><b style="color:var(--${a.pct >= PASS ? "ok" : "bad"})">${a.pct}%</b></td><td>${a.correct}/${a.total}</td><td class="muted">${a.kTotal ? pct(a.kCorrect, a.kTotal) + "%" : "—"} / ${a.sTotal ? pct(a.sCorrect, a.sTotal) + "%" : "—"}</td></tr>`).join("");
    return `<div class="card">
      <svg class="chart" viewBox="0 0 ${w} ${h}" preserveAspectRatio="none">
        <line x1="0" x2="${w}" y1="${passY}" y2="${passY}" stroke="var(--warn)" stroke-dasharray="4 4"/>
        <text x="${w - 4}" y="${passY - 4}" text-anchor="end" font-size="11" fill="var(--warn)">60% para aprobar</text>${bars}
      </svg>
      <div style="overflow-x:auto"><table class="hist"><thead><tr><th>Fecha</th><th>Modo</th><th>Score</th><th>Aciertos</th><th>Conoc. / Escen.</th></tr></thead><tbody>${rows}</tbody></table></div>
    </div>`;
  }

  // ---------- public API ----------
  window.App = {
    home,
    answer, next, go, finish,
    zoom(src) { const z = document.getElementById("zoom"); z.querySelector("img").src = src; z.classList.add("open"); },
    toggleTheme() {
      const cur = document.documentElement.dataset.theme || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
      const nxt = cur === "dark" ? "light" : "dark";
      document.documentElement.dataset.theme = nxt; store.theme = nxt; save();
    },
    mode(m) {
      const all = QS.map(q => q.id);
      if (m === "all") start({ mode: "study", label: "Examen completo", ids: all });
      else if (m === "random") start({ mode: "study", label: "Completo aleatorio", ids: all, shuffle: true });
      else if (m === "exam") startExam();
      else if (m === "wrong") start({ mode: "study", label: "Repaso de falladas", ids: wrongIds(), shuffle: true });
      else if (m === "know") start({ mode: "study", label: "Conocimiento", ids: KNOW.slice() });
      else if (m === "scen") start({ mode: "study", label: "Escenarios", ids: SCEN.slice() });
      else if (m === "unseen") start({ mode: "study", label: "No vistas", ids: unseenIds() });
    },
    plan(i, j) {
      const s = PLAN[i].sets[j];
      if (s.mode === "exam") return startExam(i);
      start({ mode: "study", label: `Día ${i + 1}: ${s.label}`, ids: s.ids(), planDay: j === 0 ? i : undefined });
    },
    retryWrong() {
      const ids = lastResult ? lastResult.items.filter(i => !i.ok).map(i => i.id) : [];
      start({ mode: "study", label: "Repaso del intento", ids, shuffle: true });
    },
    resFilter(f) { if (lastResult) renderResults(lastResult.att, lastResult.items, null, f); },
    reset() {
      if (!confirm("¿Borrar todo tu progreso e historial?")) return;
      store = blank(); save(); home();
    }
  };

  document.addEventListener("keydown", e => {
    if (!S || e.metaKey || e.ctrlKey || e.altKey) return;
    const k = e.key.toUpperCase();
    const map = { "1": "A", "2": "B", "3": "C", "4": "D" };
    const letter = map[k] || k;
    const q = BY_ID[S.ids[S.idx]];
    if (q.opts.some(o => o[0] === letter)) { answer(letter); return; }
    if (e.key === "Enter" || e.key === "ArrowRight") {
      if (S.mode === "exam") go(1);
      else {
        const rep = S.repeat.has(S.idx);
        if (S.answers[rep ? "r" + S.idx : q.id]) next();
      }
    }
    if (e.key === "ArrowLeft" && S.mode === "exam") go(-1);
  });

  renderCountdown();
  home();
})();
