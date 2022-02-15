let comprobarDistancia = false;
let cadenaDeTxtBDD = '';
let cadenaDeTxtBDD2 = '';
let cadenaDeTxtBDD3 = '';
let cadenaDeTxtBDD4 = '';
const generarLienzo = () => {
    let anchura = parseInt(document.getElementById('width').value); //Coge los valores de alto y ancho introducidos por el usuario para poder hacer el lienzo personalizado
    let altura = parseInt(document.getElementById('height').value);
    let numPts = parseInt(document.getElementById('number').value);
    if (!anchura || !altura ) { //Comprueba que se hayan introducido ambos valores, en caso contrario saltará una alerta que comunicará que ambos datos son obligatorios
        alert('Introduce los valores de altura Y altura ')
    } else if (altura < 500 || altura > 1000 || anchura < 500 || anchura > 1000){//Aquí se comprueba que los valores introducidos estén entre 500 y 1000
        alert('Tanto la altura como la anchura tienen que estar entre 500 y 1000')
    } else if ((altura % 50 != 0) || (anchura % 50 != 0)) { //Comprueba que el número sea múltiplo de 50
        alert ('Introduce un número multiplo de 50');
    } else {//Y aquí se otorgan los estilos que hacen que el lienzo y el punto sean visibles
        document.getElementById('lienzo').style.width = anchura + 'px'
        document.getElementById('lienzo').style.height = altura +'px'
        document.getElementById('lienzo').style.border = '5px solid #072227'
        document.getElementById('inferior').style.display = 'none';
        document.getElementById('general').style.display = 'block';
        document.getElementById('divInterno').style.display = 'block';
        document.getElementById('divInterno').style.background = '#072227'
        document.getElementById('divInterno').style.height = '5px';
        document.getElementById('divInterno').style.width ='5px';
        document.getElementById('divInterno').style.border = '1px solid #072227';
        document.getElementById('divInterno').style.top = altura/2 + 'px'
        document.getElementById('divInterno').style.left = anchura/2 + 'px';
            switch (anchura) { //Otorga estilos dinámicos según el tamaño del contenedor
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
        if (numPts < 1 || numPts > 4) {
            alert(`El número de puntos tiene que estar entre 1 y 4. Has introducido ${numPts}` );
        } else if (numPts % 1 != 0) {
            alert(`El número de puntos tiene que ser un número entero.`)
        } else {
            if (numPts >= 2) {
                document.getElementById('divInterno2').style.display = 'block';
                document.getElementById('divInterno2').style.background = '#FDEFF4'
                document.getElementById('divInterno2').style.height = '5px';
                document.getElementById('divInterno2').style.width ='5px';
                document.getElementById('divInterno2').style.border = '1px solid #FDEFF4';
                document.getElementById('divInterno2').style.top = altura/2 + 'px'
                document.getElementById('divInterno2').style.left = anchura/2 + 'px';
                if (numPts >= 3) {
                    document.getElementById('divInterno3').style.display = 'block';
                    document.getElementById('divInterno3').style.background = '#F1D00A'
                    document.getElementById('divInterno3').style.height = '5px';
                    document.getElementById('divInterno3').style.width ='5px';
                    document.getElementById('divInterno3').style.border = '1px solid #F1D00A';
                    document.getElementById('divInterno3').style.top = altura/2 + 'px'
                    document.getElementById('divInterno3').style.left = anchura/2 + 'px';            
                    if (numPts == 4) {
                        document.getElementById('divInterno4').style.display = 'block';
                        document.getElementById('divInterno4').style.background = '#FF5C8D'
                        document.getElementById('divInterno4').style.height = '5px';
                        document.getElementById('divInterno4').style.width ='5px';
                        document.getElementById('divInterno4').style.border = '1px solid #FF5C8D';
                        document.getElementById('divInterno4').style.top = altura/2 + 'px'
                        document.getElementById('divInterno4').style.left = anchura/2 + 'px';                
                    }
                }
            }
            movimientoPunto1(numPts);
        }
    }
}



function media (x1,x2,x3,x4) { //Esta función calcula la media de las coordenadas (Se explica más abajo)
    let media2 = x1 + x2 + x3 + x4;
    return media2/4
}



function repetir () {//Esta función permite cambiar el tamaño del lienzo para poder volver a tomar otra medición
    location.reload();
}



function cambiarPosicion () { //Esta función permite
    comprobarDistancia = false;
    document.getElementById('Instrucciones').innerHTML = `
    <p>
    <p>Para mover el punto</p> <br>
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
</p>
            `;
        }
        //Detecta que se presionen las teclas, y cuando se presione enter



function movimientoPunto1 (numPts) {
    let anchura2 = parseInt(document.getElementById('width').value);//Estas variables obtienen los valores de alto y ancho del recipiente
    let altura2 = parseInt(document.getElementById('height').value);
    addEventListener('keypress', () => {
        let tecla = event.key;
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
    })
    if (numPts > 1) {
        movimientoPunto2(numPts);
    }
    escribirCoordenadas(numPts,altura2,anchura2);
}


function calculoPunto1 (altura,anchura) {
    //Simulación del sensor
    let abscisas = parseFloat(document.getElementById('divInterno').style.left); //Este bloque de código, simula la señal que daría el sensor de distancia,
    let oordenadasOpuestas = parseFloat(document.getElementById('divInterno').style.top)+5;//para que más tarde al pasarlo a los sensores el código pueda seguir 
    let oordenadas = altura - oordenadasOpuestas;//funcionando y no tener que adaptarlo, solo tener que adaptar el valor de las variable llamadas sensorWW
    let abscisasOpuestas = anchura - abscisas;//Para el bottom y el right se calcula por diferencia ya que al intentar hallar la distancia a dichos bordes, devolvía el valor de undefined
    let sensor00 = Math.sqrt((abscisas**2)+(oordenadas**2));//Se calcula obteniendo la distancia a los bordes del recipiente y haciendo un teorema de Pitágoras para hallar la hipotenusa
    let sensorx0 = Math.sqrt((abscisasOpuestas**2)+(oordenadas**2));
    let sensor0y = Math.sqrt((abscisas**2)+(oordenadasOpuestas**2));
    let sensorxy = Math.sqrt(((anchura-abscisas)**2)+(oordenadasOpuestas)**2);
    //Fin simulación sensores
    
    
    let xAbajo = ((anchura**2)-(sensorx0**2)+(sensor00**2))/(2*anchura); //En todas estas líneas de código se calculan las coordenadas utilizando la fórmula clave
    let yAbajo =Math.abs(((anchura-xAbajo)**2)-(sensorx0**2));//Esta fórmula es un sistema de ecuaciones cuadráticas siendo cada una de estas ecuaciones un teorema de Pitágoras, en el cual conocemos la hipotenusa
    yAbajo = Math.sqrt(yAbajo);// siendo el punto final el mismo para ambos triángulos
    let yIzda =  ((altura**2)-(sensor0y**2)+(sensor00**2))/(2*altura);//Este sistema se repite 4 veces, una por cada uno de los lados del contenedor, para así utilizar todos los sensores
    let xIzda = Math.abs(((altura-yIzda)**2)-(sensor0y**2));// y obtener el resultado más preciso posible
    xIzda = Math.sqrt(xIzda);
    let xArriba = anchura-((anchura**2)-(sensor0y**2)+(sensorxy**2))/(2*anchura);
    let c2 = -(sensorxy**2)+(anchura**2)-(2*anchura*xArriba)+(xArriba**2)+(altura**2);
    let yArriba = (-(-2*altura)-Math.sqrt(((-2*altura)**2)-(4*c2)))/2;
    let yDcha = ((altura**2)-(sensorxy**2)+(sensorx0**2))/(2*altura);
    let c = -(sensorx0**2)+(yDcha**2)+(anchura**2);
    let xDcha = (-(-2*anchura)-Math.sqrt(((-2*anchura)**2)-(4*c)))/2;
    
    
    
    let mediaX = media(xAbajo,xArriba,xDcha,xIzda);//Estas líneas hacen una media con los resultados obtenidos, para así si hay alguna discordancia entre medidas poder solucionar
    let mediaY = media(yAbajo,yArriba,yDcha,yIzda);//dicha discordancia cometiendo el mínimo error posible.
    //El procedimiento de hacer la media está más enfocado a los sensores, ya que estos pueden cometer cierto error, sin embargo en el navegador es prácticamente imposible que surja
    
    mediaX = Number(mediaX.toFixed(2))
    mediaY = Number(mediaY.toFixed(2))
    
    let alfa = Math.asin(mediaY/sensor00); //Como el seno de un ángulo es el cateto opuesto entre la hipotenusa
    let beta = Math.asin ((anchura-mediaX)/sensorx0);//y tengo el cateto opuesto y la hipotenusa, los dividó
    let gamma = Math.asin ((altura-mediaY)/sensorxy);//Y con su resultado hago el arco seno (asen), con el 
    let delta = Math.asin (mediaX/sensor0y);//cual obtengo el ángulo
    
    alfa = (180*alfa)/Math.PI;//Como el ángulo lo dan en radianes, lo que hay que hacer es una simple regla de tres
    beta = (180*beta)/Math.PI;//teniendo en cuenta que 180ª grados son PI radianes
    gamma = (180*gamma)/Math.PI;//Con esto en mente estas líneas son dicha regla de tres
    delta = (180*delta)/Math.PI;
    
    
    sensor00 = Number(sensor00.toFixed(2)); // Esto son simples aproximaciones para facilitar el entendimiento
    sensorx0 = Number(sensorx0.toFixed(2));
    sensor0y = Number (sensor0y.toFixed(2));
    sensorxy = Number(sensorxy.toFixed(2));
    alfa = Number(alfa.toFixed(2));
    beta = Number(beta.toFixed(2));
    gamma = Number(gamma.toFixed(2));
    delta = Number(delta.toFixed(2));
    return [mediaX,mediaY,sensor00,sensorx0,sensor0y,sensorxy,alfa,beta,gamma,delta];
}










function movimientoPunto2 (numPts) {
    addEventListener('keypress', () => {
        let tecla = event.key;
        let arriba2 = parseFloat(document.getElementById('divInterno2').style.top);
        let izquierda2 = parseFloat(document.getElementById('divInterno2').style.left);
        let anchura = parseInt(document.getElementById('width').value);//Estas variables obtienen los valores de alto y ancho del recipiente
        let altura = parseInt(document.getElementById('height').value);
        if ((tecla == 't' || tecla == 'T') && !comprobarDistancia) { //Las condiciones detectan que se esté pulsando una de las teclas indicadas para el movimiento del punto, ya sea en mayúscula o en minúscula
            //También comprueba que la variable comprobarDistancia no sea cierta ya que significaría que el enter se ah presionado y que por tanto no se puede seguir moviendo el punto
            if (arriba2 >= 5) {
                document.getElementById('divInterno2').style.top = arriba2 - 10 +'px';
                cadenaDeTxtBDD2+= 't';//Esta línea guarda el registro de las teclas para así poder guardar el recorrido en una base de datos y volver a verlo más adelante
            }
        }  
        if ((tecla == 'f' || tecla == 'F')  && !comprobarDistancia) {
            if (izquierda2 >= 5) {
                document.getElementById('divInterno2').style.left = izquierda2 - 10  +'px';
                cadenaDeTxtBDD2 += 'f';
            }
        }  
        if ((tecla == 'g' || tecla == 'G')  && !comprobarDistancia) {
            if (arriba2 <= (altura - 10.5)) {
                document.getElementById('divInterno2').style.top = arriba2 + 10 +'px';
                cadenaDeTxtBDD2 += 'g';

            }    
        }  
        if ((tecla == 'h' || tecla == 'H')  && !comprobarDistancia) {
            if (izquierda2 <= (anchura - 10.5)) {
                document.getElementById('divInterno2').style.left = izquierda2 + 10  +'px';
                cadenaDeTxtBDD2 += 'h';
            }
        }  
    })
    if (numPts > 2) {
        movimientoPunto3(numPts)
    } 
}
function calcularPunto2 (altura,anchura) {
    //Simulación del sensor
    let abscisas = parseFloat(document.getElementById('divInterno2').style.left); //Este bloque de código, simula la señal que daría el sensor de distancia,
    let oordenadasOpuestas = parseFloat(document.getElementById('divInterno2').style.top)+5;//para que más tarde al pasarlo a los sensores el código pueda seguir 
    let oordenadas = altura - oordenadasOpuestas;//funcionando y no tener que adaptarlo, solo tener que adaptar el valor de las variable llamadas sensorWW
    let abscisasOpuestas = anchura - abscisas;//Para el bottom y el right se calcula por diferencia ya que al intentar hallar la distancia a dichos bordes, devolvía el valor de undefined
    let sensor00 = Math.sqrt((abscisas**2)+(oordenadas**2));//Se calcula obteniendo la distancia a los bordes del recipiente y haciendo un teorema de Pitágoras para hallar la hipotenusa
    let sensorx0 = Math.sqrt((abscisasOpuestas**2)+(oordenadas**2));
    let sensor0y = Math.sqrt((abscisas**2)+(oordenadasOpuestas**2));
    let sensorxy = Math.sqrt(((anchura-abscisas)**2)+(oordenadasOpuestas)**2);
    //Fin simulación sensores
    
    
    let xAbajo = ((anchura**2)-(sensorx0**2)+(sensor00**2))/(2*anchura); //En todas estas líneas de código se calculan las coordenadas utilizando la fórmula clave
    let yAbajo =Math.abs(((anchura-xAbajo)**2)-(sensorx0**2));//Esta fórmula es un sistema de ecuaciones cuadráticas siendo cada una de estas ecuaciones un teorema de Pitágoras, en el cual conocemos la hipotenusa
    yAbajo = Math.sqrt(yAbajo);// siendo el punto final el mismo para ambos triángulos
    let yIzda =  ((altura**2)-(sensor0y**2)+(sensor00**2))/(2*altura);//Este sistema se repite 4 veces, una por cada uno de los lados del contenedor, para así utilizar todos los sensores
    let xIzda = Math.abs(((altura-yIzda)**2)-(sensor0y**2));// y obtener el resultado más preciso posible
    xIzda = Math.sqrt(xIzda);
    let xArriba = anchura-((anchura**2)-(sensor0y**2)+(sensorxy**2))/(2*anchura);
    let c2 = -(sensorxy**2)+(anchura**2)-(2*anchura*xArriba)+(xArriba**2)+(altura**2);
    let yArriba = (-(-2*altura)-Math.sqrt(((-2*altura)**2)-(4*c2)))/2;
    let yDcha = ((altura**2)-(sensorxy**2)+(sensorx0**2))/(2*altura);
    let c = -(sensorx0**2)+(yDcha**2)+(anchura**2);
    let xDcha = (-(-2*anchura)-Math.sqrt(((-2*anchura)**2)-(4*c)))/2;
    
    
    
    let mediaX = media(xAbajo,xArriba,xDcha,xIzda);//Estas líneas hacen una media con los resultados obtenidos, para así si hay alguna discordancia entre medidas poder solucionar
    let mediaY = media(yAbajo,yArriba,yDcha,yIzda);//dicha discordancia cometiendo el mínimo error posible.
    //El procedimiento de hacer la media está más enfocado a los sensores, ya que estos pueden cometer cierto error, sin embargo en el navegador es prácticamente imposible que surja
    
    mediaX = Number(mediaX.toFixed(2))
    mediaY = Number(mediaY.toFixed(2))
    
    let alfa = Math.asin(mediaY/sensor00); //Como el seno de un ángulo es el cateto opuesto entre la hipotenusa
    let beta = Math.asin ((anchura-mediaX)/sensorx0);//y tengo el cateto opuesto y la hipotenusa, los dividó
    let gamma = Math.asin ((altura-mediaY)/sensorxy);//Y con su resultado hago el arco seno (asen), con el 
    let delta = Math.asin (mediaX/sensor0y);//cual obtengo el ángulo
    
    alfa = (180*alfa)/Math.PI;//Como el ángulo lo dan en radianes, lo que hay que hacer es una simple regla de tres
    beta = (180*beta)/Math.PI;//teniendo en cuenta que 180ª grados son PI radianes
    gamma = (180*gamma)/Math.PI;//Con esto en mente estas líneas son dicha regla de tres
    delta = (180*delta)/Math.PI;
    
    
    sensor00 = Number(sensor00.toFixed(2)); // Esto son simples aproximaciones para facilitar el entendimiento
    sensorx0 = Number(sensorx0.toFixed(2));
    sensor0y = Number (sensor0y.toFixed(2));
    sensorxy = Number(sensorxy.toFixed(2));
    alfa = Number(alfa.toFixed(2));
    beta = Number(beta.toFixed(2));
    gamma = Number(gamma.toFixed(2));
    delta = Number(delta.toFixed(2));
    return [mediaX,mediaY,sensor00,sensorx0,sensor0y,sensorxy,alfa,beta,gamma,delta];
}








function movimientoPunto3 (numPts) {
    addEventListener('keypress',() => {
        let izquierda3 = parseFloat(document.getElementById('divInterno3').style.left);
        let arriba3 = parseFloat(document.getElementById('divInterno3').style.top);
        let anchura = parseInt(document.getElementById('width').value);//Estas variables obtienen los valores de alto y ancho del recipiente
        let altura = parseInt(document.getElementById('height').value);
        let tecla = event.key;
        if ((tecla == 'j' || tecla == 'J') && !comprobarDistancia) { //Las condiciones detectan que se esté pulsando una de las teclas indicadas para el movimiento del punto, ya sea en mayúscula o en minúscula
            //También comprueba que la variable comprobarDistancia no sea cierta ya que significaría que el enter se ah presionado y que por tanto no se puede seguir moviendo el punto
            if (arriba3 >= 5) {
                document.getElementById('divInterno3').style.top = arriba3 - 10 +'px';
                cadenaDeTxtBDD3+= 'j';//Esta línea guarda el registro de las teclas para así poder guardar el recorrido en una base de datos y volver a verlo más adelante
            }
        }  
        if ((tecla == 'n' || tecla == 'N')  && !comprobarDistancia) {
            if (izquierda3 >= 5) {
                document.getElementById('divInterno3').style.left = izquierda3 - 10  +'px';
                cadenaDeTxtBDD3 += 'n';
            }
        }  
        if ((tecla == 'm' || tecla == 'M')  && !comprobarDistancia) {
            if (arriba3 <= (altura - 10.5)) {
                document.getElementById('divInterno3').style.top = arriba3 + 10 +'px';
                cadenaDeTxtBDD3 += 'm';
            }    
        }  
        if ((tecla == ',' || tecla == ';')  && !comprobarDistancia) {
            if (izquierda3 <= (anchura - 10.5)) {
                document.getElementById('divInterno3').style.left = izquierda3 + 10  +'px';
                cadenaDeTxtBDD3 += ',';
            }
        } 
    })
    if(numPts > 3) {
        movimientoPunto4(numPts)
    }
}
function calcularPunto3 (altura,anchura) {
    //Simulación del sensor
    let abscisas = parseFloat(document.getElementById('divInterno3').style.left); //Este bloque de código, simula la señal que daría el sensor de distancia,
    let oordenadasOpuestas = parseFloat(document.getElementById('divInterno3').style.top)+5;//para que más tarde al pasarlo a los sensores el código pueda seguir 
    let oordenadas = altura - oordenadasOpuestas;//funcionando y no tener que adaptarlo, solo tener que adaptar el valor de las variable llamadas sensorWW
    let abscisasOpuestas = anchura - abscisas;//Para el bottom y el right se calcula por diferencia ya que al intentar hallar la distancia a dichos bordes, devolvía el valor de undefined
    let sensor00 = Math.sqrt((abscisas**2)+(oordenadas**2));//Se calcula obteniendo la distancia a los bordes del recipiente y haciendo un teorema de Pitágoras para hallar la hipotenusa
    let sensorx0 = Math.sqrt((abscisasOpuestas**2)+(oordenadas**2));
    let sensor0y = Math.sqrt((abscisas**2)+(oordenadasOpuestas**2));
    let sensorxy = Math.sqrt(((anchura-abscisas)**2)+(oordenadasOpuestas)**2);
    //Fin simulación sensores
    
    
    let xAbajo = ((anchura**2)-(sensorx0**2)+(sensor00**2))/(2*anchura); //En todas estas líneas de código se calculan las coordenadas utilizando la fórmula clave
    let yAbajo =Math.abs(((anchura-xAbajo)**2)-(sensorx0**2));//Esta fórmula es un sistema de ecuaciones cuadráticas siendo cada una de estas ecuaciones un teorema de Pitágoras, en el cual conocemos la hipotenusa
    yAbajo = Math.sqrt(yAbajo);// siendo el punto final el mismo para ambos triángulos
    let yIzda =  ((altura**2)-(sensor0y**2)+(sensor00**2))/(2*altura);//Este sistema se repite 4 veces, una por cada uno de los lados del contenedor, para así utilizar todos los sensores
    let xIzda = Math.abs(((altura-yIzda)**2)-(sensor0y**2));// y obtener el resultado más preciso posible
    xIzda = Math.sqrt(xIzda);
    let xArriba = anchura-((anchura**2)-(sensor0y**2)+(sensorxy**2))/(2*anchura);
    let c2 = -(sensorxy**2)+(anchura**2)-(2*anchura*xArriba)+(xArriba**2)+(altura**2);
    let yArriba = (-(-2*altura)-Math.sqrt(((-2*altura)**2)-(4*c2)))/2;
    let yDcha = ((altura**2)-(sensorxy**2)+(sensorx0**2))/(2*altura);
    let c = -(sensorx0**2)+(yDcha**2)+(anchura**2);
    let xDcha = (-(-2*anchura)-Math.sqrt(((-2*anchura)**2)-(4*c)))/2;
    
    
    
    let mediaX = media(xAbajo,xArriba,xDcha,xIzda);//Estas líneas hacen una media con los resultados obtenidos, para así si hay alguna discordancia entre medidas poder solucionar
    let mediaY = media(yAbajo,yArriba,yDcha,yIzda);//dicha discordancia cometiendo el mínimo error posible.
    //El procedimiento de hacer la media está más enfocado a los sensores, ya que estos pueden cometer cierto error, sin embargo en el navegador es prácticamente imposible que surja
    
    mediaX = Number(mediaX.toFixed(2))
    mediaY = Number(mediaY.toFixed(2))
    
    let alfa = Math.asin(mediaY/sensor00); //Como el seno de un ángulo es el cateto opuesto entre la hipotenusa
    let beta = Math.asin ((anchura-mediaX)/sensorx0);//y tengo el cateto opuesto y la hipotenusa, los dividó
    let gamma = Math.asin ((altura-mediaY)/sensorxy);//Y con su resultado hago el arco seno (asen), con el 
    let delta = Math.asin (mediaX/sensor0y);//cual obtengo el ángulo
    
    alfa = (180*alfa)/Math.PI;//Como el ángulo lo dan en radianes, lo que hay que hacer es una simple regla de tres
    beta = (180*beta)/Math.PI;//teniendo en cuenta que 180ª grados son PI radianes
    gamma = (180*gamma)/Math.PI;//Con esto en mente estas líneas son dicha regla de tres
    delta = (180*delta)/Math.PI;
    
    
    sensor00 = Number(sensor00.toFixed(2)); // Esto son simples aproximaciones para facilitar el entendimiento
    sensorx0 = Number(sensorx0.toFixed(2));
    sensor0y = Number (sensor0y.toFixed(2));
    sensorxy = Number(sensorxy.toFixed(2));
    alfa = Number(alfa.toFixed(2));
    beta = Number(beta.toFixed(2));
    gamma = Number(gamma.toFixed(2));
    delta = Number(delta.toFixed(2));
    return [mediaX,mediaY,sensor00,sensorx0,sensor0y,sensorxy,alfa,beta,gamma,delta];
}










function movimientoPunto4 (numPts) {
    addEventListener('keypress',() => {
        let tecla = event.key
        let anchura = parseInt(document.getElementById('width').value);
        let altura = parseInt(document.getElementById('height').value);
        let izquierda4 = parseFloat(document.getElementById('divInterno4').style.left);
        let arriba4 = parseFloat(document.getElementById('divInterno4').style.top); 
        if ((tecla == 'o' || tecla == 'O') && !comprobarDistancia) { //Las condiciones detectan que se esté pulsando una de las teclas indicadas para el movimiento del punto, ya sea en mayúscula o en minúscula
            //También comprueba que la variable comprobarDistancia no sea cierta ya que significaría que el enter se ah presionado y que por tanto no se puede seguir moviendo el punto
            if (arriba4 >= 5) {
                document.getElementById('divInterno4').style.top = arriba4 - 10 +'px';
                cadenaDeTxtBDD4+= 'o';//Esta línea guarda el registro de las teclas para así poder guardar el recorrido en una base de datos y volver a verlo más adelante
            }
        }  
        if ((tecla == 'k' || tecla == 'K')  && !comprobarDistancia) {
            if (izquierda4 >= 5) {
                document.getElementById('divInterno4').style.left = izquierda4 - 10  +'px';
                cadenaDeTxtBDD4 += 'k';
            }
        }  
        if ((tecla == 'l' || tecla == 'L')  && !comprobarDistancia) {
            if (arriba4 <= (altura - 10.5)) {
                document.getElementById('divInterno4').style.top = arriba4 + 10 +'px';
                cadenaDeTxtBDD4 += 'l';
            }    
        }  
        if ((tecla == 'ñ' || tecla == 'Ñ')  && !comprobarDistancia) {
            if (izquierda4 <= (anchura - 10.5)) {
                document.getElementById('divInterno4').style.left = izquierda4 + 10  +'px';
                cadenaDeTxtBDD4 += 'ñ';
                
            }
        }  
    })
}
function calcularPunto4 (altura,anchura) {
        //Simulación del sensor
        let abscisas = parseFloat(document.getElementById('divInterno4').style.left); //Este bloque de código, simula la señal que daría el sensor de distancia,
        let oordenadasOpuestas = parseFloat(document.getElementById('divInterno4').style.top)+5;//para que más tarde al pasarlo a los sensores el código pueda seguir 
        let oordenadas = altura - oordenadasOpuestas;//funcionando y no tener que adaptarlo, solo tener que adaptar el valor de las variable llamadas sensorWW
        let abscisasOpuestas = anchura - abscisas;//Para el bottom y el right se calcula por diferencia ya que al intentar hallar la distancia a dichos bordes, devolvía el valor de undefined
        let sensor00 = Math.sqrt((abscisas**2)+(oordenadas**2));//Se calcula obteniendo la distancia a los bordes del recipiente y haciendo un teorema de Pitágoras para hallar la hipotenusa
        let sensorx0 = Math.sqrt((abscisasOpuestas**2)+(oordenadas**2));
        let sensor0y = Math.sqrt((abscisas**2)+(oordenadasOpuestas**2));
        let sensorxy = Math.sqrt(((anchura-abscisas)**2)+(oordenadasOpuestas)**2);
        //Fin simulación sensores
        
        
        let xAbajo = ((anchura**2)-(sensorx0**2)+(sensor00**2))/(2*anchura); //En todas estas líneas de código se calculan las coordenadas utilizando la fórmula clave
        let yAbajo =Math.abs(((anchura-xAbajo)**2)-(sensorx0**2));//Esta fórmula es un sistema de ecuaciones cuadráticas siendo cada una de estas ecuaciones un teorema de Pitágoras, en el cual conocemos la hipotenusa
        yAbajo = Math.sqrt(yAbajo);// siendo el punto final el mismo para ambos triángulos
        let yIzda =  ((altura**2)-(sensor0y**2)+(sensor00**2))/(2*altura);//Este sistema se repite 4 veces, una por cada uno de los lados del contenedor, para así utilizar todos los sensores
        let xIzda = Math.abs(((altura-yIzda)**2)-(sensor0y**2));// y obtener el resultado más preciso posible
        xIzda = Math.sqrt(xIzda);
        let xArriba = anchura-((anchura**2)-(sensor0y**2)+(sensorxy**2))/(2*anchura);
        let c2 = -(sensorxy**2)+(anchura**2)-(2*anchura*xArriba)+(xArriba**2)+(altura**2);
        let yArriba = (-(-2*altura)-Math.sqrt(((-2*altura)**2)-(4*c2)))/2;
        let yDcha = ((altura**2)-(sensorxy**2)+(sensorx0**2))/(2*altura);
        let c = -(sensorx0**2)+(yDcha**2)+(anchura**2);
        let xDcha = (-(-2*anchura)-Math.sqrt(((-2*anchura)**2)-(4*c)))/2;
        
        
        
        let mediaX = media(xAbajo,xArriba,xDcha,xIzda);//Estas líneas hacen una media con los resultados obtenidos, para así si hay alguna discordancia entre medidas poder solucionar
        let mediaY = media(yAbajo,yArriba,yDcha,yIzda);//dicha discordancia cometiendo el mínimo error posible.
        //El procedimiento de hacer la media está más enfocado a los sensores, ya que estos pueden cometer cierto error, sin embargo en el navegador es prácticamente imposible que surja
        
        mediaX = Number(mediaX.toFixed(2))
        mediaY = Number(mediaY.toFixed(2))
        
        let alfa = Math.asin(mediaY/sensor00); //Como el seno de un ángulo es el cateto opuesto entre la hipotenusa
        let beta = Math.asin ((anchura-mediaX)/sensorx0);//y tengo el cateto opuesto y la hipotenusa, los dividó
        let gamma = Math.asin ((altura-mediaY)/sensorxy);//Y con su resultado hago el arco seno (asen), con el 
        let delta = Math.asin (mediaX/sensor0y);//cual obtengo el ángulo
        
        alfa = (180*alfa)/Math.PI;//Como el ángulo lo dan en radianes, lo que hay que hacer es una simple regla de tres
        beta = (180*beta)/Math.PI;//teniendo en cuenta que 180ª grados son PI radianes
        gamma = (180*gamma)/Math.PI;//Con esto en mente estas líneas son dicha regla de tres
        delta = (180*delta)/Math.PI;
        
        
        sensor00 = Number(sensor00.toFixed(2)); // Esto son simples aproximaciones para facilitar el entendimiento
        sensorx0 = Number(sensorx0.toFixed(2));
        sensor0y = Number (sensor0y.toFixed(2));
        sensorxy = Number(sensorxy.toFixed(2));
        alfa = Number(alfa.toFixed(2));
        beta = Number(beta.toFixed(2));
        gamma = Number(gamma.toFixed(2));
        delta = Number(delta.toFixed(2));
        return [mediaX,mediaY,sensor00,sensorx0,sensor0y,sensorxy,alfa,beta,gamma,delta];
}





function escribirCoordenadas (numPts,altura,anchura) {
    addEventListener('keypress', () => {
        let tecla = event.key;
        if (tecla == 'Enter' && !comprobarDistancia) {
            if (document.getElementById('inferior').style.display == 'none') {
                let coordenadasPunto1 = calculoPunto1(altura,anchura);
                let coordenadasPunto2 = calcularPunto2(altura,anchura);
                let coordenadasPunto3 = calcularPunto3(altura,anchura);
                let coordenadasPunto4 = calcularPunto4(altura,anchura);
                switch (numPts) {
                    case 1:
                        document.getElementById('Instrucciones').innerHTML = `
                        <ul>
                            <li class="negrita">Coordenadas:</li>
                            <li>(${coordenadasPunto1[0]}px,${coordenadasPunto1[1]}px)</li>
                            <li class="negrita">Coordenadas polares:</li>
                            <li class="negrita">Sensor abajo izquierda:</li>
                            <li>(${coordenadasPunto1[2]}px,${coordenadasPunto1[6]}º)</li>
                            <li class="negrita">Sensor abajo derecha:</li>
                            <li>(${coordenadasPunto1[3]}px,${coordenadasPunto1[7]}º)</li>
                            <li class="negrita">Sensor arriba izquierda:</li>
                            <li>(${coordenadasPunto1[4]}px,${coordenadasPunto1[9]}º)</li>
                            <li class="negrita">Sensor arriba derecha:</li>
                            <li>(${coordenadasPunto1[5]}px,${coordenadasPunto1[8]}º)</li>
                        </ul> <br>
                        <button onclick="repetir()" class="botonesPanel">Cambiar medidas lienzo</button>
                        <button onclick="cambiarPosicion()" class="botonesPanel">Cambiar posición</button>
                    `;
                        break;
                    case 2:
                        document.getElementById('Instrucciones').innerHTML = `
                        <ul>
                                    <li class="negrita">Coordenadas:</li>
                                    <li>Punto 1:(${coordenadasPunto1[0]}px,${coordenadasPunto1[1]}px)</li>
                                    <li>Punto 2:(${coordenadasPunto2[0]}px,${coordenadasPunto2[1]}px)</li>
                                    <li class="negrita">Coordenadas polares:</li>
                                    <li class="negrita">Punto 1:</li>
                                    <li class="negrita">Sensor abajo izquierda:</li>
                                    <li>(${coordenadasPunto1[2]}px,${coordenadasPunto1[6]}º)</li>
                                    <li class="negrita">Sensor abajo derecha:</li>
                                    <li>(${coordenadasPunto1[3]}px,${coordenadasPunto1[7]}º)</li>
                                    <li class="negrita">Sensor arriba izquierda:</li>
                                    <li>(${coordenadasPunto1[4]}px,${coordenadasPunto1[9]}º)</li>
                                    <li class="negrita">Sensor arriba derecha:</li>
                                    <li>(${coordenadasPunto1[5]}px,${coordenadasPunto1[8]}º)</li>
                                    <li class="negrita">Punto 2:</li>
                                    <li class="negrita">Sensor abajo izquierda:</li>
                                    <li>(${coordenadasPunto2[2]}px,${coordenadasPunto2[6]}º)</li>
                                    <li class="negrita">Sensor abajo derecha:</li>
                                    <li>(${coordenadasPunto2[3]}px,${coordenadasPunto2[7]}º)</li>
                                    <li class="negrita">Sensor arriba izquierda:</li>
                                    <li>(${coordenadasPunto2[4]}px,${coordenadasPunto2[9]}º)</li>
                                    <li class="negrita">Sensor arriba derecha:</li>
                                    <li>(${coordenadasPunto2[5]}px,${coordenadasPunto2[8]}º)</li>
                                </ul> <br>
                                <button onclick="repetir()" class="botonesPanel">Cambiar medidas lienzo</button>
                                <button onclick="cambiarPosicion()" class="botonesPanel">Cambiar posición</button></br>
                        `
                        break;
                    case 3:
                        document.getElementById('Instrucciones').innerHTML = `
                        <div style="display: block;" id='primeraPagina'>
                        <ul>
                            <li class="negrita">Coordenadas:</li>
                            <li>Punto 1:(${coordenadasPunto1[0]}px,${coordenadasPunto1[1]}px)</li>
                            <li>Punto 2:(${coordenadasPunto2[0]}px,${coordenadasPunto2[1]}px)</li>
                            <li class="negrita">Coordenadas polares:</li>
                            <li class="negrita">Punto 1:</li>
                            <li class="negrita">Sensor abajo izquierda:</li>
                            <li>(${coordenadasPunto1[2]}px,${coordenadasPunto1[6]}º)</li>
                            <li class="negrita">Sensor abajo derecha:</li>
                            <li>(${coordenadasPunto1[3]}px,${coordenadasPunto1[7]}º)</li>
                            <li class="negrita">Sensor arriba izquierda:</li>
                            <li>(${coordenadasPunto1[4]}px,${coordenadasPunto1[9]}º)</li>
                            <li class="negrita">Sensor arriba derecha:</li>
                            <li>(${coordenadasPunto1[5]}px,${coordenadasPunto1[8]}º)</li>
                            <li class="negrita">Punto 2:</li>
                            <li class="negrita">Sensor abajo izquierda:</li>
                            <li>(${coordenadasPunto2[2]}px,${coordenadasPunto2[6]}º)</li>
                            <li class="negrita">Sensor abajo derecha:</li>
                            <li>(${coordenadasPunto2[3]}px,${coordenadasPunto2[7]}º)</li>
                            <li class="negrita">Sensor arriba izquierda:</li>
                            <li>(${coordenadasPunto2[4]}px,${coordenadasPunto2[9]}º)</li>
                            <li class="negrita">Sensor arriba derecha:</li>
                            <li>(${coordenadasPunto2[5]}px,${coordenadasPunto2[8]}º)</li>
                        </ul> <br>
                        <button onclick="repetir()" class="botonesPanel">Cambiar medidas lienzo</button>
                        <button onclick="cambiarPosicion()" class="botonesPanel">Cambiar posición</button></br>
                        <button onclick="segundaPagina()" class="botonEspecial">Página 2</button>
                        </div>
                        <div style="display:none;" id='segundaPagina'>
                        <ul>
                            <li class="negrita">Coordenadas:</li>
                            <li>Punto 3:(${coordenadasPunto3[0]}px,${coordenadasPunto3[1]}px)</li>
                            <li class="negrita">Coordenadas polares:</li>
                            <li class="negrita">Punto 3:</li>
                            <li class="negrita">Sensor abajo izquierda:</li>
                            <li>(${coordenadasPunto3[2]}px,${coordenadasPunto3[6]}º)</li>
                            <li class="negrita">Sensor abajo derecha:</li>
                            <li>(${coordenadasPunto3[3]}px,${coordenadasPunto3[7]}º)</li>
                            <li class="negrita">Sensor arriba izquierda:</li>
                            <li>(${coordenadasPunto3[4]}px,${coordenadasPunto3[9]}º)</li>
                            <li class="negrita">Sensor arriba derecha:</li>
                            <li>(${coordenadasPunto3[5]}px,${coordenadasPunto3[8]}º)</li>
                        </ul><br>
                        <button onclick="repetir()" class="botonesPanel">Cambiar medidas lienzo</button>
                        <button onclick="cambiarPosicion()" class="botonesPanel">Cambiar posición</button></br>
                        <button onclick="primeraPagina()" class="botonEspecial">Página 1</button>
                        </div>
                        `
                        break;
                    case 4:
                        document.getElementById('Instrucciones').innerHTML = `
                        <div style="display: block;" id='primeraPagina'>
                        <ul>
                            <li class="negrita">Coordenadas:</li>
                            <li>Punto 1:(${coordenadasPunto1[0]}px,${coordenadasPunto1[1]}px)</li>
                            <li>Punto 2:(${coordenadasPunto2[0]}px,${coordenadasPunto2[1]}px)</li>
                            <li class="negrita">Coordenadas polares:</li>
                            <li class="negrita">Punto 1:</li>
                            <li class="negrita">Sensor abajo izquierda:</li>
                            <li>(${coordenadasPunto1[2]}px,${coordenadasPunto1[6]}º)</li>
                            <li class="negrita">Sensor abajo derecha:</li>
                            <li>(${coordenadasPunto1[3]}px,${coordenadasPunto1[7]}º)</li>
                            <li class="negrita">Sensor arriba izquierda:</li>
                            <li>(${coordenadasPunto1[4]}px,${coordenadasPunto1[9]}º)</li>
                            <li class="negrita">Sensor arriba derecha:</li>
                            <li>(${coordenadasPunto1[5]}px,${coordenadasPunto1[8]}º)</li>
                            <li class="negrita">Punto 2:</li>
                            <li class="negrita">Sensor abajo izquierda:</li>
                            <li>(${coordenadasPunto2[2]}px,${coordenadasPunto2[6]}º)</li>
                            <li class="negrita">Sensor abajo derecha:</li>
                            <li>(${coordenadasPunto2[3]}px,${coordenadasPunto2[7]}º)</li>
                            <li class="negrita">Sensor arriba izquierda:</li>
                            <li>(${coordenadasPunto2[4]}px,${coordenadasPunto2[9]}º)</li>
                            <li class="negrita">Sensor arriba derecha:</li>
                            <li>(${coordenadasPunto2[5]}px,${coordenadasPunto2[8]}º)</li>
                        </ul> <br>
                        <button onclick="repetir()" class="botonesPanel">Cambiar medidas lienzo</button>
                        <button onclick="cambiarPosicion()" class="botonesPanel">Cambiar posición</button></br>
                        <button onclick="segundaPagina()" class="botonEspecial">Página 2</button>
                        </div>
                        <div style="display:none;" id='segundaPagina'>
                        <ul>
                            <li class="negrita">Coordenadas:</li>
                            <li>Punto 3:(${coordenadasPunto3[0]}px,${coordenadasPunto3[1]}px)</li>
                            <li>Punto 4:(${coordenadasPunto4[0]}px,${coordenadasPunto4[1]}px)</li>
                            <li class="negrita">Coordenadas polares:</li>
                            <li class="negrita">Punto 3:</li>
                            <li class="negrita">Sensor abajo izquierda:</li>
                            <li>(${coordenadasPunto3[2]}px,${coordenadasPunto3[6]}º)</li>
                            <li class="negrita">Sensor abajo derecha:</li>
                            <li>(${coordenadasPunto3[3]}px,${coordenadasPunto3[7]}º)</li>
                            <li class="negrita">Sensor arriba izquierda:</li>
                            <li>(${coordenadasPunto3[4]}px,${coordenadasPunto3[9]}º)</li>
                            <li class="negrita">Sensor arriba derecha:</li>
                            <li>(${coordenadasPunto3[5]}px,${coordenadasPunto3[8]}º)</li>
                            <li class="negrita">Punto 4:</li>
                            <li class="negrita">Sensor abajo izquierda:</li>
                            <li>(${coordenadasPunto4[2]}px,${coordenadasPunto4[6]}º)</li>
                            <li class="negrita">Sensor abajo derecha:</li>
                            <li>(${coordenadasPunto4[3]}px,${coordenadasPunto4[7]}º)</li>
                            <li class="negrita">Sensor arriba izquierda:</li>
                            <li>(${coordenadasPunto4[4]}px,${coordenadasPunto4[9]}º)</li>
                            <li class="negrita">Sensor arriba derecha:</li>
                            <li>(${coordenadasPunto4[5]}px,${coordenadasPunto4[8]}º)</li>
                        </ul><br>
                        <button onclick="repetir()" class="botonesPanel">Cambiar medidas lienzo</button>
                        <button onclick="cambiarPosicion()" class="botonesPanel">Cambiar posición</button></br>
                        <button onclick="primeraPagina()" class="botonEspecial">Página 1</button>
                        </div>
                        `
                        break;
                    default:
                        alert('que has hecho shiquillo?. Búscate un hobby o algo ¿no?, en vez de dedicarte aquí a romper los programas de los demás, sin vergüenza xD')
                        break;
                }
            }
        }
    })

}


function primeraPagina() {
    document.getElementById('segundaPagina').style.display = 'none';
    document.getElementById('primeraPagina').style.display = 'block';
}
function segundaPagina() {
    document.getElementById('primeraPagina').style.display = 'none';
    document.getElementById('segundaPagina').style.display = 'block';
}