<?php
header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  echo json_encode(['status'=>'error','message'=>'Metodo non valido']);
  exit;
}

$name    = trim($_POST['name'] ?? '');
$email   = trim($_POST['email'] ?? '');
$message = trim($_POST['message'] ?? '');

if ($name === '' || $email === '' || $message === '') {
  echo json_encode(['status'=>'error','message'=>'Compila tutti i campi']);
  exit;
}
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
  echo json_encode(['status'=>'error','message'=>'Email non valida']);
  exit;
}

// Costruzione email
$to      = "gianlucavalenziweb@gmail.com";
$subject = "Messaggio dal tuo sito web";
$body  = "Messaggio dal tuo sito web\n\n";
$body .= "Nome: $name\n";
$body .= "Email: $email\n";
$body .= "Messaggio:\n$message\n";

$domain = $_SERVER['SERVER_NAME'] ?? 'localhost';
$from   = "no-reply@$domain";
$headers  = "From: Sito <$from>\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

if (mail($to, $subject, $body, $headers)) {
  echo json_encode(['status'=>'success']);
} else {
  echo json_encode(['status'=>'error','message'=>'Errore durante l\'invio della mail']);
}
