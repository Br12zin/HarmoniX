<?php

// INICIAR SESSÃO GLOBAL
$curl = curl_init();
// CONFIGURAR O CURL
$emailEncoded = urlencode($email);
$passwordEncoded = urlencode($password);
$url = "http://localhost:8080/adm/?email=$emailEncoded&senha=$passwordEncoded";

curl_setopt_array($curl, array(
    CURLOPT_URL => "http://localhost:8080/adm/?email=$email&senha=$password",
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
    CURLOPT_CUSTOMREQUEST => 'GET',

));
// RECUPERA O RETORNO DO CURL
$response = curl_exec($curl);

if (curl_errno($curl)) {
    $error_msg = curl_error($curl);
}
$http_status = curl_getinfo($curl, CURLINFO_HTTP_CODE);


// ENCERRAR O CURL
curl_close($curl);

if (isset($error_msg)) {
    // Trata o erro aqui
    die("Erro no cURL: $error_msg");
}
if ($http_status !== 200) {
    die("Erro HTTP: $http_status");
}

if (empty($response)) {
    $response = array();
} else {
    $response = json_decode($response, true);
}
