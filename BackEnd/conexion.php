<?php

/*$host = "localhost";
$dbusername = "u856751219_sardi_iker";
$dbpassword = "BBDD.Sardi.Iker2022";
$dbname = "u856751219_sensores_aweb";*/

$host = "localhost";
$dbusername = "root";
$dbpassword = "";
$dbname = "sensores";

$conn = mysqli_connect($host, $dbusername, $dbpassword, $dbname);

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

?>