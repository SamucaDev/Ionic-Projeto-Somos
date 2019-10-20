<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

date_default_timezone_set('America/Sao_Paulo');

$data = file_get_contents("php://input");
$objData = json_decode($data);

printf($data);

$COD_USU= $objData->COD_USU;

$COD_USU= stripslashes($COD_USU);

$COD_USU= trim($COD_USU);

require_once 'config.php';

if($conexao){
    $Sql = "UPDATE usuario SET TIPO_USU= 2 WHERE COD_USU='$COD_USU'";

    printf($Sql);
    $query = $conexao->prepare($Sql);
    $query ->execute();

    echo '\n dados inseridos com sucesso';

}else{
      $dados = array('mensage' => "Não foi possivel inserir os dados! Tente novamente mais tarde.");
      echo json_encode($dados);
};

?>