<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

date_default_timezone_set('America/Sao_Paulo');

$data = file_get_contents("php://input");
$objData = json_decode($data);

printf($data);

$crpProfi= $objData->crpProfi;
$crmProfi= $objData->crmProfi;
$cargoProfi= $objData->cargoProfi;
$instituicaoProfi= $objData->instituicaoProfi;
$cnpjInstituicao= $objData->cnpjInstituicao;
$telefoneInstituicao= $objData->telefoneInstituicao;
$CodigoUsuario= $objData->CodigoUsuario;

$crpProfi= stripslashes($crpProfi);
$crmProfi= stripslashes($crmProfi);
$cargoProfi= stripslashes($cargoProfi);
$instituicaoProfi= stripslashes($instituicaoProfi);
$cnpjInstituicao= stripslashes($cnpjInstituicao);
$telefoneInstituicao= stripslashes($telefoneInstituicao);
$CodigoUsuario= stripslashes($CodigoUsuario);


$crpProfi= trim($crpProfi);
$crmProfi= trim($crmProfi);
$cargoProfi= trim($cargoProfi);
$instituicaoProfi= trim($instituicaoProfi);
$cnpjInstituicao= trim($cnpjInstituicao);
$telefoneInstituicao= trim($telefoneInstituicao);
$CodigoUsuario= trim($CodigoUsuario);   


$dados;

require_once 'config.php';


if($conexao){
$Sql = "INSERT INTO profissional (CRP_PROFI, CRM_PROFI, CARGO_PRO, INSTITUICAO_PROFI, CNPJ_INSTITUICAO, TELEFONE_INSTITUICAO, COD_USU) 
     VALUES ('$crpProfi','$crmProfi','$cargoProfi','$instituicaoProfi','$cnpjInstituicao','$telefoneInstituicao','$CodigoUsuario'); UPDATE usuario SET TIPO_USU = '6' WHERE COD_USU='$CodigoUsuario'";

    printf($Sql);
    $query = $conexao->prepare($Sql);
    $query ->execute();

    echo '\n dados inseridos com sucesso';

}else{
      $dados = array('mensage' => "Não foi possivel iserir os dados! Tente novamente mais tarde.");
      echo json_encode($dados);
};

?>