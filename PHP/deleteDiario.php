<?php

date_default_timezone_set('America/Sao_Paulo');

$data = file_get_contents("php://input");
$codigo = json_decode($data);
$codigo = trim($codigo);

$dados; 

require_once 'config.php';


if($conexao){
    $Sql = "DELETE FROM diario where COD_DIARIO ='$codigo'";

    $query = $conexao->prepare($Sql);
    $query ->execute();

    echo 'PRODUTO EXCLUÍDO COM SUCESSO';
   
}else{
      $dados = array('mensage' => "Não foi possivel excluir os dados! .");
      echo json_encode($dados);
};

?>