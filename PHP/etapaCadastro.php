<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

date_default_timezone_set('America/Sao_Paulo');

$dados;

require_once 'config.php';

    $email = $_GET['email'];
    
    $sql = $conexao->prepare("SELECT COD_USU, NOME_USU, SOBRENOME_USU FROM usuario WHERE EMAIL_USU = '$email'");

    $sql->execute();    

    $outp = "";

		if( $rs=$sql->fetch()) {
			if ($outp != "") {$outp .= ",";}
			$outp .= '{"codigoUsuario":"'  . $rs["COD_USU"] . '",';
            $outp .= '"nomeUsuario":"'   . $rs["NOME_USU"]        . '",';
            $outp .= '"sobrenomeUsuario":"'. $rs["SOBRENOME_USU"]     . '"}';
            
            
            $outp ='{"dados": '.$outp.'}';
            
        }else{$outp ='{"msg": {"logado": "nao", "texto": "login ou senha invalidos!"}, "dados": {'.$outp.'}}';}       
        
        echo utf8_encode($outp);       
 
?>