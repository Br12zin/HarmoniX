<?php
// backend/api/frete.php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

// Recebe o CEP do front-end (React Native)
$cepDestino = $_GET['cep'] ?? null;

if (!$cepDestino) {
  echo json_encode(["erro" => "CEP não informado"]);
  exit;
}

// Configura a requisição CURL
$curl = curl_init();
curl_setopt_array($curl, [
  CURLOPT_URL => "https://www.melhorenvio.com.br/api/v2/me/shipment/calculate",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_HTTPHEADER => [
    // "Authorization: Bearer SEU_TOKEN_AQUI", // Troque pelo seu token real
    "Content-Type: application/json"
  ],
  CURLOPT_POST => true,
  CURLOPT_POSTFIELDS => json_encode([
    "from" => ["postal_code" => "12042455"], // CEP de origem (sua loja)
    "to" => ["postal_code" => $cepDestino],  // CEP de destino (cliente)
    "products" => [[
      "weight" => 1.0,   // peso em kg
      "width" => 20,     // cm
      "height" => 10,    // cm
      "length" => 15,    // cm
      "quantity" => 1
    ]]
  ])
]);

$response = curl_exec($curl);
$httpCode = curl_getinfo($curl, CURLINFO_HTTP_CODE);
curl_close($curl);

// Retorna o resultado
if ($httpCode >= 200 && $httpCode < 300) {
  echo $response;
} else {
  echo json_encode(["erro" => "Erro ao consultar API de frete", "status" => $httpCode]);
}
