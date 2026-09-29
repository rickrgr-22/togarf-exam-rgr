window.QUESTIONS=[
{
"id": 1,
"q": "Consider the illustration.\nWhat are the items labelled A, B and C?",
"opts": [
[
"A",
"A-Solution Landscape, B-Architecture Requirements Repository, C-Architecture Landscape"
],
[
"B",
"A-Architecture Landscape, B-Architecture Requirements Repository, C-Solutions Landscape"
],
[
"C",
"A-EA Landscape, B-Requirements Repository, C-Artifacts Landscape"
],
[
"D",
"A-Architecture Requirements Repository, B-Solutions Repository, C-Architecture Landscape"
]
],
"ans": "A",
"pdfAns": "A",
"votes": "A (100%)",
"imgs": [
"img/q1_1.png"
],
"scenario": false,
"exp": "En el diagrama del Architecture Repository, la caja superior izquierda (A) es el Solutions Landscape: las soluciones reales que 'habilitan a la empresa'. La inferior (B) es el Architecture Requirements Repository: contiene los 'drivers' (requisitos) de la empresa. El centro (C) es el Architecture Landscape, estructurado según el metamodelo y alimentado por las bibliotecas de referencia y estándares.",
"tip": "Arriba lo que ya ENTREGA (Soluciones), abajo lo que PIDE (Requisitos), en medio lo que se DISEÑA (Architecture Landscape)."
},
{
"id": 2,
"q": "Which phase of the ADM has the purpose to develop an Enterprise Architecture Capability?",
"opts": [
[
"A",
"Phase A"
],
[
"B",
"Phase G"
],
[
"C",
"Phase B"
],
[
"D",
"Preliminary Phase"
]
],
"ans": "D",
"pdfAns": "D",
"votes": "D (93%)",
"imgs": [],
"scenario": false,
"exp": "La Fase Preliminar prepara a la organización para hacer arquitectura: define el 'dónde, qué, por qué, quién y cómo', establece la Capacidad de Arquitectura Empresarial (equipo, procesos, herramientas, principios, framework adaptado). La Fase A ya trabaja sobre un proyecto concreto (Visión).",
"tip": "Preliminar = preparar la 'fábrica' de arquitectura (EA Capability). Fase A = el primer 'producto' (Visión)."
},
{
"id": 3,
"q": "Which statement about Requirements Management is most correct?",
"opts": [
[
"A",
"Requirements Management and stakeholder engagement are placed at the center of architecture development."
],
[
"B",
"Requirements Management is a step of all ADM Phases."
],
[
"C",
"The purpose of Requirements Management is to process change requests."
],
[
"D",
"Stakeholder requirements are captured once in Phase A and managed throughout the ADM cycle."
]
],
"ans": "A",
"pdfAns": "A",
"votes": "A (85%) · B (15%)",
"imgs": [],
"scenario": false,
"exp": "En el diagrama del ADM, Requirements Management está en el CENTRO del ciclo: los requisitos y los stakeholders son el motor de todas las fases. No es un 'paso' dentro de cada fase (B), no sólo procesa change requests (eso es más Fase H) y los requisitos no se capturan una sola vez (D): se identifican y gestionan continuamente.",
"tip": "Requirements Management = el 'corazón' en el centro del círculo del ADM."
},
{
"id": 4,
"q": "Consider the following ADM phases objectives.\nWhich phase does each objective match?",
"opts": [
[
"A",
"1F-2G-3G-4H"
],
[
"B",
"1G-2H-3H-4F"
],
[
"C",
"1F-2G-3H-4H"
],
[
"D",
"1H-2F-3F-4G"
]
],
"ans": "C",
"pdfAns": "C",
"votes": "C (100%)",
"imgs": [
"img/q4_1.png"
],
"scenario": false,
"exp": "1) Que los stakeholders entiendan valor y costo de work packages y Transition Architectures → Fase F (Migration Planning). 2) Asegurar conformidad de los proyectos con la Target Architecture → Fase G (Implementation Governance). 3) Mantener el ciclo de desarrollo de arquitectura → Fase H (Change Management). 4) Asegurar que el Architecture Governance Framework se ejecute → Fase H.",
"tip": "F = planear y priorizar (valor/costo). G = vigilar la implementación (conformidad). H = mantener viva la arquitectura (ciclo y gobierno)."
},
{
"id": 5,
"q": "Which of the following is a responsibility of an Architecture Board?",
"opts": [
[
"A",
"Establishing targets for re-use of components"
],
[
"B",
"Creating the Statement of Architecture Work"
],
[
"C",
"Allocating resources for architecture projects"
],
[
"D",
"Conducting assessments of the maturity level of architecture discipline within the organization"
]
],
"ans": "A",
"pdfAns": "A",
"votes": "A (79%) · D (21%)",
"imgs": [],
"scenario": false,
"exp": "El Architecture Board tiene responsabilidades de gobierno: consistencia entre sub-arquitecturas, establecer objetivos de REUSO de componentes, flexibilidad, cumplimiento, dispensas, etc. Crear el Statement of Architecture Work es del equipo de arquitectura; asignar recursos es de la gerencia; la evaluación de madurez no es su responsabilidad típica.",
"tip": "Board = 'guardián': fija metas de reuso, aprueba, concede dispensas, resuelve conflictos. No 'hace' el trabajo ni reparte presupuesto."
},
{
"id": 6,
"q": "What is used to structure architectural information in an orderly way so that it can be processed to meet stakeholder needs?",
"opts": [
[
"A",
"A Stakeholder Map"
],
[
"B",
"An Architecture Framework"
],
[
"C",
"An EA Library"
],
[
"D",
"A Content Metamodel"
]
],
"ans": "D",
"pdfAns": "D",
"votes": "D (67%) · B (29%)",
"imgs": [],
"scenario": false,
"exp": "El Content Metamodel (Content Framework) define los tipos de entidades y relaciones para estructurar la información arquitectónica de forma ordenada y así poder procesarla para producir vistas que respondan a los stakeholders. Un framework en general es más amplio; un Stakeholder Map sólo lista stakeholders.",
"tip": "Meta-modelo = 'el modelo del modelo': la estructura (entidades + relaciones) que ordena la información."
},
{
"id": 7,
"q": "Complete the sentence. The TOGAF standard covers the development of four architecture domains, Business, Data, Technology and __________.",
"opts": [
[
"A",
"Segment"
],
[
"B",
"Capability"
],
[
"C",
"Transition"
],
[
"D",
"Application"
]
],
"ans": "D",
"pdfAns": "D",
"votes": "D (100%)",
"imgs": [],
"scenario": false,
"exp": "Los cuatro dominios de arquitectura de TOGAF son Business, Data, Application y Technology (BDAT). Data + Application juntos forman la Information Systems Architecture (Fase C).",
"tip": "BDAT: Business, Data, Application, Technology."
},
{
"id": 8,
"q": "Complete the sentence. The Enterprise Continuum provides methods for classifying architecture artifacts as they evolve from\n____________________.",
"opts": [
[
"A",
"generic architectures to reusable Solution Building Blocks"
],
[
"B",
"generic architectures to Organization-Specific Architectures"
],
[
"C",
"Foundation Architectures to re-usable architecture assets"
],
[
"D",
"Solutions Architectures to Solution Building Blocks"
]
],
"ans": "B",
"pdfAns": "B",
"votes": "B (100%)",
"imgs": [],
"scenario": false,
"exp": "El Enterprise Continuum clasifica artefactos desde lo GENÉRICO (Foundation, Common Systems) hasta lo ESPECÍFICO de la organización (Industry → Organization-Specific). Va de izquierda a derecha: genérico → específico.",
"tip": "Continuum = un 'degradado' de lo genérico a lo específico de MI organización."
},
{
"id": 9,
"q": "What is defined as the effect of uncertainty on objectives?",
"opts": [
[
"A",
"Risk"
],
[
"B",
"Vulnerability"
],
[
"C",
"Threat"
],
[
"D",
"Continuity"
]
],
"ans": "A",
"pdfAns": "A",
"votes": "A (100%)",
"imgs": [],
"scenario": false,
"exp": "TOGAF (siguiendo ISO 31000) define el riesgo como 'el efecto de la incertidumbre sobre los objetivos'. Vulnerabilidad y amenaza son conceptos de seguridad; continuidad se refiere a la operación del negocio.",
"tip": "Riesgo = incertidumbre + objetivos."
},
{
"id": 10,
"q": "What is an objective of the ADM Preliminary Phase?",
"opts": [
[
"A",
"To obtain approval for the Statement of Architecture Work"
],
[
"B",
"To create the initial version of the Architecture Roadmap"
],
[
"C",
"To develop a vision of the business value to be delivered by the proposed enterprise architecture"
],
[
"D",
"To select and implement tools to support the Architecture Capability"
]
],
"ans": "D",
"pdfAns": "D",
"votes": "D (78%) · C (22%)",
"imgs": [],
"scenario": false,
"exp": "Un objetivo de la Fase Preliminar es seleccionar e implementar herramientas que soporten la Capacidad de Arquitectura. Aprobar el Statement of Architecture Work y desarrollar la visión de valor de negocio son de la Fase A; el Architecture Roadmap inicial se crea en Fases B-D.",
"tip": "Preliminar = gente, procesos, principios y HERRAMIENTAS. Si suena a 'preparar el taller', es Preliminar."
},
{
"id": 11,
"q": "The _____________ ensures that a project transitioning into implementation also smoothly transitions into appropriate Architecture Governance.",
"opts": [
[
"A",
"Implementation Strategy"
],
[
"B",
"Transition Plan"
],
[
"C",
"Migration Plan"
],
[
"D",
"Implementation Governance Model"
]
],
"ans": "D",
"pdfAns": "D",
"votes": "D (100%)",
"imgs": [],
"scenario": false,
"exp": "El Implementation Governance Model (Fase F) asegura que un proyecto que pasa a implementación también transite sin problemas a la Architecture Governance adecuada (Fase G).",
"tip": "El nombre lo dice: modelo de GOBIERNO de la IMPLEMENTACIÓN."
},
{
"id": 12,
"q": "What are the four dimensions used to scope an architecture?",
"opts": [
[
"A",
"Strategy, Segment, Capability, Budget"
],
[
"B",
"Strategy, Portfolio, Project, Solution Delivery"
],
[
"C",
"Breadth, Depth, Time Period, Architecture Domains"
],
[
"D",
"Business, Data, Application, Technology"
]
],
"ans": "C",
"pdfAns": "C",
"votes": "C (100%)",
"imgs": [],
"scenario": false,
"exp": "Las cuatro dimensiones para definir el alcance (scope) de una arquitectura son: Amplitud (Breadth), Profundidad (Depth), Periodo de tiempo (Time Period) y Dominios de arquitectura (Architecture Domains).",
"tip": "Scope = ¿qué tan ANCHO, qué tan PROFUNDO, qué tan LARGO en el tiempo y qué DOMINIOS?"
},
{
"id": 13,
"q": "Which section of the TOGAF template for Architecture Principles should highlight the business benefits of adhering to the principle?",
"opts": [
[
"A",
"Implications"
],
[
"B",
"Rationale"
],
[
"C",
"Statement"
],
[
"D",
"Name"
]
],
"ans": "B",
"pdfAns": "B",
"votes": "B (100%)",
"imgs": [],
"scenario": false,
"exp": "La plantilla de principios tiene: Name, Statement, Rationale, Implications. El Rationale explica el 'por qué': los beneficios de negocio de adherirse al principio. Implications describe lo que se requiere (recursos, costos, tareas) para cumplirlo.",
"tip": "Rationale = 'Razón' = beneficio de negocio. Implications = consecuencias/requisitos."
},
{
"id": 14,
"q": "Which statement best describes iteration and the ADM?",
"opts": [
[
"A",
"The ADM is sequential. Iteration is applied within phases."
],
[
"B",
"The ADM is iterative, over the whole process, between phases, and within phases."
],
[
"C",
"The ADM is iterative between phases B to D, and between Phases E and F."
],
[
"D",
"The level of detail is defined once and applies to all iterations."
]
],
"ans": "B",
"pdfAns": "B",
"votes": "B (100%)",
"imgs": [],
"scenario": false,
"exp": "El ADM es iterativo en todo el proceso, entre fases y dentro de cada fase. En cada iteración se decide alcance, nivel de detalle, horizonte temporal y activos a reutilizar.",
"tip": "ADM = iteración en 3 niveles: global, entre fases, dentro de fases."
},
{
"id": 15,
"q": "Complete the sentence. The four purposes that typically frame the planning horizon, depth and breadth of an Architecture Project, and the\ncontents of the EA Repository are Strategy, Portfolio, ___________.",
"opts": [
[
"A",
"Project, and Solution Delivery."
],
[
"B",
"Discreet, and Cohesive."
],
[
"C",
"Subordinate, and Superior Architecture."
],
[
"D",
"Segment, and End-to-end Target Architecture."
]
],
"ans": "A",
"pdfAns": "A",
"votes": "A (100%)",
"imgs": [],
"scenario": false,
"exp": "Los cuatro propósitos (TOGAF Series Guide) que enmarcan horizonte, profundidad y amplitud son: Architecture to Support Strategy, Portfolio, Project y Solution Delivery.",
"tip": "S-P-P-S: Strategy, Portfolio, Project, Solution Delivery (de lo más amplio a lo más concreto)."
},
{
"id": 16,
"q": "Consider the following descriptions of deliverables consumed and produced across the TOGAF ADM cycle.\nWhich deliverables match these descriptions?",
"opts": [
[
"A",
"1 Architecture Principles - 2 Architecture Requirements Specification - 3 Request for Architecture Work - 4 Statement of Architecture Work"
],
[
"B",
"1 Request for Architecture Work - 2 Statement of Architecture Work - 3 Architecture Principles - 4 Architecture Requirements Specification"
],
[
"C",
"1 Statement of Architecture Work - 2 Architecture Principles - 3 Architecture Requirements Specification - 4 Request for Architecture Work"
],
[
"D",
"1 Architecture Requirements Specification - 2 Request for Architecture Work - 3 Statement of Architecture Work - 4 Architecture Principles"
]
],
"ans": "A",
"pdfAns": "A",
"votes": "A (100%)",
"imgs": [
"img/q16_1.png"
],
"scenario": false,
"exp": "1) Reglas generales, perdurables y rara vez modificadas → Architecture Principles. 2) Declaraciones cuantitativas que un proyecto debe cumplir → Architecture Requirements Specification. 3) Documento del patrocinador que dispara el ciclo → Request for Architecture Work. 4) Alcance y enfoque del ciclo → Statement of Architecture Work.",
"tip": "Request = la PETICIÓN (dispara). Statement = el CONTRATO de alcance/enfoque. Principles = reglas duraderas. Requirements Spec = medidas cuantitativas."
},
{
"id": 17,
"q": "Consider the following ADM phases objectives.\nWhich phase does each objective match?",
"opts": [
[
"A",
"1C-2D-3B-4A"
],
[
"B",
"1A-2B-3C-4D"
],
[
"C",
"1C-2B-3A-4D"
],
[
"D",
"1B-2D-3A-4C"
]
],
"ans": "C",
"pdfAns": "C",
"votes": "C (100%)",
"imgs": [
"img/q17_1.png"
],
"scenario": false,
"exp": "1) Target Data Architecture → Fase C. 2) Target Business Architecture → Fase B. 3) Visión aspiracional de alto nivel → Fase A. 4) Componentes candidatos del roadmap por gaps de Technology → Fase D.",
"tip": "A = Visión, B = Business, C = Data/Aplicación (Information Systems), D = Technology."
},
{
"id": 18,
"q": "Which of the following best summarizes the purpose of Enterprise Architecture?",
"opts": [
[
"A",
"Taking major improvement decisions."
],
[
"B",
"Controlling the bigger changes."
],
[
"C",
"Guiding effective change."
],
[
"D",
"Governing the Stakeholders."
]
],
"ans": "C",
"pdfAns": "C",
"votes": "C (100%)",
"imgs": [],
"scenario": false,
"exp": "El propósito de la Arquitectura Empresarial es guiar el cambio efectivo (guiding effective change): ayuda a la empresa a transformarse de forma coordinada hacia sus objetivos.",
"tip": "EA = GPS del cambio: 'guía' el cambio efectivo."
},
{
"id": 19,
"q": "Consider the diagram showing a classification model for Architecture Landscapes.\nWhat are the items labelled A, B and C?",
"opts": [
[
"A",
"A-Corporate Capability, B-Portfolio Capability, C-Project Capability"
],
[
"B",
"A-Architecture Vision, B-Business Architecture, C-Architecture Development"
],
[
"C",
"A-Strategy Architecture, B-Tactic Architecture, C-Operational Architecture"
],
[
"D",
"A-Capability Architecture, B-Segment Architecture, C-Enterprise Strategic Architecture"
]
],
"ans": "D",
"pdfAns": "D",
"votes": "D (100%)",
"imgs": [
"img/q19_1.png"
],
"scenario": false,
"exp": "El modelo de clasificación de Architecture Landscapes tiene tres niveles: arriba (C) Strategic Architecture (visión de largo plazo de toda la empresa), en medio (B) Segment Architecture, y abajo (A) Capability Architecture (detalle para una capacidad concreta).",
"tip": "De arriba hacia abajo: Strategic → Segment → Capability. Más abajo = más detalle y más piezas pequeñas."
},
{
"id": 20,
"q": "Consider the following ADM phases objectives.",
"opts": [
[
"A",
"1F-2F-3E-4G"
],
[
"B",
"1G-2E-3F-4E"
],
[
"C",
"1F-2G-3F-4F"
],
[
"D",
"1E-2F-3E-4G"
]
],
"ans": "A",
"pdfAns": "A",
"votes": "A (100%)",
"imgs": [
"img/q20_1.png"
],
"scenario": false,
"exp": "1) Finalizar el Architecture Roadmap y el Implementation and Migration Plan → F. 2) Que los stakeholders entiendan valor y costo de los work packages → F. 3) Definir SBBs para finalizar la Target Architecture basados en ABBs → E. 4) Conformidad de los proyectos con la Target Architecture → G.",
"tip": "E = Oportunidades y Soluciones (SBBs, work packages). F = finalizar planes. G = conformidad."
},
{
"id": 21,
"q": "Refer to the table below:\nWhich ADM Phase does this describe?",
"opts": [
[
"A",
"Phase C"
],
[
"B",
"Preliminary Phase"
],
[
"C",
"Phase A"
],
[
"D",
"Phase B"
]
],
"ans": "C",
"pdfAns": "C",
"votes": "C (100%)",
"imgs": [
"img/q21_1.png"
],
"scenario": false,
"exp": "La Fase A (Architecture Vision) produce documentación suficiente para obtener permiso para continuar; define alcance, stakeholders y concerns, y una respuesta resumida (visión) aceptable y con valor. El resultado es la aprobación para desarrollar la Target Architecture.",
"tip": "Fase A = 'elevator pitch' + permiso para seguir (Statement of Architecture Work aprobado)."
},
{
"id": 22,
"q": "Consider the following statement.\nProjects may cycle between ADM phases, in planned cycles covering multiple phases.\nWhat does it illustrate?",
"opts": [
[
"A",
"Iteration"
],
[
"B",
"Enterprise Architecture"
],
[
"C",
"Implementation governance"
],
[
"D",
"Requirements management"
]
],
"ans": "A",
"pdfAns": "A",
"votes": "A (100%)",
"imgs": [],
"scenario": false,
"exp": "Que los proyectos 'ciclen' entre fases del ADM en ciclos planeados que cubren varias fases es la definición de iteración (por ejemplo, Architecture Development iteration entre B-D).",
"tip": "Ciclos repetidos entre fases = ITERACIÓN."
},
{
"id": 23,
"q": "Consider the graphic illustrating a method supporting the TOGAF ADM.\nWhat does the method help identify?",
"opts": [
[
"A",
"Architecture Solutions"
],
[
"B",
"Business Scenarios"
],
[
"C",
"Solution Building Blocks"
],
[
"D",
"Alternative Target Architectures"
]
],
"ans": "D",
"pdfAns": "D",
"votes": "D (85%) · A (15%)",
"imgs": [
"img/q23_1.png"
],
"scenario": false,
"exp": "El gráfico muestra la técnica Architecture Alternatives and Trade-offs: a partir de Visión, Principios y Requisitos se definen criterios y se generan varias Target Architectures alternativas (A, B, C) para seleccionar una.",
"tip": "Criterios A/B/C → alternativas → 'Select' = Alternative Target Architectures."
},
{
"id": 24,
"q": "Complete the sentence.\nWhen considering agile development, Architecture to Support Project will identify what products the Enterprise needs, the boundary of the\nproducts, and what constraints a product owner has; this defines the Enterprise’s ______________.",
"opts": [
[
"A",
"operations"
],
[
"B",
"lifecycle economics"
],
[
"C",
"backlog"
],
[
"D",
"workflow management"
]
],
"ans": "C",
"pdfAns": "C",
"votes": "C (100%)",
"imgs": [],
"scenario": false,
"exp": "En contexto ágil, la Architecture to Support Project identifica qué productos necesita la empresa, sus límites y restricciones para el product owner: esto define el backlog de la empresa.",
"tip": "Ágil + productos + product owner = BACKLOG."
},
{
"id": 25,
"q": "Which of the following does the TOGAF standard describe as a package of functionality defined to meet business needs across an organization?",
"opts": [
[
"A",
"An application"
],
[
"B",
"A solution architecture"
],
[
"C",
"A building block"
],
[
"D",
"A deliverable"
]
],
"ans": "C",
"pdfAns": "C",
"votes": "C (100%)",
"imgs": [],
"scenario": false,
"exp": "Un building block es un paquete de funcionalidad definido para cumplir necesidades de negocio a lo largo de la organización. Pueden ser ABBs (arquitectura) o SBBs (solución).",
"tip": "Building block = 'pieza de Lego' de funcionalidad reutilizable."
},
{
"id": 26,
"q": "Which of the following supports the need to govern Enterprise Architecture?",
"opts": [
[
"A",
"The TOGAF standard cannot be used without executive governance."
],
[
"B",
"The Architecture Project mandates the governance of the target architecture."
],
[
"C",
"The Stakeholders preferences may go beyond the architecture project scope and needs control."
],
[
"D",
"Best practice governance enables the organization to control value realization."
]
],
"ans": "D",
"pdfAns": "D",
"votes": "D (100%)",
"imgs": [],
"scenario": false,
"exp": "El gobierno de la arquitectura se justifica porque las buenas prácticas de gobierno permiten a la organización controlar la realización de valor. Las otras opciones son falsas o no justifican el gobierno.",
"tip": "Gobernar = controlar que se REALICE el VALOR."
},
{
"id": 27,
"q": "Complete the following sentence.\n______________ provide context for architecture work, by describing the needs and ways of working employed by the enterprise.",
"opts": [
[
"A",
"Business principles, business goals, and business drivers"
],
[
"B",
"Stakeholder needs"
],
[
"C",
"Architecture Contracts"
],
[
"D",
"Strategy and vision"
]
],
"ans": "A",
"pdfAns": "A",
"votes": "A (100%)",
"imgs": [],
"scenario": false,
"exp": "Principios, metas y drivers de negocio proveen contexto para el trabajo de arquitectura, describiendo necesidades y formas de trabajo de la empresa. Se identifican en la Fase Preliminar y se refinan en la Fase A.",
"tip": "Contexto de negocio = Principios + Metas + Drivers."
},
{
"id": 28,
"q": "Which of the following best describes the purpose of the Gap Analysis technique?",
"opts": [
[
"A",
"To allocate resources for architecture projects"
],
[
"B",
"To govern the architecture throughout its implementation process"
],
[
"C",
"To identify items omitted from the Target Architecture"
],
[
"D",
"To develop a set of general rules and guidelines for the architecture"
]
],
"ans": "C",
"pdfAns": "C",
"votes": "C (100%)",
"imgs": [],
"scenario": false,
"exp": "La técnica de Gap Analysis compara Baseline vs Target para identificar diferencias, incluyendo elementos que fueron omitidos (accidental o intencionalmente) de la Target Architecture y elementos nuevos a desarrollar o adquirir.",
"tip": "Gap = hueco: ¿qué falta, qué sobra, qué se omitió?"
},
{
"id": 29,
"q": "Complete the following sentence.\nIn the ADM, documents which are under development and have not undergone any formal review and approval process are called _________.\nDocuments which have been reviewed and approved are called ___________.",
"opts": [
[
"A",
"“concept” - “deliverable”"
],
[
"B",
"“draft” - “approved”"
],
[
"C",
"“Version 0.1” - “Version 1.0”"
],
[
"D",
"“draft”- “finalized”"
]
],
"ans": "B",
"pdfAns": "B",
"votes": "B (75%) · A (25%)",
"imgs": [],
"scenario": false,
"exp": "TOGAF llama 'draft' a los documentos en desarrollo sin revisión formal, y 'approved' a los que han sido revisados y aprobados.",
"tip": "Draft → Approved (borrador → aprobado)."
},
{
"id": 30,
"q": "Consider the following statements:\n1. A whole corporation or a division of a corporation\n2. A government agency or a single government department\n3. Partnerships and alliances of businesses working together, such as a consortium or supply chain\nWhat are those examples of according to the TOGAF Standard?",
"opts": [
[
"A",
"Organizations"
],
[
"B",
"Enterprises"
],
[
"C",
"Architectures Scopes"
],
[
"D",
"Business Units"
]
],
"ans": "B",
"pdfAns": "B",
"votes": "B (100%)",
"imgs": [],
"scenario": false,
"exp": "TOGAF define 'enterprise' de forma amplia: una corporación completa o una división, una agencia de gobierno o un departamento, o incluso asociaciones/alianzas (consorcio, cadena de suministro). Todos son ejemplos de 'Enterprises'.",
"tip": "Enterprise en TOGAF = cualquier colección de organizaciones con metas comunes (incluso alianzas)."
},
{
"id": 31,
"q": "Which of the following best describes the TOGAF Architecture Development Method?",
"opts": [
[
"A",
"A process for managing architecture requirements"
],
[
"B",
"A process for creating an Architecture Repository"
],
[
"C",
"A process for managing and controlling change at an enterprise-wide level"
],
[
"D",
"A method for developing and managing the lifecycle of an Enterprise Architecture"
]
],
"ans": "D",
"pdfAns": "D",
"votes": "D (100%)",
"imgs": [],
"scenario": false,
"exp": "El ADM es un método para desarrollar y gestionar el ciclo de vida de una Arquitectura Empresarial. Es el núcleo de TOGAF.",
"tip": "ADM = Architecture Development METHOD: desarrollar Y gestionar el ciclo de vida."
},
{
"id": 32,
"q": "Complete the sentence.\nActions arising from the Business Transformation Readiness Assessment technique should be incorporated in the _____________.",
"opts": [
[
"A",
"Architecture Roadmap"
],
[
"B",
"Implementation and Migration Plan"
],
[
"C",
"Implementation Governance Model"
],
[
"D",
"Architecture Requirements Specification"
]
],
"ans": "B",
"pdfAns": "B",
"votes": "B (100%)",
"imgs": [],
"scenario": false,
"exp": "Las acciones derivadas del Business Transformation Readiness Assessment deben incorporarse al Implementation and Migration Plan (se trabajan en Fases E y F).",
"tip": "Readiness (¿estamos listos?) → acciones → al PLAN de implementación y migración."
},
{
"id": 33,
"q": "Consider the following statement.\nAccording to the TOGAF standard, a governed approach of a particular deliverable will ensure adherence to the principles, standards, and\nrequirements of the existing or developing architectures.\nWhich deliverable does this refer to?",
"opts": [
[
"A",
"The Statement of Architecture Work"
],
[
"B",
"The Architecture Definition Document"
],
[
"C",
"An Architecture Contract"
],
[
"D",
"The Architecture Vision"
]
],
"ans": "C",
"pdfAns": "C",
"votes": "C (100%)",
"imgs": [],
"scenario": false,
"exp": "Un Architecture Contract es un acuerdo entre las partes de desarrollo y los patrocinadores sobre los entregables, calidad y adecuación; su gobierno asegura el cumplimiento de principios, estándares y requisitos de la arquitectura.",
"tip": "Contrato = compromiso de ADHERENCIA a principios/estándares."
},
{
"id": 34,
"q": "Which of the following describes a purpose of Architecture Principles?",
"opts": [
[
"A",
"To describe likely Impacts resulting from successful deployment of the target architecture."
],
[
"B",
"To establish a common understanding of how to control the business in pursuit of strategic objectives"
],
[
"C",
"To provide a better understanding about the enterprise's culture and values"
],
[
"D",
"To form a contract between sponsoring organization and the enterprise architects"
]
],
"ans": "B",
"pdfAns": "B",
"votes": "B (56%) · C (44%)",
"imgs": [],
"scenario": false,
"exp": "Los Architecture Principles establecen un entendimiento común de cómo controlar/gobernar el negocio para lograr los objetivos estratégicos. No describen impactos del despliegue, ni cultura, ni son un contrato.",
"tip": "Principios = reglas comunes para dirigir hacia los objetivos."
},
{
"id": 35,
"q": "What are the following activities part of?\nInitial risk assessment -\nRisk mitigation and residual risk assessment\nRisk monitoring",
"opts": [
[
"A",
"Risk Management"
],
[
"B",
"Phase C"
],
[
"C",
"Phase A"
],
[
"D",
"Security Architecture"
]
],
"ans": "A",
"pdfAns": "A",
"votes": "A (100%)",
"imgs": [],
"scenario": false,
"exp": "Evaluación inicial de riesgo, mitigación y riesgo residual, y monitoreo de riesgos son las actividades del proceso de Risk Management en TOGAF.",
"tip": "Riesgo: clasificar → mitigar (residual) → monitorear."
},
{
"id": 36,
"q": "Which of the following statements about architecture partitioning is correct?",
"opts": [
[
"A",
"Partitions reflect the organization's structure."
],
[
"B",
"Partitions are used to simplify the management of the Enterprise Architecture."
],
[
"C",
"Partitions are defined and assigned to agile Enterprise Architecture teams."
],
[
"D",
"Partitions are equivalent to architecture levels."
]
],
"ans": "B",
"pdfAns": "B",
"votes": "B (100%)",
"imgs": [],
"scenario": false,
"exp": "El particionamiento de arquitectura sirve para simplificar el desarrollo y la gestión de la Arquitectura Empresarial, dividiéndola en partes manejables. No necesariamente refleja la estructura organizacional ni equivale a niveles.",
"tip": "Partición = 'divide y vencerás' para simplificar la gestión."
},
{
"id": 37,
"q": "Consider the following statements.\n1. All processes, decision-making, and mechanisms used will be established so as to minimize or avoid potential conflicts of interest.\n2. More effective strategic decision-making will be made by C-Level executives and business leaders.\n3. All actions implemented and their decision support will be available for inspection by authorized organization and provider parties.\n4. Digital Transformation and operations will be more effective and efficient.\nWhich statements highlight the value and necessity for Architecture Governance to be adopted within organizations?",
"opts": [
[
"A",
"1 & 3"
],
[
"B",
"2 & 3"
],
[
"C",
"2 & 4"
],
[
"D",
"1 & 4"
]
],
"ans": "A",
"pdfAns": "A",
"votes": "A (100%)",
"imgs": [],
"scenario": false,
"exp": "El valor del gobierno de arquitectura se sustenta en características como Transparencia (acciones disponibles para inspección) y evitar conflictos de interés (Independencia). Las declaraciones 1 y 3 reflejan esas características. 2 y 4 son beneficios genéricos.",
"tip": "Características de gobierno: Disciplina, Transparencia, Independencia, Responsabilidad, Rendición de cuentas, Equidad."
},
{
"id": 38,
"q": "Which of the following does the TOGAF standard define as the representation of a related set of concerns?",
"opts": [
[
"A",
"Matrix"
],
[
"B",
"Diagram"
],
[
"C",
"Architecture view"
],
[
"D",
"Catalog"
]
],
"ans": "C",
"pdfAns": "C",
"votes": "C (100%)",
"imgs": [],
"scenario": false,
"exp": "Una Architecture View es la representación de un conjunto relacionado de concerns (preocupaciones). Catálogos, matrices y diagramas son tipos de artefactos que componen las vistas.",
"tip": "VIEW = lo que VES para un conjunto de concerns. VIEWPOINT = la plantilla/perspectiva desde donde se ve."
},
{
"id": 39,
"q": "Which of the following best describes purpose of the Business Scenarios?",
"opts": [
[
"A",
"To identify and understand requirements"
],
[
"B",
"To guide decision making throughout the enterprise"
],
[
"C",
"To catch errors in a project architecture early"
],
[
"D",
"To identify risk when implementing an architecture project"
]
],
"ans": "A",
"pdfAns": "A",
"votes": "A (100%)",
"imgs": [],
"scenario": false,
"exp": "Los Business Scenarios sirven para identificar y entender los requisitos de negocio (y el problema, su entorno, actores y resultados deseados).",
"tip": "Business Scenario = técnica para descubrir REQUISITOS."
},
{
"id": 40,
"q": "What should be put in place through organization structures, roles, responsibilities, skills and processes to carry out architectural activity\neffectively?",
"opts": [
[
"A",
"An EA framework"
],
[
"B",
"An Enterprise Architecture"
],
[
"C",
"An EA Capability"
],
[
"D",
"An EA repository"
]
],
"ans": "C",
"pdfAns": "C",
"votes": "C (100%)",
"imgs": [],
"scenario": false,
"exp": "La EA Capability se implementa con estructuras organizacionales, roles, responsabilidades, habilidades y procesos para realizar la actividad arquitectónica de forma efectiva.",
"tip": "Capability = capacidad de HACER arquitectura: gente + procesos + roles."
},
{
"id": 41,
"q": "Please read this scenario prior to answering the question\nYou are working as the Chief Enterprise Architect within a law firm specializing in personal injury cases. Many of the firm's competitors have\nimproved their litigation strategies, and efficiency by streamlining their processes using Artificial Intelligence (AI).\nThe CIO has approved a Request for Architecture Work to examine the use of Machine Learning in defining a new AI-driven litigation and finance\nprocess for the firm. This process would instruct the lawyers and analysts as to what tasks and portfolio they should work on. The key objectives\nare to increase task profitability, maximize staff utilization, and increase individual profitability.\nThe CIO has emphasized that the architecture should enable the fast implementation of continuous Machine Learning. The solution will need to\nbe constantly measured for delivered value and be quickly iterated to success.\nSome of the partners have expressed concerns about letting the AI make the decisions, others about the risks associated with use of it for the\ntype of service they deliver. The CIO wants to know if these concerns can be addressed and how risks will be covered by a new architecture\nenabling AI and Machine Learning.\nRefer to the scenario -\nYou have been asked to respond to the CIO recommending an approach that would enable the development of an architecture that addresses the\nconcerns of the CIO and the concerns of the partners.\nBased on the TOGAF standard which of the following is the best answer?",
"opts": [
[
"A",
"You recommend that all possible models be created for each candidate architecture that will enable the AI and Machine Learning solution. This ensures that all the necessary data and detail is addressed. A formal review should be held with the stakeholders to verify that their concerns have been properly addressed by the models. Agility will be considered during Phase G Implementation Governance."
],
[
"B",
"You recommend that an analysis of the stakeholders is undertaken resulting in documenting the stakeholders and their concerns in a Stakeholder Map. The concerns and relevant views should then be defined for each group and recorded in the Architecture Vision document. The requirements will include risk mitigation through regular assessments. This will also allow a supervised agile implementation of the continuous Machine Learning."
],
[
"C",
"You recommend that a Communications Plan be created to address the key stakeholders, the most powerful and influential partners. This plan should include a report that summarizes the key features of the architecture reflecting their requirements. You will check with each key stakeholder that their concerns are being addressed. Risk mitigation and agility will be explicitly addressed as a component of the architecture being developed."
],
[
"D",
"You recommend creation of a set of business models that can be applied uniformly across all architecture projects. The stakeholders will be trained to understand the business models to ensure they can see that their concerns are being addressed. Risk will be addressed once the Security Architecture is developed, which will happen later to avoid slowing down the agility required by the CIO."
]
],
"ans": "B",
"pdfAns": "B",
"votes": "B (100%)",
"imgs": [],
"scenario": true,
"exp": "La mejor respuesta hace análisis de stakeholders con Stakeholder Map, define concerns y vistas por grupo y los registra en la Architecture Vision; incluye mitigación de riesgos con evaluaciones regulares y permite una implementación ágil supervisada. Crear 'todos los modelos posibles' (A) es excesivo; la C sólo atiende a los poderosos; la D pospone la seguridad.",
"tip": "Escenario con stakeholders preocupados → Stakeholder Map + concerns/vistas + riesgo gestionado."
},
{
"id": 42,
"q": "Please read this scenario prior to answering the question.\nYou have been appointed as senior architect working for an autonomous driving technology development company. The mission of the company\nis to build an industry leading unified technology and software platform to support connected cars and autonomous driving.\nThe company uses the TOGAF Standard as the basis for its Enterprise Architecture (EA) framework. Architecture development within the company\nfollows the purpose-based EA Capability model as described in the TOGAF Series Guide: A Practitioners' Approach to Developing Enterprise\nArchitecture Following the TOGAF® ADM.\nAn architecture to support strategy has been completed defining a long-range Target Architecture with a roadmap spanning five years. This has\nidentified the need for a portfolio of projects over the next two years. The portfolio includes development of travel assistance systems using\nswarm data from vehicles on the road.\nThe current phase of architecture development is focused on the Business Architecture which needs to support the core travel assistance\nservices that the company plans to provide. The core services will manage and process the swarm data generated by vehicles paving the way for\nautonomous driving in the future.\nThe presentation and access to different variations of data that the company plans to offer through its platform poses an architecture challenge.\nThe application portfolio needs to interact securely with various third-party cloud services, and V2X (Vehicle-to-Everything) service providers in\nmany countries to be able to manage the data at scale. The security of V2X is a key concern for the stakeholders. Regulators have stated that the\nuser's privacy be always protected, for example, so that the drivers' journey cannot be tracked or reconstructed by compiling data sent or received\nby the car.\nRefer to the scenario.\nYou have been asked to describe the risk and security considerations you would include in the current phase of the architecture development?\nBased on the TOGAF standard which of the following is the best answer?",
"opts": [
[
"A",
"You will create a security domain model so that assets with the same level can be managed under one security policy. Since data is being shared across partners, you will establish a security federation to include them. This would include contractual arrangements, and a definition of the responsibility areas for the data exchanged, as well as security implications. You would undertake a risk assessment determining risks relevant to specific data assets."
],
[
"B",
"You will perform a qualitative risk assessment for the data assets exchanged with partners. This will deliver a set of priorities high to medium to low, based on identified threats, the likelihood of occurrence, and the impact if it did occur. Using the priorities, you would then develop a Business Risk Model which will detail the risk strategy including classifications to determine what mitigation is enough."
],
[
"C",
"You will focus on data quality as it is a key factor in risk management. You will identify the datasets that need to be safeguarded. For each dataset, you will assign ownership and responsibility for the quality of data needs. A security classification will be defined and applied to each dataset. The dataset owner will then be able to authorize processes that are trusted for a certain activity on the dataset under certain circumstances."
],
[
"D",
"You will focus on the relationship with the third parties required for the travel assistance systems and define a trust framework. This will describe the relationship with each party. Digital certificates are a key part of the framework and will be used to create trust between parties. You will monitor legal and regulatory changes across all the countries to keep the trust framework in compliance."
]
],
"ans": "A",
"pdfAns": "A",
"votes": "A (86%)",
"imgs": [],
"scenario": true,
"exp": "En la fase de Business Architecture, las consideraciones de seguridad incluyen: definir dominios de seguridad (activos con mismo nivel bajo una política), establecer federación de seguridad con socios (contratos, responsabilidades sobre datos compartidos) y hacer evaluación de riesgo sobre activos de datos específicos.",
"tip": "Seguridad en Fase B: security domains + federación con socios + risk assessment de activos."
},
{
"id": 43,
"q": "Please read this scenario prior to answering the question.\nYour role is that of a consultant to the Lead Enterprise Architect to an international supplier of engineering services and automated manufacturing\nsystems. It has three manufacturing plants where it assembles both standard and customized products for industrial production automation.\nEach of these plants has been operating its own planning and production scheduling systems, as well as applications and control systems that\ndrive the automated production line.\nThe Enterprise Architecture department has been operating for several years and has mature well-developed architecture governance and\ndevelopment processes that are based on the TOGAF Standard. The CIO sponsors the Enterprise Architecture.\nDuring a recent management meeting, a senior Vice-President highlighted an interview where a competitor company's CIO is reported as saying\nthat their production efficiency had been improved by replacing multiple planning and scheduling systems with a common Enterprise Resource\nPlanning (ERP) system located in a central data center. Some discussion followed with the CIO responding that the situations are not comparable\nand the current architecture is already optimized.\nIn response, the Architecture Board approved a Request for Architecture Work covering the investigations to determine if such an architecture\ntransformation would lead to improvements in efficiency. You have been assigned to support the architecture team working on this project.\nA well-known concern of the plant managers is about the security and reliability of driving their planning and production scheduling from a remote\ncentralized system. Any chosen system would also need to support the current supply chain network consisting of local partners at each of the\nplants.\nRefer to the scenario.\nYou have been asked to explain how you will initiate the architecture project.\nBased on the TOGAF Standard, which of the following is the best answer?",
"opts": [
[
"A",
"You would hold a series of interviews at each of the manufacturing plants using the business scenarios technique. This will allow you to understand the systems and integrations with local partners. You would use stakeholder analysis to identify key players in the engagement, and to understand their concerns. You will then identify and document the key high-level stakeholder requirements for the architecture. You will then generate high level definitions of the baseline and target architectures."
],
[
"B",
"You would conduct a pilot project that will enable vendors to demonstrate potential off-the-shelf solutions that address the concerns of the stakeholders. Running a pilot project will save time and money later in the process. Based on the findings of that pilot project a complete set of requirements can then be developed that will drive the evolution of the architecture. Once the requirements are completed, a formal stakeholder review should be held and permission sought to proceed to develop the target architecture."
],
[
"C",
"You would develop baseline and target Architectures for each of the manufacturing plants, ensuring that the views corresponding to selected viewpoints address key concerns of the stakeholders. A business case, together with performance metrics and measures should be defined to ensure the architecture meets the business needs. A consolidated gap analysis between the architectures will then validate the approach and determine the capability increments needed to achieve the target state."
],
[
"D",
"You would research vendor literature and conduct a series of briefings with vendors that are on the current approved supplier list. Based on the findings from the research, you would define a preliminary Architecture Vision including summary views, high-level requirements and high- level definitions of the baseline and target environments from a business, information systems, and technology perspective. You would then use that to build consensus among the key stakeholders."
]
],
"ans": "A",
"pdfAns": "A",
"votes": "A (100%)",
"imgs": [],
"scenario": true,
"exp": "Para iniciar el proyecto (Fase A) se usan business scenarios para entender el problema, se hace análisis de stakeholders para identificar actores clave y sus concerns, se documentan requisitos de alto nivel y luego definiciones de alto nivel de baseline y target. Pilotos o investigar vendedores (B, D) son prematuros; C es trabajo de Fases B-D.",
"tip": "Iniciar = Fase A: Business Scenarios + Stakeholders + requisitos de alto nivel + visión baseline/target."
},
{
"id": 44,
"q": "Please read this scenario prior to answering the question.\nYour role is that of a consultant to the Lead Enterprise Architect in a multinational automotive manufacturer. The company has a corporate\nstrategy that focuses on electrification of its portfolio and it has invested heavily in a new shared car platform to use across all its brands. The\ncompany has four manufacturing facilities, one in North America two in Europe and one in Asia.\nA challenge that the company is facing is to scale up the number of vehicles coming off the production line to meet customer demand, while\nmaintaining quality. There are significant supply chain shortages for electronic components, which are impacting production in response to this\nthe company has taken on new suppliers and has also taken design and production of the battery pack in-house.\nThe company has a mature Enterprise Architecture practice. The TOGAF standard is used for developing the process and systems used to design,\nmanufacture, and test the battery pack. The Chief Information Officer and the Chief Operating Officer co-sponsor the Enterprise Architecture\nprogram.\nAs part of putting the new battery pack into production adjustments to the assembly processes need to be made. A pilot project has been\ncompleted at a single location. The Chief Engineer, sponsor of the activity and the Architecture Board have approved the plan for implementation\nand migration at each plant.\nDraft Architecture Contracts have been developed that detail the work needed to implement and deploy the new processes for each location. The\ncompany mixes internal teams with a few third-party contractors at the locations. The Chief Engineer has expressed concern that the deployment\nwill not be consistent and of acceptable quality.\nRefer to the scenario.\nThe Lead Enterprise Architect has asked you to review the draft Architecture Contracts and recommend the best approach to address the Chief\nEngineer's concern.\nBased on the TOGAF Standard, which of the following is the best answer?",
"opts": [
[
"A",
"For changes requested by an internal team, you recommend a memorandum of understanding between the Architecture Board and the implementation organization. For contracts issued to third-party contractors, you recommend that it is a fully enforceable legal contract. You recommend that the Architecture Board reviews all deviations from the Architecture Contract and considers whether to grant a dispensation to allow the implementation organization to customize the process to meet their local needs."
],
[
"B",
"You recommend that the Architecture Contracts be used to manage the architecture governance processes across the locations. You recommend deployment of monitoring tools to assess the performance of each completed battery pack at each location and develop change requirements if necessary. If a deviation from the contract is detected the Architecture Board should allow the Architecture Contract to be modified meet the local needs. In such cases they should issue a new Request for Architecture Work to implement a modification to the Architecture Definition."
],
[
"C",
"For changes undertaken by internal teams, you recommend a memorandum of understanding between the Architecture Board and the implementation organization. If a contract is issued to a contractor, you recommend that it is a fully enforceable legal contract. If a deviation from the Architecture Contract is found, you recommend that the Architecture Board grant a dispensation to allow the implementation organization to customize the process to meet their local needs."
],
[
"D",
"You review the contracts ensuring that they address project objectives, effectiveness metrics, acceptance criteria, and risk management. Third-party contracts must be legally enforceable. You recommend a schedule of compliance reviews at key points in the implementation process. You recommend that the Architecture Board reviews all deviations from the Architecture Contract and considers whether to grant a dispensation to allow the process to be customized for local needs."
]
],
"ans": "D",
"pdfAns": "D",
"votes": "D (100%)",
"imgs": [],
"scenario": true,
"exp": "Revisar los Architecture Contracts asegurando que incluyan objetivos, métricas de efectividad, criterios de aceptación y gestión de riesgos; contratos con terceros legalmente exigibles; revisiones de cumplimiento en puntos clave; y que el Board revise desviaciones y decida sobre dispensas. Esto atiende la consistencia y calidad (Fase G).",
"tip": "Fase G: contratos completos + Compliance Reviews + Board decide dispensas."
},
{
"id": 45,
"q": "Please read this scenario prior to answering the question.\nYou are working as Chief Enterprise Architect at a large Internet company. The company has many divisions, ranging from cloud to logistics. The\ncompany has grown rapidly, expanding from initially selling physical books and media to a range of services including an online marketplace, live-\nstreaming, eBooks, and cloud services.\nOverall management of the numerous divisions has become challenging. Recent high-profile projects have overrun on budget and under delivered,\ndamaging the company's reputation, and adversely impacting its share price. There is a widely held view within the executive management that\nthe organization structure has played a major role in these project failures.\nThe company has an established Enterprise Architecture program based on the TOGAF standard sponsored jointly by the Chief Executive Officer\n(CEO) and Chief Information Officer (CIO). The CEO has decided that the company needs to reorganize its divisions around artificial intelligence\nand machine learning with a focus on automation. The CEO has worked with the Enterprise Architects to create a strategic architecture for the\nreorganization, including an Architecture Vision, together with definitions for the four domain architectures. This sets out an ambitious vision of\nthe future of the company over a three-year period. This includes a set of work packages and includes three distinct transformations.\nThe CIO has made it clear that prior to the approval of the detailed Implementation and Migration plan, the EA team will need to assess the risks\nassociated with the proposed architecture. He has received concerns from key stakeholders across the company that the proposed reorganization\nmay be too ambitious and there is doubt whether it can produce sufficient value to warrant the risks.\nRefer to the scenario.\nYou have been asked to recommend an approach to satisfy these concerns.\nBased on the TOGAF Standard, which of the following is the best answer?",
"opts": [
[
"A",
"The Enterprise Architects should evaluate the organization s readiness to undergo change. This will allow the risks associated with the transformations to be identified, classified, and mitigated for. This should include identifying dependencies between the set of changes, including gaps and work packages. It will also identify improvement actions to be worked into the Implementation and Migration Plan. The business value, effort, and risk associated for each transformation should be determined."
],
[
"B",
"Establishing interoperability in alignment with the corporate operating model will ensure risks are minimized. The Enterprise Architects should apply an interoperability analysis to evaluate any potential issues across the architecture. This should include the development of a matrix showing the interoperability requirements. These can then be included within the transformation strategy embedded in the target transition architectures. The Enterprise Architects should then finalize the Architecture Roadmap and the Implementation and Migration Plan."
],
[
"C",
"Before preparing the detailed Implementation and Migration plan, the Enterprise Architects should review and consolidate the gap analysis results from Phases B to D. This will identify the transformations required to achieve the proposed Target Architecture. The Enterprise Architects should then assess the readiness of the organization to undergo change and determine an overall direction to address and mitigate risks identified. The Transition Architecture should then be planned to use a state evolution table."
],
[
"D",
"The Enterprise Architects should bring together information about potential approaches and produce several alternative target transition architectures. They should then investigate the different architecture alternatives and discuss these with stakeholders using the Architecture Alternatives and Trade-offs technique. Once the target architecture has been selected, it should be analyzed using a state evolution table to determine the Transition Architectures. A value realization process should then be established to ensure that the concerns raised are addressed."
]
],
"ans": "A",
"pdfAns": "A",
"votes": "A (62%) · D (23%) · C (15%)",
"imgs": [],
"scenario": true,
"exp": "Antes de aprobar el Implementation and Migration Plan, se evalúa la preparación para el cambio (Business Transformation Readiness Assessment), se identifican, clasifican y mitigan riesgos, se identifican dependencias entre cambios y se determina valor, esfuerzo y riesgo de cada transformación.",
"tip": "¿Demasiado ambicioso? → Readiness Assessment + riesgo + valor/esfuerzo."
},
{
"id": 46,
"q": "Please read this scenario prior to answering the question.\nYour role is consultant to the Lead Architect within a multinational company that manufactures electronic components. The company has several\nmanufacturing divisions located worldwide and a complex supply chain. After a recent study, senior management have stated a concern about\nbusiness efficiency considering the company's multiple data centers and duplication of applications.\nThe company has a mature Enterprise Architecture (EA) practice and uses the TOGAF architecture development method in its EA practice. In\naddition to the EA program, the company has several management frameworks in use, including business planning, project-portfolio management,\nand operations management. The EA program is sponsored by the CIO.\nA strategic architecture has been defined to improve the ability to meet customer demand and improve management of the supply chain. The\nstrategic architecture includes the consolidation of multiple Enterprise Resource Planning (ERP) applications that have been operating\nindependently in the divisions’ production facilities.\nEach division has completed the Architecture Definition documentation to meet its own specific manufacturing requirements. The enterprise\narchitects have defined a set of work packages that address the gaps identified. They have identified the value produced, effort required, and\ndependencies between work packages to reach a target architecture that would integrate a new ERP environment into the company.\nBecause of the risks posed by change from the current environment, the architects have recommended that a phased approach occurs to\nimplement the target architecture with several transition states. The overall implementation process is estimated to take several years.\nRefer to the scenario.\nYou have been asked what the next steps are for the migration planning.\nBased on the TOGAF standard which of the following is the best answer?",
"opts": [
[
"A",
"You place the Architecture Definition Document under configuration control. This will ensure that the architecture remains relevant and responsive to the needs of the enterprise. You would identify the development resources to undertake the projects. You would then produce an Implementation Governance Model to manage the lessons learned prior to finalizing the plan. You recommend that lessons learned be applied as changes to the architecture without review."
],
[
"B",
"You estimate the business value for each project by applying the Business Value Assessment Technique to prioritize the implementation projects and project increments. The assessment should focus on return on investment and performance evaluation criteria that can be used to monitor the progress of the architecture transformation. You would confirm and plan a series of Transition Architecture phases using an Architecture Definition Increments Table that lists the projects."
],
[
"C",
"You assess how the Implementation and Migration plan impacts the other frameworks in use in the organization. Minimally, you ensure that the plan is coordinated with the business planning, project/portfolio management and operations management frameworks. You would then assign a business value to each work package, considering available resources and strategic fit. You then use the work packages to identify projects that will be in the Implementation and Migration Plan."
],
[
"D",
"You conduct a series of Compliance Assessments to ensure that the architecture is being implemented according to the contract. The Compliance Assessment should verify that the implementation team is using the proper development methodology. It should include deployment of monitoring tools and ensure that performance targets are being met. If they are not met, then you would identify changes to performance requirements and update those in the Implementation and Migration Plan."
]
],
"ans": "C",
"pdfAns": "C",
"votes": "C (60%) · B (40%)",
"imgs": [],
"scenario": true,
"exp": "En Fase F, el primer paso es confirmar las interacciones del plan con los otros marcos de gestión (planeación de negocio, portafolio/proyectos, operaciones). Luego se asigna valor de negocio a cada work package considerando recursos y ajuste estratégico, y se identifican los proyectos.",
"tip": "Fase F paso 1: coordinar con otros frameworks de gestión. Luego valor de negocio."
},
{
"id": 47,
"q": "Please read this scenario prior to answering the question.\nYou are the Lead Enterprise Architect at a major agribusiness company. The company's main annual harvest is lentils, a highly valued food grown\nworldwide. The lentil parasite, broomrape, has been an increasing concern for many years and is now becoming resistant to chemical controls. In\naddition, changes in climate favor the propagation and growth of the parasite. As a result, the parasite cannot realistically be exterminated and it\nhas become pandemic, with lentil yields falling globally.\nThe CEO appreciates the seriousness of the situation and has set out a change in direction that is effectively a new business for the company.\nThere are opportunities for new products, and new markets. The company will use the fields for another harvest and will cease to process third-\nparty lentils. Thus, the target market will change, and the end-products will be different and more varied. This is a major decision and the CEO has\nstated a desire to repurpose rather than replace so as to manage the risks and limit the costs.\nThe company has a mature Enterprise Architecture practice based in its headquarters and uses the TOGAF standard as the method and guiding\nframework. The practice has an established Architecture Capability, and uses iteration for architecture development. The CIO is the sponsor of the\nactivity.\nThe CIO has assigned the Enterprise Architecture team to this activity. At this stage there is no shared vision, or requirements.\nRefer to the scenario.\nYou have been asked to propose the best approach for architecture development to realize the CEO’s change in direction for the company.\nBased on the TOGAF standard which of the following is the best answer?",
"opts": [
[
"A",
"You propose that this engagement define the baseline Technology Architecture first in order to assess the current infrastructure capacity and capability for the company. Then the focus should be on transition planning and incremental architecture deployment. This will identify requirements to ensure that the projects are sequenced in an optimal fashion so as to realize the change."
],
[
"B",
"You propose that the team focus on architecture definition, with emphasis on defining the change parameters to support this new business strategy that the CEO has identified. Once understood, the team will be in the best position to identify the requirements, drivers, issues, and constraints for the change. You would ensure that the architecture development addresses non-functional requirements to assure that the target architecture is robust and secure."
],
[
"C",
"You propose that the priority is to understand and bring structure to the definition of the change. The team should focus iteration cycles on a baseline first approach to architecture development, and then transition planning. This will identify what needs to change in order to transition from the baseline to the target, and can be used to work out in detail what the shared vision is for the change."
],
[
"D",
"You propose that the team focus its iteration cycles on architecture development by going through the architecture definition phases (B-D) with a baseline first approach. This will support the change in direction as stated by the CEO. It will ensure that the change can be defined in a structured manner and address the requirements needed to realize the change."
]
],
"ans": "C",
"pdfAns": "C",
"votes": "C (47%) · B (42%)",
"imgs": [],
"scenario": true,
"exp": "Sin visión compartida ni requisitos, y con el deseo de 'reutilizar en vez de reemplazar', lo prioritario es entender y estructurar el cambio: iteraciones con enfoque 'baseline first' y luego planeación de transición, para identificar qué debe cambiar y construir la visión compartida.",
"tip": "Cuando el cambio no está claro y se quiere reaprovechar → baseline first + transition planning."
},
{
"id": 48,
"q": "Please read this scenario prior to answering the question.\nYou are working as a senior architect within the Enterprise Architecture (EA) team at a multinational consumer goods firm. The consumer goods\nare designed and manufactured in-house, and are distributed to a wide range of retail organizations worldwide. The firm has more than twenty\nmanufacturing centers.\nThe firm is embarking on a Digital Transformation where it will expand its offerings from physical consumer goods products to also include digital\nconsumer products and digital services. This includes enabling each of its product lines to offer digital products or services associated with their\nexisting physical products. The firm uses Agile product management techniques.\nThe Enterprise Architecture (EA) team within the firm has been operating successfully for several years and has based its work on the TOGAF\nstandard. It works with the product management teams, supporting and enabling the Agile development teams. The EA team's responsibilities\ninclude architecting product development processes and customer experience. The Enterprise Architecture is sponsored by the Chief Technology\nOfficer.\nYou are working with the EATeam Leader to develop a work plan for the overall Digital Transformation project. You have been called in to work on\na specific product line, which is experimenting with direct-to-consumer digital products using a third-party platform. The product architecture for\nthis experiment took a Minimum Viable Architecture approach and focused on the Application Architecture. The feedback from customers is they\nsee little value in the digital products. Usage data analysis shows that the products are not reaching the target audience that they were designed\nfor. and thus not meeting the revenue targets. The product manager is looking for guidance to address these issues, while ensuring that the\nproducts still fit within the guardrails set by the EA team.\nRefer to the scenario.\nThe EA team leader has asked you what approach is needed to gather information to be able to respond to the product manager?\nBased on the TOGAF standard which of the following is the best answer?",
"opts": [
[
"A",
"You would focus on the target Business Architecture and develop new architecture models to address the concerns raised by the product manager. You would recommend use of modeling techniques to identify customer segments, the value propositions for each customer segment, costs, and revenues. You would examine the customer value by use of value stream mapping to breakdown the activities for the direct-to-consumer products. You would investigate different target Business Architecture alternatives."
],
[
"B",
"You would perform a shallow iteration of ADM Phases B-C. This would include development of a description in the Architecture Definition Document of how the product architecture needs to operate to achieve the business goals, and how the application will support the needs of the business as well as the customers. The Data Architecture should identify tools for data capture that would help with analysis of the concerns raised by the product manager."
],
[
"C",
"You would review the baseline architecture to determine what gaps in functionality have been missed in the target architecture that would address both the customer value and target audience. You would research emerging new technologies and draw up a list of alternatives that would increase the value proposition for the target audience. You would then define candidate roadmap components from the alternatives and develop a proposed schedule for deployment using a just-in-time approach."
],
[
"D",
"You would expand the existing Application Architecture to consider the overall Digital Transformation plan. This would include identifying what must change to address the issues raised by the product manager. You would then draft a new Statement of Architecture Work for review by the EA team leader. After approval by the EA team leader, you would conduct a full ADM cycle based on the Statement of Architecture Work to gather the information needed."
]
],
"ans": "A",
"pdfAns": "A",
"votes": "A (100%)",
"imgs": [],
"scenario": true,
"exp": "El problema es de valor para el cliente y audiencia objetivo (asunto de negocio), no de aplicación. Se debe trabajar en la Target Business Architecture: segmentos de clientes, propuestas de valor, costos/ingresos (Business Model Canvas) y value streams, investigando alternativas.",
"tip": "Clientes no ven valor → Business Architecture (propuesta de valor, value streams)."
},
{
"id": 49,
"q": "Please read this scenario prior to answering the question\nYou are serving as the Lead Architect for an Enterprise Architecture team within a leading multinational biotechnology company. The company\nworks in three major industries including healthcare, crop production, and agriculture. Your team works within the healthcare division.\nThe healthcare division is developing a new vaccine, and has to demonstrate its effectiveness and safety in a set of clinical trials that satisfy the\nregulatory requirements of the relevant health authorities. The clinical trials are undertaken by its research laboratories at multiple facilities\nworldwide. In addition to internal research and development activities, the healthcare division is also involved in publicly funded collaborative\nresearch projects with industrial and academic partners.\nThe Enterprise Architecture team has been engaged in an architecture project to develop a secure system that will allow the healthcare\nresearchers to share information more easily about their clinical trials, and work more collaboratively across the organization and also with its\npartners. This system will also connect with external partners.\nThe Enterprise Architecture team uses the TOGAF ADM with extensions required to support healthcare manufacturing practices and laboratory\npractices. Due to the highly sensitive nature of the information that is managed special care has been taken to ensure that each architecture\ndomain considers the security and privacy issues that are relevant.\nThe Vice President for Worldwide Clinical Research is the sponsor of the Enterprise Architecture activity. She has stated that disruptions must be\nminimized for the clinical trials, and that the rollout must be undertaken incremental.\nRefer to the scenario -\nYou have been asked to recommend the approach to identify the work packages for an incremental rollout meeting the requirements.\nBased on the TOGAF standard which of the following is the best answer?",
"opts": [
[
"A",
"You recommend that the Solution Building Blocks from a Consolidated Gaps, Solutions and Dependencies Matrix be grouped into a set of work packages. Using the matrix as a planning tool regroup the work packages to account for dependencies. Sequence the work packages into the Capability Increments needed to achieve the Target Architecture, so that the implementation team can schedule the rollout one region at a time to minimize disruption. Document the work packages for the Enterprise Architecture using a Transition Architecture State Evolution Table."
],
[
"B",
"You recommend that the set of required Solution Building Blocks be determined by identifying those which need to be developed and which need to be procured. Eliminate any duplicates. Group the remaining Solution Building Blocks together to create the work packages using a CRUD (create, read, update delete) matrix. Rank the work packages and select the most cost-effective options for inclusion in a series of Transition Architectures Schedule the roll out of the work packages to be sequential across the geographic regions."
],
[
"C",
"You recommend that an Implementation Factor Catalog is drawn up to indicate actions and constraints. A Consolidated Gaps, Solutions and Dependencies Matrix should also be created. For each gap identify a proposed solution and classify it as new development purchased solution, or based on an existing product. Group similar activities together to form work packages. Identify dependencies between work packages factoring in the clinical trial schedules. Regroup the work packages into a set of Capability Increments scheduled into a series of Transition Architectures."
],
[
"D",
"You recommend that a Consolidated Gaps, Solutions and Dependencies Matrix is used as a planning tool for creating work packages. For each gap classify whether the solution is either a new development, purchased solution, or based on an existing product. Group the similar solutions together to define the work packages. Regroup the work packages into a set of Capability Increments to transition to the Target Architecture considering the schedule for clinical trials, and document in an Architecture Definition Increments Table."
]
],
"ans": "C",
"pdfAns": "C",
"votes": "C (67%) · A (33%)",
"imgs": [],
"scenario": true,
"exp": "El enfoque correcto: Implementation Factor Catalog (acciones/restricciones), Consolidated Gaps, Solutions and Dependencies Matrix, clasificar soluciones (nueva, comprada, existente), agrupar en work packages, identificar dependencias considerando el calendario de ensayos clínicos, y reagrupar en Capability Increments dentro de Transition Architectures.",
"tip": "Fase E: Implementation Factors → Consolidated Gaps Matrix → work packages → dependencias → Capability Increments → Transitions."
},
{
"id": 50,
"q": "Please read this scenario prior to answering the question\nYou have been appointed as Chief Enterprise Architect (CEA), reporting to the Chief Technical Officer (CTO), of a company established as a\nseparate operating entity by a major automotive manufacturer. The mission of the company is to build a new industry leading unified technology\nand software platform for electric vehicles.\nThe company uses the TOGAF Standard as the basis for its Enterprise Architecture (EA) framework, and architecture development follows the\npurpose-based EA Capability model as described in the TOGAF Series Guide: A Practitioners’ Approach to Developing Enterprise Architecture\nFollowing the TOGAF® ADM.\nAn end-to-end Target Architecture has been completed with a roadmap for change over a five-year period. The new platform will be a cross-\nfunctional effort between hardware and software teams, with significant changes over the old platform. It is expected to be developed in several\nstages over three years. The EA team has inherited the architecture for the previous generation hardware and software automotive platform, some\nof which can be carried over to the new unified platform. The EA team has started to define the new platform, including defining which parts of the\narchitecture to carry forward.\nEnough of the Business Architecture has been defined, so that work can commence on the Information Systems and Technology Architectures.\nThose need to be defined to support the core business services that the company plans to provide. The core services will feature an innovative\napproach with swarm data generated by vehicles, paving the way for autonomous driving in the future.\nThe presentation and access to different variations of data that the company plans to offer through its platform pose an architecture challenge.\nThe application portfolio and supporting infrastructure need to interact with various existing cloud services and data-lakes in many countries to\nbe able to manage the data at scale.\nRefer to the scenario -\nYou have been asked what approach should be taken to determine and organize the work to deliver the requested architectures?\nBased on the TOGAF standard which of the following is the best answer?",
"opts": [
[
"A",
"You will revisit ADM Phase A, identifying the stakeholders and creating a new Architecture Vision. You will update the Stakeholder map produced for the strategic architecture so it reflects the stakeholders who are now the most relevant to the projects that are to be developed. You would then ask the CTO to make some decisions about the Architecture Roadmap and update the Implementation and Migration Plan to reflect the decisions."
],
[
"B",
"You would refer to the end-to-end Target Architecture for guidance and direction. The first objective should be to identify projects, dependencies and synergies, then prioritize before initiating the projects. You will develop high-level architecture descriptions. For each project you would estimate effort size, identify reference architectures, and candidate building blocks. You will identify the resource needs considering cost and value. You will document options, risks, and controls to enable viability analysis and trade-off with the stakeholders."
],
[
"C",
"You will research leading data businesses developing high-level Target Data Application and Technology Architectures. You would review the Architecture Vision in order to estimate the level of detail, time, and breadth of the ADM cycle phases that will be needed to develop the architecture. You will identify and cost major work packages, and then develop an Architecture Roadmap. You would then seek approval by the Architecture Board and initiate the project."
],
[
"D",
"You would look outside the enterprise to research data models and application portfolios of leading big data businesses. You would develop just enough applications, data, and technology architecture to identify options. For each project this should include identification of candidate architecture and solution building blocks. You will identify solution providers perform a readiness assessment, and assess the viability and fitness of the solution options. You will then document the draft Implementation and Migration plan."
]
],
"ans": "B",
"pdfAns": "B",
"votes": "B (75%) · D (25%)",
"imgs": [],
"scenario": true,
"exp": "Con una arquitectura de estrategia completa, el siguiente nivel es Architecture to Support Portfolio: usar la Target Architecture como guía, identificar proyectos, dependencias y sinergias, priorizar, estimar esfuerzo, identificar arquitecturas de referencia y building blocks candidatos, y documentar opciones, riesgos y controles para análisis de viabilidad.",
"tip": "Support Portfolio = identificar y priorizar proyectos + viabilidad y trade-offs."
},
{
"id": 51,
"q": "Please read this scenario prior to answering the question\nYour role is that of a senior architect, reporting to the Chief Enterprise Architect, at a medium sized company with 400 employees. The nature of\nthe business is such that the data and the information stored on the company systems is their major asset and is highly confidential.\nThe company employees travel extensively for work and must communicate over public infrastructure using message encryption, VPNs, and other\nstandard safeguards. The company has invested in cybersecurity awareness training for all its staff. However, it is recognized that even with good\neducation as well as system security, there is a dependency on third-party suppliers of infrastructure and software.\nThe company uses the TOGAF standard as the method and guiding framework for its Enterprise Architecture (EA) practice. The CTO is the\nsponsor of the activity. The Chief Security Officer (CSO) has noted an increase in ransomware (malicious software used in ransom demands)\nattacks on companies with a similar profile. The CSO recognizes that no matter how much is spent on education, and support, it is likely just a\nmatter of time before the company suffers a significant attack that could completely lock them out of their information assets.\nA risk assessment has been done and the company has sought cyber insurance that includes ransomware coverage. The quotation for this\ninsurance is hugely expensive. The CTO has recently read a survey that stated that one in four organizations paying ransoms were still unable to\nrecover their data, while nearly as many were able to recover the data without paying a ransom. The CTO has concluded that taking out cyber\ninsurance in case they need to pay a ransom is not an option.\nRefer to the scenario -\nYou have been asked to describe the steps you would take to improve the resilience of the current architecture?\nBased on the TOGAF standard which of the following is the best answer?",
"opts": [
[
"A",
"You would ensure that the company has in place up-to-date processes for managing change to the current Enterprise Architecture. Based on the scope of the concerns raised you recommend that this be managed at the infrastructure level. Changes should be made to the baseline description of the Technology Architecture. The changes should be approved by the Architecture Board and implemented by change management techniques."
],
[
"B",
"You would determine business continuity requirements, and undertake a gap analysis of the current Enterprise Architecture. You would make recommendations for change requirements to address the situation and create a change request. You would manage a meeting of the Architecture Board to assess and approve the change request. Once approved you would produce a new Request for Architecture Work to activate an ADM cycle to carry out a project to define the change."
],
[
"C",
"You would request an Architecture Compliance Review with the scope to examine the company's resilience to ransomware attacks. You would identify the departments involved and have them nominate representatives. You would then tailor checklists to address the requirement for increased resilience. You would circulate to the nominated representatives for them to complete. You would then review the completed checklists, identifying and resolving issues. You would then determine and present your recommendations."
],
[
"D",
"You would monitor for technology changes from your existing suppliers that could improve resilience. You would prepare and run a disaster recovery planning exercise for a ransomware attack and analyze the performance of the current Enterprise Architecture. Using the findings, you would prepare a gap analysis of the current Enterprise Architecture. You would prepare change requests to address identified gaps. You would add the changes implemented to the Architecture Repository."
]
],
"ans": "B",
"pdfAns": "B",
"votes": "B (80%) · D (20%)",
"imgs": [],
"scenario": true,
"exp": "Para mejorar la resiliencia: determinar requisitos de continuidad del negocio, hacer gap analysis de la arquitectura actual, generar change request, que el Architecture Board lo evalúe y apruebe, y luego emitir un nuevo Request for Architecture Work para un ciclo ADM.",
"tip": "Cambio significativo en Fase H → change request → Board → nuevo Request for Architecture Work."
},
{
"id": 52,
"q": "Please read this scenario prior to answering the question\nYour role is consultant to the Lead Architect within a company that manufactures electronic components. The company has several divisions\nlocated worldwide. After a recent study, senior management have stated a concern about business efficiency considering the company's multiple\ndata centers and duplication of applications.\nThe company has a mature Enterprise Architecture (EA) practice and uses the TOGAF standard for its architecture development method. In\naddition to the EA program, the company has a number of management frameworks in use, including business planning, project/portfolio\nmanagement, and operations management. The EA program is sponsored by the CIO.\nTo address the concern, a strategic architecture has been defined to improve the ability to meet customer demand and operations management.\nThe strategic architecture includes the consolidation of multiple applications that have been operating independently within the divisions and\nmoving them to a cloud-based solution.\nEach division has completed the Architecture Definition documentation to meet its own specific operational requirements. The enterprise\narchitects have analyzed the key corporate change attributes and implementation constraints. A consolidated gap analysis has been completed.\nBased on the results of the gap analysis, the architects have reviewed the requirements, dependencies and interoperability requirements needed\nto integrate the new environment into the company. The architects have completed the Business Transformation Readiness Assessment. Based\non all these factors they have produced a risk assessment. They have also completed the draft Implementation and Migration Plan, the draft\nArchitecture Roadmap, and the Capability Assessment deliverables.\nBecause of the risks posed by change from the current environment, it has been determined that a phased approach is needed to implement the\ntarget architectures. The overall implementation process is estimated to take several years.\nRefer to the scenario -\nYou have been asked what the next steps are for the migration planning.\nBased on the TOGAF standard which of the following is the best answer?",
"opts": [
[
"A",
"You update the Architecture Definition Document including assigning project objectives and place it under configuration control. This will ensure that the architecture remains relevant and responsive to the needs of the enterprise. You would then produce an Implementation Governance Model to manage the lessons learned prior to finalizing the Implementation and Migration plan. You recommend that lessons learned be applied as changes to the architecture without review."
],
[
"B",
"You estimate the business value for each project by applying the Business Value Assessment Technique. The assessment should focus on return on investment and performance evaluation criteria used to monitor the progress of the architecture transformation. You would confirm and plan a series of Transition Architecture phases using an Architecture Definition Increments Table. You would then document the lessons learned and generate the final Implementation and Migration Plan."
],
[
"C",
"You assess how the Implementation and Migration plan impacts the other frameworks in use in the organization. Minimally you ensure that the plan is coordinated with the business planning, project/portfolio management and operations management frameworks. You assign a business value to each project, taking into account available resources and the strategic fit for the projects. You would then update the architecture roadmap and the Implementation and Migration Plan."
],
[
"D",
"You conduct a series of Compliance Assessments to ensure that the architecture is being implemented according to the contract. The Compliance Assessment should verify that the implementation team is using the proper development methodology. It should include deployment of monitoring tools and ensure that performance targets are being met. If they are not met, then you would identify changes to performance requirements and update those in the Implementation and Migration Plan."
]
],
"ans": "B",
"pdfAns": "B",
"votes": "B (54%) · C (46%)",
"imgs": [],
"scenario": true,
"exp": "Tras completar readiness, riesgos y borradores, los siguientes pasos de Fase F son: evaluar valor de negocio por proyecto (Business Value Assessment), confirmar las fases de Transition Architecture con un Architecture Definition Increments Table, documentar lecciones aprendidas y generar el plan final.",
"tip": "Fase F final: valor de negocio → Increments Table → lecciones aprendidas → plan final."
},
{
"id": 53,
"q": "Please read this scenario prior to answering the question\nYou are the Chief Enterprise Architect at a large food service company specializing in sales to trade and wholesale for example, restaurants and\nother food retailers.\nOne of your company’s competitors has launched a revolutionary product range and is running a very aggressive marketing campaign. Your\ncompany’s resellers are successively announcing that they are not interested in your company's products and will sell your competitor’s.\nThe CEO has stated there must be significant change to address the situation. He has made it clear that new markets must be found for the\ncompany’s products, and that the business needs to pivot, and address the retail market as well as the existing wholesale market.\nA consideration is the company’s ability and willingness to change its business model, and if it is a temporary or permanent change. An additional\nrisk factor is one of culture. The company has been used to a stable business with a reasonably well known and settled client base - all with its\nown local understandings and practices.\nThe CEO is the sponsor of the EA program within the company. You have been engaged with the sales, logistics, production, and marketing teams\nenabling the architecture activity to start. An Architecture Vision Architecture Principles, and Requirements have all been agreed. As you move\nforward to develop a possible Target Architecture you have identified that some of the key stakeholders' preferences are incompatible. The\nincompatibilities are focused primarily on time-to- market, cost savings, and the need to bring out a fully featured product range, but there are\nadditional factors.\nRefer to the scenario -\nYou have been asked how you will address the incompatibilities between key stakeholder preferences.\nBased on the TOGAF standard which of the following is the best answer?",
"opts": [
[
"A",
"You would seek to understand value preferences and priorities of the stakeholders. You would develop alternative Target Architectures, highlighting the gaps between current state and the alternatives. You would consider combining features from one or more alternatives in collaboration with the stakeholders. A formal stakeholder review should then be held to decide which alternative is fit for purpose and should be moved forward with. You will then secure the funding required."
],
[
"B",
"You would use the Architecture Vision, Principles and Requirements to define a set of criteria for alternatives and create a set of architecture views to illustrate the impact of the alternative Target Architectures. You would identify the impact on planned projects. You would understand the strengths and weaknesses of the alternatives. You would conduct a formal stakeholder review to decide which alternative to move forward with. You will determine the funding required."
],
[
"C",
"You recommend that since the CEO has stated that the company must pivot it is better to compromise on a full product range rather than time-to-market. You would develop just enough of the Target Architecture to demonstrate fitness of the proposed approach. You would limit the description to just where there is a gap between the current baseline. You would seek approval by the stakeholders to move forward with developing the Target Architecture in detail."
],
[
"D",
"You would review the Stakeholder Map and ensure that you have addressed and represented the concerns of all department heads. You will involve them in resolving the incompatibilities. The Communications Plan should include a report that summarizes the key features of the architecture with and how incompatibilities were resolved to reflects the stakeholders’ requirements. You will check with each key stakeholder they are satisfied with how the incompatibilities have been resolved."
]
],
"ans": "B",
"pdfAns": "B",
"votes": "A (43%) · B (43%)",
"imgs": [],
"scenario": true,
"exp": "Con preferencias incompatibles se usa la técnica de Architecture Alternatives and Trade-offs: usar Visión, Principios y Requisitos para definir criterios, crear vistas que ilustren el impacto de cada alternativa, identificar impacto en proyectos, analizar fortalezas/debilidades y una revisión formal con stakeholders para elegir.",
"tip": "Trade-offs: Visión+Principios+Requisitos → criterios → vistas de alternativas → revisión formal."
},
{
"id": 54,
"q": "Please read this scenario prior to answering the question\nYou are working as a senior architect within a law firm specializing in personal injury cases. The firm operates in multiple countries and has a\ncomplex structure involving several partnerships. Each operating entity must adhere to local regulations.\nThe Enterprise Architecture department has been operating for several years and has mature, well- developed architecture governance and\ndevelopment processes based on the TOGAF standard. The CIO is the sponsor of the Enterprise Architecture program. The Architecture Board\nincludes representatives from each operating entity. The CIO has actively encouraged architecting with agility within the firm as her preferred\napproach for projects.\nMany of the firm’s competitors have adopted Artificial Intelligence (AI) to help with litigation strategies, as well as streamlined processes and\nefficiency improvements. The CIO has approved a Request for Architecture Work to examine the use of an AI-driven litigation and finance process\nwhere lawyers and analysts will be instructed as to what tasks and portfolio they should work on. The key objectives are to increase task\nprofitability, maximize staff utilization, and increase individual profitability.\nSome of the partners have expressed concerns about such a change in the way of working, and whether it will achieve the stated objectives. The\nCIO wants to know how these concerns can be addressed, and how risks will be mitigated.\nRefer to the scenario -\nYou have been asked to respond to the CIO recommending an approach that would enable the development of an architecture that addresses the\nconcerns of the partners, and the multiple operating entities within the firm.\nBased on the TOGAF standard which of the following is the best answer?",
"opts": [
[
"A",
"You recommend that an analysis of the stakeholders is undertaken. This will allow the architects to define groups of partners (the stakeholders) who have common concerns, and include development of a Stakeholder Map. The concerns and relevant views should then be defined for each group and recorded in the Architecture Vision document. To mitigate risk, you include a requirement that there be progressive development of the target architecture to ensure there is regular feedback."
],
[
"B",
"You recommend creation of a set of business models that can be applied uniformly across all architecture projects. These should be developed in the portable format to ensure maximum portability across the many tools used in the firm. Each architecture should then be defined based on this fixed set of models. All concerned parties can then examine the models to ensure that their needs have been addressed."
],
[
"C",
"You recommend that a Communications Plan be created to address the key stakeholders that is the most powerful and influential partners. This plan should include a report that summarizes the key features of the architecture with respect to each location and reflects the stakeholders’ requirements. You will check with each key stakeholder that their concerns are being addressed. Risk mitigation should be explicitly addressed as a component of the architecture being developed."
],
[
"D",
"You recommend that all possible models be created for each project architecture that can be used to ensure that the system will be compliant with the local regulations for each operating entity. This ensures that all the necessary data and detail is addressed. A formal review should be held with the stakeholders to verify that their concerns have been properly addressed by the models."
]
],
"ans": "A",
"pdfAns": "A",
"votes": "A (100%)",
"imgs": [],
"scenario": true,
"exp": "Análisis de stakeholders: definir grupos con concerns comunes, Stakeholder Map, concerns y vistas por grupo registrados en la Architecture Vision, y para mitigar riesgo, desarrollo progresivo con retroalimentación regular (agilidad).",
"tip": "Stakeholders preocupados = Stakeholder Map + vistas por grupo + desarrollo progresivo."
},
{
"id": 55,
"q": "Which of the following describes how the Enterprise Continuum is used when developing an enterprise architecture?",
"opts": [
[
"A",
"To coordinate with the other management frameworks in use"
],
[
"B",
"To identify and understand business requirements"
],
[
"C",
"To describe how an architecture addresses stakeholder concerns"
],
[
"D",
"To classify architecture and solution assets"
]
],
"ans": "D",
"pdfAns": "D",
"votes": "D (100%)",
"imgs": [],
"scenario": false,
"exp": "El Enterprise Continuum se usa para clasificar activos de arquitectura y de solución (desde genéricos hasta específicos de la organización).",
"tip": "Continuum = CLASIFICAR."
},
{
"id": 56,
"q": "Which of the following best describes the Standards Library?",
"opts": [
[
"A",
"A repository area holding processes to support governance of the Architecture Repository"
],
[
"B",
"A repository area holding a record of the governance activity across the enterprise"
],
[
"C",
"A repository area holding guidelines and templates used to create new architectures"
],
[
"D",
"A repository area holding specifications to which architectures must conform"
]
],
"ans": "D",
"pdfAns": "D",
"votes": "D (100%)",
"imgs": [],
"scenario": false,
"exp": "El Standards Library contiene especificaciones (estándares) a las que las arquitecturas deben conformarse. El Reference Library tiene guías y plantillas; el Governance Log registra la actividad de gobierno.",
"tip": "Standards = lo que DEBES cumplir. Reference = lo que PUEDES reutilizar."
},
{
"id": 57,
"q": "Consider the image showing basic architectural concepts.\nWhat are items A and B?",
"opts": [
[
"A",
"A-Candidate Architecture, B-Trade-off"
],
[
"B",
"A-Architecture Viewpoint, B-Architecture View"
],
[
"C",
"A-Architecture Board, B-Architecture Capability"
],
[
"D",
"A-Requirement, B-Candidate Architecture"
]
],
"ans": "B",
"pdfAns": "B",
"votes": "B (100%)",
"imgs": [
"img/q57_1.png"
],
"scenario": false,
"exp": "En el modelo ISO/IEC/IEEE 42010, el Architecture Viewpoint (A) enmarca (frames) concerns y gobierna la Architecture View (B), que atiende (addresses) concerns. Model Kind gobierna a Architecture Model, igual que el viewpoint gobierna la view.",
"tip": "Viewpoint = la plantilla que gobierna. View = el resultado que atiende los concerns."
},
{
"id": 58,
"q": "Which of the following best describes the need for the ADM process to be governed?",
"opts": [
[
"A",
"To enable development of reference architectures"
],
[
"B",
"To enable a fast response to market changes"
],
[
"C",
"To verify that the method is being applied correctly"
],
[
"D",
"To permit the architecture domains to be integrated"
]
],
"ans": "C",
"pdfAns": "C",
"votes": "C (100%)",
"imgs": [],
"scenario": false,
"exp": "El ADM debe ser gobernado para verificar que el método se esté aplicando correctamente (gobierno del proceso de arquitectura).",
"tip": "Gobernar el ADM = verificar que se aplica correctamente."
},
{
"id": 59,
"q": "Complete the sentence. A business scenario describes _______.",
"opts": [
[
"A",
"business domain gaps, such as cross-training requirements"
],
[
"B",
"shortfalls between the Baseline and Target Architectures"
],
[
"C",
"general rules and guidelines for the architecture being developed"
],
[
"D",
"business and technology environment in which those problems occur"
]
],
"ans": "D",
"pdfAns": "D",
"votes": "D (100%)",
"imgs": [],
"scenario": false,
"exp": "Un Business Scenario describe un problema de negocio, el entorno de negocio y tecnológico donde ocurre, los resultados deseados, actores y el papel humano/computacional.",
"tip": "Business Scenario = problema + ENTORNO + resultados + actores."
},
{
"id": 60,
"q": "In which phase(s) of the ADM would you deal with the actions resulting from a transformation readiness assessment?",
"opts": [
[
"A",
"Phase E and F"
],
[
"B",
"Phase A"
],
[
"C",
"Phase G"
],
[
"D",
"Phase F"
]
],
"ans": "A",
"pdfAns": "A",
"votes": "A (67%) · B (17%)",
"imgs": [],
"scenario": false,
"exp": "La evaluación de preparación (readiness) se hace inicialmente en Fase A, pero las ACCIONES resultantes se trabajan en las Fases E y F (se integran en el Implementation and Migration Plan).",
"tip": "Readiness: se evalúa en A, se ACTÚA en E y F."
},
{
"id": 61,
"q": "Complete the sentence. The architecture domains that are considered by the TOGAF standard as subsets of an overall enterprise architecture are\nBusiness, Technology, _____________.",
"opts": [
[
"A",
"Capability and Segment"
],
[
"B",
"Logical and Physical"
],
[
"C",
"Application and Data"
],
[
"D",
"Information and Data"
]
],
"ans": "C",
"pdfAns": "C",
"votes": "C (100%)",
"imgs": [],
"scenario": false,
"exp": "Los dominios son Business, Data, Application y Technology.",
"tip": "BDAT."
},
{
"id": 62,
"q": "What is the purpose of the Preliminary Phase?",
"opts": [
[
"A",
"Describing the target architecture."
],
[
"B",
"Defining the Enterprise Strategy."
],
[
"C",
"Identifying the stakeholders and their requirements."
],
[
"D",
"Developing an Enterprise Architecture Capability."
]
],
"ans": "D",
"pdfAns": "D",
"votes": "D (80%) · C (20%)",
"imgs": [],
"scenario": false,
"exp": "El propósito de la Fase Preliminar es desarrollar la Capacidad de Arquitectura Empresarial (preparar a la organización). Identificar stakeholders y requisitos es Fase A.",
"tip": "Preliminar = EA Capability."
},
{
"id": 63,
"q": "In which part of the ADM cycle do building block gaps become associated with work packages that will address the gaps?",
"opts": [
[
"A",
"Phases G and H"
],
[
"B",
"Phases B, C, and D"
],
[
"C",
"Phase F"
],
[
"D",
"Phase E"
]
],
"ans": "D",
"pdfAns": "D",
"votes": "D (100%)",
"imgs": [],
"scenario": false,
"exp": "En la Fase E (Opportunities and Solutions) los gaps de building blocks se consolidan y se asocian a work packages que los atenderán (Consolidated Gaps, Solutions and Dependencies Matrix).",
"tip": "E de 'Empaquetar': gaps → work packages."
},
{
"id": 64,
"q": "Which of the following describes a purpose of Architecture Principles?",
"opts": [
[
"A",
"To describe likely impacts resulting from successful deployment of the target architecture."
],
[
"B",
"To establish a common understanding of how to control the business in pursuit of strategic objectives"
],
[
"C",
"To remove subjectivity and bias out of decision-making"
],
[
"D",
"To form a contract between sponsoring organization and the enterprise architects"
]
],
"ans": "B",
"pdfAns": "B",
"votes": "B (52%) · C (48%)",
"imgs": [],
"scenario": false,
"exp": "Los principios establecen un entendimiento común de cómo gobernar el negocio para alcanzar objetivos estratégicos. 'Eliminar subjetividad' es tentador pero no es la definición oficial del propósito de los principios.",
"tip": "Principios = entendimiento COMÚN para dirigir hacia la estrategia."
},
{
"id": 65,
"q": "Which of the following statements about architecture partitioning are correct?\n1. Partitions are used to simplify the management of the Enterprise Architecture.\n2. Partitions are equivalent to architecture levels.\n3. Partitions enable different teams to work on different element of the architecture at the same time.\n4. Partitions reflect the organization’s structure.",
"opts": [
[
"A",
"1 & 4"
],
[
"B",
"2 & 4"
],
[
"C",
"1 & 3"
],
[
"D",
"2 & 3"
]
],
"ans": "C",
"pdfAns": "C",
"votes": "C (100%)",
"imgs": [],
"scenario": false,
"exp": "Las particiones simplifican la gestión de la EA (1) y permiten que distintos equipos trabajen en diferentes partes al mismo tiempo (3). No equivalen a niveles (2) ni necesariamente reflejan la estructura organizacional (4).",
"tip": "Partición = simplificar + trabajo en paralelo."
},
{
"id": 66,
"q": "Which section of the TOGAF template for Architecture Principles should describe the relationship to other principles?",
"opts": [
[
"A",
"Implications"
],
[
"B",
"Name"
],
[
"C",
"Statement"
],
[
"D",
"Rationale"
]
],
"ans": "D",
"pdfAns": "D",
"votes": "D (68%) · A (32%)",
"imgs": [],
"scenario": false,
"exp": "En la plantilla, el Rationale además de los beneficios de negocio debe describir la relación con otros principios y las intenciones de una interpretación balanceada (cuándo un principio prevalece sobre otro).",
"tip": "Rationale = el 'por qué' + cómo se relaciona con otros principios."
},
{
"id": 67,
"q": "What are the following activities part of?\n• Risk classification\n• Risk identification\n• Initial risk assessment",
"opts": [
[
"A",
"Phase G"
],
[
"B",
"Risk Management"
],
[
"C",
"Security Architecture"
],
[
"D",
"Phase A"
]
],
"ans": "B",
"pdfAns": "B",
"votes": "B (100%)",
"imgs": [],
"scenario": false,
"exp": "Clasificación, identificación y evaluación inicial del riesgo son actividades del proceso de Risk Management (luego vienen mitigación, riesgo residual y monitoreo).",
"tip": "Riesgo: clasificar → identificar → evaluar inicial → mitigar → residual → monitorear."
},
{
"id": 68,
"q": "Consider the illustration.\nWhat are the items labelled A, B and C?",
"opts": [
[
"A",
"A-Enterprise Architecture, B-Architecture Building Blocks, C-Solutions Building Blocks"
],
[
"B",
"A-Enterprise Strategic Architecture, B-Segment Architecture, C-Solutions Architecture"
],
[
"C",
"A-Enterprise Continuum, B-Architecture Continuum, C-Solutions Continuum"
],
[
"D",
"A-Architecture Vision, B-Business Architecture, C-Information Systems Architecture"
]
],
"ans": "C",
"pdfAns": "C",
"votes": "C (100%)",
"imgs": [
"img/q68_1.png"
],
"scenario": false,
"exp": "El diagrama es el Enterprise Continuum (A, el marco general con contexto y requisitos). Dentro: el Architecture Continuum (B, arquitecturas genéricas ↔ específicas) que guía y soporta al Solutions Continuum (C, soluciones genéricas ↔ específicas).",
"tip": "Enterprise Continuum contiene 2: Architecture Continuum (arriba) guía al Solutions Continuum (abajo)."
},
{
"id": 69,
"q": "What is an objective of the ADM Implementation Governance Phase?",
"opts": [
[
"A",
"To ensure conformance for the target architecture"
],
[
"B",
"To finalize the Implementation and Migration Plan"
],
[
"C",
"To provide continual monitoring of the governance framework"
],
[
"D",
"To establish the resources for architecture governance"
]
],
"ans": "A",
"pdfAns": "A",
"votes": "A (100%)",
"imgs": [],
"scenario": false,
"exp": "Un objetivo de la Fase G (Implementation Governance) es asegurar la conformidad de los proyectos de implementación con la Target Architecture. Finalizar el plan es Fase F; el monitoreo continuo del framework es Fase H.",
"tip": "G = Gobernar la implementación = conformidad."
},
{
"id": 70,
"q": "Complete the following sentence. In the ADM, documents which are under development and have not undergone any formal review and approval\nprocess are _______.",
"opts": [
[
"A",
"in between phases"
],
[
"B",
"invalid"
],
[
"C",
"called “draft1”"
],
[
"D",
"known as “Version 0.1”"
]
],
"ans": "C",
"pdfAns": "C",
"votes": "C (54%) · D (46%)",
"imgs": [],
"scenario": false,
"exp": "Según TOGAF, los documentos en desarrollo sin revisión formal se denominan 'draft' (borrador). La opción 'draft1' es la que corresponde a esa denominación en esta pregunta.",
"tip": "Sin revisión formal = DRAFT."
},
{
"id": 71,
"q": "What is presented as “striking a balance between positive and negative outcomes resulting from the realization of either opportunities or threats”?",
"opts": [
[
"A",
"Transition Management"
],
[
"B",
"Agile development"
],
[
"C",
"Risk Management"
],
[
"D",
"Architecture Security"
]
],
"ans": "C",
"pdfAns": "C",
"votes": "C (100%)",
"imgs": [],
"scenario": false,
"exp": "TOGAF describe la gestión de riesgos como encontrar un balance entre resultados positivos y negativos derivados de oportunidades o amenazas.",
"tip": "Riesgo puede ser positivo (oportunidad) o negativo (amenaza) → Risk Management los balancea."
},
{
"id": 72,
"q": "In which section of the TOGAF template for Architecture Principles would a reader find the answer to the question of “How does this affect me”?",
"opts": [
[
"A",
"Implications"
],
[
"B",
"Name"
],
[
"C",
"Rationale"
],
[
"D",
"Statement"
]
],
"ans": "A",
"pdfAns": "A",
"votes": "A (100%)",
"imgs": [],
"scenario": false,
"exp": "La sección Implications responde '¿cómo me afecta esto?': describe requisitos, recursos, costos y actividades necesarios para cumplir el principio.",
"tip": "Implications = 'IMPLICA para mí...'."
},
{
"id": 73,
"q": "Which ADM phase focuses on defining the problem to be solved, identifying the stakeholders, their concerns, and requirements?",
"opts": [
[
"A",
"Phase A"
],
[
"B",
"Phase C"
],
[
"C",
"Phase B"
],
[
"D",
"Preliminary Phase"
]
],
"ans": "A",
"pdfAns": "A",
"votes": "A (100%)",
"imgs": [],
"scenario": false,
"exp": "La Fase A (Architecture Vision) define el problema, identifica stakeholders, sus concerns y requisitos, y establece la visión.",
"tip": "A = Arranque del proyecto: problema + stakeholders + visión."
},
{
"id": 74,
"q": "Which statement best describes iteration and the ADM?",
"opts": [
[
"A",
"The ADM is sequential. Iteration is applied within phases."
],
[
"B",
"The ADM is iterative, over the whole process, between phases, and within phases."
],
[
"C",
"The ADM is iterative within the first cycle, and then between phases."
],
[
"D",
"The level of detail is defined once and applies to all iterations."
]
],
"ans": "B",
"pdfAns": "B",
"votes": "B (100%)",
"imgs": [],
"scenario": false,
"exp": "El ADM es iterativo sobre todo el proceso, entre fases y dentro de fases.",
"tip": "Iteración en 3 niveles."
},
{
"id": 75,
"q": "Consider the illustration showing an architecture development cycle.\nWhich description matches the phase of the ADM labeled as item 1?",
"opts": [
[
"A",
"Operates the process of managing architecture requirements"
],
[
"B",
"Establishes procedures for managing change to the new architecture"
],
[
"C",
"Conducts implementation planning for the architecture defined in previous phases"
],
[
"D",
"Provides architectural oversight for the implementation"
]
],
"ans": "A",
"pdfAns": "A",
"votes": "A (100%)",
"imgs": [
"img/q75_1.png"
],
"scenario": false,
"exp": "El elemento 1 es el centro del ADM: Requirements Management, que opera el proceso de gestión de requisitos de arquitectura a lo largo de todas las fases. (2 = Fase G, 3 = Preliminar).",
"tip": "El centro del círculo = Requirements Management."
},
{
"id": 76,
"q": "What can architects present to stakeholders to extract hidden agendas, principles, and requirements that could impact the final Target\nArchitecture?",
"opts": [
[
"A",
"Solutions and Applications"
],
[
"B",
"Architecture Views and Architecture Viewpoints"
],
[
"C",
"Alternatives and Trade-offs"
],
[
"D",
"Business Scenarios and Business Models"
]
],
"ans": "C",
"pdfAns": "C",
"votes": "C (85%)",
"imgs": [],
"scenario": false,
"exp": "Presentar Alternativas y Trade-offs a los stakeholders ayuda a extraer agendas ocultas, principios y requisitos que podrían impactar la Target Architecture.",
"tip": "Mostrar opciones hace que los stakeholders revelen lo que realmente quieren."
},
{
"id": 77,
"q": "Complete the sentence. The Architecture Landscape is divided into levels known as __________.",
"opts": [
[
"A",
"Transitional, Complete, and Incremental Architectures"
],
[
"B",
"Segment, Strategic, and Capability Architectures"
],
[
"C",
"Baseline, Transition, and To Be Architectures"
],
[
"D",
"Gaps, Plateaus, and Target Architectures"
]
],
"ans": "B",
"pdfAns": "B",
"votes": "B (100%)",
"imgs": [],
"scenario": false,
"exp": "El Architecture Landscape se divide en niveles: Strategic Architecture, Segment Architecture y Capability Architecture.",
"tip": "Landscape = Strategic / Segment / Capability."
},
{
"id": 78,
"q": "Complete the sentence. The TOGAF standard covers the development of four architecture domains, Application, Business, Data and _________.",
"opts": [
[
"A",
"Capability"
],
[
"B",
"Segment"
],
[
"C",
"Technology"
],
[
"D",
"Transition"
]
],
"ans": "C",
"pdfAns": "C",
"votes": "C (100%)",
"imgs": [],
"scenario": false,
"exp": "Los cuatro dominios: Business, Data, Application y Technology.",
"tip": "BDAT."
},
{
"id": 79,
"q": "Consider the following statement:\nSeparate projects may operate their own ADM cycles concurrently, with relationships between the different projects.\nWhat does it illustrate?",
"opts": [
[
"A",
"Requirements management"
],
[
"B",
"Implementation governance"
],
[
"C",
"Enterprise Architecture"
],
[
"D",
"Iteration"
]
],
"ans": "D",
"pdfAns": "D",
"votes": "D (100%)",
"imgs": [],
"scenario": false,
"exp": "Proyectos separados operando ciclos ADM concurrentes con relaciones entre ellos es un ejemplo de iteración (ciclos múltiples del ADM).",
"tip": "Varios ciclos ADM relacionados = ITERACIÓN."
},
{
"id": 80,
"q": "Complete the sentence. Business Transformation Readiness Assessment is ________.",
"opts": [
[
"A",
"a way to put building blocks into context, thereby supporting re-usable solutions"
],
[
"B",
"widely used to validate an architecture that is being developed"
],
[
"C",
"a joint effort between corporate staff, lines of business, and IT planners"
],
[
"D",
"to ensure the active support of powerful stakeholders"
]
],
"ans": "C",
"pdfAns": "C",
"votes": "C (86%)",
"imgs": [],
"scenario": false,
"exp": "El Business Transformation Readiness Assessment es un esfuerzo conjunto entre personal corporativo, líneas de negocio y planificadores de TI para evaluar la preparación de la organización para el cambio.",
"tip": "Readiness = esfuerzo CONJUNTO (corporativo + negocio + TI)."
},
{
"id": 81,
"q": "Which of the following is a responsibility of an Architecture Board?",
"opts": [
[
"A",
"Achieving consistency between sub-architectures"
],
[
"B",
"Determining the scope of an architecture compliance review"
],
[
"C",
"Allocating resources for architecture projects"
],
[
"D",
"Conducting assessments of the maturity level of architecture discipline within the organization"
]
],
"ans": "A",
"pdfAns": "A",
"votes": "A (100%)",
"imgs": [],
"scenario": false,
"exp": "Una responsabilidad del Architecture Board es lograr consistencia entre sub-arquitecturas. Asignar recursos no es su rol, ni lo es la evaluación de madurez.",
"tip": "Board = consistencia, reuso, cumplimiento, dispensas."
},
{
"id": 82,
"q": "Which of the following best describes the TOGAF Architecture Development Method?",
"opts": [
[
"A",
"A process for managing architecture requirements"
],
[
"B",
"A classification mechanism for architectures and solutions"
],
[
"C",
"A process for managing and controlling change at an enterprise-wide level"
],
[
"D",
"A method for developing an organization-specific enterprise architecture"
]
],
"ans": "D",
"pdfAns": "D",
"votes": "D (100%)",
"imgs": [],
"scenario": false,
"exp": "El ADM es un método para desarrollar una arquitectura empresarial específica de la organización (y gestionar su ciclo de vida). Clasificar es el Enterprise Continuum.",
"tip": "ADM = método para desarrollar la EA de TU organización."
},
{
"id": 83,
"q": "Consider the following statements:\n1. Each contracted party is required to act responsibly to the organization and its stakeholders.\n2. All decisions taken, processes used, and their implementation will not be allowed to create unfair advantage to any one particular party.\n3. Digital Transformation and operations will be more effective and efficient.\n4. Strategic decision-making by C-Level executives and business leaders will be more effective.\nWhich statements highlight the value and necessity for Architecture Governance to be adopted within organizations?",
"opts": [
[
"A",
"2 & 3"
],
[
"B",
"1 & 2"
],
[
"C",
"3 & 4"
],
[
"D",
"1 & 4"
]
],
"ans": "B",
"pdfAns": "B",
"votes": "B (100%)",
"imgs": [],
"scenario": false,
"exp": "Las características de gobierno incluyen Responsabilidad (cada parte actúa responsablemente con la organización y stakeholders) y Equidad/Fairness (ninguna parte obtiene ventaja injusta). Por eso 1 y 2.",
"tip": "Gobierno: Responsabilidad + Equidad (Fairness) + Transparencia + Independencia + Disciplina + Rendición de cuentas."
},
{
"id": 84,
"q": "Consider the following chart:\nWhich important concept for Enterprise Architecture Practitioners does it illustrate?",
"opts": [
[
"A",
"ADM phases must be run in a sequenced approach to produce the Architecture."
],
[
"B",
"An Enterprise Architecture must be developed in phases with a limited fixed duration."
],
[
"C",
"ADM phases must be run simultaneously until the relevant information has been produced."
],
[
"D",
"Enterprise Architects must use Gantt charts to communicate with Stakeholders."
]
],
"ans": "C",
"pdfAns": "C",
"votes": "C (67%) · A (33%)",
"imgs": [
"img/q84_1.png"
],
"scenario": false,
"exp": "El diagrama Gantt muestra que dentro de la Fase A se ejecutan B, C, D y E en paralelo para desarrollar la visión, y luego se ejecutan nuevamente en paralelo en el desarrollo de arquitectura. Ilustra que las fases del ADM pueden correrse simultáneamente hasta producir la información relevante.",
"tip": "El ADM NO es una cascada: las fases pueden correr en paralelo."
},
{
"id": 85,
"q": "Complete the sentence. The purpose of Enterprise Architecture is to _________.",
"opts": [
[
"A",
"take major improvement decisions."
],
[
"B",
"govern the stakeholders."
],
[
"C",
"control the bigger changes."
],
[
"D",
"guide effective change."
]
],
"ans": "D",
"pdfAns": "D",
"votes": "D (100%)",
"imgs": [],
"scenario": false,
"exp": "El propósito de la EA es guiar el cambio efectivo.",
"tip": "EA = guiar el cambio efectivo."
},
{
"id": 86,
"q": "Which of the following best describes the purpose of the Gap Analysis technique?",
"opts": [
[
"A",
"To validate non-functional requirements"
],
[
"B",
"To determine service levels for the architecture"
],
[
"C",
"To establish quality metrics for the architecture"
],
[
"D",
"To identify missing functions"
]
],
"ans": "D",
"pdfAns": "D",
"votes": "D (100%)",
"imgs": [],
"scenario": false,
"exp": "El Gap Analysis identifica funciones faltantes (u omitidas) comparando Baseline vs Target.",
"tip": "Gap = lo que FALTA."
},
{
"id": 87,
"q": "Refer to the table below:\nWhich ADM Phase(s) does this describe?",
"opts": [
[
"A",
"Phase B. C and D"
],
[
"B",
"Phase B"
],
[
"C",
"Phase E"
],
[
"D",
"Preliminary Phase"
]
],
"ans": "A",
"pdfAns": "A",
"votes": "A (100%)",
"imgs": [
"img/q87_1.png"
],
"scenario": false,
"exp": "Resultado: arquitecturas de dominio aprobadas, con gaps y el trabajo para cerrarlos entendido por los stakeholders. Esto corresponde a las Fases B, C y D (Business, Information Systems y Technology Architecture).",
"tip": "'Domain architectures' + gaps = B, C y D."
},
{
"id": 88,
"q": "Which of the following are interests important to the stakeholders in a system?",
"opts": [
[
"A",
"Architecture views"
],
[
"B",
"Requirements"
],
[
"C",
"Principles"
],
[
"D",
"Concerns"
]
],
"ans": "D",
"pdfAns": "D",
"votes": "D (100%)",
"imgs": [],
"scenario": false,
"exp": "Los concerns son los intereses importantes para los stakeholders de un sistema. Las vistas los atienden; los requisitos y principios son otra cosa.",
"tip": "Stakeholder TIENE concerns; la View los ATIENDE."
},
{
"id": 89,
"q": "What is present in all phases within the ADM and should be identified, classified and mitigated before starting a transformation effort?",
"opts": [
[
"A",
"Information gaps"
],
[
"B",
"Risk"
],
[
"C",
"Budgetary constraints"
],
[
"D",
"Schedule constraints"
]
],
"ans": "B",
"pdfAns": "B",
"votes": "B (100%)",
"imgs": [],
"scenario": false,
"exp": "El riesgo está presente en todas las fases del ADM y debe ser identificado, clasificado y mitigado antes de iniciar un esfuerzo de transformación.",
"tip": "El riesgo está en TODAS las fases."
},
{
"id": 90,
"q": "Consider the following ADM phases objectives.\nWhich phase does each objective match?",
"opts": [
[
"A",
"1E-2E-3F-4F"
],
[
"B",
"1E-2F-3E-4F"
],
[
"C",
"1G-2E-3F-4F"
],
[
"D",
"1F-2E-3F-4G"
]
],
"ans": "A",
"pdfAns": "A",
"votes": "A (67%) · C (33%)",
"imgs": [
"img/q90_1.png"
],
"scenario": false,
"exp": "1) Determinar si se requiere enfoque incremental e identificar Transition Architectures → E. 2) Generar la versión inicial completa del Roadmap → E. 3) Finalizar Roadmap y Plan de Implementación y Migración → F. 4) Valor y costo entendidos por stakeholders → F.",
"tip": "E = INICIAL (primer roadmap completo, transiciones). F = FINAL (finalizar, valor/costo)."
},
{
"id": 91,
"q": "Which of the following best describes the purpose of the Architecture Requirements Specification?",
"opts": [
[
"A",
"It provides a set of statements that outline what a project must do to comply with the architecture"
],
[
"B",
"It contains an assessment of the current architecture requirements"
],
[
"C",
"It defines the scope and approach to complete an architecture project"
],
[
"D",
"It is sent from the sponsor and triggers the start of an architecture development cycle"
]
],
"ans": "A",
"pdfAns": "A",
"votes": "A (100%)",
"imgs": [],
"scenario": false,
"exp": "La Architecture Requirements Specification es un conjunto de declaraciones cuantitativas que describen lo que un proyecto de implementación debe hacer para cumplir con la arquitectura.",
"tip": "Requirements Spec = QUÉ debe cumplir el proyecto (medible)."
},
{
"id": 92,
"q": "Consider the following ADM phases objectives.\nWhich phase does each objective match?",
"opts": [
[
"A",
"1F-2G-3G-4H"
],
[
"B",
"1H-2F-3G-4H"
],
[
"C",
"1G-2G-3H-4F"
],
[
"D",
"1H-2F-3F-4G"
]
],
"ans": "B",
"pdfAns": "B",
"votes": "B (100%)",
"imgs": [
"img/q92_1.png"
],
"scenario": false,
"exp": "1) Mantener el ciclo de desarrollo de arquitectura → H. 2) Valor y costo de work packages → F. 3) Funciones de gobierno para la solución y change requests de implementación → G. 4) Que la EA Capability cumpla los requisitos actuales → H.",
"tip": "H = mantener la arquitectura y la capacidad vigentes."
},
{
"id": 93,
"q": "Which section of the TOGAF template for Architecture Principles should highlight the requirements for carrying out the principle?",
"opts": [
[
"A",
"Implications"
],
[
"B",
"Rationale"
],
[
"C",
"Statement"
],
[
"D",
"Name"
]
],
"ans": "A",
"pdfAns": "A",
"votes": "A (100%)",
"imgs": [],
"scenario": false,
"exp": "La sección Implications destaca los requisitos (recursos, costos, actividades) para llevar a cabo el principio.",
"tip": "Implications = lo que se REQUIERE para cumplirlo."
},
{
"id": 94,
"q": "Which one of the following classes of information within the Architecture Repository would typically contain a list of the applications in use within\nthe enterprise?",
"opts": [
[
"A",
"Reference Library"
],
[
"B",
"Governance Log"
],
[
"C",
"Architecture Landscape"
],
[
"D",
"Architecture Metamodel"
]
],
"ans": "C",
"pdfAns": "C",
"votes": "C (100%)",
"imgs": [],
"scenario": false,
"exp": "El Architecture Landscape contiene la vista de las arquitecturas (baseline, target, transition) en uso, por ejemplo la lista de aplicaciones en uso en la empresa.",
"tip": "Landscape = 'el paisaje' de lo que existe/planea (inventario)."
},
{
"id": 95,
"q": "Which of the following is the ability to develop, use and sustain the architecture of a particular enterprise using architecture to govern change?",
"opts": [
[
"A",
"An EA Capability"
],
[
"B",
"An EA framework"
],
[
"C",
"An Enterprise Architecture"
],
[
"D",
"An EA repository"
]
],
"ans": "A",
"pdfAns": "A",
"votes": "A (100%)",
"imgs": [],
"scenario": false,
"exp": "La EA Capability es la habilidad de desarrollar, usar y sostener la arquitectura de una empresa, usando la arquitectura para gobernar el cambio.",
"tip": "Capability = HABILIDAD (ability)."
},
{
"id": 96,
"q": "Consider the graphic from the TOGAF Standard.\nWhat does this illustrate?",
"opts": [
[
"A",
"Iteration"
],
[
"B",
"The Architecture Trade-off method"
],
[
"C",
"The Business Scenario method"
],
[
"D",
"Architecture Partitioning"
]
],
"ans": "B",
"pdfAns": "B",
"votes": "B (100%)",
"imgs": [
"img/q96_1.png"
],
"scenario": false,
"exp": "El gráfico ilustra la técnica de Architecture Alternatives and Trade-offs: Visión, Principios y Requisitos → criterios → alternativas → selección.",
"tip": "Alternativas + Select = Trade-off method."
},
{
"id": 97,
"q": "Which of the following describes the practice by which the enterprise architecture is managed and controlled at an enterprise-wide level?",
"opts": [
[
"A",
"IT governance"
],
[
"B",
"Technology governance"
],
[
"C",
"Architecture governance"
],
[
"D",
"Corporate governance"
]
],
"ans": "C",
"pdfAns": "C",
"votes": "",
"imgs": [],
"scenario": false,
"exp": "Architecture governance es la práctica y orientación mediante la cual la arquitectura empresarial se gestiona y controla a nivel de toda la empresa.",
"tip": "¿Controlar la ARQUITECTURA? → Architecture governance."
},
{
"id": 98,
"q": "Consider the following statements describing the TOGAF ADM.\n1. All ADM activities are carried out within an iterative cycle of continuous architecture definition and realization\n2. The Requirements Management phase is a continuous phase\n3. Output from an early phase may be modified in a later phase\n4. When a phase starts, the previous phase closes\nWhich statements are correct?",
"opts": [
[
"A",
"2, 3 & 4"
],
[
"B",
"1, 2 & 3"
],
[
"C",
"1, 3 & 4"
],
[
"D",
"1, 2 & 4"
]
],
"ans": "B",
"pdfAns": "B",
"votes": "B (100%)",
"imgs": [],
"scenario": false,
"exp": "Son correctas 1 (ciclo iterativo continuo de definición y realización), 2 (Requirements Management es continuo) y 3 (salidas tempranas pueden modificarse después). La 4 es falsa: una fase no se cierra necesariamente al iniciar otra.",
"tip": "El ADM no es cascada: nada se 'cierra' definitivamente."
},
{
"id": 99,
"q": "Which of the following best describes the purpose of a Compliance Assessment?",
"opts": [
[
"A",
"To provide a high-level view of the end architecture product"
],
[
"B",
"To govern the architecture throughout its implementation process"
],
[
"C",
"To show progression of change from the Baseline Architecture to the Target Architecture"
],
[
"D",
"To ensure that architecture information is communicated to the right stakeholders at the right time"
]
],
"ans": "B",
"pdfAns": "B",
"votes": "B (100%)",
"imgs": [],
"scenario": false,
"exp": "El Compliance Assessment sirve para gobernar la arquitectura durante su proceso de implementación (asegura conformidad en Fase G).",
"tip": "Compliance = gobernar la implementación."
},
{
"id": 100,
"q": "What does the TOGAF ADM recommend for use in developing an Architecture Vision document?",
"opts": [
[
"A",
"Architecture Principles"
],
[
"B",
"Business Scenarios"
],
[
"C",
"Requirements Management"
],
[
"D",
"Gap Analysis"
]
],
"ans": "B",
"pdfAns": "B",
"votes": "B (86%)",
"imgs": [],
"scenario": false,
"exp": "TOGAF recomienda usar Business Scenarios para desarrollar la Architecture Vision: ayudan a descubrir requisitos de negocio y a articular la visión.",
"tip": "Visión (Fase A) ← Business Scenarios."
},
{
"id": 101,
"q": "What are the four architecture domains that the TOGAF standard deals with?",
"opts": [
[
"A",
"Capability, Segment, Enterprise, Federated"
],
[
"B",
"Baseline, Candidate, Transition, Target"
],
[
"C",
"Business, Data, Application, Technology"
],
[
"D",
"Application, Data, Information, Knowledge"
]
],
"ans": "C",
"pdfAns": "C",
"votes": "",
"imgs": [],
"scenario": false,
"exp": "Business, Data, Application, Technology.",
"tip": "BDAT."
},
{
"id": 102,
"q": "Consider the diagram showing a classification model for Architecture Landscapes.\nWhat are the items labelled A, B and C?",
"opts": [
[
"A",
"A-Enterprise Strategic Architecture, B-Segment Architecture, C-Capability Architecture"
],
[
"B",
"A-Corporate Capability, B-Portfolio Capability, C-Project Capability"
],
[
"C",
"A-Architecture Vision, B-Business Architecture, C-Architecture Development"
],
[
"D",
"A-Strategy Architecture, B-Tactic Architecture, C-Operational Architecture"
]
],
"ans": "A",
"pdfAns": "A",
"votes": "A (100%)",
"imgs": [
"img/q102_1.png"
],
"scenario": false,
"exp": "En este diagrama A (arriba) = Enterprise Strategic Architecture, B = Segment Architecture, C (abajo) = Capability Architecture. ¡Ojo! En la pregunta 19 las letras están invertidas; fíjate en la posición, no en la letra.",
"tip": "Arriba Strategic, medio Segment, abajo Capability (mira dónde está cada letra)."
},
{
"id": 103,
"q": "Consider the illustration.\nWhat are the items labelled A, B and C?",
"opts": [
[
"A",
"A-Enterprise Repository, B-Governance Repository, C-Board Repository"
],
[
"B",
"A-Architecture Repository, B-Governance Repository, C-Architecture Capability"
],
[
"C",
"A-Architecture Repository, B-Governing Board, C-Enterprise Capability"
],
[
"D",
"A-Enterprise Repository, B-Board repository, C-Enterprise Capability"
]
],
"ans": "B",
"pdfAns": "B",
"votes": "B (100%)",
"imgs": [
"img/q103_1.png"
],
"scenario": false,
"exp": "En el diagrama del repositorio completo: A = Architecture Repository (todo el contenedor), B = Governance Repository (barra morada: 'the landscape is governed'), C = Architecture Capability (barra verde inferior que el Architecture Board dirige).",
"tip": "Contenedor = Architecture Repository; barra morada = Governance Repository; barra verde de abajo = Architecture Capability."
},
{
"id": 104,
"q": "When considering the scope of an architecture, what dimension considers to what level of detail the architecting effort should go?",
"opts": [
[
"A",
"Project"
],
[
"B",
"Breadth"
],
[
"C",
"Depth"
],
[
"D",
"Architecture Domains"
]
],
"ans": "C",
"pdfAns": "C",
"votes": "C (100%)",
"imgs": [],
"scenario": false,
"exp": "La dimensión Depth (profundidad) define hasta qué nivel de detalle debe llegar el esfuerzo de arquitectura.",
"tip": "Depth = profundidad = nivel de detalle."
},
{
"id": 105,
"q": "In which phase of the ADM cycle do building blocks become implementation-specific?",
"opts": [
[
"A",
"Phase E"
],
[
"B",
"Phase D"
],
[
"C",
"Phase C"
],
[
"D",
"Phase B"
]
],
"ans": "A",
"pdfAns": "A",
"votes": "",
"imgs": [],
"scenario": false,
"exp": "En la Fase E los building blocks se vuelven específicos de implementación: los ABBs se convierten en SBBs.",
"tip": "E: de ABB (qué) a SBB (con qué producto concreto)."
},
{
"id": 106,
"q": "Consider the following statements:\n1. Groups of countries, governments, or governmental organizations (such as militaries) working together to create common or shareable\ndeliverables or infrastructures\n2. Partnerships and alliances of businesses working together, such as a consortium or supply chain\nWhat are those examples of according to the TOGAF Standard?",
"opts": [
[
"A",
"Organizations"
],
[
"B",
"Business Units"
],
[
"C",
"Enterprises"
],
[
"D",
"Architectures Scopes"
]
],
"ans": "C",
"pdfAns": "C",
"votes": "",
"imgs": [],
"scenario": false,
"exp": "Grupos de países/gobiernos trabajando juntos y alianzas de negocios (consorcios, cadenas de suministro) son ejemplos de 'Enterprises' en TOGAF.",
"tip": "Enterprise puede ser muy amplia (incluso alianzas)."
},
{
"id": 107,
"q": "Please read this scenario prior to answering the question.\nYou are the Lead Enterprise Architect at a major agribusiness company. The company's mam harvest is lentils, a highly valued food grown\nworldwide. The lentil parasite, broomrape, has been an increasing concern for many years and is now becoming resistant to chemical controls. In\naddition, changes in climate favor the propagation and growth of the parasite. As a result, the parasite cannot realistically be exterminated, and it\nhas become pandemic, with lentil yields falling globally.\nIn response to the situation, the CEO has decided that the lentil fields will be used for another harvest. The company will also cease to process\nthird-party lentils and will repurpose its processing plants. Thus, the target market will change, and the end-products will be different and more\nvaried.\nThe company has recently established an Enterprise Architecture practice based on the TOGAF standard as method and guiding framework. The\nCIO is the sponsor of the activity. A formal request for architecture change has been approved. At this stage there is no fixed scope, shared vision,\nor objectives.\nRefer to the scenario -\nYou have been asked to propose the best approach for architecture development to realize the CEO’s change in direction for the company.\nBased on the TOGAF standard which of the following is the best answer?",
"opts": [
[
"A",
"You propose that this engagement define the baseline Technology Architecture first in order to assess the current infrastructure capacity and capability for the company. Then the focus should be on transition planning and incremental architecture deployment. This will identify requirements to ensure that the projects are sequenced in an optimal fashion so as to realize the change."
],
[
"B",
"You propose that the team focus on architecture definition including development of business models, with emphasis on defining the change parameters to support this new business strategy that the CEO has identified. Once understood, the team will be in the best position to identify the requirements, drivers, issues, and constraints for the change."
],
[
"C",
"You propose that the priority is to produce a new Request for Architecture Work leading to development of a new Architecture Vision. The trade-off method should be applied to identify and select an architecture satisfying the stakeholders. For an efficient change the EA team should be aligned with the organization’s planning, budgeting, operational, and change processes."
],
[
"D",
"You propose that the team uses the architecture definition document and focus on architecture development starting simultaneously phases B, C and This is because the CEO has identified the need to change. This will ensure that the change can be defined in a structured manner and address the requirements needed to realize the change."
]
],
"ans": "C",
"pdfAns": "C",
"votes": "C (55%) · B (45%)",
"imgs": [],
"scenario": true,
"exp": "Sin alcance fijo, sin visión compartida ni objetivos y con una EA recién establecida, lo primero es producir un nuevo Request for Architecture Work que lleve a una nueva Architecture Vision; aplicar trade-offs para seleccionar una arquitectura que satisfaga a los stakeholders y alinearse con los procesos de planeación, presupuesto y operación.",
"tip": "Sin visión ni alcance → Request for Architecture Work → Architecture Vision."
},
{
"id": 108,
"q": "Consider the following descriptions of deliverables consumed and produced across the TOGAF ADM cycle.\nWhich deliverables match these descriptions?",
"opts": [
[
"A",
"1 Architecture Principles - 2 Architecture Contracts - 3 Request for Architecture Work - 4 Architecture Requirements Specification"
],
[
"B",
"1 Architecture Contracts - 2 Architecture Requirements Specification - 3 Architecture Vision - 4 Architecture Principles"
],
[
"C",
"1 Architecture Requirements Specification - 2 Architecture Principles - 3 Architecture Vision - 4 Architecture Contracts"
],
[
"D",
"1 Architecture Principles - 2 Architecture Contracts - 3 Architecture Requirements Specification - 4 Request for Architecture Work"
]
],
"ans": "A",
"pdfAns": "A",
"votes": "",
"imgs": [
"img/q108_1.png"
],
"scenario": false,
"exp": "1) Reglas perdurables → Architecture Principles. 2) Acuerdos conjuntos entre socios de desarrollo y patrocinadores → Architecture Contracts. 3) Documento que dispara el ciclo → Request for Architecture Work. 4) Declaraciones cuantitativas → Architecture Requirements Specification.",
"tip": "Contrato = acuerdo conjunto. Request = disparador. Spec = cuantitativo."
},
{
"id": 109,
"q": "Which section of the TOGAF template for Architecture Principles should succinctly and unambiguously communicate the fundamental rule?",
"opts": [
[
"A",
"Statement"
],
[
"B",
"Implications"
],
[
"C",
"Rationale"
],
[
"D",
"Name"
]
],
"ans": "A",
"pdfAns": "A",
"votes": "A (100%)",
"imgs": [],
"scenario": false,
"exp": "El Statement comunica de manera sucinta e inequívoca la regla fundamental.",
"tip": "Statement = la regla en una frase."
},
{
"id": 110,
"q": "Which of the following best describes the Reference Library within the Architecture Repository?",
"opts": [
[
"A",
"Guidelines and templates used to create new architectures"
],
[
"B",
"Processes to support governance of the Architecture Repository"
],
[
"C",
"A library of specifications to which architectures must conform"
],
[
"D",
"A record of the governance activity across the enterprise"
]
],
"ans": "A",
"pdfAns": "A",
"votes": "A (100%)",
"imgs": [],
"scenario": false,
"exp": "El Reference Library contiene guías, plantillas, patrones y otras referencias para crear nuevas arquitecturas.",
"tip": "Reference = material de apoyo reutilizable."
},
{
"id": 111,
"q": "Complete the sentence.\nWhen considering agile development, Architecture to Support Portfolio will identify what products the Enterprise needs, the boundary of the\nproducts, and what constraints a product owner has; this defines the Enterprise’s ______________.",
"opts": [
[
"A",
"operating model"
],
[
"B",
"risk tolerance"
],
[
"C",
"backlog"
],
[
"D",
"business continuity"
]
],
"ans": "C",
"pdfAns": "C",
"votes": "C (63%) · A (38%)",
"imgs": [],
"scenario": false,
"exp": "En agilidad, Architecture to Support Portfolio identifica los productos que necesita la empresa, sus límites y restricciones para los product owners: esto define el backlog de la empresa.",
"tip": "Productos + product owner = BACKLOG."
},
{
"id": 112,
"q": "Complete the sentence. The purpose of the Preliminary Phase is to _______________________.",
"opts": [
[
"A",
"define the enterprise strategy"
],
[
"B",
"describe the target architecture"
],
[
"C",
"architect an Enterprise Architecture Capability"
],
[
"D",
"identify the stakeholders and their requirements"
]
],
"ans": "C",
"pdfAns": "C",
"votes": "C (100%)",
"imgs": [],
"scenario": false,
"exp": "El propósito de la Fase Preliminar es arquitectar (establecer) una Capacidad de Arquitectura Empresarial.",
"tip": "Preliminar = EA Capability."
},
{
"id": 113,
"q": "According to the TOGAF standard, what term describes an individual with an interest in a system?",
"opts": [
[
"A",
"stakeholder"
],
[
"B",
"consumer"
],
[
"C",
"lead architect"
],
[
"D",
"sponsor"
]
],
"ans": "A",
"pdfAns": "A",
"votes": "A (100%)",
"imgs": [],
"scenario": false,
"exp": "Un stakeholder es un individuo, equipo u organización con interés (concerns) en un sistema.",
"tip": "Interés en el sistema = stakeholder."
},
{
"id": 114,
"q": "Refer to the table below:\nWhich ADM Phase(s) does this describe?",
"opts": [
[
"A",
"Phase E"
],
[
"B",
"Phase F"
],
[
"C",
"Phase A"
],
[
"D",
"Phase B, C and D"
]
],
"ans": "A",
"pdfAns": "A",
"votes": "A (100%)",
"imgs": [
"img/q114_1.png"
],
"scenario": false,
"exp": "Un conjunto de work packages que atienden los gaps, con valor, esfuerzo y dependencias, para llegar a la target ajustada: es la Fase E (Opportunities and Solutions).",
"tip": "Work packages + dependencias = Fase E."
},
{
"id": 115,
"q": "Please read this scenario prior to answering the question\nYou are working as an Enterprise Architect at a technology company. The company has multiple subsidiary companies engaged in mobile, online\nshopping, cloud computing services, and a social media platform. The company has grown rapidly and claims to be adding 20 million new users a\nmonth.\nThe company has an established Enterprise Architecture (EA) program based on the TOGAF standard, sponsored jointly by the Chief Executive\nOfficer (CEO) and Chief Information Officer (CIO). In your role as an Enterprise Architect within the EA team, you work closely with the business\nstakeholders in the company as well as the sponsors.\nThe senior leadership within the company is worried about the ability of the company to address the challenges of climate change and the\nopportunities around artificial intelligence. They are concerned that the business will not be sustainable without making significant changes. Most\nsenior leaders feel that operations must become more efficient, and the organization needs to change to achieve its future goals.\nThe CEO has decided that reorganizing its subsidiaries around artificial intelligence and machine learning will improve the way the company\ncreates and delivers value. The sponsors have approved an EA project for the reorganization. The EA team has created a strategic architecture\nwith the CEO and CIO. It includes an Architecture Vision, and high-level definitions of the domain architectures. This sets out an ambitious plan\nover a three-year period and covers three distinct transformations to implement the reorganization.\nThe sponsors have read reports that up to 70% of companies are failing at digital and artificial intelligence transformation. They have made it\nclear that prior to approval of the detailed Implementation and Migration Plan, the EA team needs to assess and mitigate the risks associated with\nthe reorganization. They want assurance that the reorganization will succeed and deliver the promised increases in value for the business.\nRefer to the scenario -\nYou have been asked by the EA team leader to recommend an approach to address the request from the sponsors.\nBased on the TOGAF Standard, which of the following is the best answer?",
"opts": [
[
"A",
"You would assess the organization's preparedness to undergo change. This will allow the risks associated with the transformations to be identified, classified, and mitigated for. This would include identifying dependencies between the set of changes, including gaps and work packages. It will also identify improvement actions to be worked into the Implementation and Migration Plan. The business value, effort, and risk associated with each transformation should be determined."
],
[
"B",
"You would apply an interoperability analysis to evaluate the potential issues across the proposed new architecture. This should include the development of a matrix showing the interoperability requirements. The degree of interoperability should then be aligned with the corporate operating model to ensure risks are mitigated and minimized. The risk mitigations can then be included within each of the target Transition Architectures. You would then finalize the Architecture Roadmap and the Implementation and Migration Plan."
],
[
"C",
"You would bring together information about potential approaches and produce several alternative target transition architectures. You would then investigate the different architecture alternatives and discuss these with stakeholders using the Architecture Alternatives and Trade-offs technique. Once the target architecture has been selected, it should be analyzed using a state evolution table to determine the Transition Architectures. A value realization process should then be established to ensure that the concerns raised are addressed."
],
[
"D",
"Before preparing the detailed Implementation and Migration Plan, you would review and consolidate the gap analysis results from Phases B to This will identify the transformations required to achieve the proposed Target Architecture. You would then assess the readiness of the organization to undergo change and determine an overall direction to address and mitigate identified risks. The Transition Architecture should then be planned to use a state evolution table."
]
],
"ans": "A",
"pdfAns": "A",
"votes": "A (100%)",
"imgs": [],
"scenario": true,
"exp": "Antes de aprobar el plan detallado, evaluar la preparación para el cambio (Business Transformation Readiness Assessment), identificar, clasificar y mitigar riesgos, identificar dependencias entre cambios y determinar valor, esfuerzo y riesgo de cada transformación.",
"tip": "'¿Tendrá éxito?' → Readiness + riesgos + valor/esfuerzo."
},
{
"id": 116,
"q": "Please read this scenario prior to answering the question\nYou are an Enterprise Architect at a food production and distribution company. The goal of the company is to maximize profit while satisfying the\nneeds of consumers for its products. Its customers demand food that is produced sustainably, safely, and transparently while reducing\nenvironmental impact.\nThe business is highly mechanized, and this mechanization has brought about a decrease in the number of workers needed, together with a focus\non agricultural engineering to improve the efficiency of its farms, its processing facilities, and the overall enterprise. As part of this, the company\nhas established an Enterprise Architecture (EA) practice based on the TOGAF standard, using it as the method and guiding framework. The Chief\nInformation Officer (CIO) is the sponsor of the EA practice. The practice has adopted an iterative approach for its architecture development. This\nhas enabled decision-makers to have valuable insights into different aspects of the business.\nIn recent years, there have been a series of bad harvests and a major reduction in yields of the main crop produced by the company. This\ncombined with an increase in costs for energy, feed, fuel, and fertilizer, has led to a significant decrease in profits. The rising costs and reduced\nprofits mean that the company is unable to take as much planned action on climate measures as it would like, such as reducing its carbon\nfootprint. The Chief Executive Officer (CEO) has stated that big changes are needed to improve yields and profitability.\nThe outline strategy for change includes new products and new markets. The company will switch to a mix of crops rather than depend on a single\nmain crop and will allow the use of its processing facilities by third parties. This is a major decision, and the CEO has stated a preference to\nrepurpose and reuse rather than replace, so as to manage risks and limit costs.\nThe CIO has assigned the EA team to manage this project. The CIO has stated that although the overall objective is known, the EA team is\nexpected to define the scope, a shared vision, and the requirements.\nRefer to the scenario -\nYou have been asked to recommend the best approach for architecture development to realize the CEO's change in direction for the company.\nBased on the TOGAF standard, which of the following is the best answer?",
"opts": [
[
"A",
"You recommend that the team focus its iteration cycles on architecture development by going through the architecture definition phases (B- D) with a baseline-first approach. This will support the change in direction as stated by the CEO. It will ensure that the change can be defined in a structured manner and address the requirements needed to realize the change."
],
[
"B",
"You recommend that the priority is to understand the problem and define the structure of the change. The team should focus iteration cycles on a baseline-first approach to architecture development and then transition planning. This will identify the change needed in order to transition from the baseline to the target and can be used to work out in detail what the agreed vision is for the change."
],
[
"C",
"You recommend that the team focus on architecture definition and operate multiple ADM phases concurrently to support this new business strategy that the CEO has identified. Once understood, the team will be in the best position to identify the requirements, drivers, issues, and constraints for the change. You would ensure that the architecture development addresses non-functional requirements to assure that the target architecture is robust and secure."
],
[
"D",
"You recommend that this engagement define the baseline Technology Architecture first in order to assess the current infrastructure capacity and capability of the company. Then, the focus should be on transition planning and incremental architecture deployment. This will identify requirements to ensure that projects are sequenced optimally to realize the change."
]
],
"ans": "B",
"pdfAns": "B",
"votes": "B (71%) · C (29%)",
"imgs": [],
"scenario": true,
"exp": "El objetivo es conocido pero hay que definir alcance, visión compartida y requisitos, y se quiere reutilizar: primero entender el problema y estructurar el cambio con iteraciones baseline-first y luego transition planning.",
"tip": "Reutilizar + visión por definir → baseline first + transition planning."
},
{
"id": 117,
"q": "Please read this scenario prior to answering the question\nYou are working as an Enterprise Architect within an Enterprise Architecture (EA) team at an electric vehicle manufacturer. The company produces\nelectric cars and battery systems. The goal of the company is to build the best technology and software platform for electric vehicles.\nThe company has decided to introduce a major change to its vehicle design over a five-year period. This will be a cross-functional effort between\nhardware and software teams, delivering significant new features in the vehicles they manufacture. It is planned to be developed in phases. An\narchitecture to support the strategy has been completed with a roadmap for a set of projects.\nThe EA team has inherited the architecture for the hardware and software automotive platform used by current vehicles, some of which can be\ncarried over to the new vehicle design. The EA team has started to define which parts of the architecture to carry forward.\nThe presentation and access to different variations of data that the company plans to offer through its vehicles create an architecture challenge.\nThe application portfolio and supporting infrastructure must connect with multiple cloud services and data repositories in different countries to\nbe able to handle the data at a large scale.\nEnough of the Business Architecture has been defined so that work can commence on the Information Systems and Technology Architectures.\nThose architectures need to be defined to support the primary business services that the company plans to provide. These services will manage\nand process the data created by vehicles, paving the way for self-driving vehicles in the future.\nThe company uses the TOGAF Standard as the basis for its Enterprise Architecture framework. The EA team reports to the Chief Technical Officer\n(CTO), who is the sponsor of the EA program. The CTO requires that the EA team follow the purpose-based EA Capability Model as described in\nthe TOGAF Series Guide: A Practitioners’ Approach to Developing Enterprise Architecture Following the TOGAF® ADM.\nRefer to the scenario -\nYou have been asked how to decide and organize the work to deliver the requested architectures.\nBased on the TOGAF standard, which of the following is the best answer?",
"opts": [
[
"A",
"You look outside the company to study how other companies organize their data models and application portfolios. You create just enough architecture description for the Application, Data, and Technology Architectures to identify the different options. For each project, this includes the identification of candidate architecture and solution building blocks. You then identify solution providers, perform a readiness assessment, and assess the viability and fitness of the solution options. You then write the draft Implementation and Migration Plan."
],
[
"B",
"You look to the superior architecture to help plan your approach. You identify projects, dependencies, and synergies, then decide the order for starting the projects. You then develop high-level architecture descriptions. For each project you determine how much work is needed, identify reference architectures, and candidate building blocks. You identify the resource needs taking into account cost and value. You document the different options, risks, and ways to control them to enable feasibility analysis and trade-offs with the stakeholders."
],
[
"C",
"You research leading data companies, using your findings to help in developing high-level Target Data, Application and Technology Architectures. You review the Architecture Vision to determine the level of detail, time, and scope of the ADM cycle phases required for architecture development for the project. You identify and estimate the cost of the main work packages. You then create an Architecture Roadmap and request the Architecture Board to approve the roadmap. You then start the project."
],
[
"D",
"You commence an iteration of ADM Phase A, identifying the stakeholders and revising the Architecture Vision. You perform a Stakeholder Analysis and update the Stakeholder Map created for the strategic architecture so it reflects the stakeholders who are now the most important to the projects that are to be developed. You then request the CTO to make some choices about the Architecture Roadmap and update the Implementation and Migration Plan to reflect the choices."
]
],
"ans": "B",
"pdfAns": "B",
"votes": "",
"imgs": [],
"scenario": true,
"exp": "Con una arquitectura para soportar la estrategia ya completa, se usa la arquitectura superior como guía: identificar proyectos, dependencias y sinergias, priorizar, describir a alto nivel, estimar esfuerzo, referencias y building blocks, recursos (costo/valor), y documentar opciones, riesgos y controles para viabilidad y trade-offs (Architecture to Support Portfolio).",
"tip": "Support Portfolio = guiado por la arquitectura superior + priorizar proyectos + viabilidad."
},
{
"id": 118,
"q": "Please read this scenario prior to answering the question\nYou are working as an Enterprise Architect within the Enterprise Architecture (EA) team at a healthcare and life sciences company. The company\nhas multiple divisions. Your team works within the healthcare division.\nThe EA team is working on an architecture project to develop a secure system that will allow healthcare researchers to share information more\neasily about their clinical trials. It will make working together easier across the organization. This system will also allow secure collaboration with\nexternal partners.\nThe company has an established EA practice and has adopted the TOGAF standard for use in its architecture work. The EA practice is federated,\nwhich allows some interoperability and information sharing between divisions yet permits partially independent activity. The Vice President of the\nhealthcare division is the sponsor of the Enterprise Architecture activity.\nThe EA team uses the TOGAF Architecture Development Method with adaptations required to support healthcare production methods and\nlaboratory procedures. Due to the highly sensitive nature of the information that is managed, special care has been taken to ensure that each\narchitecture domain considers privacy and safety concerns.\nThe healthcare division is always creating new products and needs to show the effectiveness and safety of the product. This happens in a set of\nclinical trials that satisfy the legal requirements of the relevant health authorities. The clinical trials are undertaken by the division's research\nlaboratories at multiple facilities worldwide. At any time, there are many clinical trials happening.\nIn addition to internal research and development activities, the healthcare division is also involved in publicly funded research projects with\nindustrial and academic partners.\nThe EA team has been instructed to minimize disruptions to the trials and to gradually introduce the new system.\nRefer to the scenario -\nYou have been tasked with planning the introduction of the new system. Specifically, how would you identify the work packages?\nBased on the TOGAF standard, which of the following is the best answer?",
"opts": [
[
"A",
"You recommend that the Solution Building Blocks from a Consolidated Gaps, Solutions and Dependencies Matrix be grouped into a set of work packages. Using the matrix as a planning tool, regroup the work packages to account for dependencies. Sequence the work packages into the Capability Increments needed to achieve the Target Architecture, so that the implementation team can schedule the rollout one region at a time to minimize disruption. Document the work packages for the Enterprise Architecture using a Transition Architecture State Evolution Table."
],
[
"B",
"You recommend that a Consolidated Gaps, Solutions and Dependencies Matrix is used as a planning tool for creating work packages. For each gap classify whether the solution is either a new development, a purchased solution, or based on an existing product. Group similar solutions together to define the work packages. Regroup the work packages into a set of Capability Increments to transition to the Target Architecture considering the schedule for clinical trials, and document them in an Architecture Definition Increments Table."
],
[
"C",
"You recommend that an Implementation Factor Catalog is drawn up to indicate actions and constraints. A Consolidated Gaps, Solutions and Dependencies Matrix should also be created. For each gap, identify a proposed solution and classify it as new development, purchased solution, or based on an existing product. Group similar activities together to form work packages. Identify dependencies between work packages factoring in the clinical trial schedules. Regroup the work packages into a set of Capability Increments scheduled into a series of Transition Architectures."
],
[
"D",
"You recommend that the set of required Solution Building Blocks be determined by identifying those which need to be developed and which need to be procured. Eliminate any duplicates. Group the remaining Solution Building Blocks together to create the work packages using a CRUD (create, read, update, delete) matrix. Rank the work packages and select the most cost-effective options for inclusion in a series of Transition Architectures. Schedule the rollout of the work packages to be sequential across the geographic regions."
]
],
"ans": "C",
"pdfAns": "C",
"votes": "",
"imgs": [],
"scenario": true,
"exp": "Implementation Factor Catalog, Consolidated Gaps, Solutions and Dependencies Matrix, clasificar soluciones (nueva/comprada/existente), agrupar en work packages, dependencias considerando los ensayos clínicos y reagrupar en Capability Increments dentro de Transition Architectures.",
"tip": "Fase E completa: factores → matriz de gaps → work packages → dependencias → incrementos."
},
{
"id": 119,
"q": "Please read this scenario prior to answering the question\nYou are working as an Enterprise Architect within an Enterprise Architecture (EA) team at a large technology company. The company has multiple\ndivisions worldwide.\nThe company has a mature EA practice and uses the TOGAF standard for its architecture development method. In addition to the EA program, the\ncompany has a number of management frameworks in use, including business planning, project/portfolio management, and operations\nmanagement. The EA program is sponsored by the Chief Information Officer (CIO). The CIO has actively encouraged architecting with agility within\nthe EA department as her preferred approach for projects.\nThe company has a large in-house legal department managing intellectual property, trademarks, and patent disputes. At any one time there are\nmany ongoing lawsuits involving the company. Many of the company’s competitors who are in a similar position have adopted Artificial\nIntelligence (AI) tools to support their legal departments.\nThe CIO has approved a Request for Architecture Work to examine the use of Machine Learning in defining new AI-driven litigation processes and\nlegal assistance for the company.\nMany of the legal staff, including the Senior Legal Counsel, have expressed concerns about relying on AI for decision-making. Other staff are\nconcerned about possible bias in AI, and about the implications of legal knowledge being retained in AI. The CIO wants to know how these\nconcerns can be addressed, and how risks will be covered by a new architecture enabling AI and Machine Learning.\nThe CIO has emphasized that the architecture should enable the fast implementation of continuous Machine Learning. The solution will need to\nbe constantly measured for delivered value and be quickly iterated to success.\nRefer to the scenario -\nYou have been asked by the EA team leader to recommend an approach that solves the problems mentioned.\nBased on the TOGAF standard, which of the following is the best answer?",
"opts": [
[
"A",
"You recommend that the key stakeholders, who are the most powerful and influential staff, be addressed through the creation of a Communication Plan. This plan should include a report that summarizes the key features of the architecture reflecting stakeholder requirements. You speak with each key stakeholder to ensure their concerns are being addressed. You make sure that the architecture being developed for the continuous Machine Learning clearly addresses management of risk and agility."
],
[
"B",
"You recommend that an analysis of the stakeholders is carried out resulting in documentation of different groups, an understanding of their positions, and their key concerns. The concerns and relevant views can then be defined for each group and recorded in the Architecture Vision document. The requirements will address risk mitigation through regular assessments and feedback. The requirements should also include a supervised agile implementation of continuous Machine Learning."
],
[
"C",
"You recommend that a set of standard business models be developed that can be applied to all AI-related architecture projects. A meeting will be held with the stakeholders to teach them how to use and understand the models. This will allow them to confirm that their concerns are being addressed. Risk will be managed simultaneously with the Security Architecture development, ensuring it does not hinder the agility preferred by the CIO."
],
[
"D",
"You recommend that an analysis is made that separates the various types of stakeholders into groups. Models should be developed for each proposed architecture to support the AI and Machine Learning solution. This will ensure that all the required data and details is considered. A meeting should be scheduled with the stakeholders to confirm that their concerns have been properly addressed by the models. Agility will be considered during Phase G Implementation Governance."
]
],
"ans": "B",
"pdfAns": "B",
"votes": "",
"imgs": [],
"scenario": true,
"exp": "Análisis de stakeholders (grupos, posiciones, concerns), vistas por grupo registradas en la Architecture Vision, requisitos de mitigación de riesgo con evaluaciones y retroalimentación regulares, e implementación ágil supervisada del Machine Learning continuo.",
"tip": "Stakeholders preocupados por IA → análisis de stakeholders + vistas + riesgo + agilidad supervisada."
},
{
"id": 120,
"q": "Please read this scenario prior to answering the question\nYou are an Enterprise Architect working at an electric vehicle manufacturer. You are part of an Enterprise Architecture (EA) team that has\nresponsibilities across multiple divisions of the company. The company produces electric cars, and battery systems. The goal of the company is\nto build the best technology and software platform to support self-driving cars.\nAn architecture to support strategy has been completed defining a long-term Target Architecture with a roadmap over five years. This has\nidentified the need for a portfolio of projects over the next two years. The portfolio includes the development of travel assistance systems using\ndata gathered from multiple vehicles on the road.\nThe design of the presentation and accessibility of different types of data that the company plans to offer through its platform appears to be\nchallenging. It is important for the application portfolio to work securely with third-party cloud services and V2X (Vehicle-to-Everything) service\nproviders across many countries in order to effectively manage large amounts of data. Stakeholders are particularly concerned about the security\nof V2X. Regulations in various markets mandate that user privacy must always be safeguarded, to prevent tracking and compiling of data that\ncould reveal drivers’ journeys.\nThe company uses the TOGAF Standard as the basis for its Enterprise Architecture framework. Architecture development within the company uses\nthe purpose-based EA Capability Model as described in the TOGAF Series Guide: A Practitioner’s Approach to Developing Enterprise Architecture\nFollowing the TOGAF® ADM. The EA team reports to the Chief Information Officer (CIO), who is the sponsor of the EA program.\nThe current phase of architecture development is focused on the Business Architecture, which needs to support the primary travel assistance\nservices that the company plans to provide. These services will manage and process the data created by vehicles, paving the way for self-driving\nvehicles in the future.\nRefer to the scenario -\nYou have been asked to describe the risk and security considerations you would include in the current phase of the architecture development.\nBased on the TOGAF Standard, which of the following is the best answer?",
"opts": [
[
"A",
"You focus on data quality as it is a key factor in risk management. You identify the datasets that need to be safeguarded. For each dataset, you assign ownership and responsibility for the quality of data needs. A security classification will be defined and applied to each dataset. The dataset owner is then able to authorize processes that are trusted for a certain activity on the dataset under specific circumstances."
],
[
"B",
"You perform a qualitative risk assessment for the data assets exchanged with partners. This delivers a set of priorities, high to medium to low, based on identified threats, the likelihood of occurrence, and the impact if it does occur. Using the priorities, you then develop a Business Risk Model that details the risk strategy including classifications to determine what mitigation is enough."
],
[
"C",
"You create a security domain model so that assets with the same level can be managed under one security policy. Since data is being shared across partners, you establish a security federation to include them. This includes contractual arrangements, and a definition of the responsibility areas for the exchanged data, as well as security implications. You undertake a risk assessment determining risks relevant to specific data assets."
],
[
"D",
"You focus on the relationship with the third parties required for the travel assistance systems and define a trust framework. This describes the relationship with each party. Digital certificates are a key part of the framework and will be used to create trust between parties. You monitor legal and regulatory changes across all countries to keep the trust framework in compliance."
]
],
"ans": "C",
"pdfAns": "C",
"votes": "C (67%) · B (33%)",
"imgs": [],
"scenario": true,
"exp": "En Business Architecture, las consideraciones de seguridad: modelo de dominios de seguridad, federación de seguridad con socios (contratos, responsabilidades sobre datos intercambiados) y evaluación de riesgos por activo de datos. Es la misma respuesta que la pregunta 42.",
"tip": "Seguridad en Fase B: security domains + federación + risk assessment."
},
{
"id": 121,
"q": "Please read this scenario prior to answering the question\nYou are working as an Enterprise Architect at a large company. The company runs many retail stores as well as an online marketplace. The online\nmarketplace allows hundreds of brands to partner with the company.\nThe company has a mature Enterprise Architecture (EA) practice and uses the TOGAF standard for its architecture development method. The EA\npractice is involved in all aspects of the business, with oversight provided by an Architecture Board with representatives from different parts of\nthe business. The EA program is sponsored by the Chief Information Officer (CIO).\nMany of the stores remain open all day and night. Each store uses a standard method to track sales and inventory. This involves sending accurate,\ntimely sales data to a central AI-based inventory management system that can predict demand, adjust stock levels, and automate reordering. The\ncentral inventory management system is housed at the company’s central data center.\nThe company has bought a major rival. The Chief Executive Officer believes that the merger will enable growth through combined offerings and\ncost savings. The decision has been made to fully integrate the two organizations, including merging retail operations and systems. This means\nthat duplicated systems will be replaced with one standard retail management system. Also, the company will reduce the number of applications\nthat are used. The CIO expects significant savings will be achieved by implementing these changes across the newly merged company.\nOne improvement that the rival has successfully implemented is the use of hand-held devices within stores, for both customers and staff. This\nhas increased both customer and staff employee satisfaction due to the time savings this has brought. The CIO has given the go-ahead to roll out\nthe devices in all stores but has stated that training on how to use the hand-held devices should be brief because there are a lot of employees,\nmany of whom are part-time.\nThe company has a mature Enterprise Architecture (EA) practice and uses the TOGAF standard for its architecture development method. The EA\npractice is involved in all aspects of the business, with oversight provided by an Architecture Board with representatives from different parts of\nthe business. The EA program is sponsored by the Chief Information Officer (CIO).\nThe Request for Architecture Work to oversee the merger has been approved. The project has been scoped, and you have been assigned to work\non it. Your role includes managing the architecture for the retail stores.\nRefer to the scenario -\nYou have been asked to confirm the most relevant architecture principles for the transformation.\nBased on the TOGAF Standard, which of the following is the best answer?\n[Note: The sequence of the principles listed in each answer does not matter. You should assume the company follows the set of principles\nprovided in the TOGAF Standard, ADM Techniques, Architecture Principles chapter. You may need to refer to section 2.6 located in ADM\nTechniques within the reference text to answer this question.]",
"opts": [
[
"A",
"Maximize Benefit to the Enterprise, Common Use Applications, Data is an Asset, Responsive Change Management, Technology Independence"
],
[
"B",
"Common Use Applications, Data is an Asset, Data is Accessible, Ease of Use, Business Continuity"
],
[
"C",
"Common Vocabulary and Data Definitions, Compliance with the Law, Requirements Based Change, Responsive Change Management, Data Security"
],
[
"D",
"Control Technical Diversity, Interoperability, Data is an Asset, Data is Shared, Business Continuity"
]
],
"ans": "B",
"pdfAns": "B",
"votes": "",
"imgs": [],
"scenario": true,
"exp": "Principios relevantes: Common Use Applications (reemplazar sistemas duplicados), Data is an Asset y Data is Accessible (datos de ventas a un sistema central), Ease of Use (capacitación breve con dispositivos) y Business Continuity (tiendas abiertas 24h).",
"tip": "Lee las pistas del escenario: duplicados → Common Use; 24h → Continuity; capacitación breve → Ease of Use."
},
{
"id": 122,
"q": "Please read this scenario prior to answering the question\nYou are working as an Enterprise Architect consultant within a large manufacturing company. The company has multiple divisions located\nworldwide, including retail, manufacturing, pharmaceuticals, and technology.\nThe company has a mature Enterprise Architecture (EA) practice and uses the TOGAF standard for its architecture development method. The EA\npractice is engaged throughout all the divisions, with governance provided by multiple Architecture Boards with responsibility for a business line.\nIn addition to the EA program, the company uses several management frameworks, including business planning, project/portfolio management,\nand operations management. The EA program is sponsored by the Chief Information Officer (CIO).\nAfter a recent study, senior management is concerned about the impact of the company’s multiple data centers and duplication of applications on\nbusiness efficiency. To address this concern, a strategic architecture has been defined; it will help improve the ability to meet customer demand\nand enhance operational efficiency. The strategic architecture involves the consolidation of multiple applications programs currently used in\ndifferent divisions and putting them all onto a cloud-based solution instead.\nEach division has completed the Architecture Definition documentation to meet its own specific operational requirements. The enterprise\narchitects have analyzed the corporate changes and implementation constraints. A consolidated gap analysis has been completed. Based on its\nresults, the architects have reviewed the requirements, dependencies and interoperability requirements needed to integrate the cloud-based\nsolution. The architects have completed the Business Transformation Readiness Assessment. Based on all these factors they have produced a\nrisk assessment. They have also completed the draft Implementation and Migration Plan, the draft Architecture Roadmap, and the Capability\nAssessment deliverables.\nDue to the risks of changing from the current environment, the decision has been taken that a gradual approach is needed to implement the target\narchitectures. It will likely take a few years to complete the entire implementation process.\nRefer to the scenario -\nYou have been asked to decide on the next steps for the migration planning.\nBased on the TOGAF standard, which of the following is the best answer?",
"opts": [
[
"A",
"You examine how the Implementation and Migration Plan affects the other frameworks being used in the organization. You coordinate the planning with business planning, project/portfolio management, and operations management frameworks. You assign a business value to each project, considering the available resources and how well they align with the strategy. You then update the Architecture Roadmap and the Implementation and Migration Plan."
],
[
"B",
"You estimate the business value for each project by applying the Business Value Assessment Technique. The assessment should focus on return on investment and performance evaluation criteria used to monitor the progress of the architecture transformation. You confirm and plan a series of Transition Architecture phases using an Architecture Definition Increments Table. You then document the lessons learned and generate the final Implementation and Migration Plan."
],
[
"C",
"You conduct a series of Compliance Assessments to ensure that the architecture is being implemented according to the contract. The Compliance Assessment verifies that the implementation team is using the proper development methodology. It should include deploying monitoring tools and ensuring that performance targets are being met. If they are not met, then you would identify changes to performance requirements and update those in the Implementation and Migration Plan."
],
[
"D",
"You update the Architecture Definition Document, which includes setting project objectives and documenting the final requirements. This will ensure that the architecture remains relevant and responsive to the needs of the enterprise. You then produce an Implementation Governance Model to manage the lessons learned prior to finalizing the Implementation and Migration Plan. You recommend that lessons learned be applied as changes to the architecture without review."
]
],
"ans": "A",
"pdfAns": "A",
"votes": "A (67%) · B (33%)",
"imgs": [],
"scenario": true,
"exp": "El siguiente paso en Fase F: evaluar cómo el plan impacta a los otros frameworks (planeación de negocio, portafolio/proyectos, operaciones), coordinar, asignar valor de negocio por proyecto considerando recursos y ajuste estratégico, y actualizar Roadmap y Plan. (Nota: en la pregunta 52, con escenario muy similar, la respuesta oficial fue la de Business Value Assessment; aquí la oficial es la coordinación con otros frameworks.)",
"tip": "Fase F empieza por coordinar con los demás frameworks de gestión."
},
{
"id": 123,
"q": "Refer to the table below.\nWhich ADM Phase does this describe?",
"opts": [
[
"A",
"Phase E"
],
[
"B",
"Phase A"
],
[
"C",
"Phase G"
],
[
"D",
"Phase F"
]
],
"ans": "C",
"pdfAns": "C",
"votes": "C (75%) · D (25%)",
"imgs": [
"img/q123_1.png"
],
"scenario": false,
"exp": "Resultado: completar los proyectos que implementan los cambios para alcanzar el estado objetivo ajustado; conocimiento: propósito y restricciones del equipo de implementación (gaps, Architecture Requirements Specification, control). Eso es la Fase G (Implementation Governance).",
"tip": "'Completar proyectos' + 'restricciones al equipo de implementación' = G."
},
{
"id": 124,
"q": "Complete the sentence. The four purposes that typically frame the planning horizon, depth and breadth of an Architecture Project, and the\ncontents of the EA Repository are Strategy, Portfolio, _____________________",
"opts": [
[
"A",
"Project, and Solution Delivery."
],
[
"B",
"Discreet, and Cohesive."
],
[
"C",
"Subordinate, and Superior Architecture."
],
[
"D",
"Segment, and End-to-end Target Architecture."
]
],
"ans": "A",
"pdfAns": "A",
"votes": "",
"imgs": [],
"scenario": false,
"exp": "Los cuatro propósitos: Strategy, Portfolio, Project y Solution Delivery.",
"tip": "S-P-P-S."
},
{
"id": 125,
"q": "Consider the following ADM phases objectives.\nWhich phase does each objective match?",
"opts": [
[
"A",
"1A-2B-3C-4D"
],
[
"B",
"1B-2D-3A-4C"
],
[
"C",
"1C-2D-3B-4A"
],
[
"D",
"1C-2B-3A-4C"
]
],
"ans": "D",
"pdfAns": "D",
"votes": "",
"imgs": [
"img/q125_1.png"
],
"scenario": false,
"exp": "1) Target Data Architecture → C. 2) Target Business Architecture → B. 3) Visión aspiracional de alto nivel → A. 4) Target Application Architecture → C.",
"tip": "Data y Application ambos son Fase C (Information Systems)."
},
{
"id": 126,
"q": "Please read this scenario prior to answering the question\nYou are an Enterprise Architect working within a large company that operates globally. The company has been very successful and has made\nacquisitions around the world. It has led to a growing number of manufacturing divisions in many locations with a complex supply chain.\nSenior management recently expressed concerns about the company’s effectiveness because of its multiple data centers and duplicate\napplications. The EA team has been working on a project to solve this issue. An analysis shows that supply chain issues have led to not enough\nproducts being produced to meet all the customer demand.\nA strategic architecture has been defined to help meet customer demand and manage the supply chain more effectively. The strategic architecture\ninvolves combining different Enterprise Resource Planning (ERP) applications that are currently used separately in the company’s production\nsites.\nEach division has finished the Architecture Definition documentation to address their own specific manufacturing needs. The enterprise architects\nhave defined a set of work packages that address the gaps found. They have noted the value produced, work needed, and dependencies between\nwork packages to achieve a target architecture for adding a new ERP environment into the company.\nBecause of the risks posed by this change from the current environment, the architects have recommended that a phased approach should be\ntaken to implement the target architecture with several stages of change. The entire implementation process is estimated to take over two years.\nThe company has an established Enterprise Architecture (EA) practice and follows the TOGAF Architecture Development Method. The company\nalso uses various management frameworks such as business planning, project/portfolio management, and operations management. The EA\nprogram is sponsored by the Chief Information Officer (CIO). In your role as an Enterprise Architect within the EA team, you work closely with the\nimportant stakeholders from the various divisions within the company.\nRefer to the scenario -\nYou have been asked about the next steps in planning the migration.\nBased on the TOGAF standard which of the following is the best answer?",
"opts": [
[
"A",
"You evaluate how the Implementation and Migration plan affects the other frameworks currently in use within the organization. At a minimum, you make sure that the plan aligns with the business planning, project/portfolio management, and operations management frameworks. Next, you assign a value to each work package, taking into account the resources available and how they fit into the overall strategy. Using these work packages, you select which projects will be included in the Implementation and Migration Plan."
],
[
"B",
"You put the Architecture Definition Document under configuration control. This will make sure that the architecture stays relevant and flexible to the needs of the enterprise. You would identify the needed resources to undertake the development projects. You would then produce an Implementation Governance Model to manage the lessons learned before finishing the plan. You suggest that the lessons learned be applied as changes to the architecture without a further check."
],
[
"C",
"You conduct a series of Compliance Assessments to check that the architecture is being implemented as required by the contract. The Compliance Assessment needs to confirm that the implementation team is following the correct development process. This involves using monitoring tools and making sure that performance targets are being achieved. If the targets are not met, you would then need to make adjustments to the performance requirements and update them in the Implementation and Migration Plan."
],
[
"D",
"You estimate the business value for each project by applying the Business Value Assessment Technique to prioritize the implementation projects and project steps. The assessment should focus on return on investment and criteria for evaluating performance to track the progress of the architecture transformation. You would confirm and plan a series of Transition Architecture phases using a table of Architecture Definition Increments that lists the projects."
]
],
"ans": "A",
"pdfAns": "A",
"votes": "A (63%) · D (38%)",
"imgs": [],
"scenario": true,
"exp": "Primer paso de Fase F: evaluar cómo el Implementation and Migration Plan afecta a los otros frameworks (planeación de negocio, portafolio/proyectos, operaciones), luego asignar valor de negocio a cada work package considerando recursos y ajuste estratégico, e identificar proyectos para el plan.",
"tip": "Fase F arranca por coordinar con otros frameworks de gestión."
},
{
"id": 127,
"q": "Please read this scenario prior to answering the question\nYour role is that of an Enterprise Architect, reporting to the Chief Enterprise Architect, at a technology company. The company provides staff, as\nwell as cloud-based services for many government agencies.\nThe company uses the TOGAF standard as the method and guiding framework for its Enterprise Architecture (EA) practice. The Chief Technology\nOfficer (CTO) is the sponsor of the activity. The practice uses an iterative approach for its architecture development. This has enabled the decision\nmakers to gain valuable insights into the different aspects of the business.\nThe nature of the business is such that the data and the information stored on the company systems is the company’s major asset and is highly\nconfidential. The company employees work remotely and need constant access to the company systems, which is done by the public\ninfrastructure. They use message encryption, secure internet connections using Virtual Private Networks (VPNs), and other standard security\nmeasures. The company has provided computer security awareness training for all its staff.\nThe Chief Security Officer (CSO) has noted an increase in distributed denial of service (DDoS) attacks on companies with a similar profile. The\nCSO understand that even with thorough preparation, a major attack could stop employees from being able to do their jobs. This could lead to a\nlarge financial loss, damage to the company’s reputation with customers, and employees being unable to work.\nA risk assessment has been completed and the company has looked for cyber insurance that covers such attacks. The price for this insurance is\nvery high. The CTO has decided not to get cyber insurance to cover such attacks.\nPlease read this scenario prior to answering the question\nYou have been asked to describe the steps you would take to strengthen the current architecture to improve data protection.\nBased on the TOGAF standard which of the following is the best answer?",
"opts": [
[
"A",
"You would assess the business continuity requirements and analyze the current Enterprise Architecture for gaps. You would recommend changes to address the situation and create a change request. You would arrange a meeting of the Architecture Board to assess and approve the change request. Once approved you would create a new Request for Architecture Work to begin an ADM cycle to implement the changes."
],
[
"B",
"You would request an Architecture Compliance Review with the scope to examine the company’s ability to respond to such attacks. You would identify the departments involved and have them nominate representatives. You would then tailor checklists to address the requirement for increased resilience. You would circulate to the nominated representatives for them to complete. You would then review the completed checklists, identifying and resolving issues. You would then determine and present your recommendations."
],
[
"C",
"You would ensure that the company has in place up-to-date processes for managing change to the current Enterprise Architecture. Based on the scope of the concerns raised you recommend that this be managed at the infrastructure level. Changes should be made to the baseline description of the Technology Architecture. The changes should be approved by the Architecture Board and implemented by change management techniques."
],
[
"D",
"You would monitor for technology updates from your existing suppliers that could enhance the company’s capabilities to detect, react, and recover from an IT security incident. You would prepare and run a disaster recovery planning exercise for an attack and analyze the performance of the current Enterprise Architecture. Using the findings, you would prepare a gap analysis of the current Enterprise Architecture. You would prepare change requests to address identified gaps. You would add the changes implemented to the Architecture Repository."
]
],
"ans": "A",
"pdfAns": "A",
"votes": "D (100%)",
"imgs": [],
"scenario": true,
"exp": "Igual que en la pregunta 51: determinar requisitos de continuidad del negocio, gap analysis de la arquitectura actual, crear un change request, que el Architecture Board lo evalúe y apruebe, y emitir un nuevo Request for Architecture Work para un ciclo ADM (Fase H → nuevo ciclo).",
"tip": "Fortalecer la arquitectura = continuidad + gaps + change request + Board + nuevo Request for Architecture Work."
},
{
"id": 128,
"q": "Please read this scenario prior to answering the question\nYou are working as an Enterprise Architect for a company that is an international supplier of manufacturing systems. You are part of an Enterprise\nArchitecture (EA) team that has responsibilities across the company.\nThe company has four manufacturing plants where it assembles both standard and customized products for industrial production automation.\nEach of these plants has been operating its own planning and production scheduling systems, as well as applications and control systems that\ndrive the automated production line.\nDuring a recent management meeting, a senior Vice-President mentioned an interview where a competitor company’s CIO explained how they had\nimproved their production efficiency. Multiple planning and scheduling systems had been replaced by a common system in a central data center.\nSome discussion followed, and the CIO explained that the situations are not comparable as the company’s current systems architecture is already\noptimized. As the competitor has reported better financial results, the CEO has asked to investigate the common central data solution.\nIn response, the Architecture Board approved a Request for Architecture Work to find out if such an architecture transformation would lead to\nefficiency improvements. You have been asked to help the architecture team with this project.\nA concern of the plant managers is the safety and dependability of using a remote centralized system for planning and scheduling production. The\nsystem they choose must also be able to work with the local partners in the supply chain at each plant.\nThe company has an Enterprise Architecture (EA) practice and uses the TOGAF Standard as the basis for its work. It has been running for many\nyears and has established governance and development processes for EA. The Chief Information Officer (CIO) sponsors the Enterprise\nArchitecture program.\nRefer to the scenario -\nYou have been asked to describe how you will start the architecture project.\nBased on the TOGAF Standard, which of the following is the best answer?",
"opts": [
[
"A",
"You would gather information from your suppliers and conduct a series of briefings with those of them that are on the current approved supplier list. Based on the findings from the research, you would define a preliminary Architecture Vision including summary views, high-level requirements, and high-level definitions of the baseline and target environments from a business, information systems, and technology perspective. You would then use the Architecture Vision to build agreement among the key stakeholders."
],
[
"B",
"You would develop baseline and target Architectures for each manufacturing plant, ensuring that the views corresponding to selected viewpoints address key concerns of the stakeholders. A business case, together with performance metrics and measures should be defined to ensure the architecture meets the business needs. A consolidated gap analysis between the architectures will then validate the approach and determine the capability increments needed to achieve the target state."
],
[
"C",
"You would start a test project that will allow your suppliers to demonstrate potential off-the-shelf solutions that address the concerns of the stakeholders. Trying out a test project will save time and money later on. After looking at the results of that test project, a complete set of requirements can then be made that will guide the evolution of the architecture. Once the requirements are completed, there should be a formal stakeholder review, and permission asked to move forward to develop the target architecture."
],
[
"D",
"You would conduct a series of interviews at each manufacturing plant using the business scenarios technique. This will help you understand the systems and integrations with local partners. Stakeholder analysis will be used to identify key people involved and their concerns. Next, you will then determine and record the main stakeholder requirements for the architecture. Finally, you will then create clear high-level descriptions of the current and future architectures."
]
],
"ans": "D",
"pdfAns": "D",
"votes": "D (100%)",
"imgs": [],
"scenario": true,
"exp": "Iniciar el proyecto (Fase A): entrevistas con business scenarios en cada planta, análisis de stakeholders, documentar requisitos clave y descripciones de alto nivel de baseline y target. Mismo patrón que la pregunta 43.",
"tip": "Iniciar = Business Scenarios + stakeholders + requisitos + visión de alto nivel."
},
{
"id": 129,
"q": "Please read this scenario prior to answering the question\nYou are working as an Enterprise Architect at a large supermarket. The company runs many retail stores, as well as an online grocery shop. Many\nof the stores used to remain open 24/7, but the number has decreased in recent years. Instead, they now focus on fulfilling online orders during\nthe night.\nThe company has a mature Enterprise Architecture (EA) practice and uses the TOGAF standard for its architecture development method. The EA\npractice is involved in all aspects of the business, with oversight provided by an Architecture Board with representatives from different parts of\nthe business. The EA program is sponsored by the Chief Information Officer (CIO).\nEach store uses a standard method to track sales and inventory. This involves sending accurate timely sales data to a central AI-based inventory\nmanagement system that can predict demand, adjust stock levels and automate reordering. The central inventory management system is housed\nat the company’s central data center.\nThe company has bought a major rival. The Chief Executive Officer believes that a merger will enable growth through combined offerings and cost\nsavings. The decision has been taken to fully integrate the two organizations, including merging retail operations and systems. This means that\nduplicated systems will be replaced with one standard retail management system. Also, the company will reduce the number of applications that\nare used. The CIO expects significant savings will be achieved by implementing these changes across the newly merged company.\nOne improvement that the rival has successfully implemented is the use of hand-held devices within stores, for both customers and staff. This\nhas increased both customer and staff employee satisfaction due to the time savings this has brought. The CIO has given the go-ahead to roll out\nthe devices in all stores but has stated that training on how to use the hand-held devices should be brief because there are a lot of employees,\nmany of whom are part-time.\nThe Request for Architecture Work to oversee the merger has been approved. The project has been scoped and you have been assigned to work\non it. Your role includes managing the architecture for the retail stores.\nRefer to the scenario -\nYou have been asked to confirm the most relevant architecture principles for the transformation.\nBased on the TOGAF Standard, which of the following is the best answer?\n[Note: The sequence of the principles listed in each answer does not matter. You should assume the company follows the set of principles that\nare provided in the TOGAF Standard, ADM Techniques. Architecture Principles chapter. You may need to refer to section 2.6 located in ADM\nTechniques within the reference text to answer this question.]",
"opts": [
[
"A",
"Common Use Applications, Data is an Asset, Data is Accessible, Ease of Use, Business Continuity"
],
[
"B",
"Common Vocabulary and Data Definitions, Compliance with the Law, Requirements Based Change, Responsive Change Management, Data Security"
],
[
"C",
"Maximize Benefit to the Enterprise, Common Use Applications, Data is an Asset, Responsive Change Management, Technology Independence"
],
[
"D",
"Control Technical Diversity, Interoperability, Data is an Asset, Data is Shared, Business Continuity"
]
],
"ans": "A",
"pdfAns": "A",
"votes": "A (100%)",
"imgs": [],
"scenario": true,
"exp": "Mismo patrón que la pregunta 121: Common Use Applications (eliminar duplicados), Data is an Asset, Data is Accessible (datos de ventas a un sistema central), Ease of Use (capacitación breve) y Business Continuity (operación nocturna/continua).",
"tip": "Pistas del escenario → principios: duplicados, datos centrales, capacitación breve, operación continua."
},
{
"id": 130,
"q": "Please read this scenario prior to answering the question\nYou are part of the Enterprise Architecture (EA) team at a company, working as an Enterprise Architect. The company creates and sells goods\nwhich are sold to retail organizations worldwide.\nThe company is starting a digital transformation project where it will expand its offerings from physical products to also include digital products\nand digital services. This includes enabling each of its product lines to offer digital products or services associated with their existing physical\nproducts.\nThe company uses Agile product management techniques and Agile development practices. The EA team works with the product management\nteams, supporting and enabling the Agile development teams.\nYou have been asked to work on a specific product line, which is experimenting with new direct-to-consumer digital products using a third-party\nplatform. The product development for this experiment took a Minimum Viable Architecture approach, including a shallow architecture\ndevelopment iteration with a focus on the Application Architecture, followed by a quick and minimal implementation.\nThe feedback from the end-user customers is they do not find much value in these direct-to-consumer digital products. Analysis of the data on\nhow the products are being used, and who is using them, shows that the products are not reaching the target audience that they were designed\nfor, leading to a failure to meet the revenue goals. The product manager is seeking advice on how to tackle these problems, while making sure that\nthe products still comply within the guardrails set by the EA team.\nRefer to the scenario -\nThe EA team leader wants to know how to gather information in order to respond to the product manager.\nBased on the TOGAF standard which of the following is the best answer?",
"opts": [
[
"A",
"You would focus on the baseline Business Architecture and develop new architecture models to address the concerns raised by the product manager. You recommend the use of modeling techniques to identify customer segments, determine what is necessary to meet the customer’s needs, and how to attract the target audience. In addition, including value streams and information maps would help. You would investigate different alternatives that would enhance the value proposition for the target audience."
],
[
"B",
"You would revise the target architecture for ADM Phase B and create new architecture models to address the issues raised. The models should identify different groups of customers, what they find valuable, how much it costs to serve them, and the resulting revenue. You would examine the customer value by use of value stream mapping to breakdown the activities for the direct-to-consumer products. You would investigate different target Business Architecture alternatives."
],
[
"C",
"You would focus on the target Application Architecture, revising it to better align with the overall Digital Transformation plan. You would write a new Statement of Architecture Work and submit for review by the EA team leader. The Statement of Architecture Work should include a detailed project description and a work plan. Once approved by the EA team leader, you would conduct a full ADM cycle based on the Statement of Architecture Work to gather all the necessary information to address the issues raised by the product manager."
],
[
"D",
"You would perform another iteration of ADM Phases B-C. This would include development of a description in the Architecture Definition Document of how the product architecture needs to operate to achieve the business goals, and how the application will support the needs of the business as well as the customers. The Data Architecture should identify tools for data capture that would help with analysis of the concerns raised by the product manager."
]
],
"ans": "A",
"pdfAns": "A",
"votes": "A (67%) · B (33%)",
"imgs": [],
"scenario": true,
"exp": "El problema es de valor y audiencia (negocio). Aquí la respuesta oficial se enfoca en la Business Architecture BASELINE con modelos para segmentos de clientes, necesidades y cómo atraer a la audiencia, value streams y mapas de información, e investigar alternativas que mejoren la propuesta de valor.",
"tip": "Problema de valor para el cliente → Business Architecture (segmentos, propuesta de valor, value streams)."
},
{
"id": 131,
"q": "Please read this scenario prior to answering the question\nYou are working as an Enterprise Architect within an Enterprise Architecture (EA) project team at a multinational energy company. The company is\ncommitted to becoming a net-zero emissions energy business by 2050. To achieve this, the company is focusing on a shift to production of\nrenewable energy and adopting eco-friendly practices.\nThe company has an established EA practice and follows the TOGAF Standard for its Enterprise Architecture framework. The EA team oversees all\nthe major projects in the company. The EA team reports to the Chief Technical Officer (CTO), who is the sponsor of the EA program. The\nArchitecture Board is made up of senior leaders from all parts of the company.\nThe company is starting to invest in developing various kinds of renewable energy projects, including solar, and wind. A large part of the growth in\nits renewable energy portfolio has come from buying other companies. The company is keen on acquiring small startups and mid-size companies\nto leverage their technical innovations. This way, the company aims to outperform its competitors, scale rapidly, and establish a presence in new\nmarkets.\nThe existing business and the newly acquired companies are not working well together, which increasingly causes problems. In response, a\nstrategic plan was created and approved. The plan aims to make the merged companies work more effectively together. This will save money by\nsharing their common assets, including fixed capital assets, research and development facilities, and resources.\nThe EA team have been asked to oversee the transformation to carry out the strategic plan. The goal is to strengthen the company’s position in\nthe market and reduce costs by taking advantage of economies of scale. The Chief Executive Officer (CEO) has stated that to stay competitive and\nrelevant, the company must transform or entirely reinvent its business model.\nA Request for Architecture Work for the project has created and has been approved.\nRefer to the Scenario -\nAs the EA team begins its work on the transformation, the EA team leader wants to know what needs to be done to make sure that the company\nsucceeds with the proposed changes and how to manage any risks.\nBased on the TOGAF Standard, which of the following is the best answer?",
"opts": [
[
"A",
"The EA team should develop a set of Business Architecture views to demonstrate how stakeholder concerns are being addressed. These views can also be used to identify the factors that will impact the transformation. For each factor identified, there should be an assessment on a scale that allows the team to understand the urgency, readiness, and degree of difficulty to fix. This information can then be used to determine the potential risks associated with the transformation."
],
[
"B",
"The EA team should evaluate how prepared the company is for change. This should involve identifying the factors that will impact the transformation, and determining the readiness level for each factor based on a scale that will help the team to understand the urgency, readiness, and degree of difficulty to fix. These factors can then be used to evaluate the initial risks associated with the initiative, and areas of risk that need attention."
],
[
"C",
"The EA team should write down the risks associated with the transformation in an Implementation Factor Catalog. This will be used as a record of important decisions during implementation and deployment for the transformation effort. The catalog should list all the factors to consider, their descriptions, and any limitations to consider. These factors can then be used to help evaluate the risks, which can be documented in the Implementation and Migration Plan."
],
[
"D",
"The EA team should create a Business Scenario to fully describe the business problem that is being addressed by the transformation, identifying the stakeholders’ concerns and the resulting requirements. Once the requirements have been identified, they can be evaluated in terms of their risks. The risks should be assessed in terms of how they could be avoided, transferred, or reduced. Any risks that cannot be resolved should be identified as residual risks and their outcome should be decided by the Architecture Board."
]
],
"ans": "B",
"pdfAns": "B",
"votes": "",
"imgs": [],
"scenario": true,
"exp": "Para asegurar el éxito y gestionar riesgos: evaluar la preparación para el cambio (Business Transformation Readiness Assessment), identificar los factores que impactan la transformación, evaluar para cada factor urgencia, preparación y dificultad, y derivar los riesgos iniciales y áreas que requieren atención.",
"tip": "Readiness Assessment: factores → urgencia/preparación/dificultad → riesgos."
},
{
"id": 132,
"q": "Please read this scenario prior to answering the question\nYou are an Enterprise Architect working at a vehicle manufacturing company. The company specializes in buses and coaches. You are part of an\nEnterprise Architecture (EA) team that has responsibilities across multiple divisions of the company.\nThe company has a corporate strategy that focuses on switching to electric power for its vehicles. It has invested heavily in a new standardized\ndesign, production efforts, and major components to use across all its product range. The company has multiple manufacturing plants in North\nAmerica, Europe, and in Asia.\nCustomer demand has caused a backlog of orders because many customers want to have more environmentally friendly public transportation.\nThere are not enough electronic components available, which is making it hard to produce products and meet customer demand. To address this\nissue, the company has staged making the battery packs themselves and has hired new suppliers.\nThe company has a well-established EA practice. It uses the TOGAF Standard as the foundation for its work including the internal EA framework.\nAdditionally, the company uses various management frameworks such as business planning, project management, and operations management.\nThe Chief Information Officer (CIO) and the Chief Operating Officer (COO) jointly sponsor the Enterprise Architecture program.\nThe EA team is working on a project to improve the process and systems to design, produce, and test the battery pack. As part of putting the new\nbattery pack into production, changes to the assembly processes need to be made. Atrial has been completed at a single location. The Chief\nEngineer, sponsor of the activity, and the Architecture Board have approved the plan to roll out these changes to all plants.\nPreliminary Architecture Contracts have been developed that detail the work needed to put in place the new processes for each location. The\ncompany mixes internal teams with a few third-party contractors at the locations. The Chief Engineer is worried that the deployment will not be\nconsistent and of satisfactory quality.\nRefer to the scenario -\nThe EA team leader has asked you to review the preliminary Architecture Contracts and recommend the best approach to address the Chief\nEngineer’s concern.\nBased on the TOGAF Standard, which of the following is the best answer?",
"opts": [
[
"A",
"You check the contracts ensuring that they address project objectives, effectiveness metrics, acceptance criteria, and risk management. Third-party contracts must be legally enforceable. You advise that there be a schedule of compliance reviews at key points in the implementation process. You recommend that the Architecture Board reviews all deviations from the Architecture Contract and considers whether to grant a dispensation to allow the process to be customized for local needs."
],
[
"B",
"For changes undertaken by internal teams, you recommend a memorandum of understanding between the Architecture Board and the implementation organization. If a contract is issued to a contractor, you recommend that it is a fully enforceable legal contract. If a deviation from the Architecture Contract is found, you recommend that the Architecture Board grant a dispensation to allow the implementation organization to customize the process to meet their local needs."
],
[
"C",
"For changes requested by an internal team, you recommend a memorandum of understanding between the Architecture Board and the implementation organization. For contracts issued to third-party contractors, you recommend that it is a fully enforceable legal contract. You recommend that the Architecture Board reviews all deviations from the Architecture Contract and considers whether to grant a dispensation to allow the implementation organization to customize the process to meet their local needs."
],
[
"D",
"You recommend that the Architecture Contracts be used to manage the architecture governance processes across the locations. You recommend deployment of monitoring tools to assess the performance of each completed battery pack at each location and develop change requirements if necessary. If a deviation from the contract is detected, the Architecture Board should allow the Architecture Contract to be modified meet the local needs. In such cases they should issue a new Request for Architecture Work to implement a modification to the Architecture Definition."
]
],
"ans": "A",
"pdfAns": "A",
"votes": "A (100%)",
"imgs": [],
"scenario": true,
"exp": "Mismo patrón que la pregunta 44: revisar que los contratos incluyan objetivos, métricas, criterios de aceptación y gestión de riesgos; contratos con terceros legalmente exigibles; revisiones de cumplimiento en puntos clave; el Board revisa desviaciones y considera dispensas.",
"tip": "Contratos completos + compliance reviews + Board revisa dispensas."
},
{
"id": 133,
"q": "Which of the following best describes the class of information known as the Reference Library within the Architecture Repository?",
"opts": [
[
"A",
"Guidelines and templates used to create new architectures"
],
[
"B",
"Specifications to which architectures must conform"
],
[
"C",
"A record of the governance activity across the enterprise"
],
[
"D",
"Processes to support governance of the Architecture Repository"
]
],
"ans": "A",
"pdfAns": "A",
"votes": "A (100%)",
"imgs": [],
"scenario": false,
"exp": "El Reference Library contiene guías, plantillas y patrones para crear nuevas arquitecturas.",
"tip": "Reference = referencias reutilizables."
},
{
"id": 134,
"q": "Consider the image showing basic architectural concepts.\nWhat are items A and B?",
"opts": [
[
"A",
"A-User, B-Requirement"
],
[
"B",
"A-Stakeholder, B-Concern"
],
[
"C",
"A-Candidate Architecture, B-Trade-off"
],
[
"D",
"A-Base Architecture, B-Target Architecture"
]
],
"ans": "B",
"pdfAns": "B",
"votes": "",
"imgs": [
"img/q134_1.png"
],
"scenario": false,
"exp": "En el modelo 42010: el System-of-Interest tiene interesados → A = Stakeholder; el stakeholder tiene → B = Concern; los concerns son enmarcados por el Viewpoint y atendidos por la View.",
"tip": "Stakeholder HAS Concerns; Viewpoint FRAMES concerns; View ADDRESSES concerns."
},
{
"id": 135,
"q": "Please read this scenario prior to answering the question\nYou are working as an Enterprise Architect at a large company. The company runs a chain of home improvement stores, as well as a website for\nselling products. The website lets many brands work with the company.\nThe stores open seven days a week and use a standard method to track sales and inventory. This involves sending accurate and timely sales data\nto a central inventory management system that can predict demand, adjust stock levels and automate reordering. The website is supported by\nregional fulfilment centers, and also uses the central inventory management system. The central inventory management system is housed at the\ncompany’s central data center.\nThe company has agreed to merge with a major competitor. The leadership teams of both organizations have said they are committed to a\nsmooth transition for customers. All stores will keep their own brand names. They will combine the systems of the organizations, which includes\nmerging retail operations and systems. Duplicated systems will be replaced with one standard retail management system. Additionally, they will\nreduce the number of applications being used. The CIO expects that these changes will lead to substantial cost savings for the newly merged\ncompany.\nAn enterprise plan for both organizations has been created. The aim is to set priorities for the transition, especially in terms of information\nmanagement and application development. It is crucial to make decisions that will create long-term value.\nThe company has a mature Enterprise Architecture (EA) practice and uses the TOGAF standard for its architecture development method. The EA\nprogram is sponsored by the Chief Information Officer (CIO).\nThe Request for Architecture Work to oversee the transition has been approved. The project has been scoped and you have been assigned to work\non it.\nRefer to the scenario -\nYou have been asked to confirm the most relevant architecture principles for the transition.\nBased on the TOGAF Standard, which of the following is the best answer?\n[Note: The sequence of the principles listed in each answer does not matter. You should assume the company follows the set of principles that\nare provided in the TOGAF Standard, ADM Techniques, Architecture Principles chapter. You may need to refer to section 2.6 located in ADM\nTechniques within the reference text to answer this question.]",
"opts": [
[
"A",
"Control Technical Diversity, Interoperability, Data is an Asset, Data is Shared, Business Continuity"
],
[
"B",
"Service Orientation, Compliance with the Law, Requirements Based Change, Responsive Change Management, Data Security"
],
[
"C",
"Common Use Applications, Data is an Asset, Common Vocabulary and Data Definitions, Maximize Benefit to the Enterprise, Business Continuity"
],
[
"D",
"Ease of Use, Common Use Applications, Data is an Asset, Technology Independence, Business Continuity"
]
],
"ans": "C",
"pdfAns": "C",
"votes": "",
"imgs": [],
"scenario": true,
"exp": "El escenario enfatiza fusión, eliminar duplicados (Common Use Applications), gestión de información (Data is an Asset, Common Vocabulary and Data Definitions), decisiones de valor a largo plazo para toda la empresa (Maximize Benefit to the Enterprise) y operación 7 días (Business Continuity).",
"tip": "Fusión + información + valor a largo plazo → Common Vocabulary + Maximize Benefit."
},
{
"id": 136,
"q": "What information does the Architecture Requirements Repository within the Architecture Repository hold?",
"opts": [
[
"A",
"A log of the governance activity related to architecture requirements"
],
[
"B",
"The parameters and structures to support governance of architecture requirements"
],
[
"C",
"The architecture requirements which have been agreed with the Architecture Board"
],
[
"D",
"A set of guidelines, templates, and patterns to support the development of architecture requirements"
]
],
"ans": "C",
"pdfAns": "C",
"votes": "",
"imgs": [],
"scenario": false,
"exp": "El Architecture Requirements Repository contiene los requisitos de arquitectura que han sido acordados con el Architecture Board.",
"tip": "Requirements Repository = requisitos ACORDADOS."
},
{
"id": 137,
"q": "Please read this scenario prior to answering the question\nYou are working as an Enterprise Architect within an Enterprise Architecture (EA) team at a large government agency. The agency has multiple\ndivisions.\nThe agency has a well-established EA practice and follows the TOGAF standard as its method for architecture development. Along with the EA\nprogram, the agency also uses various management frameworks, including business planning, project/portfolio management, and operations\nmanagement. The EA program is sponsored by the Chief Information Officer (CIO), who has actively promoted architecting with agility within the\nEA department as her preferred approach for projects.\nThe government has mandated that the agency prepare themselves for an Artificial Intelligence (AI) first world, which they have called their “AI-\nfirst” plan. As a result, the agency is looking to determine the Impact and role that AI will play moving forward. The CIO has approved a Request\nfor Architecture Work to look at how AI can be used for services across the agency. She has noted that digital platforms will be a priority for\ninvestment in order to scale the AI applications planned. Using AI to automate tasks and make things run smoother is seen as a big advantage.\nProcess automation, and improved efficiency from manual, repetitive activities has been identified as the key benefits of applying generative AI to\ntheir agency's business. This will include back-office automation, for example, for help center agents who receive hundreds of email enquiries.\nThis should also improve services for citizens by making them more efficient and personalized, tailored to each individual's needs.\nMany of the agency leaders are worried about relying too much on AI. Some leaders think their employees will need to learn new skills. Some\nemployees are worried they might lose their jobs to AI. Other leaders worry about security and cyber resilience in the digital platforms needed for\nAI to be successful.\nRefer to the scenario -\nThe leader of the Enterprise Architecture team has asked for your suggestions on how to address the concerns, and how to manage the risks of a\nnew architecture for the AI -first project.\nBased on the TOGAF standard which of the following is the best answer?",
"opts": [
[
"A",
"You recommend that the key stakeholders be formally identified. This should include those who will be most helpful for the change to be successful. A Communication Plan should be made to address their needs. This plan should include a report that summarizes the key features of the architecture based on stakeholder requirements and addressing concerns. You communicate with each key stakeholder to make sure their concerns are being addressed. You make sure that the architecture being developed clearly addresses risk management."
],
[
"B",
"You recommend creating an Organization Map to display the links between different parts of the agency. This will help the EA team to find and involve all areas of the agency impacted by this strategic change. Multiple business models should then be created that can be applied to AI related projects. A meeting will be held with the stakeholders to teach them how to Interpret the models and see how their concerns are being addressed. Risk will be managed as part of the Security Architecture development."
],
[
"C",
"You recommend conducting an analysis that separates the different types of stakeholders into groups. They can be put into five categories: corporate functions, end-user organization, project organization, systems, and external. Models should be developed for each stakeholder category to ensure that that all the necessary information and details are taken into account. A meeting should be arranged with the stakeholders to verify that their concerns have been adequately addressed. Risk management will be considered during Phase G Implementation Governance."
],
[
"D",
"You recommend conducting an analysis of the stakeholders. This involves documenting the positions, concerns, issues, and cultural factors of each group. This information will shape how the architecture is to be presented and communicated. The concerns and relevant views can then be defined for each group and recorded in the Architecture Vision document. The requirements for addressing risk should be recorded in the Architecture Requirements Specification and checked through regular assessments and feedback."
]
],
"ans": "D",
"pdfAns": "D",
"votes": "",
"imgs": [],
"scenario": true,
"exp": "Análisis de stakeholders: posiciones, concerns, problemas y factores culturales de cada grupo, que moldean cómo presentar la arquitectura; concerns y vistas en la Architecture Vision; los requisitos de riesgo en la Architecture Requirements Specification, verificados con evaluaciones y retroalimentación.",
"tip": "Stakeholders + cultura → vistas en Visión; riesgo → Requirements Specification."
},
{
"id": 138,
"q": "Complete the sentence. A set of architecture principles that cover every situation perceived meets the recommended criteria of ____________.",
"opts": [
[
"A",
"consistency"
],
[
"B",
"stability"
],
[
"C",
"completeness"
],
[
"D",
"robustness"
]
],
"ans": "C",
"pdfAns": "C",
"votes": "",
"imgs": [],
"scenario": false,
"exp": "Los criterios de buenos principios son: Understandability, Robustness, Completeness, Consistency y Stability. Cubrir todas las situaciones percibidas = Completeness.",
"tip": "Cubrir TODO = COMPLETO. Criterios: Entendible, Robusto, Completo, Consistente, Estable."
},
{
"id": 139,
"q": "Please read this scenario prior to answering the question\nYou are working as an Enterprise Architect within an Enterprise Architecture (EA) team at a global company that sells consumer products. The\ncompany produces many products that buyers use and enjoy.\nThe company has announced a major change to its products that will occur over a four-year period. This change includes the introduction of\ndigital products and services. An architecture to support strategy has been finished, along with a roadmap for a set of projects to implement this\nsignificant change. This will be a cross-functional effort between the product design and software teams. It is planned to be developed in phases.\nThe company faces a challenge in presenting and providing access to different services through its products and digital platforms, while ensuring\ncompliance with data privacy laws. In some countries and regions, the data residency requirements mean that the company has to store certain\ndata within the region where it is collected. As a result, the company's application portfolio and infrastructure must connect with various cloud\nservices and data repositories in different countries.\nThe EA team has inherited the architecture used by the current products, some of which can be carried over to the new products. The EA team has\nstarted to define which parts of the architecture to carry forward. Enough of the Business Architecture has been defined, so that work can\ncommence on the Information Systems and Technology Architectures. Those architectures need to be defined to support the key digital services\nthat the company plans to provide.\nThe company uses the TOGAF Standard as the foundation for its Enterprise Architecture framework, and architecture development follows the\npurpose-based EA Capability model outlined in the TOGAF Series Guide: A Practitioners' Approach to Developing Enterprise Architecture Following\nthe TOGAF ADM. The EA team reports to the Chief Information Officer (CIO), who oversees the program.\nRefer to the scenario -\nYou have been asked how to decide and organize the work to deliver the requested architectures?\nBased on the TOGAF standard which of the following is the best answer?",
"opts": [
[
"A",
"You research leading data companies, using your findings to help in developing high-level Target Data, Application and Technology Architectures. You review the Architecture Vision to determine the level of detail, time, and scope of the ADM cycle phases required for architecture development for the project. You identify and estimate the cost of the main work packages. You then create an Architecture Roadmap and request the Architecture Board to approve the roadmap. You then start the project."
],
[
"B",
"You commence an iteration of ADM Phase A, identifying the stakeholders and revising the Architecture Vision. You perform a Stakeholder Analysis and update the Stakeholder map created for the strategic architecture so it reflects the stakeholders who are now the most important to the projects that are to be developed. You then request the CIO to make some choices about the Architecture Roadmap and update the implementation and Migration Plan to reflect the choices."
],
[
"C",
"You refer to the superior architecture for guidance. You review the projects identified, their dependencies, and synergies, then decide the sequence for starting the projects. You develop high-level architecture descriptions. For each project you determine how much work is needed, identify reference architectures, and candidate building blocks. You identify the resource needs taking into account cost and value. You document the different options, risks, and ways to control them to enable feasibility analysis and trade-off with the stakeholders."
],
[
"D",
"You look outside the company to study how other companies organize their data models and application portfolios. You create just enough architecture description for the Application, Data, and Technology Architectures to identify the different options. For each project this includes identification of candidate architecture and solution building blocks. You then identify solution providers, perform a readiness assessment, and assess the viability and fitness of the solution options. You then write the draft Implementation and Migration plan."
]
],
"ans": "C",
"pdfAns": "B",
"votes": "C (100%)",
"imgs": [],
"scenario": true,
"exp": "Mismo patrón que las preguntas 50 y 117 (Architecture to Support Portfolio): usar la arquitectura superior como guía, revisar proyectos, dependencias y sinergias, secuenciar, estimar trabajo, referencias y building blocks, recursos, y documentar opciones, riesgos y controles. Nota: el PDF marca B, pero la comunidad (100%) y la consistencia con las preguntas 50 y 117 indican C; aquí se califica C.",
"tip": "Support Portfolio = guiado por la arquitectura superior + priorizar proyectos + viabilidad."
},
{
"id": 140,
"q": "Please read this scenario prior to answering the question\nYou are an Enterprise Architect at a food production and distribution company. The primary goal of the company is to maximize profit while\nsatisfying the needs of consumers for its products. Its customers are demanding food that is produced sustainably, safely, and transparently,\nwhile reducing environmental impact.\nThe business is highly mechanized, and this mechanization has caused a decrease in the number of workers needed, together with a focus on\nagricultural engineering to improve the efficiency of its farms, its processing facilities, and the overall enterprise. As part of this, the company has\nestablished an Enterprise Architecture (EA) practice based on the TOGAF standard, using it as the method and guiding framework. The Chief\nInformation Officer (CIO) is the sponsor of EA practice. The introduction of EA has enabled the decision makers to have valuable insights into the\ndifferent aspects of the business.\nGlobal warming has caused a lot of poor harvests, and the company is producing fewer crops than before. This combined with an increase in\ncosts for energy, feed, fuel, and fertilizer, had led to a significant decrease in profits. The rising costs and reduced profits mean that the company\nis unable to take as much planned action on climate measures as it would like, such as reducing its carbon footprint. In response to the situation,\nthe Chief Executive Officer (CEO) has decided that big changes are needed, that will lead both to improved crop production and profitability. They\nmust look to all aspects of the business. This includes looking at the mix of crops to mitigate for the change in climate.\nThe company will also cease to process its own crops and will sell off its processing facilities. Thus, the target market will change, and the end-\nproducts will be different and more varied. A formal request for architecture change has been approved. At this stage there is no fixed scope,\nshared vision, or objectives.\nRefer to the scenario -\nYou have been asked to propose the best approach for architecture development to realize the CEO's change in direction for the company.\nBased on the TOGAF standard which of the following is the best answer?",
"opts": [
[
"A",
"You propose that the team focus on architecture definition including development of business models, with emphasis on defining the change parameters to support this new business strategy that the CEO has identified. Once understood, the team will be in the best position to identify the requirements, drivers, issues, and constraints for the change."
],
[
"B",
"You propose that this engagement define the baseline Technology Architecture first in order to assess the current infrastructure capacity and capability for the company. Then the focus should be on transition planning and incremental architecture deployment. This will identify requirements to ensure that the projects are sequenced in an optimal fashion so as to realize the change."
],
[
"C",
"You propose that the priority is to produce a new Request for Architecture Work leading to development of a new Architecture Vision. The trade-off method should be applied to identify and select an architecture satisfying the stakeholders. For an efficient change the EA team should be aligned with the organization's planning, budgeting, operational, and change processes."
],
[
"D",
"You propose that the team uses the architecture definition document and focus on architecture development starting simultaneously phases B, C and This is because the CEO has identified the need to change. This will ensure that the change can be defined in a structured manner and address the requirements needed to realize the change."
]
],
"ans": "C",
"pdfAns": "C",
"votes": "C (50%) · A (50%)",
"imgs": [],
"scenario": true,
"exp": "Igual que la pregunta 107: sin alcance, visión ni objetivos → producir un nuevo Request for Architecture Work que lleve a una nueva Architecture Vision, usar trade-offs para seleccionar arquitectura, y alinearse con los procesos de planeación, presupuesto, operación y cambio.",
"tip": "Sin visión ni alcance → Request for Architecture Work → Architecture Vision."
},
{
"id": 141,
"q": "Complete the sentence. The \"Rationale\" part of the recommended TOGAF template for Architecture Principles should ______________________.",
"opts": [
[
"A",
"explain the requirements for carrying out the principle"
],
[
"B",
"communicate the fundamental rule"
],
[
"C",
"describe the relationship to other principles"
],
[
"D",
"state the impact to the business of adopting the principle"
]
],
"ans": "C",
"pdfAns": "D",
"votes": "C (100%)",
"imgs": [],
"scenario": false,
"exp": "El Rationale destaca los beneficios de negocio y describe la relación con otros principios. 'Declarar el impacto al negocio de adoptar el principio' pertenece a Implications. Nota: el PDF marca D, pero la comunidad (100%) y el texto de TOGAF indican C; aquí se califica C (consistente con la pregunta 66).",
"tip": "Rationale = por qué + relación con otros principios. Implications = impacto y requisitos."
},
{
"id": 142,
"q": "When considering Architecture Governance, what is the benefit that derives from discipline?",
"opts": [
[
"A",
"Groups within the organization are accountable for their actions."
],
[
"B",
"All decision-making will be established so as to minimize conflicts of interest."
],
[
"C",
"Actions implemented and their decision support will be available for inspection."
],
[
"D",
"All parties will have a commitment to adhere to procedures and process."
]
],
"ans": "D",
"pdfAns": "D",
"votes": "",
"imgs": [],
"scenario": false,
"exp": "Disciplina: todas las partes se comprometen a adherirse a procedimientos, procesos y estructuras de autoridad. (Rendición de cuentas = A; Independencia = B; Transparencia = C).",
"tip": "Disciplina = compromiso con los procesos."
},
{
"id": 143,
"q": "What is the role of an Architecture Board?",
"opts": [
[
"A",
"It determines the scope of an architecture compliance review."
],
[
"B",
"It oversees implementation of the Architecture Governance strategy for the enterprise."
],
[
"C",
"It conducts the assessments of the maturity level of architecture discipline within the organization."
],
[
"D",
"It creates the Statement of Architecture Work for an Enterprise Architecture project."
]
],
"ans": "B",
"pdfAns": "B",
"votes": "",
"imgs": [],
"scenario": false,
"exp": "El Architecture Board supervisa la implementación de la estrategia de Architecture Governance para la empresa.",
"tip": "Board = supervisa el gobierno."
},
{
"id": 144,
"q": "Which of the following is a purpose of Phase A of the TOGAF ADM?",
"opts": [
[
"A",
"Identifying key stakeholders"
],
[
"B",
"Describing the target architecture"
],
[
"C",
"Defining the Enterprise strategy"
],
[
"D",
"Developing an Enterprise Architecture Capability"
]
],
"ans": "A",
"pdfAns": "A",
"votes": "",
"imgs": [],
"scenario": false,
"exp": "Un propósito de la Fase A es identificar a los stakeholders clave (y sus concerns y requisitos).",
"tip": "A = stakeholders + visión."
},
{
"id": 145,
"q": "What concept enables the simultaneous operation of multiple ADM phases?",
"opts": [
[
"A",
"Digital Transformation"
],
[
"B",
"Iteration"
],
[
"C",
"Change Management"
],
[
"D",
"Transition Planning"
]
],
"ans": "B",
"pdfAns": "B",
"votes": "",
"imgs": [],
"scenario": false,
"exp": "La iteración permite operar varias fases del ADM simultáneamente.",
"tip": "Fases en paralelo = iteración."
},
{
"id": 146,
"q": "Which of the following is a purpose of creating a set of Architecture Principles?",
"opts": [
[
"A",
"To establish a common understanding of how to control the business in pursuit of strategic goals."
],
[
"B",
"To guide decision-making during trade-off discussions."
],
[
"C",
"To agree a contract between sponsoring organization and the architects."
],
[
"D",
"To document likely impacts resulting from successful deployment of the target architecture."
]
],
"ans": "B",
"pdfAns": "B",
"votes": "",
"imgs": [],
"scenario": false,
"exp": "Los principios guían la toma de decisiones, incluidas las discusiones de trade-off (sirven como base para evaluar y decidir).",
"tip": "Principios = brújula para decidir."
},
{
"id": 147,
"q": "Which of the following best describes a business scenario?",
"opts": [
[
"A",
"A technique to identify differences between a baseline and target architecture."
],
[
"B",
"A use-case for developing a business model."
],
[
"C",
"A business problem together with the desired outcome."
],
[
"D",
"A method to quantify readiness for change."
]
],
"ans": "C",
"pdfAns": "C",
"votes": "",
"imgs": [],
"scenario": false,
"exp": "Un business scenario describe un problema de negocio junto con el resultado deseado (y su entorno, actores, etc.).",
"tip": "Business Scenario = problema + resultado deseado."
},
{
"id": 148,
"q": "What component of the Architecture Repository is an architectural representation of SBBs supporting the Architecture Landscape?",
"opts": [
[
"A",
"Solutions Library"
],
[
"B",
"Solutions Continuum"
],
[
"C",
"Solutions Repository"
],
[
"D",
"Solutions Landscape"
]
],
"ans": "D",
"pdfAns": "B",
"votes": "D (100%)",
"imgs": [],
"scenario": false,
"exp": "El Solutions Landscape presenta una representación arquitectónica de los SBBs que soportan el Architecture Landscape. Nota: el PDF marca B (Solutions Continuum), pero la comunidad (100%) y el texto de TOGAF indican D; aquí se califica D.",
"tip": "SBBs desplegados que soportan el Architecture Landscape = Solutions LANDSCAPE."
},
{
"id": 149,
"q": "Consider the following ADM phases objectives.\nWhich two are objectives of ADM Phase E?",
"opts": [
[
"A",
"1 & 2"
],
[
"B",
"4 & 1"
],
[
"C",
"2 & 3"
],
[
"D",
"3 & 4"
]
],
"ans": "A",
"pdfAns": "A",
"votes": "A (80%) · C (20%)",
"imgs": [
"img/q149_1.png"
],
"scenario": false,
"exp": "Objetivos de Fase E: 1) determinar si se requiere enfoque incremental e identificar Transition Architectures y 2) generar la versión inicial completa del Architecture Roadmap. 3 y 4 son de Fase F.",
"tip": "E = inicial; F = final."
},
{
"id": 150,
"q": "Consider the following descriptions of deliverables consumed and produced across the TOGAF ADM cycle.\nComplete the sentence. Deliverable 1 is an output from the __________, deliverable 2 can occur __________.",
"opts": [
[
"A",
"Preliminary Phase, in Phase E"
],
[
"B",
"Preliminary Phase, at various stages of the ADM"
],
[
"C",
"Phase A, in Requirements Management"
],
[
"D",
"Phase A, once an architecture has been defined"
]
],
"ans": "B",
"pdfAns": "B",
"votes": "",
"imgs": [
"img/q150_1.png"
],
"scenario": false,
"exp": "Deliverable 1 (Architecture Principles) es salida de la Fase Preliminar; deliverable 2 (Architecture Contracts) puede ocurrir en varias etapas del ADM.",
"tip": "Principios nacen en Preliminar; Contratos aparecen en varias fases."
},
{
"id": 151,
"q": "What can be introduced to formalize a joint agreement between development partners and sponsors on the deliverables. quality, and fitness-for-\npurpose of an architecture?",
"opts": [
[
"A",
"The Statement of Architecture Work"
],
[
"B",
"Service Level Agreements"
],
[
"C",
"Non-disclosure Agreement"
],
[
"D",
"Architecture Contracts"
]
],
"ans": "D",
"pdfAns": "D",
"votes": "",
"imgs": [],
"scenario": false,
"exp": "Los Architecture Contracts formalizan acuerdos conjuntos entre socios de desarrollo y patrocinadores sobre entregables, calidad y adecuación al propósito.",
"tip": "Acuerdo conjunto = Contrato."
},
{
"id": 152,
"q": "This deliverable is most often produced as an output of the Preliminary Phase. It can also be created because of an approved architecture change\nrequest.\nWhat is this deliverable?",
"opts": [
[
"A",
"Request for Architecture Work"
],
[
"B",
"Statement of Architecture Work"
],
[
"C",
"Architecture Vision"
],
[
"D",
"Requirements Impact Assessment"
]
],
"ans": "A",
"pdfAns": "A",
"votes": "",
"imgs": [],
"scenario": false,
"exp": "El Request for Architecture Work se produce normalmente como salida de la Fase Preliminar, y también puede crearse por un change request aprobado (Fase H).",
"tip": "Request nace en Preliminar o en H (por cambio)."
},
{
"id": 153,
"q": "In the ADM, what is the name for a document deliverable that has completed a review and is approved?",
"opts": [
[
"A",
"final"
],
[
"B",
"ratified"
],
[
"C",
"version 0.9"
],
[
"D",
"approved"
]
],
"ans": "D",
"pdfAns": "D",
"votes": "D (100%)",
"imgs": [],
"scenario": false,
"exp": "Un documento revisado y aprobado se llama 'approved'.",
"tip": "Draft → Approved."
},
{
"id": 154,
"q": "Consider the following statements:\n1. The TOGAF ADM requires a partitioning model for architecture development\n2. Architectures are partitioned when different teams need to work on different elements of the architecture at the same time\n3. Partitions can be used to facilitate architecture re-use\nWhich statements about Architecture Partitioning are correct?",
"opts": [
[
"A",
"1 and 3"
],
[
"B",
"2 and 3"
],
[
"C",
"1 and 2"
],
[
"D",
"1, 2 and 3"
]
],
"ans": "B",
"pdfAns": "B",
"votes": "",
"imgs": [],
"scenario": false,
"exp": "2 y 3 son correctas: se particiona cuando distintos equipos trabajan en paralelo y para facilitar el reuso. La 1 es falsa: TOGAF no exige un modelo de particionamiento.",
"tip": "Partición = paralelo + reuso (no obligatoria)."
},
{
"id": 155,
"q": "Please read this scenario prior to answering the question.\nYou are employed as an Enterprise Architect in an Enterprise Architecture (EA) team at a food production and distribution company. The main goal\nof the company is to increase profit while meeting the needs of consumers for its products. Its customers want food that is produced sustainably,\nsafely, and transparently, while reducing environmental impact.\nThe company has an Enterprise Architecture practice based on the TOGAF standard, using it as the method and guiding framework. The Chief\nInformation Officer (CIO) is the sponsor of EA practice.\nThe business is a highly mechanized agricultural operation where business capabilities, including planting, harvesting, processing, packaging, and\ndistribution, rely heavily on technology and machinery. The use of EA has enabled the decision makers to have valuable insights into the different\naspects of the business.\nThe warmer climate has led to less successful farming, and the company is growing fewer crops than before. Also, prices for energy, feed, fuel,\nand fertilizer have gone up. This has caused a big drop in earnings. Due to the rising costs and lower profits, the company has been unable to do\nas much to help the environment. It especially has struggled to reduce its carbon emissions.\nIn response to the situation, the Chief Executive Officer (CEO) has decided that big changes are needed, that will lead both to improved crop\nproduction and profitability. They must look to all aspects of the business. This includes looking at the mix of crops to mitigate for the change in\nclimate. The company will also cease to process its own crops and will sell off its processing facilities. Thus, the target market will change, and\nthe end-products will be different and more varied. A formal request for architecture change has been approved. At this stage there is no fixed\nscope, shared vision, or objectives.\nRefer to the scenario -\nWhat is the best approach for architecture development to realize the CEO's change in direction tor the company?\nBased on the TOGAF standard which of the following is the best answer?",
"opts": [
[
"A",
"The team should work on architecture definition including development of business models, with emphasis on defining the change parameters to support this new business strategy that the CEO has identified. Once understood, the team will be in the best position to identify the requirements, drivers, issues, and constraints for the change."
],
[
"B",
"The team should use the Architecture Definition Document and work on architecture development starting simultaneously phases B, C and D. This is because the CEO has identified the need to change. This will ensure that the change can be defined in a structured manner and address the requirements needed to realize the change."
],
[
"C",
"The team should define the baseline Technology Architecture first in order to assess the current infrastructure capacity and capability for the company. Next, the team should concentrate on transition planning and incremental architecture deployment. This will identity requirements to ensure that the projects are sequenced in an optimal fashion to realize the change."
],
[
"D",
"The team should produce a new Request for Architecture Work leading to development of a new Architecture Vision. The trade-off method should be applied to identify and select an architecture satisfying the stakeholders. For an efficient change the EA team should be aligned with the organization's planning, budgeting, operational, and change processes."
]
],
"ans": "D",
"pdfAns": "D",
"votes": "A (100%)",
"imgs": [],
"scenario": true,
"exp": "Igual que las preguntas 107 y 140: sin alcance, visión ni objetivos → nuevo Request for Architecture Work → nueva Architecture Vision + trade-offs + alinearse con planeación, presupuesto y operación.",
"tip": "Sin visión ni alcance → Request for Architecture Work → Visión."
},
{
"id": 156,
"q": "Complete the sentence. According to the TOGAF standard, an __________ is a representation of a system from the perspective of a related set of\n______________.",
"opts": [
[
"A",
"architecture viewpoint, stakeholders"
],
[
"B",
"architecture view, stakeholders"
],
[
"C",
"architecture view, concerns"
],
[
"D",
"architecture view, requirements"
]
],
"ans": "C",
"pdfAns": "C",
"votes": "",
"imgs": [],
"scenario": false,
"exp": "Una architecture view es la representación de un sistema desde la perspectiva de un conjunto relacionado de concerns.",
"tip": "View ↔ concerns."
},
{
"id": 157,
"q": "Which of the following best describes a business scenario?",
"opts": [
[
"A",
"A technique to quantify readiness for change."
],
[
"B",
"A technique used to identify business requirements."
],
[
"C",
"A technique to identify differences between a baseline and target architecture."
],
[
"D",
"A technique for developing a business model."
]
],
"ans": "B",
"pdfAns": "B",
"votes": "",
"imgs": [],
"scenario": false,
"exp": "Un business scenario es una técnica para identificar requisitos de negocio.",
"tip": "Business Scenario = requisitos."
},
{
"id": 158,
"q": "When considering the scope of an architecture, what dimension is about the extent of the enterprise?",
"opts": [
[
"A",
"Breadth"
],
[
"B",
"Depth"
],
[
"C",
"Project"
],
[
"D",
"Architecture Domains"
]
],
"ans": "A",
"pdfAns": "A",
"votes": "",
"imgs": [],
"scenario": false,
"exp": "Breadth (amplitud) es la dimensión sobre la extensión de la empresa que cubre la arquitectura.",
"tip": "Breadth = ancho = cuánta empresa cubre."
},
{
"id": 159,
"q": "Which statement best describes the main purpose of the TOGAF Content Framework?",
"opts": [
[
"A",
"To prevent gaps in the target architecture deliverable set."
],
[
"B",
"To drive consistency in the outputs when following the ADM."
],
[
"C",
"To store the artifacts identified in the Architecture Repository."
],
[
"D",
"To address IT system concerns relevant to an enterprise."
]
],
"ans": "B",
"pdfAns": "B",
"votes": "",
"imgs": [],
"scenario": false,
"exp": "El Content Framework busca impulsar la consistencia en los resultados (outputs) al seguir el ADM, con un modelo estructurado de productos de trabajo.",
"tip": "Content Framework = consistencia de las salidas."
},
{
"id": 160,
"q": "Which of the following are two of the four purposes that help frame the planning horizon, depth, and breadth of an Architecture Project?\n1. Architecture to Support Strategy\n2. Architecture to Support Capability\n3. Architecture to Support Portfolio\n4. Architecture to Support Agility",
"opts": [
[
"A",
"2 & 4"
],
[
"B",
"3 & 4"
],
[
"C",
"1 & 3"
],
[
"D",
"2 & 3"
]
],
"ans": "C",
"pdfAns": "C",
"votes": "",
"imgs": [],
"scenario": false,
"exp": "Los cuatro propósitos son Strategy, Portfolio, Project y Solution Delivery. 'Capability' y 'Agility' no son propósitos. Por eso 1 y 3.",
"tip": "S-P-P-S."
},
{
"id": 161,
"q": "Which of the following is included as part of the practice of Architecture Governance?",
"opts": [
[
"A",
"Ensuring compliance with standards, and regulatory obligations."
],
[
"B",
"Creating and maintaining the Statement of Architecture Work though out the ADM cycle."
],
[
"C",
"Interacting with the CxO level on Enterprise Architecture."
],
[
"D",
"Managing Stakeholders, their concerns, and their requirements."
]
],
"ans": "A",
"pdfAns": "A",
"votes": "",
"imgs": [],
"scenario": false,
"exp": "El Architecture Governance incluye asegurar el cumplimiento con estándares internos y externos y obligaciones regulatorias.",
"tip": "Gobierno = controles + cumplimiento."
},
{
"id": 162,
"q": "Which deliverable is first produced in Phase A, also updated in Phase E, and helps the architect to understand the baseline and target for the\nenterprise?",
"opts": [
[
"A",
"Consolidated Gaps, Solutions, and Dependencies matrix"
],
[
"B",
"Capability Assessment"
],
[
"C",
"Architecture Contracts"
],
[
"D",
"Stakeholder Map"
]
],
"ans": "B",
"pdfAns": "B",
"votes": "",
"imgs": [],
"scenario": false,
"exp": "La Capability Assessment se produce primero en la Fase A, se actualiza en la Fase E y ayuda a entender baseline y target de la empresa.",
"tip": "Capability Assessment: A → E."
},
{
"id": 163,
"q": "Consider the following descriptions of ADM Phases:\n1. It includes creation of an Enterprise Architecture Capability\n2. It provides architectural oversight of the implementation\nWhich ADM Phases are these?",
"opts": [
[
"A",
"1=Phase E, 2=Requirements Management"
],
[
"B",
"1=Preliminary Phase, 2=Phase G"
],
[
"C",
"1=Phase A, 2=Phase B"
],
[
"D",
"1=Phase C, 2=Phase H"
]
],
"ans": "B",
"pdfAns": "B",
"votes": "",
"imgs": [],
"scenario": false,
"exp": "1) Crear la Capacidad de Arquitectura Empresarial = Fase Preliminar. 2) Supervisión arquitectónica de la implementación = Fase G.",
"tip": "Preliminar = Capability; G = supervisión."
},
{
"id": 164,
"q": "Consider the following graphic from the TOGAF Standard:\nWhy is this method used?",
"opts": [
[
"A",
"To build understanding of different possibilities and identify trade-offs between the alternatives."
],
[
"B",
"To define the degree to which alternative information and services are to be shared."
],
[
"C",
"To simplify the management of the Enterprise Architecture."
],
[
"D",
"To capture the fundamental truths on how the enterprise will use resources."
]
],
"ans": "A",
"pdfAns": "A",
"votes": "",
"imgs": [
"img/q164_1.png"
],
"scenario": false,
"exp": "El método de Alternativas y Trade-offs se usa para construir entendimiento de las posibilidades y evaluar trade-offs entre alternativas.",
"tip": "Trade-offs = comparar opciones."
},
{
"id": 165,
"q": "Consider the following description of the purpose of an ADM Phase:\nTo develop a domain architecture approved by the stakeholders for the problem being addressed, together with a set of gaps, and work to clear\nthe gaps understood by the stakeholders.\nWhich ADM Phase does this describe?",
"opts": [
[
"A",
"Phase A"
],
[
"B",
"Preliminary Phase"
],
[
"C",
"Phase E"
],
[
"D",
"Phase B"
]
],
"ans": "D",
"pdfAns": "D",
"votes": "",
"imgs": [],
"scenario": false,
"exp": "Desarrollar una arquitectura de dominio aprobada con gaps y trabajo para cerrarlos es el propósito de las fases de dominio; de las opciones, la Fase B.",
"tip": "Domain architecture = B (o C/D)."
},
{
"id": 166,
"q": "Please read this scenario prior to answering the question\nYou are employed as an Enterprise Architect within an Enterprise Architecture (EA) team at a technology company. The company has multiple\ndivisions worldwide.\nThe company has a large in-house legal department managing intellectual property, trademarks, and patent disputes. The legal department uses\nEA to provide a structured framework to protect intellectual property assets. At any one time there are many ongoing lawsuits involving the\ncompany. Many of the company's competitors who are in a similar position have adopted Artificial Intelligence (AI) tools to support their legal\ndepartments.\nThe company has a mature EA practice and uses the TOGAF standard for its architecture development method. The EA program is sponsored by\nthe Chief Information Officer (CIO). The CIO has actively encouraged architecting with agility within the EA department as the preferred approach\nfor projects.\nThe adoption of AI tools into the company is a situation where little, or no EA work has been done to date. At this stage there are no relevant\nbusiness requirements, and no consensus among the legal staff as to how to use an AI solution. Many legal team members, including the Senior\nLegal Counsel, worry about using an AI solution for making decisions. Other staff worry about possible bias, and how the AI stores sensitive legal\ndata. The CIO wants to understand how risks will be covered by any new architecture addressing Al tools and solutions.\nA Request for Architecture Work has been approved to start an architecture development cycle. The scope of the project is to determine the\nfeasibility of using AI solutions in the company.\nRefer to the scenario -\nThe EA team leader has asked you to recommend the best approach for this project.\nBased on the TOGAF standard which of the following is the best answer?",
"opts": [
[
"A",
"A workshop to discover and document requirements should be held. This would help to understand, confirm, and agree on the goals and steps for the architecture. A matrix of stakeholders should be created to identify key people involved and their concerns. The main stakeholder requirements for the architecture should be documented. Lastly, a high-level vision for the future architecture should be recorded."
],
[
"B",
"An analysis of the stakeholders should be carried out. This will document the different groups, an understanding of their positions, and their key concerns. The concerns and relevant views can then be defined for each group and recorded in the Architecture Vision document. The requirements will address risk mitigation through regular assessments and feedback. The requirements should specifically address risk mitigation and security concerns."
],
[
"C",
"An analysis should be made that separates the types of stakeholders into groups to better manage their interests, power, and influence. Models should be developed for each proposed architecture to support the adoption of AI- based tools. This will ensure that that all the requirements are considered. A meeting should be held with the stakeholders to confirm that their concerns have been properly addressed by the models. Risk will be considered during Phases B to D."
],
[
"D",
"A Communication Plan should be created to address the key stakeholders, which are the most powerful and influential staff. This plan should include a report that summarizes the key features of the architecture reflecting stakeholder requirements. Meetings should be held with each key stakeholder to make sure their concerns are being addressed. The architecture being developed will have a requirement to explicitly address risk and security."
]
],
"ans": "A",
"pdfAns": "A",
"votes": "B (100%)",
"imgs": [],
"scenario": true,
"exp": "No hay trabajo previo de EA, ni requisitos, ni consenso: lo mejor es un taller para descubrir y documentar requisitos, confirmar metas, matriz de stakeholders, requisitos clave y una visión de alto nivel. Nota: la comunidad votó B, pero el PDF marca A porque el escenario resalta que no existen requisitos ni consenso.",
"tip": "Sin requisitos ni consenso → taller de descubrimiento de requisitos."
},
{
"id": 167,
"q": "Please read this scenario prior to answering the question\nYou are employed as an Enterprise Architect at a technology company. The company has multiple subsidiary companies, engaged in mobile,\nonline shopping, cloud computing services, and a social media platform. The company has grown rapidly and claims to be adding 20 million new\nusers a month.\nThe senior leadership within the company is worried about the ability of the company to address the opportunities around artificial intelligence\n(AI). They are concerned that the business will be at a competitive disadvantage without making significant changes. Most senior leaders feel that\nadoption of AI will enable the operations to become more efficient, and that it is an opportunity to create entirely new business models.\nThe company has an established Enterprise Architecture (EA) program based on the TOGAF standard, sponsored jointly by the Chief Executive\nOfficer (CEO) and Chief Information Officer (CIO). In your role as an Enterprise Architect within the EA team, you work closely with the business\nstakeholders in the company as well as the sponsors.\nThe CEO has a plan to reorganize its subsidiaries around AI. An EA project has been approved to help with the reorganization. A strategic\narchitecture has been created and approved. It includes an Architecture Vision, and high-level definitions of the domain architectures. This sets\nout an ambitious plan over a three-year period and covers three distinct transformations to implement the reorganization.\nThe sponsors have read reports that up to 70% of companies are failing at digital and artificial intelligence transformation. They have made it\nclear that prior to the approval of the detailed Implementation and Migration plan, the EA team needs to assess and mitigate the risks associated\nwith the reorganization. They want assurance that the reorganization will succeed and deliver the promised efficiencies and opportunities for the\nbusiness.\nRefer to the scenario -\nYou have been asked by the EA team leader to recommend the approach to address the request from the sponsors.\nBased on the TOGAF standard, which of the following is the best answer?",
"opts": [
[
"A",
"Information about potential approaches should be brought together to produce alternative Transition Architectures. The different alternatives should then be investigated and discussed with stakeholders using the Architecture Alternatives and Trade-offs technique. Once the Target Architecture has been selected, it should be analyzed using a state evolution table to determine the Transition Architectures. A value realization process should then be established to ensure that the concerns raised are being addressed."
],
[
"B",
"The gap analysis results from Phases B (Business Architecture), C (Information Systems Architectures), and D (Technology Architecture) should be reviewed and consolidated into a single list. This will identify the transformations required to achieve the proposed Target Architecture. The organization's preparedness to undergo change should then be assessed, and an overall direction to address and mitigate risks identified. The Transition Architectures should then be planned and visualized using a state evolution table."
],
[
"C",
"An interoperability analysis should be applied to evaluate the potential issues with the proposed new architecture. This should include the development of a matrix showing the interoperability requirements. The degree of interoperability should then be aligned with the corporate operating model to ensure risks are mitigated and minimized. The risk mitigations can then be included within each of the target Transition Architectures. The Architecture Roadmap and the Implementation and Migration Plan should then be finalized to ensure coordination within the enterprise."
],
[
"D",
"The organization's preparedness to undergo change should be assessed. This will allow the risks associated with the transformations to be identified, classified, and mitigated. This includes identifying dependencies between the set of changes, including gaps and work packages. It will also identify improvement actions to be worked into the Implementation and Migration Plan. The business value, effort, and risk associated for each transformation should be determined."
]
],
"ans": "D",
"pdfAns": "D",
"votes": "",
"imgs": [],
"scenario": true,
"exp": "Igual que la pregunta 115: evaluar la preparación para el cambio, identificar, clasificar y mitigar riesgos, dependencias entre cambios, acciones de mejora al plan, y valor, esfuerzo y riesgo por transformación.",
"tip": "'¿Tendrá éxito?' → Readiness Assessment."
},
{
"id": 168,
"q": "Please read this scenario prior to answering the question\nYou are employed as an Enterprise Architect, reporting to the Chief Enterprise Architect, at a technology company. The company uses the TOGAF\nstandard as the method and guiding framework for its Enterprise Architecture (EA) practice.\nThe nature of the business is such that the data and the information stored on the company systems is the company's major asset and is highly\nconfidential. The company employees travel a lot for work and need to communicate over public infrastructure. They use message encryption,\nsecure internet connections using Virtual Private Networks (VPNs), and other standard security measures. The company has provided computer\nsecurity awareness training for all its staff. However, despite good education and system security, there is still a need to rely on third-party\nsuppliers for infrastructure and software.\nThe Chief Security Officer (CSO) has noted an increase in ransomware (malicious software used in ransom demands) attacks on companies with a\nsimilar profile. The CSO recognizes that no matter how much is spent on education, and support, the company could be a victim of a significant\nattack that could completely lock them out of their important data.\nA risk assessment has been completed and the company has looked for cyber insurance that covers ransomware. The price for this insurance is\nvery high. The CTO recently saw a survey that said 1 out of 4 businesses that paid ransoms could not get their data back, and almost the same\nnumber were able to recover the data without paying. The CTO has decided not to get cyber insurance to cover ransom payment.\nThe Chief Technology Officer (CTO) is the sponsor of the EA project. The practice uses an iterative approach for its architecture development. This\nhas enabled the decision makers to gain valuable insights into the different aspects of the business.\nRefer to the scenario -\nYou have been asked to describe the steps you would take to strengthen the current architecture to improve data protection.\nBased on the TOGAF standard which of the following is the best answer?",
"opts": [
[
"A",
"You would hold an Architecture Compliance Review with the scope to examine the company's ability to respond to ransomware attacks. You would identify the departments involved and have them nominate representatives. You would then tailor checklists to address the requirement for increased business continuity and resilience. You would circulate to the nominated representatives for them to complete. You would then review the completed checklists, identifying and resolving issues. You would then determine and present your recommendations."
],
[
"B",
"You would run an assessment to identify the business continuity requirements and analyze the current Enterprise Architecture for gaps. You would create a change request to start a further cycle of architecture work to address changes to mitigate such an attack. You would arrange a meeting of the Architecture Board to assess and approve the change request. Once approved you would create a new Request for Architecture Work to begin an ADM cycle to implement the changes."
],
[
"C",
"You would ensure that the business value and cost of continuity measures are understood by key stakeholders and would ensure that the company has in place up-to-date processes for managing change to the current Enterprise Architecture. You recommend that mitigation for a ransomware attach be addressed at the infrastructure level with specific technology controls. Changes should be made to the baseline description of the Technology Architecture. The changes should be approved by the Architecture Board and a change request approved."
],
[
"D",
"You would contact existing suppliers for technology that could enhance company's capabilities to detect, react, and recover from an incident. You would perform an analysis and assessment of a simulated ransomware attack to evaluate the current Enterprise Architecture's resilience and recovery capabilities. Using the findings, you would prepare a gap analysis of the current Enterprise Architecture. You would prepare change requests to address identified gaps. You would add the changes implemented to the Architecture the Repository."
]
],
"ans": "B",
"pdfAns": "B",
"votes": "",
"imgs": [],
"scenario": true,
"exp": "Igual que las preguntas 51 y 127: evaluar requisitos de continuidad, gaps, change request, aprobación del Board y nuevo Request for Architecture Work.",
"tip": "Continuidad + gaps + change request + Board + nuevo Request."
},
{
"id": 169,
"q": "In the ADM, what is the name for documents that are not finished and not approved?",
"opts": [
[
"A",
"interim"
],
[
"B",
"incomplete"
],
[
"C",
"draft"
],
[
"D",
"version 0.1"
]
],
"ans": "C",
"pdfAns": "C",
"votes": "",
"imgs": [],
"scenario": false,
"exp": "Documentos no terminados ni aprobados = 'draft'.",
"tip": "Draft."
},
{
"id": 170,
"q": "Complete the sentence. The \"Statement\" part of the recommended TOGAF template for Architecture Principles __________________.",
"opts": [
[
"A",
"should clearly communicate the fundamental rule"
],
[
"B",
"should be easy to remember"
],
[
"C",
"should highlight the requirements for carrying out the principle"
],
[
"D",
"should highlight the business benefits"
]
],
"ans": "A",
"pdfAns": "A",
"votes": "",
"imgs": [],
"scenario": false,
"exp": "El Statement debe comunicar de forma clara la regla fundamental.",
"tip": "Statement = la regla."
},
{
"id": 171,
"q": "Which of the following best describes the TOGAF Architecture Development Method?",
"opts": [
[
"A",
"A technique to assess readiness for change."
],
[
"B",
"A repeatable process for developing architectures."
],
[
"C",
"A classification mechanism for architectures and solutions."
],
[
"D",
"A process for managing architecture requirements."
]
],
"ans": "B",
"pdfAns": "B",
"votes": "",
"imgs": [],
"scenario": false,
"exp": "El ADM es un proceso repetible para desarrollar arquitecturas.",
"tip": "ADM = proceso repetible."
},
{
"id": 172,
"q": "Which of the following describes the concept of an Enterprise Architecture Capability?",
"opts": [
[
"A",
"The ability to strike a balance between positive and negative outcomes resulting from the realization of opportunities."
],
[
"B",
"The ability to develop, use and sustain the architecture of a particular enterprise using architecture to govern change."
],
[
"C",
"The ability to distinguish between different types of architectural assets that exist at different levels of abstraction in the enterprise."
],
[
"D",
"The ability to follow general rules and guidelines that relate to Enterprise Architecture work and that enable decision-making."
]
],
"ans": "B",
"pdfAns": "B",
"votes": "",
"imgs": [],
"scenario": false,
"exp": "EA Capability = la habilidad de desarrollar, usar y sostener la arquitectura de una empresa, usando la arquitectura para gobernar el cambio.",
"tip": "Capability = habilidad."
},
{
"id": 173,
"q": "Complete the sentence. The purpose of the Preliminary Phase is to develop the _____________.",
"opts": [
[
"A",
"Implementation Governance Model"
],
[
"B",
"Organization Model for Enterprise Architecture"
],
[
"C",
"Architecture Roadmap"
],
[
"D",
"Architecture Vision for the project"
]
],
"ans": "B",
"pdfAns": "B",
"votes": "",
"imgs": [],
"scenario": false,
"exp": "El propósito de la Fase Preliminar es desarrollar el Modelo Organizacional para la Arquitectura Empresarial (parte de establecer la EA Capability).",
"tip": "Preliminar = organización de la EA."
},
{
"id": 174,
"q": "Consider the statement.\n\"It provides a sufficient view of the organization to manage complexity, support continuous change, and manage the risk of unanticipated\nconsequences.\"\nWhat concept does this describe?",
"opts": [
[
"A",
"Risk Management"
],
[
"B",
"A Business Capability Map"
],
[
"C",
"Enterprise Architecture"
],
[
"D",
"The Content Metamodel"
]
],
"ans": "C",
"pdfAns": "C",
"votes": "",
"imgs": [],
"scenario": false,
"exp": "La Enterprise Architecture provee una vista suficiente de la organización para gestionar la complejidad, soportar el cambio continuo y manejar el riesgo de consecuencias no anticipadas.",
"tip": "EA = vista para manejar complejidad y cambio."
},
{
"id": 175,
"q": "Which of the following is included as part of the practice of Architecture Governance?",
"opts": [
[
"A",
"Creating and maintaining the Statement of Architecture Work though out the ADM cycle."
],
[
"B",
"Interacting with the CxO level on Enterprise Architecture."
],
[
"C",
"Implementation of controls over the creation of architectural components."
],
[
"D",
"Managing Stakeholders, their concerns, and their requirements."
]
],
"ans": "C",
"pdfAns": "C",
"votes": "",
"imgs": [],
"scenario": false,
"exp": "El Architecture Governance incluye implementar controles sobre la creación y monitoreo de componentes y actividades arquitectónicas.",
"tip": "Gobierno = controles."
},
{
"id": 176,
"q": "When considering the scope of an architecture, the architect considers the level of detail for the architecting effort.\nWhat is this dimension of the scope called?",
"opts": [
[
"A",
"The depth"
],
[
"B",
"The project"
],
[
"C",
"The extent"
],
[
"D",
"The breadth"
]
],
"ans": "A",
"pdfAns": "A",
"votes": "",
"imgs": [],
"scenario": false,
"exp": "La dimensión Depth (profundidad) = nivel de detalle.",
"tip": "Depth = detalle."
},
{
"id": 177,
"q": "How does an Enterprise Metamodel provide value?",
"opts": [
[
"A",
"It identifies candidate architecture roadmap components by analyzing gaps."
],
[
"B",
"It leverages reference material for the creation of new architectures."
],
[
"C",
"It defines parameters, structures, processes that support governance."
],
[
"D",
"It forms an architecture completeness-check for use in an enterprise."
]
],
"ans": "D",
"pdfAns": "D",
"votes": "",
"imgs": [],
"scenario": false,
"exp": "Un metamodelo empresarial sirve como verificación de completitud de la arquitectura.",
"tip": "Metamodelo = checklist de completitud."
},
{
"id": 178,
"q": "Complete the sentence. Risks are identified in ____________ as part of ____________.",
"opts": [
[
"A",
"Phase A, Business Transformation Readiness Assessment"
],
[
"B",
"Phase B, assessing readiness for change"
],
[
"C",
"a Business Scenario, understanding business requirements"
],
[
"D",
"Preliminary Phase, Gap Analysis"
]
],
"ans": "A",
"pdfAns": "A",
"votes": "",
"imgs": [],
"scenario": false,
"exp": "Los riesgos se identifican en la Fase A como parte del Business Transformation Readiness Assessment.",
"tip": "Riesgos: Fase A + Readiness."
},
{
"id": 179,
"q": "Consider the following description of the purpose of an ADM Phase:\nTo identify key stakeholders, and reach agreement in the Architecture Vision document on a summary of the target and the work to reach the\ntarget\nWhich ADM Phase does this describe?",
"opts": [
[
"A",
"Phase B"
],
[
"B",
"Phase C"
],
[
"C",
"Phase A"
],
[
"D",
"Preliminary Phase"
]
],
"ans": "C",
"pdfAns": "C",
"votes": "",
"imgs": [],
"scenario": false,
"exp": "Identificar stakeholders clave y acordar en la Architecture Vision un resumen del target y del trabajo = Fase A.",
"tip": "Architecture Vision = A."
},
{
"id": 180,
"q": "Complete the sentence. Architecture effort at the Logical abstraction level is about ___________.",
"opts": [
[
"A",
"decomposing the requirements to understand the problem, and what is needed to address the problem, without unduly focusing on how the architecture will be realized"
],
[
"B",
"identifying the kinds of business, data, application, and technology components needed to achieve the services identified in the conceptual level"
],
[
"C",
"managing the allocation and implementation of physical components to meet the identified logical components"
],
[
"D",
"understanding the environment in which an enterprise operates and the context in which architecture work is planned and executed"
]
],
"ans": "B",
"pdfAns": "B",
"votes": "",
"imgs": [],
"scenario": false,
"exp": "El nivel lógico trata de identificar los tipos de componentes de negocio, datos, aplicación y tecnología necesarios para lograr los servicios del nivel conceptual. (A = conceptual; C = físico; D = contextual).",
"tip": "Contextual → Conceptual → Lógico (tipos de componentes) → Físico."
},
{
"id": 181,
"q": "Consider the following descriptions of deliverables consumed and produced across the TOGAF ADM cycle.\nComplete the sentence. Deliverable 3 is the ______________, deliverable 4 is a deliverable from ______________.",
"opts": [
[
"A",
"Stakeholder Map, Phase G"
],
[
"B",
"Architecture Requirements Specification, Preliminary Phase"
],
[
"C",
"Request for Architecture Work, Phase A"
],
[
"D",
"Architecture Definition Document, Phase H"
]
],
"ans": "C",
"pdfAns": "C",
"votes": "",
"imgs": [
"img/q181_1.png"
],
"scenario": false,
"exp": "Deliverable 3 = Request for Architecture Work; deliverable 4 = Statement of Architecture Work, que es un entregable de la Fase A.",
"tip": "Request (disparador) → Statement (Fase A)."
},
{
"id": 182,
"q": "Complete the sentence. The Standards Library is a component within the Architecture Repository that ___________.",
"opts": [
[
"A",
"describes the organization specific architecture framework and method"
],
[
"B",
"lists the set of specifications to which architectures must comply"
],
[
"C",
"contains the standard guidelines, templates, and patterns used to create new architectures"
],
[
"D",
"defines the processes to support governance of the Architecture Repository"
]
],
"ans": "B",
"pdfAns": "B",
"votes": "",
"imgs": [],
"scenario": false,
"exp": "El Standards Library lista las especificaciones con las que las arquitecturas deben cumplir.",
"tip": "Standards = obligatorio."
},
{
"id": 183,
"q": "What are two of the three levels in the classification model of the Architecture Landscape?",
"opts": [
[
"A",
"Candidate Architecture, Transition Architecture"
],
[
"B",
"Segment Architecture, Capability Architecture"
],
[
"C",
"Baseline Architecture, Target Architecture"
],
[
"D",
"Solution Architecture, Strategy Architecture"
]
],
"ans": "B",
"pdfAns": "B",
"votes": "",
"imgs": [],
"scenario": false,
"exp": "Los tres niveles son Strategic, Segment y Capability Architecture.",
"tip": "Landscape = Strategic / Segment / Capability."
}
];
