<?php
$_POST = json_decode(file_get_contents('php://input'), true);

$servername = "localhost";
$username = "tets";
$password = "test";
$dbmane = "tets";

$conn = new mysqli($servername, $username, $password, $dbmane);
$conn->set_charset("utf8");

if ($_GET['action'] == 'getEnvoyList') {
	$sql = "SELECT * FROM EnvoyList ORDER BY surname ASC";
	$result = $conn->query($sql);
	$outLista = [];
	while($row = mysqli_fetch_assoc($result)) {
		array_push($outLista,$row);
	}
	print_r(json_encode($outLista));	
}

if ($_GET['action'] == 'getEnvoy') {
	$id = $_GET['id'];
	$sql = "SELECT * FROM EnvoyList WHERE id = (SELECT min(id) FROM EnvoyList WHERE id > $id) OR id = (SELECT max(id) FROM EnvoyList WHERE id < $id) OR id = $id ORDER BY id ASC";
	$result = $conn->query($sql);
	$outLista = [];
	while($row = mysqli_fetch_assoc($result)) {
		array_push($outLista,$row);
	}
	print_r(json_encode($outLista));	
}