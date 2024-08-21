<?php
include "includes/connect.php";
include "classi/Form.class.php";

$nome = Form::StringReal($_POST["nome"]);
$cognome = Form::StringReal($_POST["cognome"]);
$user = $_POST["username"];
$pass = $_POST["password"];

// Controlli 
if (!filter_var($user, FILTER_VALIDATE_EMAIL))
    echo "Mail non valida";

else if (Form::CtrlDouble("SELECT username FROM iscritti WHERE username= '$user'", $sql))
    echo "Questa email è stata già registrata";

else if (!Form::CtrlPass($pass))
    echo "La password deve contenere almeno un carattere speciale";

else {
    $pass = password_hash($pass, PASSWORD_DEFAULT);

    $q = "INSERT INTO iscritti (nome, cognome, username, password) VALUES ('$nome','$cognome','$user','$pass')";

    try {
        $sql->query($q);
        echo "<script>
       window.location='login.html'
      </script>";
    } catch (PDOException $e) {
        echo "L'utente non è stato inserito. Riprovi più tardi" . $e->getMessage();
    }
}

?>
