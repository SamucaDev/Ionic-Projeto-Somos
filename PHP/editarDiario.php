<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

date_default_timezone_set('America/Sao_Paulo');

$data = file_get_contents("php://input");
$objData = json_decode($data);

$tituloDiario = $objData->tituloDiario;
$conteudodiario = $objData->conteudodiario;
$imageSrcDiario = $objData->imageSrcDiario;
$codigoUsuario = $objData->codigoUsuario;
$codigo = $objData->codigo;

$conteudodiario = str_replace("&nbsp;"," ",$conteudodiario);
$conteudodiario = str_replace("\n", " ", $conteudodiario);
$conteudodiario = str_replace("\r", "", $conteudodiario);
$conteudodiario = preg_replace('/\s/',' ',$conteudodiario);

$tituloDiario = stripslashes($tituloDiario);
$conteudodiario = stripslashes($conteudodiario);
$imageSrcDiario = stripslashes($imageSrcDiario);
$codigoUsuario = stripslashes($codigoUsuario);
$codigo = stripslashes($codigo);


$tituloDiario = trim($tituloDiario);
$conteudodiario = trim($conteudodiario);
$imageSrcDiario = trim($imageSrcDiario);
$codigoUsuario = trim($codigoUsuario);
$codigo = trim($codigo);


$dados; 

require_once 'config.php';


if($conexao){
    $Sql = "UPDATE diario set TITULO_DIARIO = '$tituloDiario', CONTEUDO_DIARIO = '$conteudodiario' where COD_DIARIO = '$codigo'";

   printf($Sql);
    $query = $conexao->prepare($Sql);
    $query ->execute();

    echo 'produto editado com sucesso';
   
}else{
      $dados = array('mensage' => "Não foi possivel editar os dados! Tente novamente mais tarde.");
      echo json_encode($dados);
};

?>