<?php require "../BackEnd/conexion.php"; ?>

<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" href="./style.css">
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div id="suoerior">
        <div id="inferior">
            <form>
                <label for="width">Anchura del recipiente (en píxeles):</label><br>
                <input type="number" name="width" id="width" step="50" min="500" max="900"><br>
                <label for="height">Altura del recipiente (en píxeles):</label><br>
                <input type="number" name="height" id="height" step="50" min="500" max="900"><br>
            </form>
            <button onclick="generarLienzo()">Generar lienzo</button>
        </div>


        <div>
            <select name="movimientoBBDD" id="movimientoBBDD">
                <?php
                    $sql = "SELECT * FROM sensores";
                    $result = $conn->query($sql);
                        if ($result->num_rows > 0){
                            $value = -1;
                            $lista_longitud1 = [];
                            $lista_longitud2 = [];
                            $lista_longitud3 = [];
                            $lista_longitud4 = [];

                            $lista_movimientos = [];

                            $lista_angulo1 = [];
                            $lista_angulo2 = [];
                            $lista_angulo3 = [];
                            $lista_angulo4 = [];

                            $lista_abscisa = [];
                            $lista_oordenada = [];

                            //$lista_referencia = [];
                            while($row = $result->fetch_assoc()){
                                $value = $value + 1;
                                array_push($lista_longitud1, $row['longitud1']);
                                array_push($lista_longitud2, $row['longitud2']);
                                array_push($lista_longitud3, $row['longitud3']);
                                array_push($lista_longitud4, $row['longitud4']);

                                array_push($lista_movimientos, $row['movimientos']);

                                array_push($lista_longitud1, $row['angulo1']);
                                array_push($lista_longitud1, $row['angulo2']);
                                array_push($lista_longitud1, $row['angulo3']);
                                array_push($lista_longitud1, $row['angulo4']);

                                array_push($lista_abscisa, $row['abscisa']);
                                array_push($lista_oordenada, $row['oordenada']);

                                $referencia = $row['referencia'];
                                ?>
                                <option value="<?php echo $value; ?>"><?php echo $referencia; ?></option> 
                                <?php
                            }}
                ?>
             </select>
             <button onclick="movimientoSelect()">BUSCAR</button>
             
        </div>



        <div id="general">
            <div id="contenedor">
                <div id="lienzo">
                    <div id="divInterno"></div>
                </div>
                <div id="Instrucciones">
                    <p>
                        Para mover el punto <br>
                        <li>
                            <ul>W -> Arriba</ul><br>
                            <ul>A -> Izquierda</ul><br>
                            <ul>S -> Derecha</ul><br>
                            <ul>D -> Abajo</ul><br>
                            <ul>Enter -> Hallar posición punto (Si se presiona, no se podrá mover el punto)</ul>
                        </li>
                    </p>
                </div>
            </div>
        </div>
    </div>
    <!-- <script src="./script.js"></script> -->
    <script src="./generarLienzo.js"></script>
    <script src="./dibujarCanvas.js"></script>
    <script src="./escuchaDeEventos.js"></script>
    <script src="../jquery.min.js"></script>
    <script>
        var lista_movimientosJS = <?php echo json_encode($lista_movimientos); ?>;
    </script>
    <script src="movimientoSelect.js"></script>

</body>
</html>