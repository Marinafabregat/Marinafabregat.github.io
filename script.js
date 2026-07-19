"use strict";

/* ── Translations ── */
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

        "skills.title": "Habilidades",
        "skills.systems": "Sistemas",
        "skills.networks": "Redes",
        "skills.web": "Seguridad web",
        "skills.programming": "Programación",
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
        "projects.p0.type": "Hardware",
        "projects.p0.title": "USB HID Demo",
        "projects.p0.desc": "Demostración educativa y segura sobre los riesgos de conectar dispositivos USB desconocidos. Utiliza un LilyGO T-Dongle-S3 para demostrar que un dispositivo USB puede identificarse ante el ordenador como un teclado y enviar pulsaciones, aunque aparentemente no sea un teclado convencional. La demostración está diseñada con fines de concienciación y aplica diferentes medidas de seguridad para que todas las acciones sean visibles, limitadas y autorizadas por el usuario.",
        "projects.p1.title": "Analizador de puertos",
        "projects.p1.desc": "Script para comprobar puertos y recopilar información básica sobre servicios accesibles.",
        "projects.p2.title": "Análisis de tráfico PCAP",
        "projects.p2.desc": "Investigación de capturas de red para identificar protocolos, anomalías y mensajes ocultos.",
        "projects.p3.title": "Asistente local de ciberseguridad",
        "projects.p3.desc": "Investigación sobre adaptación y fine-tuning de un modelo Qwen para aprendizaje de seguridad informática.",

        "education.title": "Formación",
        "education.e1.type": "Grado",
        "education.e1.title": "Ingeniería Informática",
        "education.e1.desc": "Grado impartido en la Facultat d'Informàtica de Barcelona (FIB) de la Universitat Politècnica de Catalunya (UPC). Formación en desarrollo de software, arquitectura de computadores, redes y ciberseguridad.",
        "education.e2.type": "Posgrado",
        "education.e2.title": "Ciberseguridad aplicada a Smart Cities",
        "education.e2.desc": "Curso de especialización impartido por la UPC School, con enfoque en protección de infraestructuras críticas y análisis de riesgos en entornos de ciudades inteligentes.",
        "education.e3.type": "Posgrado",
        "education.e3.title": "Inteligencia Artificial aplicada a la logística",
        "education.e3.desc": "Curso de especialización impartido por la UPC School, con enfoque en aprendizaje automático, análisis de datos y optimización de procesos logísticos con IA.",
        "education.e4.type": "Máster",
        "education.e4.title": "Máster en ciberseguridad",
        "education.e4.desc": "Máster impartido por la Universitat Politècnica de Catalunya (UPC) y la Escola Tècnica Superior d'Enginyeria de Telecomunicacions de Barcelona (ETSETB), en el Campus Nord. Enfoque en seguridad ofensiva, análisis de vulnerabilidades y protección de sistemas.",
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
        "ctf.achievement2.type": "1.º puesto",
        "ctf.achievement2.title": "Cyber Bootcamp Málaga — Módulo avanzado",
        "ctf.achievement2.desc": "Primera posición en el CTF del módulo avanzado del Cyber Bootcamp Málaga, organizado por la Universidad de Málaga y financiado por Google.org.",

        "contact.title": "Contacto",
        "contact.desc": "Puedes consultar mis repositorios y proyectos publicados en GitHub.",
        "contact.email": "Correo",

        "backtotop": "Volver arriba",

        "footer": "Creado con mucho amor."
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

        "skills.title": "Skills",
        "skills.systems": "Systems",
        "skills.networks": "Networks",
        "skills.web": "Web security",
        "skills.programming": "Programming",
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
        "projects.p0.type": "Hardware",
        "projects.p0.title": "USB HID Demo",
        "projects.p0.desc": "Educational and secure demonstration of the risks of connecting unknown USB devices. Uses a LilyGO T-Dongle-S3 to show that a USB device can identify itself to the computer as a keyboard and send keystrokes, even when it is not a conventional keyboard. The demonstration is designed for awareness purposes and applies different security measures so that all actions are visible, limited and authorized by the user.",
        "projects.p1.title": "Port scanner",
        "projects.p1.desc": "Script to check ports and collect basic information about accessible services.",
        "projects.p2.title": "PCAP traffic analysis",
        "projects.p2.desc": "Investigation of network captures to identify protocols, anomalies and hidden messages.",
        "projects.p3.title": "Local cybersecurity assistant",
        "projects.p3.desc": "Research on adaptation and fine-tuning of a Qwen model for cybersecurity learning.",

        "education.title": "Education",
        "education.e1.type": "Degree",
        "education.e1.title": "Computer Engineering",
        "education.e1.desc": "Degree from the Facultat d'Informàtica de Barcelona (FIB) at Universitat Politècnica de Catalunya (UPC). Training in software development, computer architecture, networks and cybersecurity.",
        "education.e2.type": "Postgraduate",
        "education.e2.title": "Cybersecurity for Smart Cities",
        "education.e2.desc": "Specialization course offered by UPC School, focusing on critical infrastructure protection and risk analysis in smart city environments.",
        "education.e3.type": "Postgraduate",
        "education.e3.title": "AI applied to Logistics",
        "education.e3.desc": "Specialization course offered by UPC School, focusing on machine learning, data analysis and logistics process optimization with AI.",
        "education.e4.type": "Master's",
        "education.e4.title": "Master's in Cybersecurity",
        "education.e4.desc": "Master's degree offered by Universitat Politècnica de Catalunya (UPC) and Escola Tècnica Superior d'Enginyeria de Telecomunicacions de Barcelona (ETSETB), at Campus Nord. Focus on offensive security, vulnerability analysis and system protection.",
        "education.e5.type": "Bootcamp",
        "education.e5.title": "Cyber Bootcamp Málaga — Google",
        "education.e5.desc": "Free intensive cybersecurity program organized by the University of Málaga and funded by Google.org. Covering post-quantum cryptography, AI and cybersecurity, cybercrime and disinformation.",
        "education.e5.link": "Learn more →",
        "experience.e1.location": "Barcelona, Catalonia, Spain · TRADUCIR",
        "experience.e2.location": "Barcelona, Catalonia, Spain",
        "experience.e1.job": "inLab FIB · MODIFICAR/TRADUCIR",

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
        "ctf.achievement2.type": "1st place",
        "ctf.achievement2.title": "Cyber Bootcamp Málaga — Advanced module",
        "ctf.achievement2.desc": "First place in the CTF of the advanced module at Cyber Bootcamp Málaga, organized by the University of Málaga and funded by Google.org.",

        "contact.title": "Contact",
        "contact.desc": "You can check out my repositories and published projects on GitHub.",
        "contact.email": "Email",

        "backtotop": "Back to top",

        "footer": "Built with lots of love."
    }
};

