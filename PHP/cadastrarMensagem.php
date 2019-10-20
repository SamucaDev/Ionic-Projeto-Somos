<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

date_default_timezone_set('America/Sao_Paulo');

$data = file_get_contents("php://input");
$objData = json_decode($data);

printf($data);

$mensagemEnviada= $objData->mensagemEnviada;
$DeUsuario= $objData->DeUsuario;
$ParaUsuario= $objData->ParaUsuario;


$mensagemEnviada = str_replace("&nbsp;"," ",$mensagemEnviada);
$mensagemEnviada = str_replace("\n", " ", $mensagemEnviada);
$mensagemEnviada = str_replace("\r", "", $mensagemEnviada);
$mensagemEnviada = preg_replace('/\s/',' ',$mensagemEnviada);

$mensagemEnviada= stripslashes($mensagemEnviada);
$DeUsuario= stripslashes($DeUsuario);
$ParaUsuario= stripslashes($ParaUsuario);

$mensagemEnviada= trim($mensagemEnviada);
$DeUsuario= trim($DeUsuario);
$ParaUsuario= trim($ParaUsuario);

require_once 'config.php';

if($conexao){
$Sql = "INSERT INTO `conversa` (`COD_CONVERSA`, `COD_USU_REMETENTE`, `COD_USU_DESTINATARIO`, `CONVERSA_CONVERSA`, `DATA_CONVERSA`)VALUES (NULL, '$DeUsuario', '$ParaUsuario', '$mensagemEnviada', CURRENT_TIMESTAMP);";

    printf($Sql);
    $query = $conexao->prepare($Sql);
    $query ->execute();

    echo '\n dados inseridos com sucesso';

}else{
      $dados = array('mensage' => "Não foi possivel iserir os dados! Tente novamente mais tarde.");
      echo json_encode($dados);
};

?>