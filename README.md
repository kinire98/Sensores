# SensoresAweb
## Proyecto de David e Iker Sensores Aplicaciones Web
Este proyecto propuesto por nuestra profesora trata de una especie de **lienzo**, en el cuál hay unos **puntos** de los cuáles hay que hallar su **posición** con unos **sensores** que se encuentran en las **esquinas**. 
*Como en el navegador no hay ninguna manera de simular dichos sensores, se simularon midiendo la distancia a los bordes del recipiente* de cada uno de los puntos.
Tras eso se obtuvo la distancia a cada una de las esquinas, la cual se utilizó para el resto de las operaciones.
Con estas **_Se calcularon las coordenadas estándar para los puntos y las coordenadas polares desde cada una de las esquinas_**, tomando su esquina como si fuera el origen de coordenadas.

***Instrucciones de uso:***
**Para generar un nuevo movimiento:**
- [ ]**-1 Seleccionar las medidas del lienzo, tanto alto como ancho _Solo se puede poner un alto o ancho de un mínimo de 500 píxeles y un máximo de 900 píxeles. Además tiene que ser múltiplo de 50_. También tendrás que seleccionar el número de puntos que quieres que aparezcan en el lienzo**
- [ ]*-2 Ponerle una referencia a dicho movimiento**NO SE PUEDE UTILIZAR UNA REFERENCIA YA EN USO***
- [ ]*-3 Presionar botón de generar lienzo. Si los pasos anteriores son correctos se generará el lienzo con el movmiento*
- [ ]**-4 Para mover el punto 1:**
    - [ ]***W-> ARRIBA***
    - [ ]***A-> IZQUIERDA***
    - [ ]***S -> ABAJO***
    - [ ]***D -> DERECHA***
- [ ]**-5 Para mover el punto 2:**
    - [ ]***T-> ARRIBA***
    - [ ]***F-> IZQUIERDA***
    - [ ]***G -> ABAJO***
    - [ ]***H -> DERECHA***
- [ ]**-6 Para mover el punto 3:**
    - [ ]***J-> ARRIBA***
    - [ ]***N-> IZQUIERDA***
    - [ ]***M -> ABAJO***
    - [ ]***, -> DERECHA***
- [ ]**-7 Para mover el punto 4:**
    - [ ]***O-> ARRIBA***
    - [ ]***K-> IZQUIERDA***
    - [ ]***L -> ABAJO***
    - [ ]***Ñ -> DERECHA***
- [ ]**-8 Para guardar el movimiento en la base de datos se debe presionar Enter._Cuando se presione Enter ya no se podrán mover los puntos_**
- [ ]**Para importar un movimiento:**
- [ ]**-1 Escribir la referencia del movimiento en el cuadro de texto que pone _Referencia_ y pulsar el botón**


--- CSS QUE DE MOMENTO NO FUNCIONA ----
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300&display=swap');
*{
    font-family: 'Lato', sans-serif;
    text-align: center;
    margin: 0;
    padding: 0;
    background:#072227 ;
}
#lienzo {
    height: 0;
    width: 0;
    border: 0;
    position: relative;
    align-items: center;
    z-index: 1;
    right: auto;
    top: auto;
    /*
    Los estilos de los div con el movimiento y las instrucciones hay que cambiarlos
    y cambiar su tamaño dinámicamente*/
    
}
#divInterno {
    height: 0;
    width: 0;
    background: none;
    border:0;
    position: absolute;
    display: none;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 2;
    background: #072227;
}
#general {
    display: none;
    text-align: center;
}
#Instrucciones {
    text-align: left;
    right: -10px;
    top: 225px;
    position: absolute;
    display: inline;
    list-style-type: square;
    padding: 50px;
}
#contenedor {
    position: absolute;
    right: 10px;
}
li {
    list-style-type:square; 
}
.quitarMarcador {
    list-style-type: none;
}
i {
    list-style-type: square;
}

