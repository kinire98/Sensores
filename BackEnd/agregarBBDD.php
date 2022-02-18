<?php
require "conexion.php";

// -- AÑADE MOVIMIENTO A LA BBDD
if(isset($_POST['movimientos1'])){
    
    $nPuntos = $_POST['nPuntos'];
    $movimientos1 = $_POST['movimientos1'];
    $movimientos2 = $_POST['movimientos2'];
    $movimientos3 = $_POST['movimientos3'];
    $movimientos4 = $_POST['movimientos4'];
    $altura = $_POST['altura'];
    $anchura = $_POST['anchura'];
    $referencia = $_POST['referencia'];

    $sql = "SELECT * FROM sensores_2 WHERE referencia = '$referencia'";
    $result = $conn->query($sql);
        if ($result->num_rows > 0){
            $sql = "DELETE FROM sensores_2 WHERE referencia = '$referencia'";
            if(mysqli_query($conn, $sql)){}
        }

    $sql = "INSERT INTO sensores_2 ( nPuntos, movimientos1, movimientos2, movimientos3, movimientos4, altura, anchura, referencia) VALUES ('$nPuntos', '$movimientos1', '$movimientos2', '$movimientos3', '$movimientos4', '$altura', '$anchura', '$referencia')";
    if(mysqli_query($conn, $sql)){}
}


// 
?>