<?php
require "conexion.php";


if(isset($_POST['movimientos'])){
    $movimientos = $_POST['movimietos'];
    $sql = "INSERT INTO sensores (movimientos) VALUES ('$movimientos')";
    if(mysqli_query($conn, $sql)){
    }
}

?>