/* ── DOM refs ── */
const langButton = document.querySelector("#langButton");
const menuButton = document.querySelector("#menuButton");
const navLinks = document.querySelector("#navLinks");
const currentYear = document.querySelector("#currentYear");
const scrollProgress = document.querySelector(".scroll-progress");
const heroCanvas = document.querySelector("#heroCanvas");
const backToTop = document.querySelector("#backToTop");

let currentLang = localStorage.getItem("lang") || "es";

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}

/* ── Language ── */
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

/* ── Mobile menu ── */
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

/* ── Scroll progress bar ── */
function updateScrollProgress() {
    if (!scrollProgress) return;
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    scrollProgress.style.width = progress + "%";
}

window.addEventListener("scroll", updateScrollProgress, { passive: true });

/* ── Active nav section ── */
function initActiveNav() {
    const navAnchors = navLinks ? navLinks.querySelectorAll("a") : [];
    const sections = [];

    navAnchors.forEach((a) => {
        const id = a.getAttribute("href");
        if (id && id.startsWith("#")) {
            const section = document.querySelector(id);
            if (section) sections.push({ id, section, anchor: a });
        }
    });

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const match = sections.find((s) => s.section === entry.target);
                    if (match) {
                        navAnchors.forEach((a) => a.classList.remove("active"));
                        match.anchor.classList.add("active");
                    }
                }
            });
        },
        { rootMargin: "-20% 0px -70% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s.section));
}

