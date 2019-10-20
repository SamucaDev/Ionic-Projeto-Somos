<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
require 'config.php';

try {
    if (!$conexao) {
        echo "Não foi possivel conectar com Banco de Dados!";
    }
    $data = file_get_contents("php://input");

    $query = $conexao->prepare("SELECT P.VEREDITO_POST, P.COD_POST, P.DATA_POST, P.CONTEUDO_POST, P.FOTO_POST, P.STATUS_POST, P.COD_USU_POSTOU, P.COD_MOD_APROV, 
                                       U.NOME_USU, U.COD_USU, U.TIPO_USU, U.FOTO_USU, U.SOBRENOME_USU FROM post AS P 
                                       INNER JOIN usuario AS U ON P.COD_USU_POSTOU = U.COD_USU  WHERE P.STATUS_POST	= 'P' 
                                       ORDER BY P.COD_POST DESC ");

    $query->execute();

    $out = "[";

    while ($result = $query->fetch()) {
        if ($out != "[") {
            $out .= ",";
        }
        $out .= '{"codigoPost": "' . $result["COD_POST"] . '",';
        $out .= '"dataPost": "' . $result["DATA_POST"] . '",';
        $out .= '"conteudoPost": "' . $result["CONTEUDO_POST"] . '",';
        $out .= '"fotoPost": "' . $result["FOTO_POST"] . '",';
        $out .= '"statusPost": "' . $result["STATUS_POST"] . '",';
        $out .= '"codModAprov": "' . $result["COD_MOD_APROV"] . '",';
        $out .= '"nomeUsu": "' . $result["NOME_USU"] . '",';
        $out .= '"tipoUsu": "' . $result["TIPO_USU"] . '",';
        $out .= '"fotoUsu": "' . $result["FOTO_USU"] . '",';
        $out .= '"sobrenome": "' . $result["SOBRENOME_USU"] . '",';
        $out .= '"verificacaoPost": "' . $result["VEREDITO_POST"] . '",';
        $out .= '"codigoUsuPostou": "' . $result["COD_USU_POSTOU"] . '"}';
    }
    $out .= "]";
    echo $out;
} catch (Exception $e) {
    echo "Erro: " . $e->getMessage();
};
