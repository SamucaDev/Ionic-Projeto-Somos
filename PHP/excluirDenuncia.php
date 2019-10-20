<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

date_default_timezone_set('America/Sao_Paulo');

$data = file_get_contents("php://input");
$objData = json_decode($data);

printf($data);

$codDenu= $objData->codigoDenuncia;

$codDenu= stripslashes($codDenu);

$codDenu= trim($codDenu);

require_once 'config.php';

if($conexao){
    $Sql = "DELETE FROM denuncia WHERE COD_DENU='$codDenu'";

    printf($Sql);
    $query = $conexao->prepare($Sql);
    $query ->execute();

    echo '\n dados inseridos com sucesso';

}else{
      $dados = array('mensage' => "Não foi possivel inserir os dados! Tente novamente mais tarde.");
      echo json_encode($dados);
};

?>