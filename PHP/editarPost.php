<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

date_default_timezone_set('America/Sao_Paulo');

$data = file_get_contents("php://input");
$objData = json_decode($data);

$codigo = $objData->codigo;
$conteudoPost = $objData->conteudoPost;
$fotoPost = $objData->fotoPost;
$statusPost = $objData->statusPost;
$codModAprov = $objData->codModAprov;
$codigoUsuPostou = $objData->codigoUsuario;

$conteudoPost = str_replace("&nbsp;"," ",$conteudoPost);
$conteudoPost = str_replace("\n", " ", $conteudoPost);
$conteudoPost = str_replace("\r", "", $conteudoPost);
$conteudoPost = preg_replace('/\s/',' ',$conteudoPost);

$codigo = stripslashes($codigo);
$conteudoPost = stripslashes($conteudoPost);
$fotoPost = stripslashes($fotoPost);
$statusPost = stripslashes($statusPost);
$codModAprov = stripslashes($codModAprov);
$codigoUsuPostou = stripslashes($codigoUsuPostou);


$codigo = trim($codigo);
$conteudoPost = trim($conteudoPost);
$fotoPost = trim($fotoPost);
$statusPost = trim($statusPost);
$codModAprov = trim($codModAprov);
$codigoUsuPostou = trim($codigoUsuPostou);


$dados; 

require_once 'config.php';


if($conexao){
    $Sql = " UPDATE post set CONTEUDO_POST = '$conteudoPost', STATUS_POST = 'P' where COD_POST = '$codigo'";

   printf($Sql);
    $query = $conexao->prepare($Sql);
    $query ->execute();

    echo 'produto editado com sucesso';
   
}else{
      $dados = array('mensage' => "Não foi possivel editar os dados! Tente novamente mais tarde.");
      echo json_encode($dados);
};

?>