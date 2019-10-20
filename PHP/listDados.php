<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
require 'config.php';

try {
    if (!$conexao) {
        echo "Não foi possivel conectar com Banco de Dados!";
    }


    $query = $conexao->prepare("SELECT * FROM `profissional` as P INNER JOIN usuario as U ON (P.COD_USU=U.COD_USU) WHERE U.TIPO_USU = 6");

    $query->execute();
    

    $out = "[";

    while ($result = $query->fetch()) {
        if ($out != "[") {
            $out .= ",";
        }
        $out .= '{"COD_PROFI": "' . $result["COD_PROFI"] . '",';
        $out .= '"CRP_PROFI": "' . $result["CRP_PROFI"] . '",';
        $out .= '"CRM_PROFI": "' . $result["CRM_PROFI"] . '",';
        $out .= '"CARGO_PRO": "' . $result["CARGO_PRO"] . '",';        
        $out .= '"INSTITUICAO_PROFI": "' . $result["INSTITUICAO_PROFI"] . '",';       
        $out .= '"CNPJ_INSTITUICAO": "' . $result["CNPJ_INSTITUICAO"] . '",';  
        $out .= '"TELEFONE_INSTITUICAO": "' . $result["TELEFONE_INSTITUICAO"] . '",';  
        $out .= '"COD_USU": "' . $result["COD_USU"] . '",';  
        $out .= '"NOME_USU": "' . $result["NOME_USU"] . '",';  
        $out .= '"SOBRENOME_USU": "' . $result["SOBRENOME_USU"] . '",';  
        $out .= '"CPF_USU": "' . $result["CPF_USU"] . '",';  
        $out .= '"RG_USU": "' . $result["RG_USU"] . '",';  
        $out .= '"ENDERECO_USU": "' . $result["ENDERECO_USU"] . '",';  
        $out .= '"BAIRRO_USU": "' . $result["BAIRRO_USU"] . '",';  
        $out .= '"NUMERO_USU": "' . $result["NUMERO_USU"] . '",';  
        $out .= '"COMPLEMENTO_USU": "' . $result["COMPLEMENTO_USU"] . '",';  
        $out .= '"CEP_USU": "' . $result["CEP_USU"] . '",';  
        $out .= '"UF_USU": "' . $result["UF_USU"] . '",';  
        $out .= '"PAIS_USU": "' . $result["PAIS_USU"] . '",';  
        $out .= '"CIDADE_USU": "' . $result["CIDADE_USU"] . '",';  
        $out .= '"DATANASC_USU": "' . $result["DATANASC_USU"] . '",';  
        $out .= '"TELEFONE_USU": "' . $result["TELEFONE_USU"] . '",';   
        $out .= '"CELULAR_USU": "' . $result["CELULAR_USU"] . '",';
        $out .= '"EMAIL_USU": "' . $result["EMAIL_USU"] . '",';
        $out .= '"TIPO_USU": "' . $result["TIPO_USU"] . '",';
        $out .= '"DATA_INICIO": "' . $result["DATA_INICIO"] . '",';
        $out .= '"FOTO_USU": "' . $result["FOTO_USU"] . '"}';
    }
    $out .= "]";
    echo $out;
} catch (Exception $e) {
    echo "Erro: " . $e->getMessage();
};