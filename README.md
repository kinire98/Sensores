# SensoresAweb
Proyecto Sardi e Iker de Aweb, control de sensores.
Este proyecto es parte del módulo de aplicaciones web, del ciclo de Grado Medio
"Sistemas microinformáticos y redes"
El proyecto se propuso para que los alumnos más avanzados pusieran a prueba sus 
habilidades y aprendieran cosas nuevas.
El proyecto está en una fase tempranísima, esta es nuestra primera vez utilizando
Git y GitHub, ya que en general, es nuestro primer proyecto en equipo
(Más tarde se añadirán las instrucciones de uso)


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