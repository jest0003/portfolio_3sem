const translations = {
    dk: {
        hero_text_1: "Jeg er frontend-fokuseret multimediedesign studerende, med særlig interesse for logik og struktur i kode. Jeg motiveres af at få komplekse ting til at fungere, og den tilfredsstillelse der opstår, når det hele endelig spiller.",
        hero_text_2: "Jeg starter ofte i et kreativt kaos, men trives bedst, når jeg får skabt overblik og system i både design og kode. I gruppearbejde fungerer jeg som sparringspartner og bidrager med refleksion og struktur for at sikre gennemtænkte løsninger.",
        projects_btn: "Projekter ↓",
        cv_btn: "Hent CV",
        comp_text: "Jeg arbejder i spændet mellem frontend, brugeroplevelse og visuel formidling. Mine kompetencer dækker både udvikling, designværktøjer og praktisk erfaring med samarbejde og brugertest.",
        comp: "Kompetancer",
        next_step_title: "Mit næste skridt",
        next_step_text_1: "Mit næste skridt er en praktikplads, hvor jeg kan udvikle mig teknisk og indgå i et team, der arbejder struktureret og målrettet. Jeg ønsker at være en del af en virksomhed, der har erfaring med praktikanter og prioriterer læring, sparring og feedback.",
        next_step_text_2: "Jeg motiveres af at arbejde med logik, struktur og funktionalitet, og jeg vil gerne styrke mine kompetencer inden for frontend-udvikling gennem konkrete opgaver og reel deltagelse i projekter.",
        next_step_text_3: "Samtidig vil jeg gerne inddrages i den kreative proces og forstå de valg, der ligger bag løsningerne, så jeg ikke blot implementerer, men bidrager med refleksion og helhedsforståelse.",
        next_step_text_4: "Jeg søger et fagligt miljø med ro og overblik, men også plads til eksperimenter. Et sted, hvor jeg ikke blot observerer, men bidrager og udvikler mig i samspil med andre.",
        projects: "Projekter",
        nv_foto_text: "Redesign af website for NV-Foto. Opgaven bestod i at modernisere en hjemmeside, der ikke var blevet opdateret i over 15 år. Projektet blev udviklet i Astro, og jeg bidrog til research, design og prototypeudvikling. Gennem løbende brugertests sikrede vi en intuitiv og brugervenlig løsning. Jeg stod for kodning af forsiden, implementering af en Lottie-animation samt generelle frontend-opgaver.",
        to_do_text_1: "Udvikling af en funktionel ToDo-app med fokus på JavaScript, dynamisk DOM-manipulation og brugerfeedback.",
        to_do_text_2: "Formålet med projektet var at opbygge en robust og intuitiv applikation, hvor brugeren kan oprette, slette, like og markere opgaver som færdige samt fortryde handlinger.",
        to_do_text_3: "Opgaverne gemmes via localStorage, så data bevares mellem besøg. Der er også arbejdet med visuel feedback igennem animationer."
    },
    en: {
        hero_text_1: "I am a frontend-focused multimedia design student, with a strong interest in logic and structure in code. I’m motivated by making complex things work, and by the satisfaction that comes when everything finally comes together.",
        hero_text_2: "I often start in a creative chaos, but I thrive when I can create clarity and structure in both design and code. In group work I act as a sparring partner, contributing reflection and structure to help ensure well thought out solutions.",
        projects_btn: "Projects ↓",
        cv_btn: "Download CV",
        comp: "Skills",
        comp_text: "I work at the intersection of frontend development, user experience, and visual communication. My skills include development, design tools, and practical experience with collaboration and user testing.",
        next_step_title: "My next step",
        next_step_text_1: "My next step is an internship where I can continue developing my technical skills, and be part of a team that works in a structured and goal-oriented way. I’m looking for a company that has experience working with interns and values learning, feedback, and collaboration.",
        next_step_text_2: "I’m motivated by working with logic, structure, and functionality, and I want to strengthen my frontend development skills through real tasks and active participation in projects.",
        next_step_text_3: "At the same time, I would like to be included in the creative process and understand the decisions behind the solutions, so that I’m not only implementing ideas but also contributing with reflection and a broader perspective.",
        next_step_text_4: "I’m looking for a professional environment with structure and clarity, but also room for experimentation, a place where I don’t just observe, but actively contribute and grow together with others.",
        projects: "Projects",
        nv_foto_text: "Redesign of the NV-Foto website. The task was to modernize a website that hadn't been updated for over 15 years. The project was developed in Astro, and I contributed to research, design, and prototype development. Through continuous user testing we ensured an intuitive and user-friendly solution. I was responsible for coding the front page, implementing a Lottie animation, and handling general frontend tasks.",
        to_do_text_1: "Development of a functional ToDo app with a focus on JavaScript, dynamic DOM manipulation, and user feedback.",
        to_do_text_2: "The goal of the project was to build a robust and intuitive application where users can create, delete, like, and mark tasks as completed, as well as undo actions.",
        to_do_text_3: "Tasks are stored using localStorage so data persists between visits. Visual feedback through animations was also implemented."
    }
}

function setLanguage(lang) {
    const elm = document.querySelectorAll("[data-i18n]");
    elm.forEach(el => {
        const key = el.dataset.i18n
        el.textContent=translations[lang][key]
    })
    const cvBtn = document.getElementById("cv_btn")
    if(lang === "dk") {
        cvBtn.href = "Jerie_CV.pdf"
    }
    if(lang === "en") {
        cvBtn.href = "Jerie_CV_EN.pdf"
    }

document.documentElement.lang = lang;
localStorage.setItem("siteLanguage", lang)
}

document.querySelectorAll("[data-lang]").forEach(btn => {
    btn.addEventListener("click", () => {
        setLanguage(btn.dataset.lang)
    })
})

const savedLang = localStorage.getItem("siteLanguage") || "dk"

setLanguage(savedLang)