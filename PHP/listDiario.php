<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
require 'config.php';

try {
    if (!$conexao) {
        echo "Não foi possivel conectar com Banco de Dados!";
    }
    $data = file_get_contents("php://input");   

    $query = $conexao->prepare("SELECT * FROM `diario` where COD_USU= '$data' order by COD_DIARIO DESC");

    $query->execute();

    $out = "[";

    while ($result = $query->fetch()) {
        if ($out != "[") {
            $out .= ",";
        }
        $out .= '{"codigoDiario": "' . $result["COD_DIARIO"] . '",';
        $out .= '"tituloDiario": "' . $result["TITULO_DIARIO"] . '",';
        $out .= '"conteudoDiario": "' . $result["CONTEUDO_DIARIO"] . '",';
        $out .= '"dataDiario": "' . $result["DATA_DIARIO"] . '",';
        $out .= '"imageSrcDiario": "' . $result["IMAGEM_DIARIO"] . '",';
        $out .= '"CodigoUsuario": "' . $result["COD_USU"] . '"}';
    }
    $out .= "]";
    echo $out;
} catch (Exception $e) {
    echo "Erro: " . $e->getMessage();
};
