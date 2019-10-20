<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
require 'config.php';

try {
    if (!$conexao) {
        echo "Não foi possivel conectar com Banco de Dados!";
    }
    $data = file_get_contents("php://input");

    $query = $conexao->prepare("SELECT D.COD_DENU, D.CONTEUDO_DENU, D.COD_USU_POSTOU, D.COD_POST, U.NOME_USU, U.SOBRENOME_USU, P.CONTEUDO_POST, P.DATA_POST, P.FOTO_POST FROM denuncia as D INNER JOIN usuario as U ON D.COD_USU_POSTOU = U.COD_USU INNER JOIN post as P ON D.COD_POST = P.COD_POST");
    $query->execute();

    $out = "[";

    while ($result = $query->fetch()) {
        if ($out != "[") {
            $out .= ",";
        }
        $out .= '{"codigoPost": "' . $result["COD_POST"] . '",';
        $out .= '"codigoDenuncia": "' . $result["COD_DENU"] . '",';
        $out .= '"conteudoDenuncia": "' . $result["CONTEUDO_DENU"] . '",';
        $out .= '"dataPost": "' . $result["DATA_POST"] . '",';
        $out .= '"conteudoPost": "' . $result["CONTEUDO_POST"] . '",';
        $out .= '"fotoPost": "' . $result["FOTO_POST"] . '",';
        $out .= '"statusPost": "' . $result["STATUS_POST"] . '",';
        $out .= '"codModAprov": "' . $result["COD_MOD_APROV"] . '",';
        $out .= '"nomeUsu": "' . $result["NOME_USU"] . '",';
        $out .= '"tipoUsu": "' . $result["TIPO_USU"] . '",';
        $out .= '"fotoUsu": "' . $result["FOTO_USU"] . '",';
        $out .= '"sobrenome": "' . $result["SOBRENOME_USU"] . '",';
        $out .= '"codigoUsuPostou": "' . $result["COD_USU_POSTOU"] . '"}';
    }
    $out .= "]";
    echo $out;
} catch (Exception $e) {
    echo "Erro: " . $e->getMessage();
};
