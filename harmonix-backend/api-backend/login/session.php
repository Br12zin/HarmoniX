<?php
session_start();
require_once('../headers.php');

if (isset($_SESSION['cliente_id'])) {
    echo json_encode([
        'status' => 'success',
        'cliente_id' => $_SESSION['cliente_id']
    ]);
} else {
    echo json_encode([
        'status' => 'error',
        'message' => 'Usuário não logado.'
    ]);
}