/* ── Scroll reveal ── */
function initReveal() {
    const revealElements = document.querySelectorAll(".reveal");
    if (revealElements.length === 0) return;

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                }
            });
        },
        { rootMargin: "0px 0px -60px 0px", threshold: 0.1 }
    );

    revealElements.forEach((el) => observer.observe(el));
}

/* ── Skill bars animation ── */
function initSkillBars() {
    const bars = document.querySelectorAll(".skill-bar-fill");
    if (bars.length === 0) return;

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.3 }
    );

    bars.forEach((bar) => observer.observe(bar));
}

/* ── Typewriter effect ── */
function typewriterEffect(element, text, speed = 60) {
    return new Promise((resolve) => {
        let i = 0;
        element.textContent = "";
        element.classList.add("typewriter-cursor");

        function type() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(type, speed + Math.random() * 30);
            } else {
                setTimeout(() => {
                    element.classList.remove("typewriter-cursor");
                    resolve();
                }, 1500);
            }
        }
        type();
    });
}

/* ── Hero particles ── */
function initParticles(canvas) {
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let particles = [];
    let animFrame;
    let w, h;

    function resize() {
        w = canvas.width = canvas.offsetWidth;
        h = canvas.height = canvas.offsetHeight;
    }

    resize();
    window.addEventListener("resize", resize);

    class Particle {
        constructor() {
            this.reset();
        }
        reset() {
            this.x = Math.random() * w;
            this.y = Math.random() * h;
            this.vx = (Math.random() - 0.5) * 0.3;
            this.vy = (Math.random() - 0.5) * 0.3;
            this.radius = Math.random() * 1.5 + 0.5;
            this.alpha = Math.random() * 0.5 + 0.1;
            this.color = Math.random() > 0.5 ? "194, 24, 91" : "0, 229, 255";
        }
        update() {
            this.x += this.vx;
            this.y += this.vy;
            if (this.x < 0 || this.x > w) this.vx *= -1;
            if (this.y < 0 || this.y > h) this.vy *= -1;
        }
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${this.color}, ${this.alpha})`;
            ctx.fill();
        }
    }

    const count = Math.min(60, Math.floor((w * h) / 15000));
    for (let i = 0; i < count; i++) {
        particles.push(new Particle());
    }

    function drawLines() {
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 120) {
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.strokeStyle = `rgba(194, 24, 91, ${0.08 * (1 - dist / 120)})`;
                    ctx.lineWidth = 0.5;
                    ctx.stroke();
                }
            }
        }
    }

    function animate() {
        ctx.clearRect(0, 0, w, h);
        particles.forEach((p) => {
            p.update();
            p.draw();
        });
        drawLines();
        animFrame = requestAnimationFrame(animate);
    }

    animate();

    return () => cancelAnimationFrame(animFrame);
}

/* ── Back to top ── */
if (backToTop) {
    backToTop.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}

/* ── Init ── */
document.addEventListener("DOMContentLoaded", () => {
    applyLanguage(currentLang);
    initActiveNav();
    initReveal();
    initSkillBars();
    initParticles(heroCanvas);

    const heroName = document.querySelector(".hero-name");
    if (heroName) {
        const text = heroName.getAttribute("data-text");
        if (text) {
            setTimeout(() => typewriterEffect(heroName, text, 70), 500);
        }
    }
});
