<?php

date_default_timezone_set('America/Sao_Paulo');

$data = file_get_contents("php://input");
$objData = json_decode($data);
require 'config.php';

printf($data);

$conteudoPost= $objData->conteudoPost;
$codigo= $objData->codigo;
$fotoPost= $objData->fotoPost;
$codigoUsuario= $objData->codigoUsuario;


$conteudoPost = str_replace("&nbsp;"," ",$conteudoPost);
$conteudoPost = str_replace("\n", " ", $conteudoPost);
$conteudoPost = str_replace("\r", "", $conteudoPost);
$conteudoPost = preg_replace('/\s/',' ',$conteudoPost);

$conteudoPost= stripslashes($conteudoPost);
$fotoPost= stripslashes($fotoPost);
$codigoUsuario= stripslashes($codigoUsuario);
$codigo= stripslashes($codigo);

$conteudoPost= trim($conteudoPost);
$fotoPost= trim($fotoPost);
$codigoUsuario= trim($codigoUsuario);
$codigo= trim($codigo);

$dados;


if($conexao){
$Sql = "INSERT INTO denuncia (CONTEUDO_DENU, COD_USU_POSTOU, COD_POST) VALUES ('$conteudoPost','$codigoUsuario', '$codigo')";

    printf($Sql);
    $query = $conexao->prepare($Sql);
    $query ->execute();

    echo '\n dados inseridos com sucesso';

}else{
      $dados = array('mensage' => "Não foi possivel iserir os dados! Tente novamente mais tarde.");
      echo json_encode($dados);
};

?>