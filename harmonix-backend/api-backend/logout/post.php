<?php
session_start();

// Remove todos os dados da sessão
session_unset();

// Destroi a sessão
session_destroy();

// Opcional: remove o cookie da sessão (em casos onde PHP não faz isso automaticamente)
setcookie(session_name(), '', time() - 3600, '/');

echo json_encode([
    "status" => "success",
    "message" => "Logout realizado com sucesso."
]);
