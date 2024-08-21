
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show-items")
        } else {
            entry.target.classList.remove("show-items")
        }
    })
})

const scrollScale = document.querySelectorAll(".scroll-scale")
scrollScale.forEach((el) => observer.observe(el))

const scrollBottom = document.querySelectorAll(".scroll-bottom")
scrollBottom.forEach((el) => observer.observe(el))

const scrollTop = document.querySelectorAll(".scroll-top")
scrollTop.forEach((el) => observer.observe(el))


// link navbar responsive (se clicco sul link si chiude il menu)
document.addEventListener('DOMContentLoaded', function () {
    var navLinks = document.querySelectorAll('.nav-link');
    var check = document.getElementById('check');
    var backToHome = document.querySelector('.arrow-up');

    navLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            check.checked = false;
        });
    });


    // Aggiunge/rimuove la classe 'active' ai link di navigazione in base alla sezione visibile
    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                navLinks.forEach(function (link) {
                    link.classList.toggle('active', link.getAttribute('href').substring(1) === entry.target.id);
                });
            }
        });
    }, { threshold: 0.4 });

    document.querySelectorAll('section').forEach(function (section) {
        observer.observe(section);
    });

    // Freccetta su 
    window.addEventListener('scroll', function () {
        if (window.scrollY > window.innerHeight) {
            backToHome.style.display = 'block';
        } else {
            backToHome.style.display = 'none';
        }
    });
});

// change button 
document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.tap-button');
    const contents = document.querySelectorAll('.tab-content');

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const target = this.getAttribute('data-target');

            // Rimuovi la classe attiva da tutti i bottoni
            buttons.forEach(btn => btn.classList.remove('active'));

            // Aggiungi la classe attiva al bottone cliccato
            this.classList.add('active');

            // Mostra il contenuto corrispondente e nascondi gli altri
            contents.forEach(content => {
                if (content.id === target) {
                    content.classList.add('active');
                } else {
                    content.classList.remove('active');
                }
            });
        });
    });
});

// Lettere
document.addEventListener("DOMContentLoaded", function () {
    const nameSpan = document.getElementById("name");
    const text = nameSpan.textContent;
    nameSpan.textContent = "";

    text.split("").forEach((letter, index) => {
        const span = document.createElement("span");
        span.textContent = letter;
        span.className = "letter";
        span.style.animationDelay = `${index * 0.1}s`;
        nameSpan.appendChild(span);
    });
});

// Gallery
const projects = [
    {
        number: "01",
        title: "Progetto FORM",
        description: "Progetto di realizzazione di un form di contatto, concepito per dimostrare alcune delle mie competenze chiave: design grafico, implementazione di controlli di sicurezza e gestione efficiente del database. Questo lavoro evidenzia la mia capacità di creare interfacce user-friendly, mantenendo al contempo elevati standard di sicurezza e funzionalità.",
        languages: [
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jquery/jquery-original.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg"
        ],
        projectLink: "http://localhost/form-ajax/login.html",
        codeLink: "https://github.com/",
        img: "images/application-form-employment-document-concept.jpg"
    },
    {
        number: "02",
        title: "Curriculum VITAE",
        description: "Curriculum personale che mette in evidenza la mia professionalità, fornendo una panoramica completa delle mie competenze, esperienze e caratteristiche distintive.",
        languages: [
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",

        ],
        projectLink: "https://Curriculum/index.html",
        codeLink: "progetto in arrivo",
        img: "images/resumes-desk.jpg"
    },
    {
        number: "03",
        title: "Progetto 3",
        description: "Progetto in arrivo!",
        languages: [
        ],
        projectLink: "progetto in arrivo",
        codeLink: "progetto in arrivo",
        img: "images/60031.jpg"
    }
];

let currentIndex = 0;

const projectNumber = document.getElementById('number');
const projectTitle = document.getElementById('portfolio-title');
const projectDescription = document.getElementById('portfolio-description');
const projectLanguages = document.querySelector('.sub-box-portfolio');
const projectImg = document.getElementById('project-img');
const downloadLink = document.getElementById('download-link');
const codeLink = document.getElementById('code-link');
const projectLink = document.getElementById('project-link');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

function updateProject() {
    const project = projects[currentIndex];
    projectNumber.textContent = project.number;
    projectTitle.textContent = project.title;
    projectDescription.textContent = project.description;

    projectLanguages.innerHTML = '';
    project.languages.forEach(language => {
        const img = document.createElement('img');
        img.src = language;
        projectLanguages.appendChild(img);
    });

    projectImg.src = project.img;
    downloadLink.href = project.projectLink;
    codeLink.href = project.codeLink;
}

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? projects.length - 1 : currentIndex - 1;
    updateProject();
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex === projects.length - 1) ? 0 : currentIndex + 1;
    updateProject();
});

updateProject();
