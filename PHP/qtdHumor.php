<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

date_default_timezone_set('America/Sao_Paulo');


   

    $humor = $_GET['emoji'];
    $cod_usuario = $_GET['codigoUsuario'];
    $mes_selecionado = $_GET['mes_selecionado'];
    $ano_selecionado = $_GET['ano_selecionado'];
    $dia_selecionado = $_GET['dia_selecionado'];
    
    
   

$dados;

require_once 'config.php';



if($conexao){
     $Sql = "SELECT   * FROM humor WHERE DIA_HUMOR between
 ('$ano_selecionado-$mes_selecionado-01') and ('$ano_selecionado-$mes_selecionado-31') AND COD_USU= $cod_usuario AND TIPO_HUMOR = '$humor'";


  
    $query = $conexao->prepare($Sql);
    $query ->execute();
    
    
      $quantidade = $query->rowCount();
      
    
   

        /* Issue the real SELECT statement and work with the results */
         if ($outp != "") {$outp .= ",";}
                                
        $outp ='{"msg": {"produto": "existe", "texto": "verificando"}, "dados": '.$quantidade.'}';
    
    /* No rows matched -- do something else */
   
    

}else{
      $dados = array('mensage' => "Nao foi possivel iserir os dados! Tente novamente mais tarde.");
      echo json_encode($dados);
}


echo utf8_encode($outp);

?>