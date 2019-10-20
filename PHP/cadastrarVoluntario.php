<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

date_default_timezone_set('America/Sao_Paulo');

$data = file_get_contents("php://input");
$objData = json_decode($data);

printf($data);

$email= $objData->email;
$password= $objData->senha;

$nome= $objData->nome;
$cpf= $objData->cpf;
$rg= $objData->rg;
$endereco= $objData->endereco;
$bairro= $objData->bairro;
$numero= $objData->numero;
$complemento= $objData->complemento;
$cep= $objData->cep;
$uf= $objData->uf;
$pais= $objData->pais;
$cidade= $objData->cidade;
$datanasc= $objData->datanasc;
$telefone= $objData->telefone;
$celular= $objData->celular;
$sobrenome= $objData->sobrenome;
$tipoUsuario= $objData->tipoUsuario;

$email= stripslashes($email);
$password= stripslashes($password);
$nome= stripslashes($nome);
$cpf= stripslashes($cpf);
$rg= stripslashes($rg);
$endereco= stripslashes($endereco);
$bairro= stripslashes($bairro);
$numero= stripslashes($numero);
$complemento= stripslashes($complemento);
$cep= stripslashes($cep);
$uf= stripslashes($uf);
$pais= stripslashes($pais);
$cidade= stripslashes($cidade);
$datanasc= stripslashes($datanasc);
$telefone= stripslashes($telefone);
$celular= stripslashes($celular);
$sobrenome= stripslashes($sobrenome);
$tipoUsuario= stripslashes($tipoUsuario);

$email= trim($email);
$password= trim($password);
$nome= trim($nome);
$cpf= trim($cpf);
$rg= trim($rg);
$endereco= trim($endereco);
$bairro= trim($bairro);   
$numero= trim($numero);
$complemento= trim($complemento);
$cep= trim($cep);
$uf= trim($uf);
$pais= trim($pais);
$cidade= trim($cidade);
$datanasc= trim($datanasc);
$telefone= trim($telefone);
$celular= trim($celular);
$sobrenome= trim($sobrenome);
$tipoUsuario= trim($tipoUsuario);



$dados;

require_once 'config.php';


if($conexao){
$Sql = "INSERT INTO usuario (NOME_USU, CPF_USU, RG_USU, ENDERECO_USU, BAIRRO_USU, NUMERO_USU, COMPLEMENTO_USU, CEP_USU, UF_USU, PAIS_USU ,
                          CIDADE_USU,DATANASC_USU, TELEFONE_USU, CELULAR_USU,EMAIL_USU, SENHA_USU, SOBRENOME_USU, TIPO_USU) 
     VALUES ('$nome','$cpf','$rg','$endereco','$bairro','$numero','$complemento','$cep', '$uf','$pais',
            '$cidade', '$datanasc','$telefone', '$celular', '$email','$password','$sobrenome', '$tipoUsuario')";

    printf($Sql);
    $query = $conexao->prepare($Sql);
    $query ->execute();

    echo '\n dados inseridos com sucesso';

}else{
      $dados = array('mensage' => "Não foi possivel iserir os dados! Tente novamente mais tarde.");
      echo json_encode($dados);
};

?>