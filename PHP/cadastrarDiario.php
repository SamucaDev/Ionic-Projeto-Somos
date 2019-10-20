<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

date_default_timezone_set('America/Sao_Paulo');

$data = file_get_contents("php://input");
$objData = json_decode($data);

printf($data);

$tituloDiario= $objData->tituloDiario;
$conteudodiario= $objData->conteudodiario;
$imageSrcDiario= $objData->imageSrcDiario;
$codigoUsuario= $objData->codigoUsuario;



$conteudodiario = str_replace("&nbsp;"," ",$conteudodiario);
$conteudodiario = str_replace("\n", " ", $conteudodiario);
$conteudodiario = str_replace("\r", "", $conteudodiario);
$conteudodiario = preg_replace('/\s/',' ',$conteudodiario);

$tituloDiario= stripslashes($tituloDiario);
$conteudodiario= stripslashes($conteudodiario);
$imageSrcDiario= stripslashes($imageSrcDiario);
$codigoUsuario= stripslashes($codigoUsuario);

$tituloDiario= trim($tituloDiario);
$conteudodiario= trim($conteudodiario);
$imageSrcDiario= trim($imageSrcDiario);
$codigoUsuario= trim($codigoUsuario);

$dados;

require_once 'config.php';

if($conexao){
 $Sql = "INSERT INTO diario (TITULO_DIARIO, CONTEUDO_DIARIO, IMAGEM_DIARIO, COD_USU) VALUES ('$tituloDiario','$conteudodiario','$imageSrcDiario','$codigoUsuario')";

    printf($Sql);
    $query = $conexao->prepare($Sql);
    $query ->execute();

    echo '\n dados inseridos com sucesso';

}else{
      $dados = array('mensage' => "Não foi possivel iserir os dados! Tente novamente mais tarde.");
      echo json_encode($dados);
};

?>