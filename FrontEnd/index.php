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
                <label for="width">Ancho del recipiente (en píxeles):</label><br>
                <input type="number" name="width" id="width" step="50" min="500" max="900"><br>
                <label for="height">Alto del recipiente (en píxeles):</label><br>
                <input type="number" name="height" id="height" step="50" min="500" max="900"><br>
                <label for="ref">Referencia</label><br>
                <input type="text" name="ref" id="ref">
                <span id="error"></span>
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

                            $lista_altura = [];
                            $lista_anchura = [];

                            $lista_referencia = [];

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

                                array_push($lista_altura, $row['altura']);
                                array_push($lista_anchura, $row['anchura']);

                                array_push($lista_referencia, $row['referencia']);

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
                
                <div id="Instrucciones" style="margin-top: 600px;">
                    <p>
                        Para mover el punto <br>
                        <ul>
                            <li>W-> Arriba</li><br>
                            <li>A -> Izquierda</li><br>
                            <li>S -> Derecha</li><br>
                            <li>D -> Abajo</li><br>
                            <li>Enter -> Hallar posición punto</li>
                        </ul>
                    </p>
                </div>
            </div>
        </div>
    </div>
    <script src="script.js"></script>
    <script src="../jquery.min.js"></script>
    <script>
        var lista_movimientosJS = <?php echo json_encode($lista_movimientos); ?>;
        var lista_referenciaJS = <?php echo json_encode($lista_referencia); ?>;

        var lista_alturaJS = <?php echo json_encode($lista_altura); ?>;
        var lista_anchuraJS = <?php echo json_encode($lista_anchura); ?>;
    </script>
    <script src="movimientoSelect.js"></script>
</body>
</html>