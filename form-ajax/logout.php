<?php
session_start();

// sessione
if (isset($_SESSION["logged"])) {

    // Esci
    unset($_SESSION["logged"]);
    unset($_SESSION["nome"]);
}

// Rimandami alla Login
header("location:login.html");

?>