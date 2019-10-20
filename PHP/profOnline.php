<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
require 'config.php';

try {
    if (!$conexao) {
        echo "Não foi possivel conectar com Banco de Dados!";
    }

    $codigoUsuario = file_get_contents("php://input");
    $codigoUsuario= stripslashes($codigoUsuario);
    $codigoUsuario= trim($codigoUsuario);

    $query = $conexao->prepare("SELECT U.COD_USU, U.NOME_USU, U.SOBRENOME_USU, P.CARGO_PRO FROM usuario AS U INNER JOIN profissional AS P ON (U.COD_USU = P.COD_USU) WHERE U.TIPO_USU = 2 AND U.LOGADO_USU= 'Sim'");

    $query->execute();

    $out = "[";

    while ($result = $query->fetch()) {
        if ($out != "[") {
            $out .= ",";
        }
        $out .= '{"codUsuario": "' . $result["COD_USU"] . '",';
        $out .= '"nomeUsuario": "' . $result["NOME_USU"] . '",';
        $out .= '"sobrenomeUsuario": "' . $result["SOBRENOME_USU"] . '",';
        $out .= '"cargoUsuario": "' . $result["CARGO_PRO"] . '"}';
    }
    $out .= "]";
    echo $out;
} catch (Exception $e) {
    echo "Erro: " . $e->getMessage();
};