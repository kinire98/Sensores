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
    <div id="btn-volver" style="display:none;">
        <i class="fas fa-home" onclick="volver()"></i>
    </div>
    <div id="superior">
        <div id="inferior">
            <form id="form_crear">
                <label for="width">Ancho del recipiente (en píxeles):</label><br>
                <input type="number" name="width" id="width" step="50" min="500" max="900"><br>
                <label for="height">Alto del recipiente (en píxeles):</label><br>
                <input type="number" name="height" id="height" step="50" min="500" max="900"><br>
                <label for="number">Número de puntos:</label><br>
                <input type="number" name="number" id="number" min="1" max="4">
                <label for="ref">Referencia</label><br>
                <input type="text" name="ref" id="ref">
                <span id="error"></span>
            </form>
            <button onclick="generarLienzo()">Generar lienzo</button>
        </div>

        <div id="form_ver">
            <h2>Selecciona un movimiento</h2>
            <select name="movimientoBBDD" id="movimientoBBDD">
                <?php
                    $sql = "SELECT * FROM sensores_2";
                    $result = $conn->query($sql);
                        if ($result->num_rows > 0){
                            $value = -1;

                            $lista_movimientos1 = [];
                            $lista_movimientos2 = [];
                            $lista_movimientos3 = [];
                            $lista_movimientos4 = [];

                            $lista_altura = [];
                            $lista_anchura = [];

                            $lista_referencia = [];

                            while($row = $result->fetch_assoc()){
                                $value = $value + 1;

                                array_push($lista_movimientos1, $row['movimientos1']);
                                array_push($lista_movimientos2, $row['movimientos2']);
                                array_push($lista_movimientos3, $row['movimientos3']);
                                array_push($lista_movimientos4, $row['movimientos4']);


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
                    <div class="divInternoo" id="divInterno"></div>
                    <div class="divInternoo2" id="divInterno2"></div>
                    <div class="divInternoo3" id="divInterno3"></div>
                    <div class="divInternoo4" id="divInterno4"></div>
                </div>
                <div id="Instrucciones">
                        <div>
                            <ul>
                                <li>Punto 1: <div class="divInterno"></div></li>
                                <li>W -> Arriba</li>
                                <li>A -> Izquierda</li>
                                <li>S -> Abajo</li>
                                <li>D -> Derecha</li>
                                <li>Enter -> Hallar posición punto</li>
                        </ul>
                        </div>
                        <div>
                            <ul>
                                <li>Punto 2: <div class="divInterno2"></div></li>
                                <li>T -> Arriba</li>
                                <li>F -> Izquierda</li>
                                <li>G -> Abajo</li>
                                <li>H -> Derecha</li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li>Punto 3: <div class="divInterno3"></div></li>
                                <li>J -> Arriba</li>
                                <li>N-> Izquierda</li>
                                <li>M -> Abajo</li>
                                <li>, -> Derecha</li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li>Punto 4: <div class="divInterno4"></div></li>
                                <li>O -> Arriba</li>
                                <li>K -> Izquierda</li>
                                <li>L -> Abajo</li>
                                <li>Ñ -> Derecha</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <button onclick="repetir()" class="botonesPanel" id="botonCoordenadas" style="display: none;">Cambiar medidas lienzo</button>
        
    <script src="script.js"></script>
    <script src="../jquery.min.js"></script>
    <script src="../font-awesome.js"></script>
    <script>
        var lista_movimientos1JS = <?php echo json_encode($lista_movimientos1); ?>;
        var lista_movimientos2JS = <?php echo json_encode($lista_movimientos2); ?>;
        var lista_movimientos3JS = <?php echo json_encode($lista_movimientos3); ?>;
        var lista_movimientos4JS = <?php echo json_encode($lista_movimientos4); ?>;

        var lista_referenciaJS = <?php echo json_encode($lista_referencia); ?>;

        var lista_alturaJS = <?php echo json_encode($lista_altura); ?>;
        var lista_anchuraJS = <?php echo json_encode($lista_anchura); ?>;
    </script>
    <script src="movimientoSelect.js"></script>
</body>
</html>