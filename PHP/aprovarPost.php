<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

date_default_timezone_set('America/Sao_Paulo');

$data = file_get_contents("php://input");
$objData = json_decode($data);

printf($data);

$codigoPost= $objData->codigoPost;
$dataPost= $objData->dataPost;
$codModAprov= $objData->codModAprov;
$codigoUsuPostou= $objData->codigoUsuPostou;
$vereditoPost= $objData->vereditoPost;

$vereditoPost = str_replace("&nbsp;"," ",$vereditoPost);
$vereditoPost = str_replace("\n", " ", $vereditoPost);
$vereditoPost = str_replace("\r", "", $vereditoPost);
$vereditoPost = preg_replace('/\s/',' ',$vereditoPost);

$codigoPost= stripslashes($codigoPost);
$dataPost= stripslashes($dataPost);
$codModAprov= stripslashes($codModAprov);
$codigoUsuPostou= stripslashes($codigoUsuPostou);
$vereditoPost= stripslashes($vereditoPost);

$codigoPost= trim($codigoPost);
$dataPost= trim($dataPost);
$codModAprov= trim($codModAprov);
$codigoUsuPostou= trim($codigoUsuPostou);
$vereditoPost= trim($vereditoPost);

require_once 'config.php';

if($conexao){
    $Sql = "UPDATE post SET COD_MOD_APROV='$codModAprov', VEREDITO_POST='$vereditoPost', STATUS_POST='A' WHERE COD_POST='$codigoPost'";

    printf($Sql);
    $query = $conexao->prepare($Sql);
    $query ->execute();

    echo '\n dados inseridos com sucesso';

}else{
      $dados = array('mensage' => "Não foi possivel inserir os dados! Tente novamente mais tarde.");
      echo json_encode($dados);
};

?>