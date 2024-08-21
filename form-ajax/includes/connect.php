<?php
// Crea istanza di PDO su credenziali di connessione 

// Costanti
define("host", "localhost");
define("user", "root");
define("pass", "");
define("dbname", "form-ajax"); // Login

$dsn = "mysql:dbname=" . dbname . ";host =" . host;

// Istanza di PDO 
try {
    $sql = new PDO($dsn, user, pass);
} catch (PDOException $e) {
    exit("Nessuna connessione" . $e->getMessage());
}


// prova email 



/*
if ($stmt->execute()) {
    // Inviare email di notifica
    $to = "valenzigianl04@gmail.com";
    $subject = "Nuova Registrazione";
    $message = "Un nuovo utente si è registrato. Username: $user, Email: $email";
    $headers = "From: webmaster@example.com";

    if (mail($to, $subject, $message, $headers)) {
        echo "Registrazione completata e email inviata.";
    } else {
        echo "Registrazione completata ma email non inviata.";
    }
} else {
    echo "Errore: " . $stmt->error;
}

?>
<!-- d -->*/