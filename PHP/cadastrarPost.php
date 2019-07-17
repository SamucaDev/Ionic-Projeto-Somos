<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

date_default_timezone_set('America/Sao_Paulo');

$data = file_get_contents("php://input");
$objData = json_decode($data);

printf($data);

$conteudoPost= $objData->conteudoPost;
$fotoPost= $objData->fotoPost;
$codigoUsuario= $objData->codigoUsuario;

$conteudoPost= stripslashes($conteudoPost);
$fotoPost= stripslashes($fotoPost);
$codigoUsuario= stripslashes($codigoUsuario);

$conteudoPost= trim($conteudoPost);
$fotoPost= trim($fotoPost);
$codigoUsuario= trim($codigoUsuario);

$dados;

require_once 'config.php';

if($conexao){
    $Sql = 
    "INSERT INTO post (CONTEUDO_POST, FOTO_POST, COD_USU_POSTOU) 
     VALUES ('$conteudoPost','$fotoPost','$codigoUsuario')";

    printf($Sql);
    $query = $conexao->prepare($Sql);
    $query ->execute();

    echo '\n dados inseridos com sucesso';

}else{
      $dados = array('mensage' => "Não foi possivel iserir os dados! Tente novamente mais tarde.");
      echo json_encode($dados);
};

?>