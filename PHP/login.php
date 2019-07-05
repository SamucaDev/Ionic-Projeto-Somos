    
<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

if(isset($_GET["email"]) || isset($_GET["senha"]) ){
	if( !empty($_GET["email"])  || !empty($_GET["senha"])  ){

        require 'config.php';
        
		$email= $_GET["email"];
        $senha= $_GET["senha"];
        
		
	$sql = $conexao->prepare("SELECT * FROM usuario where EMAIL_USU='$email'  and SENHA_USU= '$senha' ");

    $sql->execute();
        
    $outp = "";
		if( $rs=$sql->fetch()) {
			if ($outp != "") {$outp .= ",";}
			$outp .= '{"codigo":"'  . $rs["COD_USU"] . '",';
            $outp .= '"email":"'   . $rs["EMAIL_USU"]        . '",';
            $outp .= '"nome":"'   . $rs["NOME_USU"]        . '",';
            $outp .= '"foto":"'   . $rs["FOTO_USU"]        . '",';
            $outp .= '"nivel":"'   . $rs["NIVEL_USU"]        . '",';
            $outp .= '"status":"'   . $rs["STATUS_USU"]        . '",';
            $outp .= '"senha":"'. $rs["SENHA_USU"]     . '"}';
            
            
            $outp ='{"msg": {"logado": "sim", "texto": "logado com sucesso!"}, "dados": '.$outp.'}';
            
		}else{
            
            $outp ='{"msg": {"logado": "nao", "texto": "login ou senha invalidos!"}, "dados": {'.$outp.'}}';
           
            
        }
      
		//$conn->close();
       
        echo utf8_encode($outp);
        
        
	}
}
?>