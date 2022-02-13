let comprobarDistancia = false;
let cadenaDeTxtBDD = '';
var verMovimiento = 0;
const generarLienzo = () => {
    // --
    let ref = document.getElementById("ref").value;
    let buscaRef = lista_referenciaJS.indexOf(ref);
    console.log("XD: "+buscaRef);

    if(buscaRef != -1){
        //document.location.reload();
        document.getElementById("error").innerHTML = "EL NOMBRE YA ESTÁ EN USO";
    }else{
        document.getElementById("error").innerHTML = "";
        verMovimiento = 0;
    // --


    let anchura = parseInt(document.getElementById('width').value); //Coge los valores de alto y ancho introducidos por el usuario para poder hacer el lienzo personalizado
    let altura = parseInt(document.getElementById('height').value);
    if (!anchura || !altura ) { //Comprueba que se hayan introducido ambos valores, en caso contrario saltará una alerta que comunicará que ambos datos son obligatorios
        alert('Introduce los valores de altura Y altura ')
    } else if (altura < 500 || altura > 1000 || anchura < 500 || anchura > 1000){//Aquí se comprueba que los valores introducidos estén entre 500 y 1000
        alert('Tanto la altura como la anchura tienen que estar entre 500 y 1000')
    } else if ((altura % 50 != 0) || (anchura % 50 != 0)) { //Comprueba que el número sea múltiplo de 50
        alert ('Introduce un número multiplo de 50');
    } else {//Y aquí se otorgan los estilos que hacen que el lienzo y el punto sean visibles
        document.getElementById('lienzo').style.width = anchura + 'px'
        document.getElementById('lienzo').style.height = altura +'px'
        document.getElementById('lienzo').style.border = '5px solid black'
        document.getElementById('inferior').style.display = 'none';
        document.getElementById('general').style.display = 'block';
        document.getElementById('divInterno').style.display = 'block';
        document.getElementById('divInterno').style.background = '#000'
        document.getElementById('divInterno').style.height = '5px';
        document.getElementById('divInterno').style.width ='5px';
        document.getElementById('divInterno').style.border = '1px solid #000';
        document.getElementById('divInterno').style.top = altura/2 + 'px'
        document.getElementById('divInterno').style.left = anchura/2 + 'px';
        switch (anchura) {
            case 500: case 550:
                document.getElementById('lienzo').style.right = '145%';
                break;
            case 600:case 650:
                document.getElementById('lienzo').style.right = '115%';
                break;
            case 700:case 750:
                document.getElementById('lienzo').style.right = '82.5%';
                break;
            case 800: 
                document.getElementById('lienzo').style.right = '72.5%';
                break;
            case 850:
                document.getElementById('lienzo').style.right = '65%';
                break;
            case 900:
                document.getElementById('lienzo').style.right = '56.5%';
                break;
            default:
                document.getElementById('lienzo').style.right = 'auto';
                break;
        }
        console.log(anchura,altura)
        switch (altura) {
            case 500: case 550:
                document.getElementById('lienzo').style.top = '155px';
                break;
            case 600: case 650:
                document.getElementById('lienzo').style.top = '125px';
            break;
            case 700: case 750:
                document.getElementById('lienzo').style.top = '80px';
                break;
            case 800:
                document.getElementById('lienzo').style.top = '50px';
                break;
            case 850:
                document.getElementById('lienzo').style.top = '35px';
                break;
            case 900:
                document.getElementById('lienzo').style.top = '10px';
                break;
            default:
                document.getElementById('lienzo').style.top = 'auto';
                break;
        }
    }
    }
}
function media (x1,x2,x3,x4) { //Esta función calcula la media de las coordenadas (Se explica más abajo)
    let media2 = x1 + x2 + x3 + x4;
    return media2/4
}
function repetir () {//Esta función permite cambiar el tamaño del lienzo para poder volver a tomar otra medición
    document.getElementById('inferior').style.display = 'block';
    document.getElementById('general').style.display = 'none';
    document.getElementById('divInterno').style.display = 'none';
    comprobarDistancia = false;
    document.getElementById('Instrucciones').innerHTML = `
            Para mover el punto <br>
            <ul>
                <li>w-> Arriba</li><br>
                <li>a -> Izquierda</li><br>
                <li>s -> Derecha</li><br>
                <li>d -> Abajo</li><br>
                <li>Enter -> Hallar posición punto (Si se presiona, no se podrá mover el punto)</li>
            </ul>
            `;
}
function cambiarPosicion () { //Esta función permite
    comprobarDistancia = false;
    document.getElementById('Instrucciones').innerHTML = `
            Para mover el punto <br>
            <ul>
                <li>w-> Arriba</li><br>
                <li>a -> Izquierda</li><br>
                <li>s -> Derecha</li><br>
                <li>d -> Abajo</li><br>
                <li>Enter -> Hallar posición punto (Si se presiona, no se podrá mover el punto)</li>
            </ul>
            `;
}
//Detecta que se presionen las teclas, y cuando se presione enter

