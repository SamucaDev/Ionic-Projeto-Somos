<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

date_default_timezone_set('America/Sao_Paulo');

    $humor = $_GET['emoji'];
    $cod_usuario = $_GET['codigoUsuario'];   
    $now = new DateTime();
    $datetime = $now->format('Y-m-d'); 

$dados;

require_once 'config.php';



if($conexao){
     $Sql = "INSERT INTO humor (TIPO_HUMOR, COD_USU, DIA_HUMOR) VALUES ('$humor', '$cod_usuario', '$datetime')";


  
    $query = $conexao->prepare($Sql);
    $query ->execute();
      
    
   

        /* Issue the real SELECT statement and work with the results */
         if ($outp != "") {$outp .= ",";}
                                
        $outp ='{"msg": "Humor incluido"}';
    
    /* No rows matched -- do something else */
   
    

}else{
      $dados = array('mensage' => "Nao foi possivel iserir os dados! Tente novamente mais tarde.");
      echo json_encode($dados);
}


echo utf8_encode($outp);

?>