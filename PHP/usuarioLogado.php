<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

require 'config.php';

date_default_timezone_set('America/Sao_Paulo');

$emailUsuario = file_get_contents("php://input");




$emailUsuario= stripslashes($emailUsuario);
$emailUsuario= trim($emailUsuario);




if($conexao){
    $Sql = "UPDATE usuario SET LOGADO_USU='SIM' WHERE EMAIL_USU= '$emailUsuario' ";
    
        printf($Sql);
        $query = $conexao->prepare($Sql);
        $query ->execute();
    
        echo '\n dados inseridos com sucesso';
    
    }else{
          $dados = array('mensage' => "Não foi possivel iserir os dados! Tente novamente mais tarde.");
          echo json_encode($dados);
    };
    
    ?>