addEventListener('keypress', () => {
    if(verMovimiento == 0){
        let tecla = event.key;//Detecta que tecla se a pulsado. el event.key devuelve una cadena de texto que indica la tecla pulsada. Aunque 'event' esté deprecado no encontré ningund alternativa para su uso
        let arriba = parseFloat(document.getElementById('divInterno').style.top); //Estas variables adquieren el valor de los píxeles que le faltan al punto para llegar al borde superior o izquierdo del recipiente
        let izquierda = parseFloat(document.getElementById('divInterno').style.left);

        let anchura = parseInt(document.getElementById('width').value);//Estas variables obtienen los valores de alto y ancho del recipiente
        let altura = parseInt(document.getElementById('height').value);

        if ((tecla == 'w' || tecla == 'W') && !comprobarDistancia) { //Las condiciones detectan que se esté pulsando una de las teclas indicadas para el movimiento del punto, ya sea en mayúscula o en minúscula
            //También comprueba que la variable comprobarDistancia no sea cierta ya que significaría que el enter se ah presionado y que por tanto no se puede seguir moviendo el punto
            if (arriba >= 5) {
                document.getElementById('divInterno').style.top = arriba - 10 +'px';
                cadenaDeTxtBDD += 'w';//Esta línea guarda el registro de las teclas para así poder guardar el recorrido en una base de datos y volver a verlo más adelante
            }
        }  
        if ((tecla == 'a' || tecla == 'A')  && !comprobarDistancia) {
            if (izquierda >= 5) {
                document.getElementById('divInterno').style.left = izquierda - 10  +'px';
                cadenaDeTxtBDD += 'a';
            }
        }  
        if ((tecla == 's' || tecla == 'S')  && !comprobarDistancia) {
            if (arriba <= (altura - 10.5)) {
                document.getElementById('divInterno').style.top = arriba + 10 +'px';
                cadenaDeTxtBDD += 's';
            }    
        }  
        if ((tecla == 'd' || tecla == 'D')  && !comprobarDistancia) {
            if (izquierda <= (anchura - 10.5)) {
                document.getElementById('divInterno').style.left = izquierda + 10  +'px';
                cadenaDeTxtBDD += 'd';
                
            }
        }
        if (tecla == 'Enter' && !comprobarDistancia) {
            if (document.getElementById('inferior').style.display == 'none') {
                comprobarDistancia = true; //Para que no se pulse dos veces el enter
                let referencia = document.getElementById('ref').value;
                //Simulación del sensor
                let abscisas = parseFloat(document.getElementById('divInterno').style.left); //Este bloque de código, simula la señal que daría el sensor de distancia,
                let oordenadasOpuestas = parseFloat(document.getElementById('divInterno').style.top);//para que más tarde al pasarlo a los sensores el código pueda seguir 
                let oordenadas = altura - oordenadasOpuestas;//funcionando y no tener que adaptarlo, solo tener que adaptar el valor de las variable llamadas sensorWW
                let abscisasOpuestas = anchura - abscisas;//Para el bottom y el right se calcula por diferencia ya que al intentar hallar la distancia a dichos bordes, devolvía el valor de undefined
                let sensor00 = Math.sqrt((abscisas**2)+(oordenadas**2));//Se calcula obteniendo la distancia a los bordes del recipiente y haciendo un teorema de Pitágoras para hallar la hipotenusa
                sensor00 = Number(sensor00.toFixed(2))
                let sensorx0 = Math.sqrt((abscisasOpuestas**2)+(oordenadas**2));
                sensorx0 = Number(sensorx0.toFixed(2));
                let sensor0y = Math.sqrt((abscisas**2)+(oordenadasOpuestas**2));
                sensor0y = Number (sensor0y.toFixed(2));
                let sensorxy = Math.sqrt((abscisasOpuestas**2)+(oordenadasOpuestas**2));
                sensorxy = Number(sensorxy.toFixed(2));
                //Fin simulación sensores


                let xAbajo = ((anchura**2)-(sensorx0**2)+(sensor00**2))/(2*anchura); //En todas estas líneas de código se calculan las coordenadas utilizando la fórmula clave
                xAbajo = Number(xAbajo.toFixed(2));//Esta fórmula es un sistema de ecuaciones cuadráticas siendo cada una de estas ecuaciones un teorema de Pitágoras, en el cual conocemos la hipotenusa
                let yAbajo =Math.abs(((anchura-xAbajo)**2)-(sensorx0**2));// siendo el punto final el mismo para ambos triángulos
                yAbajo = Number(Math.sqrt(Number(yAbajo.toFixed(2))).toFixed(2));//Este sistema se repite 4 veces, una por cada uno de los lados del contenedor, para así utilizar todos los sensores
                let xArriba = anchura-((anchura**2)-(sensor0y**2)+(sensorxy**2))/(2*anchura);// y obtener el resultado más preciso posible
                xArriba = Number(xArriba.toFixed(2)); //También entre operaciones (especialmente antes y después de las raíces cuadradas) se realizan aproximaciones a dos decimales porque es convención,
                let yArriba = Math.abs(((anchura-xArriba)**2)-(sensor0y**2))//Porque son más o menos las cifras significativas (no tiene sentido preocuparse por una milésima de píxel o décima de cm),
                yArriba = Number(Math.sqrt(Number(yArriba.toFixed(2))).toFixed(2));//Además de ahorrar espacio en la base de datos
                let yDcha = ((altura**2)-(sensorxy**2)+(sensorx0**2))/(2*altura);
                yDcha= Number(yDcha.toFixed(2));
                let xDcha = Math.abs(((altura-yDcha)**2)-(sensorxy**2));
                xDcha = Number(Math.sqrt(Number(xDcha.toFixed(2))).toFixed(2));
                let yIzda =  ((altura**2)-(sensor0y**2)+(sensor00**2))/(2*altura);
                yIzda = Number(yIzda.toFixed(2));
                let xIzda = Math.abs(((altura-yIzda)**2)-(sensor0y**2));
                xIzda = Number(Math.sqrt(Number(xIzda.toFixed(2))).toFixed(2));


                let mediaX = media(xAbajo,xArriba,xDcha,xIzda);//Estas líneas hacen una media con los resultados obtenidos, para así si hay alguna discordancia entre medidas poder solucionar
                mediaX = Number(mediaX.toFixed(2))
                let mediaY = media(yAbajo,yArriba,yDcha,yIzda);//dicha discordancia cometiendo el mínimo error posible.
                mediaY = Number(mediaY.toFixed(2))
                //El procedimiento de hacer la media está más enfocado a los sensores, ya que estos pueden cometer cierto error, sin embargo en el navegador es prácticamente imposible que surja


                let alfa = Math.asin(mediaY/sensor00); //Como el seno de un ángulo es el cateto opuesto entre la hipotenusa
                let beta = Math.asin ((anchura-mediaX)/sensorx0);//y tengo el cateto opuesto y la hipotenusa, los dividó
                let gamma = Math.asin ((altura-mediaY)/sensorxy);//Y con su resultado hago el arco seno (asen), con el 
                let delta = Math.asin (mediaX/sensor0y);//cual obtengo el ángulo

                alfa = (180*alfa)/Math.PI;//Como el ángulo lo dan en radianes, lo que hay que hacer es una simple regla de tres
                beta = (180*beta)/Math.PI;//teniendo en cuenta que 180ª grados son PI radianes
                gamma = (180*gamma)/Math.PI;//Con esto en mente estas líneas son dicha regla de tres
                delta = (180*delta)/Math.PI;
                alfa = Number(alfa.toFixed(2));
                beta = Number(beta.toFixed(2));
                gamma = Number(gamma.toFixed(2));
                delta = Number(delta.toFixed(2));
                document.getElementById('Instrucciones').style.textAlign = 'center';
                document.getElementById('Instrucciones').innerHTML = `
                    <ul>
                        <li><i><b>Coordenadas:</b></i></li>
                        <li>(${mediaX}px,${mediaY}px)</li>
                        <li><i><b>Coordenadas polares:</b></i></li>
                        <li><b>Sensor abajo izquierda:</b></li>
                        <li>(${sensor00}px,${alfa}º)</li>
                        <li><b>Sensor abajo derecha:</b></li>
                        <li>(${sensorx0}px,${beta}º)</li>
                        <li><b>Sensor arriba izquierda:</b></li>
                        <li>(${sensor0y}px,${gamma}º)</li>
                        <li><b>Sensor arriba derecha:</b></li>
                        <li>(${sensorxy}px,${delta}º)</li>
                    </ul> <br>
                    <button onclick="repetir()">Cambiar medidas lienzo</button>
                    <button onclick="cambiarPosicion()">Cambiar posición</button>
                `;
                let datos = {
                    'longitud1': sensor00,
                    'longitud2': sensorx0,
                    'longitud3': sensor0y,
                    'longitud4': sensorxy,
                    'movimientos': cadenaDeTxtBDD,
                    'angulo1': alfa,
                    'angulo2': beta,
                    'angulo3': gamma,
                    'angulo4': delta,
                    'abscisa': mediaX,
                    'oordenada': mediaY,
                    'altura': altura,
                    'anchura': anchura,
                    'referencia': referencia
                
                };
                let url = '../BackEnd/agregarBBDD.php';
                    $.ajax({
                        data: datos,
                        url: url,
                        type: 'post',
                        success:  function (response) {
                            console.log(response); // Imprimir respuesta del archivo
                        },
                        error: function (error) {
                            console.log(error); // Imprimir respuesta de error
                        }
                });
            }
        }
    }
})

