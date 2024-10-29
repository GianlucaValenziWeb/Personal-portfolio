//  Send Email js
function SendEmail() {
    // Ottieni i valori degli input
    let name = document.getElementById("nm").value;
    let user = document.getElementById("email").value;
    let message = document.getElementById("text").value;

    // Controlla che i campi non siano vuoti
    if (!name || !user || !message) {
        alert("Per favore, compila tutti i campi.");
        return;
    }

    // Verifica il formato dell'email
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(user)) {
        alert("Per favore, inserisci un indirizzo email valido.");
        return;
    }

    // Parametri per emailjs
    let par = {
        name: name,
        user: user,
        message: message,
    };

    // Invia l'email usando emailjs
    emailjs.send("service_p9y592j", "template_zwa5vqv", par)
        .then(function (response) {
            alert("Email inviata con successo!", response);
        }, function (error) {
            alert("Si è verificato un errore nell'invio dell'email. Per favore, riprova.");
            console.log("Errore:", error);
        });
}

