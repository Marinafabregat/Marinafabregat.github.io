"use strict";

const translations = {
    es: {
        "nav.about": "Sobre mí",
        "nav.experience": "Experiencia",
        "nav.skills": "Habilidades",
        "nav.education": "Formación",
        "nav.projects": "Proyectos",
        "nav.talks": "Charlas",
        "nav.events": "Eventos",
        "nav.contact": "Contacto",

        "hero.eyebrow": "PORTFOLIO DE CIBERSEGURIDAD",
        "hero.greeting": "Hola, soy",
        "hero.description": "Ingeniera informatica especializada en ciberseguridad interesada en pentesting, análisis forense, redes y seguridad ofensiva.",
        "hero.cta": "Ver proyectos",

        "about.title": "Sobre mí",
        "about.intro": "Actualmente estoy desarrollando mis conocimientos en seguridad informática mediante laboratorios, proyectos personales y retos CTF.",
        "about.profile.title": "Mi perfil",
        "about.profile.desc": "Me interesa comprender cómo funcionan los sistemas, identificar vulnerabilidades y aprender a proteger infraestructuras y aplicaciones.",
        "about.goal.title": "Objetivo",
        "about.goal.desc": "Seguir creciendo en pentesting, análisis de redes, respuesta ante incidentes y automatización de tareas de seguridad.",

        "experience.title": "Experiencia",
        "experience.e1.date": "actualidad",
        "experience.e1.role": "Cyber Security Analyst",
        "experience.e1.desc": "Análisis de seguridad, investigación de vulnerabilidades y tareas de ciberseguridad en el laboratorio de innovación de la Facultat d'Informàtica de Barcelona.",
        "experience.e2.role": "Asistente de marketing",
        "experience.e2.desc": "Soporte en campañas de marketing, comunicación y gestión de contenidos para la empresa asociada a la Facultat d'Informàtica de Barcelona.",
        "experience.e3.role": "2.º puesto — CTF INCIBE Emprende",
        "experience.e3.desc": "Segunda posición en el CTF de INCIBE Emprende by Sherpa Tribe. Dos días de retos con especial dedicación a OSINT.",

        "skills.title": "Habilidades",
        "skills.systems": "Sistemas",
        "skills.networks": "Redes",
        "skills.web": "Seguridad web",
        "skills编程": "Programación",
        "skills.tools": "Herramientas",
        "skills.forensic": "Forense y CTF",

        "cve.intro": "Vulnerabilidades documentadas en la base de datos CVE.",
        "cve.cve1.type": "XSS almacenado",
        "cve.cve1.desc": "Cross-Site Scripting (XSS) almacenado en Xibo CMS v4.1.2 de Xibo Signage. El atacante inyecta un payload malicioso en el campo \"Text\" de \"Global Elements\" dentro de una plantilla.",
        "cve.cve2.type": "XSS reflejado",
        "cve.cve2.desc": "Cross-Site Scripting (XSS) reflejado en Xibo CMS v4.1.2 de Xibo Signage. El atacante inyecta un payload en el campo \"Configuration Name\" de un widget dentro de una plantilla.",
        "cve.repo": "Ver repositorio →",

        "projects.title": "Proyectos",
        "projects.repo": "Ver repositorio →",
        "projects.docs": "Ver documentación →",
        "projects.p1.title": "Analizador de puertos",
        "projects.p1.desc": "Script para comprobar puertos y recopilar información básica sobre servicios accesibles.",
        "projects.p2.title": "Análisis de tráfico PCAP",
        "projects.p2.desc": "Investigación de capturas de red para identificar protocolos, anomalías y mensajes ocultos.",
        "projects.p3.title": "Asistente local de ciberseguridad",
        "projects.p3.desc": "Investigación sobre adaptación y fine-tuning de un modelo Qwen para aprendizaje de seguridad informática.",

        "education.title": "Formación",
        "education.e1.type": "Grado",
        "education.e1.title": "Ingeniería Informática",
        "education.e1.desc": "Grado en Ingeniería Informática, con especialización en ciberseguridad y redes.",
        "education.e2.type": "Posgrado",
        "education.e2.title": "Ciberseguridad aplicada a Smart Cities",
        "education.e2.desc": "Curso de especialización en ciberseguridad aplicada a Smart Cities, con enfoque en protección de infraestructuras críticas y análisis de riesgos.",
        "education.e3.type": "Posgrado",
        "education.e3.title": "Inteligencia Artificial aplicada a la logística",
        "education.e3.desc": "Curso de especialización en inteligencia artificial aplicada a la logística, con enfoque en aprendizaje automático y análisis de datos.",
        "education.e4.type": "Máster",
        "education.e4.title": "Máster en ciberseguridad",
        "education.e4.desc": "Cursando un máster en ciberseguridad, con enfoque en seguridad ofensiva, análisis de vulnerabilidades y protección de sistemas.",
        "education.e5.type": "Bootcamp",
        "education.e5.title": "Cyber Bootcamp Málaga — Google",
        "education.e5.desc": "Programa intensivo gratuito de ciberseguridad organizado por la Universidad de Málaga y financiado por Google.org. Temas de criptografía postcuántica, IA y ciberseguridad, fraude y ciberdelincuencia, y desinformación.",
        "education.e5.link": "Saber más →",

        "talks.title": "Charlas",
        "talks.intro": "Charlas divulgativas sobre ciberseguridad y criptografía impartidas en el ámbito universitario.",
        "talks.learn": "Saber más →",
        "talks.t1.desc": "Charla sobre ciberseguridad y criptografía para más de 100 alumnos de 6º de Primaria en la Facultat d'Informàtica de Barcelona. Incluyó una actividad práctica de cifrado César.",
        "talks.t2.desc": "Segunda edición de la charla sobre ciberseguridad y criptografía en la Facultat d'Informàtica de Barcelona, continuando con la iniciativa de acercar la seguridad informática al ámbito educativo.",

        "events.title": "Eventos",
        "events.intro": "Congresos y conferencias de ciberseguridad y tecnología en los que he participado.",
        "events.e1.desc": "Congreso de ciberseguridad referente en España. Edición celebrada en Madrid con charlas sobre seguridad ofensiva, defensiva e investigación.",
        "events.e2.desc": "Mobile World Congress, el evento de tecnología móvil más importante del mundo. Participación en las sesiones dedicadas a ciberseguridad y protección de infraestructuras.",
        "events.e3.desc": "Evento de ciberseguridad en Barcelona con ponentes como Marcin Detyniecki (IA justa), Nate Gentil (miedo como herramienta), Chema Alonso (IA y hackers) y José Luis Crespo (tecnologías cuánticas).",

        "ctf.title": "CTF y laboratorios",
        "ctf.intro": "Retos realizados exclusivamente en plataformas, máquinas propias y entornos expresamente autorizados.",
        "ctf.web": "Reconocimiento, autenticación, control de acceso, inyección y vulnerabilidades de inclusión de archivos.",
        "ctf.forensic": "Forense",
        "ctf.forensic.desc": "Análisis de documentos, imágenes, metadatos, capturas de red y archivos sospechosos.",
        "ctf.crypto": "Criptografía",
        "ctf.crypto.desc": "Identificación y resolución de mensajes codificados y cifrados dentro de retos educativos.",
        "ctf.achievement.type": "2.º puesto",
        "ctf.achievement.desc": "Segunda posición junto a Hèctor Godoy Creus y Oriol Vilella Jam en el CTF de INCIBE Emprende by Sherpa Tribe, celebrado en la UPC. Dos días de retos con un especialmente divertido de OSINT.",

        "contact.title": "Contacto",
        "contact.desc": "Puedes consultar mis repositorios y proyectos publicados en GitHub.",
        "contact.email": "Correo",

        "footer": "Creado con HTML, CSS y JavaScript."
    },

    en: {
        "nav.about": "About",
        "nav.experience": "Experience",
        "nav.skills": "Skills",
        "nav.education": "Education",
        "nav.projects": "Projects",
        "nav.talks": "Talks",
        "nav.events": "Events",
        "nav.contact": "Contact",

        "hero.eyebrow": "CYBERSECURITY PORTFOLIO",
        "hero.greeting": "Hi, I'm",
        "hero.description": "Computer engineer specialized in cybersecurity, interested in pentesting, forensic analysis, networks and offensive security.",
        "hero.cta": "View projects",

        "about.title": "About me",
        "about.intro": "I am currently developing my knowledge in cybersecurity through labs, personal projects and CTF challenges.",
        "about.profile.title": "My profile",
        "about.profile.desc": "I'm interested in understanding how systems work, identifying vulnerabilities and learning to protect infrastructures and applications.",
        "about.goal.title": "Goal",
        "about.goal.desc": "Keep growing in pentesting, network analysis, incident response and security task automation.",

        "experience.title": "Experience",
        "experience.e1.date": "present",
        "experience.e1.role": "Cyber Security Analyst",
        "experience.e1.desc": "Security analysis, vulnerability research and cybersecurity tasks at the innovation lab of the Facultat d'Informàtica de Barcelona.",
        "experience.e2.role": "Marketing Assistant",
        "experience.e2.desc": "Support in marketing campaigns, communications and content management for the company associated with the Facultat d'Informàtica de Barcelona.",
        "experience.e3.role": "2nd place — INCIBE Emprende CTF",
        "experience.e3.desc": "Second place at the INCIBE Emprende by Sherpa Tribe CTF. Two days of challenges with a special focus on OSINT.",

        "skills.title": "Skills",
        "skills.systems": "Systems",
        "skills.networks": "Networks",
        "skills.web": "Web security",
        "skills编程": "Programming",
        "skills.tools": "Tools",
        "skills.forensic": "Forensics & CTF",

        "cve.intro": "Vulnerabilities documented in the CVE database.",
        "cve.cve1.type": "Stored XSS",
        "cve.cve1.desc": "Stored Cross-Site Scripting (XSS) in Xibo CMS v4.1.2 by Xibo Signage. The attacker injects a malicious payload into the \"Text\" field of \"Global Elements\" within a template.",
        "cve.cve2.type": "Reflected XSS",
        "cve.cve2.desc": "Reflected Cross-Site Scripting (XSS) in Xibo CMS v4.1.2 by Xibo Signage. The attacker injects a payload into the \"Configuration Name\" field of a widget within a template.",
        "cve.repo": "View repository →",

        "projects.title": "Projects",
        "projects.repo": "View repository →",
        "projects.docs": "View documentation →",
        "projects.p1.title": "Port scanner",
        "projects.p1.desc": "Script to check ports and collect basic information about accessible services.",
        "projects.p2.title": "PCAP traffic analysis",
        "projects.p2.desc": "Investigation of network captures to identify protocols, anomalies and hidden messages.",
        "projects.p3.title": "Local cybersecurity assistant",
        "projects.p3.desc": "Research on adaptation and fine-tuning of a Qwen model for cybersecurity learning.",

        "education.title": "Education",
        "education.e1.type": "Degree",
        "education.e1.title": "Computer Engineering",
        "education.e1.desc": "Bachelor's degree in Computer Engineering, with a specialization in cybersecurity and networks.",
        "education.e2.type": "Postgraduate",
        "education.e2.title": "Cybersecurity for Smart Cities",
        "education.e2.desc": "Specialization course in cybersecurity applied to Smart Cities, focusing on critical infrastructure protection and risk analysis.",
        "education.e3.type": "Postgraduate",
        "education.e3.title": "AI applied to Logistics",
        "education.e3.desc": "Specialization course in artificial intelligence applied to logistics, focusing on machine learning and data analysis.",
        "education.e4.type": "Master's",
        "education.e4.title": "Master's in Cybersecurity",
        "education.e4.desc": "Pursuing a master's degree in cybersecurity, focusing on offensive security, vulnerability analysis and system protection.",
        "education.e5.type": "Bootcamp",
        "education.e5.title": "Cyber Bootcamp Málaga — Google",
        "education.e5.desc": "Free intensive cybersecurity program organized by the University of Málaga and funded by Google.org. Covering post-quantum cryptography, AI and cybersecurity, cybercrime and disinformation.",
        "education.e5.link": "Learn more →",

        "talks.title": "Talks",
        "talks.intro": "Outreach talks on cybersecurity and cryptography delivered in a university setting.",
        "talks.learn": "Learn more →",
        "talks.t1.desc": "Talk on cybersecurity and cryptography for over 100 6th-grade students at the Facultat d'Informàtica de Barcelona. Included a hands-on Caesar cipher activity.",
        "talks.t2.desc": "Second edition of the cybersecurity and cryptography talk at the Facultat d'Informàtica de Barcelona, continuing the initiative to bring IT security to the educational field.",

        "events.title": "Events",
        "events.intro": "Cybersecurity and technology conferences I have attended.",
        "events.e1.desc": "Leading cybersecurity congress in Spain. Held in Madrid with talks on offensive, defensive security and research.",
        "events.e2.desc": "Mobile World Congress, the world's most important mobile technology event. Participation in sessions dedicated to cybersecurity and infrastructure protection.",
        "events.e3.desc": "Cybersecurity event in Barcelona with speakers like Marcin Detyniecki (fair AI), Nate Gentil (fear as a tool), Chema Alonso (AI and hackers) and José Luis Crespo (quantum technologies).",

        "ctf.title": "CTF & Labs",
        "ctf.intro": "Challenges completed exclusively on platforms, personal machines and explicitly authorized environments.",
        "ctf.web": "Reconnaissance, authentication, access control, injection and file inclusion vulnerabilities.",
        "ctf.forensic": "Forensics",
        "ctf.forensic.desc": "Analysis of documents, images, metadata, network captures and suspicious files.",
        "ctf.crypto": "Cryptography",
        "ctf.crypto.desc": "Identification and resolution of encoded and encrypted messages within educational challenges.",
        "ctf.achievement.type": "2nd place",
        "ctf.achievement.desc": "Second place together with Hèctor Godoy Creus and Oriol Vilella Jam at the INCIBE Emprende by Sherpa Tribe CTF, held at UPC. Two days of challenges with a particularly fun OSINT one.",

        "contact.title": "Contact",
        "contact.desc": "You can check out my repositories and published projects on GitHub.",
        "contact.email": "Email",

        "footer": "Built with HTML, CSS and JavaScript."
    }
};

const langButton = document.querySelector("#langButton");
const menuButton = document.querySelector("#menuButton");
const navLinks = document.querySelector("#navLinks");
const currentYear = document.querySelector("#currentYear");

let currentLang = localStorage.getItem("lang") || "es";

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}

function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem("lang", lang);
    document.documentElement.lang = lang;

    if (langButton) {
        langButton.textContent = lang === "es" ? "EN" : "ES";
    }

    document.querySelectorAll("[data-i18n]").forEach((el) => {
        const key = el.getAttribute("data-i18n");
        if (translations[lang] && translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });
}

if (langButton) {
    langButton.addEventListener("click", () => {
        applyLanguage(currentLang === "es" ? "en" : "es");
    });
}

if (menuButton && navLinks) {
    menuButton.addEventListener("click", () => {
        const isOpen = navLinks.classList.toggle("open");
        menuButton.setAttribute("aria-expanded", String(isOpen));
    });

    navLinks.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("open");
            menuButton.setAttribute("aria-expanded", "false");
        });
    });
}

applyLanguage(currentLang);
