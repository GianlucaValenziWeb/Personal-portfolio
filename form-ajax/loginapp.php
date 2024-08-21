<?php
session_start();
include "includes/connect.php";
include "classi/Form.class.php";

$user = $_POST["username"];
$pass = $_POST["password"];

$q = "SELECT * FROM iscritti WHERE username = '$user'";

$stmt = $sql->query($q);

$tot = $stmt->rowCount();

if ($tot == 0)
    echo "Email o password errate";

else {

    $arr = $stmt->fetch(PDO::FETCH_ASSOC);

    $indb = $arr["password"];

    if (!password_verify($pass, $indb))
        echo "Email o password errate";

    else {
        $code =  Form::RandCode(10);
        $_SESSION["logged"] = $code;
        $_SESSION["nome"] = $arr["nome"];
        echo "<script>
        window.location='area-riservata.php?code=$code'
       </script>";
    }
}
