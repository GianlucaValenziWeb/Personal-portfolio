<?php
session_start();
$code = $_GET["code"];

if (!isset($_SESSION["logged"]) || $_SESSION["logged"] != $code)
    header("Location:login.html")
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Area riservata</title>
    <link rel="stylesheet" href="style.css">
    <link rel="icon" type="image/png" href="images/favicon-32x32.png">
</head>

<body>
    <div class="container-a">
        <div class="container-area">
            <h3>Benvenuto <span><?php echo $_SESSION["nome"] ?></span></h3>
            <p><strong>Questa è la tua area riservata,<span>scegli dove vuoi andare:</span></p></strong>
            <a href="registra.html" class="link">Registra</a>
            <a href="login.html" class="link">Accedi</a>
            <a href="logout.php" class="link">Esci</a>
        </div>
    </div>
</body>
</html>