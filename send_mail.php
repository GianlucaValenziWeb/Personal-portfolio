<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Pulizia e validazione
    $name = htmlspecialchars(trim($_POST['name']));
    $email = filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL);
    $message = htmlspecialchars(trim($_POST['message']));

    if (empty($name) || empty($email) || empty($message)) {
        die("Errore: Compila tutti i campi.");
    }
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        die("Errore: Email non valida.");
    }

    // Configurazione email
    $to = "gianlucavalenziweb@gmail.com"; // 🔴 Inserisci la tua email qui
    $subject = "Nuovo messaggio dal sito";
    $body = "Hai ricevuto un nuovo messaggio dal sito:\n\n"
          . "Nome: $name\n"
          . "Email: $email\n\n"
          . "Messaggio:\n$message";
    $headers = "From: $name <$email>\r\n";
    $headers .= "Reply-To: $email\r\n";

    // Invio email
    if (mail($to, $subject, $body, $headers)) {
        echo "✅ Messaggio inviato con successo!";
    } else {
        echo "❌ Errore nell'invio del messaggio. Contatta l'amministratore.";
    }
} else {
    echo "Accesso non consentito.";
}
?>
