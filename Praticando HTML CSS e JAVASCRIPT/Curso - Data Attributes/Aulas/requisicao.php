<!doctype html>
<html lang="pt-br">
	<head>
		<meta charset="UTF-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1">

		<title>Requisição PHP</title>

		<link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet">

		<style>
			* {
				box-sizing: border-box;
				color: #333;
				-webkit-font-smoothing: antialiased;
				-moz-osx-font-smoothing: grayscale;
			}

			body {
				margin: 0 auto;
				width: 80%;
			}

			div {
				display: block;
				width: 100%;
			}

			p, h1, h3 {
				font-family: 'Open Sans', sans-serif;
				line-height: 1.8em;
			}

			h3 {
				font-size: 16px;
			}

			p {
				font-size: 14px;
			}

			pre {
				background: #f4f4f4;
				display: inline-block;
				font-family: monospace;
				font-size: 14px;
				line-height: 1.8em;
				padding: 20px;
				width: 100%;
				white-space: pre-wrap;
				word-break: break-all;
			}

			.highlight:hover {
				color: blue;
			}
		</style>
	</head>
	<body>
		<div>
			<h1>Resultado da requisição:</h1>

			<p>Nesta página você pode conferir os dados que foram enviados na requisição.</p>

			<h3>GET</h3>

<pre>
<?php
	if (!empty($_GET)) {
		array_walk_recursive($_GET, function ($item, $key) {
			echo "<span class='highlight'>{$key}={$item}</span><br>";
		});
	} else {
		echo "Nenhum dado recebido.";
	}
?>
</pre>

			<h3>POST</h3>

<pre>
<?php
	if (!empty($_POST)) {
		array_walk_recursive($_POST, function ($item, $key) {
			echo "<span class='highlight'>{$key}={$item}</span><br>";
		});
	} else {
		echo "Nenhum dado recebido.";
	}
?>
</pre>

			<h3>Arquivos</h3>

<pre>
<?php
	if (!empty($_FILES)) {
		array_walk_recursive($_FILES, function ($item, $key) {
			echo "<span class='highlight'>{$key}={$item}</span><br>";
		});
	} else {
		echo "Nenhum arquivo recebido.";
	}
?>
</pre>

			<h3>json</h3>

<pre>
<?php
	$data = json_decode(file_get_contents('php://input'), true);

	if (!empty($data) && is_array($data)) {
		array_walk_recursive($data, function ($item, $key) {
			echo "<span class='highlight'>{$key}={$item}</span><br>";
		});
	} else {
		echo "Nenhum json recebido.";
	}
?>
</pre>
		</div>
	</body>
</html>