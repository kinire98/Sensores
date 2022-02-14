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
                document.getElementById('divInterno2').style.background = '#03045E'
                document.getElementById('divInterno2').style.height = '5px';
                document.getElementById('divInterno2').style.width ='5px';
                document.getElementById('divInterno2').style.border = '1px solid #03045E';
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
                        document.getElementById('divInterno4').style.background = '#072227'
                        document.getElementById('divInterno4').style.height = '5px';
                        document.getElementById('divInterno4').style.width ='5px';
                        document.getElementById('divInterno4').style.border = '1px solid #072227';
                        document.getElementById('divInterno4').style.top = altura/2 + 'px'
                        document.getElementById('divInterno4').style.left = anchura/2 + 'px';                
                    }
                }
            }
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
            Para mover el punto <br>
            <ul>
                <li>w-> Arriba</li><br>
                <li>a -> Izquierda</li><br>
                <li>s -> Derecha</li><br>
                <li>d -> Abajo</li><br>
                <li>Enter -> Hallar posición punto</li>
            </ul>
            `;
        }
        //Detecta que se presionen las teclas, y cuando se presione enter
        
addEventListener('keypress', () => {
    let numPts = parseInt(document.getElementById('number').value);
    let tecla = event.key;//Detecta que tecla se a pulsado. el event.key devuelve una cadena de texto que indica la tecla pulsada. Aunque 'event' esté deprecado no encontré ningund alternativa para su uso
    
    let arriba = parseFloat(document.getElementById('divInterno').style.top); //Estas variables adquieren el valor de los píxeles que le faltan al punto para llegar al borde superior o izquierdo del recipiente
    let izquierda = parseFloat(document.getElementById('divInterno').style.left);
    
    let anchura = parseInt(document.getElementById('width').value);//Estas variables obtienen los valores de alto y ancho del recipiente
    let altura = parseInt(document.getElementById('height').value);
    let arriba2 = parseFloat(document.getElementById('divInterno2').style.top); //Estas variables adquieren el valor de los píxeles que le faltan al punto para llegar al borde superior o izquierdo del recipiente
    let izquierda2 = parseFloat(document.getElementById('divInterno2').style.left);
    let arriba3 = parseFloat(document.getElementById('divInterno3').style.top); //Estas variables adquieren el valor de los píxeles que le faltan al punto para llegar al borde superior o izquierdo del recipiente
    let izquierda3 = parseFloat(document.getElementById('divInterno3').style.left);
    let arriba4 = parseFloat(document.getElementById('divInterno4').style.top); //Estas variables adquieren el valor de los píxeles que le faltan al punto para llegar al borde superior o izquierdo del recipiente
    let izquierda4 = parseFloat(document.getElementById('divInterno4').style.left);
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
    if (tecla == 'Enter' && !comprobarDistancia) {
        if (document.getElementById('inferior').style.display == 'none') {
            comprobarDistancia = true; //Para que no se pulse dos veces el enter
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
        















        //Detección 2do pto
        let abscisas2 = parseFloat(document.getElementById('divInterno2').style.left); //Este bloque de código, simula la señal que daría el sensor de distancia,
        let oordenadasOpuestas2 = parseFloat(document.getElementById('divInterno2').style.top)+5;//para que más tarde al pasarlo a los sensores el código pueda seguir 
        let oordenadas2 = altura - oordenadasOpuestas2;//funcionando y no tener que adaptarlo, solo tener que adaptar el valor de las variable llamadas sensorWW
        let abscisasOpuestas2 = anchura - abscisas2;//Para el bottom y el right se calcula por diferencia ya que al intentar hallar la distancia a dichos bordes, devolvía el valor de undefined
        let sensor002 = Math.sqrt((abscisas2**2)+(oordenadas2**2));//Se calcula obteniendo la distancia a los bordes del recipiente y haciendo un teorema de Pitágoras para hallar la hipotenusa
        let sensorx02 = Math.sqrt((abscisasOpuestas2**2)+(oordenadas2**2));
        let sensor0y2 = Math.sqrt((abscisas2**2)+(oordenadasOpuestas2**2));
        let sensorxy2 = Math.sqrt(((anchura-abscisas2)**2)+(oordenadasOpuestas2)**2);
        //Fin simulación sensores
        
        let xAbajo2 = ((anchura**2)-(sensorx02**2)+(sensor002**2))/(2*anchura); //En todas estas líneas de código se calculan las coordenadas utilizando la fórmula clave
        let yAbajo2 =Math.abs(((anchura-xAbajo2)**2)-(sensorx02**2));//Esta fórmula es un sistema de ecuaciones cuadráticas siendo cada una de estas ecuaciones un teorema de Pitágoras, en el cual conocemos la hipotenusa
        yAbajo2 = Math.sqrt(yAbajo2);// siendo el punto final el mismo para ambos triángulos
        let yIzda2 =  ((altura**2)-(sensor0y2**2)+(sensor002**2))/(2*altura);//Este sistema se repite 4 veces, una por cada uno de los lados del contenedor, para así utilizar todos los sensores
        let xIzda2= Math.abs(((altura-yIzda2)**2)-(sensor0y2**2));// y obtener el resultado más preciso posible
        xIzda2 = Math.sqrt(xIzda2);
        let xArriba2 = anchura-((anchura**2)-(sensor0y2**2)+(sensorxy2**2))/(2*anchura);
        let c22 = -(sensorxy2**2)+(anchura**2)-(2*anchura*xArriba2)+(xArriba2**2)+(altura**2);
        let yArriba2 = (-(-2*altura)-Math.sqrt(((-2*altura)**2)-(4*c22)))/2;
        let yDcha2 = ((altura**2)-(sensorxy2**2)+(sensorx02**2))/(2*altura);
        let c12 = -(sensorx02**2)+(yDcha2**2)+(anchura**2);
        let xDcha2 = (-(-2*anchura)-Math.sqrt(((-2*anchura)**2)-(4*c12)))/2;
        
        
        let mediaX2 = media(xAbajo2,xArriba2,xDcha2,xIzda2);//Estas líneas hacen una media con los resultados obtenidos, para así si hay alguna discordancia entre medidas poder solucionar
        let mediaY2 = media(yAbajo2,yArriba2,yDcha2,yIzda2);//dicha discordancia cometiendo el mínimo error posible.
        //El procedimiento de hacer la media está más enfocado a los sensores, ya que estos pueden cometer cierto error, sin embargo en el navegador es prácticamente imposible que surja
        
        mediaX2 = Number(mediaX2.toFixed(2))
        mediaY2 = Number(mediaY2.toFixed(2))
        
        let alfa2 = Math.asin(mediaY2/sensor002); //Como el seno de un ángulo es el cateto opuesto entre la hipotenusa
        let beta2 = Math.asin ((anchura-mediaX2)/sensorx02);//y tengo el cateto opuesto y la hipotenusa, los dividó
        let gamma2 = Math.asin ((altura-mediaY2)/sensorxy2);//Y con su resultado hago el arco seno (asen), con el 
        let delta2 = Math.asin (mediaX2/sensor0y2);//cual obtengo el ángulo
        
        alfa2 = (180*alfa2)/Math.PI;//Como el ángulo lo dan en radianes, lo que hay que hacer es una simple regla de tres
        beta2 = (180*beta2)/Math.PI;//teniendo en cuenta que 180ª grados son PI radianes
        gamma2 = (180*gamma2)/Math.PI;//Con esto en mente estas líneas son dicha regla de tres
        delta2 = (180*delta2)/Math.PI;
        
        
        sensor002 = Number(sensor002.toFixed(2)); // Esto son simples aproximaciones para facilitar el entendimiento
        sensorx02 = Number(sensorx02.toFixed(2));
        sensor0y2 = Number(sensor0y2.toFixed(2));
        sensorxy2 = Number(sensorxy2.toFixed(2));
        alfa2 = Number(alfa2.toFixed(2));
        beta2 = Number(beta2.toFixed(2));
        gamma2 = Number(gamma2.toFixed(2));
        delta2 = Number(delta2.toFixed(2));
        //Fin 2do punto






        //3er punto
        let abscisas3 = parseFloat(document.getElementById('divInterno3').style.left); //Este bloque de código, simula la señal que daría el sensor de distancia,
        let oordenadasOpuestas3 = parseFloat(document.getElementById('divInterno3').style.top)+5;//para que más tarde al pasarlo a los sensores el código pueda seguir 
        let oordenadas3 = altura - oordenadasOpuestas3;//funcionando y no tener que adaptarlo, solo tener que adaptar el valor de las variable llamadas sensorWW
        let abscisasOpuestas3 = anchura - abscisas3;//Para el bottom y el right se calcula por diferencia ya que al intentar hallar la distancia a dichos bordes, devolvía el valor de undefined
        let sensor003 = Math.sqrt((abscisas3**2)+(oordenadas3**2));//Se calcula obteniendo la distancia a los bordes del recipiente y haciendo un teorema de Pitágoras para hallar la hipotenusa
        let sensorx03 = Math.sqrt((abscisasOpuestas3**2)+(oordenadas3**2));
        let sensor0y3 = Math.sqrt((abscisas3**2)+(oordenadasOpuestas3**2));
        let sensorxy3 = Math.sqrt(((anchura-abscisas3)**2)+(oordenadasOpuestas3)**2);
        //Fin simulación sensores
        
        
        let xAbajo3 = ((anchura**2)-(sensorx03**2)+(sensor003**2))/(2*anchura); //En todas estas líneas de código se calculan las coordenadas utilizando la fórmula clave
        let yAbajo3 =Math.abs(((anchura-xAbajo3)**2)-(sensorx03**2));//Esta fórmula es un sistema de ecuaciones cuadráticas siendo cada una de estas ecuaciones un teorema de Pitágoras, en el cual conocemos la hipotenusa
        yAbajo3 = Math.sqrt(yAbajo3);// siendo el punto final el mismo para ambos triángulos
        let yIzda3 =  ((altura**2)-(sensor0y3**2)+(sensor003**2))/(2*altura);//Este sistema se repite 4 veces, una por cada uno de los lados del contenedor, para así utilizar todos los sensores
        let xIzda3 = Math.abs(((altura-yIzda3)**2)-(sensor0y3**2));// y obtener el resultado más preciso posible
        xIzda3 = Math.sqrt(xIzda3);
        let xArriba3 = anchura-((anchura**2)-(sensor0y3**2)+(sensorxy3**2))/(2*anchura);
        let c23= -(sensorxy**2)+(anchura**2)-(2*anchura*xArriba3)+(xArriba3**2)+(altura**2);
        let yArriba3 = (-(-2*altura)-Math.sqrt(((-2*altura)**2)-(4*c23)))/2;
        let yDcha3 = ((altura**2)-(sensorxy3**2)+(sensorx03**2))/(2*altura);
        let c3 = -(sensorx03**2)+(yDcha3**2)+(anchura**2);
        let xDcha3 = (-(-2*anchura)-Math.sqrt(((-2*anchura)**2)-(4*c3)))/2;
        
        
        
        let mediaX3 = media(xAbajo3,xArriba3,xDcha3,xIzda3);//Estas líneas hacen una media con los resultados obtenidos, para así si hay alguna discordancia entre medidas poder solucionar
        let mediaY3 = media(yAbajo3,yArriba3,yDcha3,yIzda3);//dicha discordancia cometiendo el mínimo error posible.
        //El procedimiento de hacer la media está más enfocado a los sensores, ya que estos pueden cometer cierto error, sin embargo en el navegador es prácticamente imposible que surja
        
        mediaX3 = Number(mediaX3.toFixed(2))
        mediaY3 = Number(mediaY3.toFixed(2))
        
        let alfa3 = Math.asin(mediaY3/sensor003); //Como el seno de un ángulo es el cateto opuesto entre la hipotenusa
        let beta3 = Math.asin ((anchura-mediaX3)/sensorx03);//y tengo el cateto opuesto y la hipotenusa, los dividó
        let gamma3 = Math.asin ((altura-mediaY3)/sensorxy3);//Y con su resultado hago el arco seno (asen), con el 
        let delta3 = Math.asin (mediaX3/sensor0y3);//cual obtengo el ángulo
        
        alfa3 = (180*alfa3)/Math.PI;//Como el ángulo lo dan en radianes, lo que hay que hacer es una simple regla de tres
        beta3 = (180*beta3)/Math.PI;//teniendo en cuenta que 180ª grados son PI radianes
        gamma3 = (180*gamma3)/Math.PI;//Con esto en mente estas líneas son dicha regla de tres
        delta3 = (180*delta3)/Math.PI;
        
        
        sensor003 = Number(sensor003.toFixed(2)); // Esto son simples aproximaciones para facilitar el entendimiento
        sensorx03 = Number(sensorx03.toFixed(2));
        sensor0y3 = Number(sensor0y3.toFixed(2));
        sensorxy3 = Number(sensorxy3.toFixed(2));
        alfa3 = Number(alfa3.toFixed(2));
        beta3 = Number(beta3.toFixed(2));
        gamma3 = Number(gamma3.toFixed(2));
        delta3 = Number(delta3.toFixed(2));

        


        let abscisas4 = parseFloat(document.getElementById('divInterno4').style.left); //Este bloque de código, simula la señal que daría el sensor de distancia,
        let oordenadasOpuestas4 = parseFloat(document.getElementById('divInterno4').style.top)+5;//para que más tarde al pasarlo a los sensores el código pueda seguir 
        let oordenadas4 = altura - oordenadasOpuestas4;//funcionando y no tener que adaptarlo, solo tener que adaptar el valor de las variable llamadas sensorWW
        let abscisasOpuestas4 = anchura - abscisas4;//Para el bottom y el right se calcula por diferencia ya que al intentar hallar la distancia a dichos bordes, devolvía el valor de undefined
        let sensor004 = Math.sqrt((abscisas4**2)+(oordenadas4**2));//Se calcula obteniendo la distancia a los bordes del recipiente y haciendo un teorema de Pitágoras para hallar la hipotenusa
        let sensorx04 = Math.sqrt((abscisasOpuestas4**2)+(oordenadas4**2));
        let sensor0y4 = Math.sqrt((abscisas4**2)+(oordenadasOpuestas4**2));
        let sensorxy4 = Math.sqrt(((anchura-abscisas4)**2)+(oordenadasOpuestas4)**2);
        //Fin simulación sensores
        
        
        let xAbajo4 = ((anchura**2)-(sensorx04**2)+(sensor004**2))/(2*anchura); //En todas estas líneas de código se calculan las coordenadas utilizando la fórmula clave
        let yAbajo4 =Math.abs(((anchura-xAbajo4)**2)-(sensorx04**2));//Esta fórmula es un sistema de ecuaciones cuadráticas siendo cada una de estas ecuaciones un teorema de Pitágoras, en el cual conocemos la hipotenusa
        yAbajo4 = Math.sqrt(yAbajo4);// siendo el punto final el mismo para ambos triángulos
        let yIzda4 =  ((altura**2)-(sensor0y4**2)+(sensor004**2))/(2*altura);//Este sistema se repite 4 veces, una por cada uno de los lados del contenedor, para así utilizar todos los sensores
        let xIzda4 = Math.abs(((altura-yIzda4)**2)-(sensor0y4**2));// y obtener el resultado más preciso posible
        xIzda4 = Math.sqrt(xIzda4);
        let xArriba4 = anchura-((anchura**2)-(sensor0y4**2)+(sensorxy4**2))/(2*anchura);
        let c24 = -(sensorxy4**2)+(anchura**2)-(2*anchura*xArriba4)+(xArriba4**2)+(altura**2);
        let yArriba4 = (-(-2*altura)-Math.sqrt(((-2*altura)**2)-(4*c24)))/2;
        let yDcha4 = ((altura**2)-(sensorxy4**2)+(sensorx04**2))/(2*altura);
        let c4 = -(sensorx04**2)+(yDcha4**2)+(anchura**2);
        let xDcha4 = (-(-2*anchura)-Math.sqrt(((-2*anchura)**2)-(4*c4)))/2;
        
        
        
        let mediaX4 = media(xAbajo4,xArriba4,xDcha4,xIzda4);//Estas líneas hacen una media con los resultados obtenidos, para así si hay alguna discordancia entre medidas poder solucionar
        let mediaY4 = media(yAbajo4,yArriba4,yDcha4,yIzda4);//dicha discordancia cometiendo el mínimo error posible.
        //El procedimiento de hacer la media está más enfocado a los sensores, ya que estos pueden cometer cierto error, sin embargo en el navegador es prácticamente imposible que surja
        
        mediaX4 = Number(mediaX4.toFixed(2))
        mediaY4 = Number(mediaY4.toFixed(2))
        
        let alfa4 = Math.asin(mediaY4/sensor004); //Como el seno de un ángulo es el cateto opuesto entre la hipotenusa
        let beta4 = Math.asin ((anchura-mediaX4)/sensorx04);//y tengo el cateto opuesto y la hipotenusa, los dividó
        let gamma4 = Math.asin ((altura-mediaY4)/sensorxy4);//Y con su resultado hago el arco seno (asen), con el 
        let delta4 = Math.asin (mediaX4/sensor0y4);//cual obtengo el ángulo
        
        alfa4 = (180*alfa4)/Math.PI;//Como el ángulo lo dan en radianes, lo que hay que hacer es una simple regla de tres
        beta4 = (180*beta4)/Math.PI;//teniendo en cuenta que 180ª grados son PI radianes
        gamma4 = (180*gamma4)/Math.PI;//Con esto en mente estas líneas son dicha regla de tres
        delta4 = (180*delta4)/Math.PI;
        
        
        sensor004 = Number(sensor004.toFixed(2)); // Esto son simples aproximaciones para facilitar el entendimiento
        sensorx04 = Number(sensorx04.toFixed(2));
        sensor0y4 = Number(sensor0y4.toFixed(2));
        sensorxy4 = Number(sensorxy4.toFixed(2));
        alfa4 = Number(alfa4.toFixed(2));
        beta4 = Number(beta4.toFixed(2));
        gamma4 = Number(gamma4.toFixed(2));
        delta4 = Number(delta4.toFixed(2));
    











        
        document.getElementById('Instrucciones').style.textAlign = 'center';
        switch (numPts) {
            case 1:
                document.getElementById('Instrucciones').innerHTML = `
                <ul>
                    <li class="negrita">Coordenadas:</li>
                    <li>(${mediaX}px,${mediaY}px)</li>
                    <li class="negrita">Coordenadas polares:</li>
                    <li class="negrita">Sensor abajo izquierda:</li>
                    <li>(${sensor00}px,${alfa}º)</li>
                    <li class="negrita">Sensor abajo derecha:</li>
                    <li>(${sensorx0}px,${beta}º)</li>
                    <li class="negrita">Sensor arriba izquierda:</li>
                    <li>(${sensor0y}px,${delta}º)</li>
                    <li class="negrita">Sensor arriba derecha:</li>
                    <li>(${sensorxy}px,${gamma}º)</li>
                </ul> <br>
                <button onclick="repetir()" class="botonesPanel">Cambiar medidas lienzo</button>
                <button onclick="cambiarPosicion()" class="botonesPanel">Cambiar posición</button>
            `;
                break;
            case 2:
                document.getElementById('Instrucciones').innerHTML = `
                <ul>
                            <li class="negrita">Coordenadas:</li>
                            <li>Punto 1:(${mediaX}px,${mediaY}px)</li>
                            <li>Punto 2:(${mediaX2}px,${mediaY2}px)</li>
                            <li class="negrita">Coordenadas polares:</li>
                            <li class="negrita">Punto 1:</li>
                            <li class="negrita">Sensor abajo izquierda:</li>
                            <li>(${sensor00}px,${alfa}º)</li>
                            <li class="negrita">Sensor abajo derecha:</li>
                            <li>(${sensorx0}px,${beta}º)</li>
                            <li class="negrita">Sensor arriba izquierda:</li>
                            <li>(${sensor0y}px,${delta}º)</li>
                            <li class="negrita">Sensor arriba derecha:</li>
                            <li>(${sensorxy}px,${gamma}º)</li>
                            <li class="negrita">Punto 2:</li>
                            <li class="negrita">Sensor abajo izquierda:</li>
                            <li>(${sensor002}px,${alfa2}º)</li>
                            <li class="negrita">Sensor abajo derecha:</li>
                            <li>(${sensorx02}px,${beta2}º)</li>
                            <li class="negrita">Sensor arriba izquierda:</li>
                            <li>(${sensor0y2}px,${delta2}º)</li>
                            <li class="negrita">Sensor arriba derecha:</li>
                            <li>(${sensorxy2}px,${gamma2}º)</li>
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
                    <li>Punto 1:(${mediaX}px,${mediaY}px)</li>
                    <li>Punto 2:(${mediaX2}px,${mediaY2}px)</li>
                    <li class="negrita">Coordenadas polares:</li>
                    <li class="negrita">Punto 1:</li>
                    <li class="negrita">Sensor abajo izquierda:</li>
                    <li>(${sensor00}px,${alfa}º)</li>
                    <li class="negrita">Sensor abajo derecha:</li>
                    <li>(${sensorx0}px,${beta}º)</li>
                    <li class="negrita">Sensor arriba izquierda:</li>
                    <li>(${sensor0y}px,${delta}º)</li>
                    <li class="negrita">Sensor arriba derecha:</li>
                    <li>(${sensorxy}px,${gamma}º)</li>
                    <li class="negrita">Punto 2:</li>
                    <li class="negrita">Sensor abajo izquierda:</li>
                    <li>(${sensor002}px,${alfa2}º)</li>
                    <li class="negrita">Sensor abajo derecha:</li>
                    <li>(${sensorx02}px,${beta2}º)</li>
                    <li class="negrita">Sensor arriba izquierda:</li>
                    <li>(${sensor0y2}px,${delta2}º)</li>
                    <li class="negrita">Sensor arriba derecha:</li>
                    <li>(${sensorxy2}px,${gamma2}º)</li>
                </ul> <br>
                <button onclick="repetir()" class="botonesPanel">Cambiar medidas lienzo</button>
                <button onclick="cambiarPosicion()" class="botonesPanel">Cambiar posición</button></br>
                <button onclick="segundaPagina()" class="botonEspecial">Siguiente página</button>
                </div>
                <div style="display:none;" id='segundaPagina'>
                <ul>
                    <li class="negrita">Coordenadas:</li>
                    <li>Punto 3:(${mediaX3}px,${mediaY3}px)</li>
                    <li class="negrita">Coordenadas polares:</li>
                    <li class="negrita">Punto 3:</li>
                    <li class="negrita">Sensor abajo izquierda:</li>
                    <li>(${sensor003}px,${alfa3}º)</li>
                    <li class="negrita">Sensor abajo derecha:</li>
                    <li>(${sensorx03}px,${beta3}º)</li>
                    <li class="negrita">Sensor arriba izquierda:</li>
                    <li>(${sensor0y3}px,${delta3}º)</li>
                    <li class="negrita">Sensor arriba derecha:</li>
                    <li>(${sensorxy3}px,${gamma3}º)</li>
                </ul>
                <button onclick="repetir()" class="botonesPanel">Cambiar medidas lienzo</button>
                <button onclick="cambiarPosicion()" class="botonesPanel">Cambiar posición</button></br>
                <button onclick="primeraPagina()" class="botonEspecial">Página Anterior</button>
                </div>
                `
                break;
            case 4:
                document.getElementById('Instrucciones').innerHTML = `
                <div style="display: block;" id='primeraPagina'>
                <ul>
                    <li class="negrita">Coordenadas:</li>
                    <li>Punto 1:(${mediaX}px,${mediaY}px)</li>
                    <li>Punto 2:(${mediaX2}px,${mediaY2}px)</li>
                    <li class="negrita">Coordenadas polares:</li>
                    <li class="negrita">Punto 1:</li>
                    <li class="negrita">Sensor abajo izquierda:</li>
                    <li>(${sensor00}px,${alfa}º)</li>
                    <li class="negrita">Sensor abajo derecha:</li>
                    <li>(${sensorx0}px,${beta}º)</li>
                    <li class="negrita">Sensor arriba izquierda:</li>
                    <li>(${sensor0y}px,${delta}º)</li>
                    <li class="negrita">Sensor arriba derecha:</li>
                    <li>(${sensorxy}px,${gamma}º)</li>
                    <li class="negrita">Punto 2:</li>
                    <li class="negrita">Sensor abajo izquierda:</li>
                    <li>(${sensor002}px,${alfa2}º)</li>
                    <li class="negrita">Sensor abajo derecha:</li>
                    <li>(${sensorx02}px,${beta2}º)</li>
                    <li class="negrita">Sensor arriba izquierda:</li>
                    <li>(${sensor0y2}px,${delta2}º)</li>
                    <li class="negrita">Sensor arriba derecha:</li>
                    <li>(${sensorxy2}px,${gamma2}º)</li>
                </ul> <br>
                <button onclick="repetir()" class="botonesPanel">Cambiar medidas lienzo</button>
                <button onclick="cambiarPosicion()" class="botonesPanel">Cambiar posición</button></br>
                <button onclick="segundaPagina()" class="botonEspecial">Siguiente página</button>
                </div>
                <div style="display:none;" id='segundaPagina'>
                <ul>
                    <li class="negrita">Coordenadas:</li>
                    <li>Punto 3:(${mediaX3}px,${mediaY3}px)</li>
                    <li>Punto 4:(${mediaX4}px,${mediaY4}px)</li>
                    <li class="negrita">Coordenadas polares:</li>
                    <li class="negrita">Punto 3:</li>
                    <li class="negrita">Sensor abajo izquierda:</li>
                    <li>(${sensor003}px,${alfa3}º)</li>
                    <li class="negrita">Sensor abajo derecha:</li>
                    <li>(${sensorx03}px,${beta3}º)</li>
                    <li class="negrita">Sensor arriba izquierda:</li>
                    <li>(${sensor0y3}px,${delta3}º)</li>
                    <li class="negrita">Sensor arriba derecha:</li>
                    <li>(${sensorxy3}px,${gamma3}º)</li>
                    <li class="negrita">Punto 4:</li>
                    <li class="negrita">Sensor abajo izquierda:</li>
                    <li>(${sensor004}px,${alfa4}º)</li>
                    <li class="negrita">Sensor4 abajo derecha:</li>
                    <li>(${sensorx04}px,${beta4}º)</li>
                    <li class="negrita">Sensor arriba izquierda:</li>
                    <li>(${sensor0y4}px,${delta4}º)</li>
                    <li class="negrita">Sensor arriba derecha:</li>
                    <li>(${sensorxy4}px,${gamma4}º)</li>
                </ul>
                <button onclick="repetir()" class="botonesPanel">Cambiar medidas lienzo</button>
                <button onclick="cambiarPosicion()" class="botonesPanel">Cambiar posición</button></br>
                <button onclick="primeraPagina()" class="botonEspecial">Página Anterior</button>
                </div>
                `
                break;
            default:
                alert('que has hecho shiquillo?')
                break;
        }
        
             
        }
    }
    
})
function primeraPagina() {
    document.getElementById('segundaPagina').style.display = 'none';
    document.getElementById('primeraPagina').style.display = 'block';
}
function segundaPagina() {
    document.getElementById('primeraPagina').style.display = 'none';
    document.getElementById('segundaPagina').style.display = 'block';
}