<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, PUT, PATCH, POST, DELETE, OPTIONS");
header('Access-Control-Max-Age: 86400');
header("Access-Control-Expose-Headers: Content-Length, X-JSON");
header("Access-Control-Allow-Headers: *");
header('Content-Type: text/html; charser=utf-8');
$host = "mysql:host=br554.hostgator.com.br;dbname=proj7639_ProjetoSomos";
$usuario = "proj7639_Admin";
$senha = "123Somos";

/*header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, PUT, PATCH, POST, DELETE, OPTIONS");
header('Access-Control-Max-Age: 86400');
header("Access-Control-Expose-Headers: Content-Length, X-JSON");
header("Access-Control-Allow-Headers: *");
$host = "mysql:host=localhost;dbname=projetosomos; charset=utf8";
$usuario = "root";
$senha = "";*/


$conexao = new PDO($host, $usuario, $senha);


?>