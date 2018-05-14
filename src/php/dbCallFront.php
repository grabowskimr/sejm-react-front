<?php
$_POST = json_decode(file_get_contents('php://input'), true);

$servername = "localhost";
$username = "sejmik_2018";
$password = "c0lUFF45M";
$dbmane = "sejmik_2018";

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








if ($_GET['action'] == 'getEnvoyStructure') {
	$sql = "SHOW FULL columns FROM EnvoyList";
	$result = $conn->query($sql);
	$outLista = [];
	while($row = mysqli_fetch_assoc($result)) {
		array_push($outLista,$row);
	}
	print_r(json_encode($outLista));	
}

if (isset($_POST["addEnvoy"])) {
	$envoy = $_POST['envoy'];
	$image = $_POST['image'];
	$structure = $_POST['structure'];
	$sql = "INSERT INTO EnvoyList VALUES (NULL";
	foreach($envoy as $key => $value)
	{
		if($key == 'points') {
			$sql .= ", $value";			
		} else if($key == 'image') {
			$sql .= ", '$image' ";
		} else {
			$sql .= ", '$value' ";
		}
	}
	$sql .= ")";
	$result = $conn->query($sql);
	echo $result;
}

if ($_GET['action'] == 'getMeps') {
	$name = $_GET['name'];
	$surname = $_GET['surname'];
	$party = $_GET['party'];
	$constituency = $_GET['constituency'];
	$page = $_GET['page'];
	$step = $_GET['step'];
	$sql = "SELECT * FROM EnvoyList WHERE name LIKE '%$name%' AND surname LIKE '%$surname%' AND party LIKE '%$party%' AND constituency LIKE '%$constituency%' LIMIT $page, $step ";
	$result = $conn->query($sql);
	$outLista = [];
	while($row = mysqli_fetch_assoc($result)) {
		array_push($outLista,$row);
	}
	print_r(json_encode($outLista));	
}

if ($_GET['action'] == 'getEnvoy') {
	$id = $_GET['id'];
	$sql = "SELECT * FROM EnvoyList where id=$id";
	$result = $conn->query($sql);
	$outLista = [];
	while($row = mysqli_fetch_assoc($result)) {
		array_push($outLista,$row);
	}
	print_r(json_encode($outLista));	
}

if (isset($_POST["updateEnvoy"])) {
	$envoy = $_POST['envoy'];
	$image = $_POST['image'];
	$id = $_POST['id'];
	$structure = $_POST['structure'];
	$sql = "UPDATE EnvoyList SET ";
	$numItems = count($envoy);
	$i = 0;
	foreach($envoy as $key => $value){
		if(++$i < $numItems) {
			if($key == 'points') {
				$sql .= "$key = $value, ";			
			} else if($key == 'image') {
				$sql .= "$key = '$image', ";
			} else {
				$sql .= "$key = '$value', ";
			}
		} else {
			$sql .= "$key = '$value' ";
		}
	}
	$sql .= "WHERE id = ".$id;
	$result = $conn->query($sql);
	echo $result;
}

if ($_GET['action'] == 'getParty') {
	$sql = "SELECT * FROM party";
	$result = $conn->query($sql);
	$outLista = [];
	while($row = mysqli_fetch_assoc($result)) {
		array_push($outLista,$row);
	}
	print_r(json_encode($outLista));	
}

if (isset($_POST["addCriterion"])) {
	$name = $_POST['name'];
	$t=time();
	$sql = "ALTER TABLE EnvoyList ADD criterion$t text NOT NULL COMMENT '$name';";
	$result = $conn->query($sql);
	echo $result;
}

if (isset($_POST["removeCriterion"])) {
	$name = $_POST['name'];
	$sql = "ALTER TABLE EnvoyList DROP COLUMN $name;";
	$result = $conn->query($sql);
	$sql2 = "SHOW FULL columns FROM EnvoyList";
	$result = $conn->query($sql2);
	$outLista = [];
	while($row = mysqli_fetch_assoc($result)) {
		array_push($outLista,$row);
	}
	print_r(json_encode($outLista));
}

if (isset($_POST["removeEnvoy"])) {
	$id = $_POST['id'];
	$t=time();
	$sql = "DELETE FROM EnvoyList WHERE id = $id";
	$result = $conn->query($sql);
	// $sql2 = "SHOW FULL columns FROM EnvoyList";
	// $result = $conn->query($sql2);
	// $outLista = [];
	// while($row = mysqli_fetch_assoc($result)) {
	// 	array_push($outLista,$row);
	// }
	// print_r(json_encode($outLista));
	echo $result;
}