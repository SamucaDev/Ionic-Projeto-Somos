<?php
header("Access-Control-Allow-Origin: *");
header('Content-Type: text/html; charset=utf-8');
$host = "mysql:host=localhost;dbname=projetosomos";
$usuario = "root";
$senha = "";
try {
	$conexao = new PDO($host, $usuario, $senha);


	$sql = $conexao->prepare('SELECT * FROM `usuario`');

		$sql->execute();

		$dados = "[";

		while($lista = $sql->fetch()){
			if ($dados != "[") {
				$dados .= ",";
			}
			$dados .= '{"Codigo": "'.$lista["COD_USU"].'",';

			$dados .= '"Nome1": "'.$lista["NOME_USU"].'",';
			$dados .= '"CPF": "'.$lista["CPF_USU"].'",';
			$dados .= '"RG": "'.$lista["RG_USU"].'",';
			$dados .= '"Endereço": "'.$lista["ENDERECO_USU"].'",';
			$dados .= '"Bairro": "'.$lista["BAIRRO_USU"].'",';
			$dados .= '"Numero": "'.$lista["NUMERO_USU"].'",';
			$dados .= '"Complemento": "'.$lista["COMPLEMENTO_USU"].'",';
			$dados .= '"CEP": "'.$lista["CEP_USU"].'",';
			$dados .= '"UF": "'.$lista["UF_USU"].'",';
			$dados .= '"País": "'.$lista["PAIS_USU"].'",';
			$dados .= '"Cidade": "'.$lista["CIDADE_USU"].'",';
			$dados .= '"DataDeNascimento": "'.$lista["DATANASC_USU"].'",';
			$dados .= '"Telefone": "'.$lista["TELEFONE_USU"].'",';
			$dados .= '"Celular": "'.$lista["CELULAR_USU"].'",';
			$dados .= '"E-Mail": "'.$lista["EMAIL_USU"].'",';
			$dados .= '"Login": "'.$lista["LOGIN_USU"].'",';
			$dados .= '"Senha": "'.$lista["SENHA_USU"].'",';
			
			

			$dados .= '"ConfirmarSenha": "'.$lista["CONFIRMARSENHA_USU"].'"}';
		}
		$dados .= "]";
		echo $dados;



} catch (Exception $ex) {
	echo "erro ao listar: ". $ex->getMessage();
};