#inferior {
    position: absolute;
    top: 35%;
    left: 25%;
    bottom:30%;
    height: 30%;
    width: 50%;
    margin: 0;
    padding: 0;
    
}
#superior {
    position: relative;
    margin: 0;
}
form,button {
    border: 5px solid black;
    border-collapse: collapse;
}
button {
    padding-left: 200px;
    padding-right: 200px;
    padding-top: 50px;
    padding-bottom: 50px;
    font-size: 25px;
    background: #4FBDBA;
}
button:hover {
    background:#072227;
    color: #4FBDBA;
    cursor: pointer;
}
form {
    padding-top: 50px;
    padding-bottom: 50px;
    font-size: 25px;
    background: #24A19C;
}
input {
    font-size: 25px;
    background: #4FBDBA;
    color: #072227;
}
input:hover {
    background:#072227;
    color: #4FBDBA;
    cursor: pointer;
}
label {
    background: #24A19C;
    color: #072227;
    font-weight: 900;
}
label:hover,li:hover,p:hover {
    background:#072227;
    color: #4FBDBA;
    cursor: pointer;
}
#lienzo {
    background: #24A19C;
}
#instrucciones,p,ul,li,b,i {
    background: #24A19C;
    color: #072227;
}
.botonesPanel {
    padding: 15px;
    font-size: inherit;
}
#instrucciones {
    margin: 0;
    border: 0;
}
ul {
    padding: 15%;
}
.negrita {
    font-style: italic;
    font-weight: 900;
}*/


*{
    margin: 0;
    padding: 0;
}
body{
    background-color: #CAF0F8;
}
#lienzo {
    height: 0;
    width: 0;
    border: 0;
    position: relative;
    align-items: center;
    z-index: 1;
    right: 50%;
    top: auto;
    /*
    Los estilos de los div con el movimiento y las instrucciones hay que cambiarlos
    y cambiar su tamaño dinámicamente
    */
}
#divInterno {
    height: 0;
    width: 0;
    background: none;
    border:0;
    position: absolute;
    display: none;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 2;
}
#general {
    display: none;
    text-align: center;
}
#Instrucciones {
    border: 5px solid #000;
    text-align: left;
    right: -10px;
    top: 275px;
    position: absolute;
    display: inline;
    list-style-type: square;
    padding: 50px;
}
#contenedor {
    position: absolute;
    right: 10px;
}
li {
    list-style-type:square; 
}
b {
    list-style-type: none;
}
i {
    list-style-type: square;
}


/* -----  CSS SARDI ----- */

/* --- FORM 1 --- */
/*
#inferior{
    text-align: center;
    margin-top: 30px;
}

#form_crear{
    
}
#form_crear label{
    font-size: 23px;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
}
#form_crear input{
    font-size: 23px;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    text-align: center;
    width: 160px;
    height: 60px;
    border: 2px solid #03045E;
    border-radius: 7px 7px 7px 7px;
    outline: none;
    margin: 4px 0px 20px 0px;
    transition: all 400ms;
}
#form_crear input:hover{
    border: 2px solid #00B4D8;
}

#ref{
    width: 200px !important;
}

#form_crear button{
    margin-top: 5px;
    font-size: 20px;
    font-family: Arial, Helvetica, sans-serif;
    padding: 10px 6px;
    border: 3px solid #03045E;
    border-radius: 7px 7px 7px 7px;
    outline: none;
    cursor: pointer;
    transition: all 400ms;
}
#form_crear button:hover{
    border: 3px solid #00B4D8;
}

*/
/* --- FORM 2 --- */
/*
#form_ver{
    border-top: 2px solid gray;
    margin-top: 60px;
    text-align: center;
}
#form_ver h2{
    margin-top: 35px;
    font-size: 28px;
    font-family: Arial, Helvetica, sans-serif;
}

#movimientoBBDD{
    width: 140px;
    height: 50px;
    outline: none;
    text-align: center;
    font-size: 17px;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
}
#movimientoBBDD option{

}
#form_ver button{
    margin-left: 25px;
    font-size: 20px;
    font-family: Arial, Helvetica, sans-serif;
    padding: 10px 6px;
    border: 3px solid #03045E;
    border-radius: 7px 7px 7px 7px;
    outline: none;
    cursor: pointer;
    transition: all 400ms;
}
#form_ver button:hover{
    border: 3px solid #00B4D8;
}
*/