document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.querySelector(".navbar"); // seleziona la tua navbar
    const tocLinks = document.querySelectorAll("#table-of-contents a");

    // Quando clicco un link dell’indice
    tocLinks.forEach(link => {
        link.addEventListener("click", e => {
            // Nascondi navbar subito
            navbar.classList.add("hidden-nav");

            // Dopo che la pagina ha scrollato al paragrafo
            setTimeout(() => {
                // Appena l’utente inizia a scorrere di nuovo, riappare
                const onScroll = () => {
                    navbar.classList.remove("hidden-nav");
                    window.removeEventListener("scroll", onScroll);
                };
                window.addEventListener("scroll", onScroll);
            }, 1000); // tempo per lo scroll automatico
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');

    // chiude il menu cliccando un link
    const check = document.getElementById('check');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (check) check.checked = false;
        });
    });
});




const checkbox = document.getElementById("check");

checkbox.addEventListener("change", function () {
    if (this.checked) {
        document.body.classList.add("no-scroll");  // blocca scroll
    } else {
        document.body.classList.remove("no-scroll"); // sblocca scroll
    }
});


