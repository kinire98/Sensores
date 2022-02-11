<?php
require "conexion.php";


if(isset($_POST['movimientos'])){
    
    $longitud1 = $_POST['longitud1'];
    $longitud2 = $_POST['longitud2'];
    $longitud3 = $_POST['longitud3'];
    $longitud4 = $_POST['longitud4'];
    $movimientos = $_POST['movimietos'];
    $angulo1 = $_POST['angulo1'];
    $angulo2 = $_POST['angulo2'];
    $angulo3 = $_POST['angulo3'];
    $angulo4 = $_POST['angulo4'];
    $referencia = $_POST['referencia'];
    $sql = "INSERT INTO sensores (longitud1, longitud2, longitud3, longitud4, movimientos, angulo1, angulo2, angulo3, angulo4, referencia) VALUES ('$longitud1', '$longitud2', '$longitud3', '$longitud4', '$movimientos', '$angulo1', '$angulo2', '$angulo3', '$angulo4', '$referencia')";
    if(mysqli_query($conn, $sql)){
    }
}

?>