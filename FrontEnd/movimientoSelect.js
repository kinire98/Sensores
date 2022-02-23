
function movimientoSelect(){
    verMovimiento = 1;
    let nMovimiento = document.getElementById("movimientoBBDD").value; // OBTIENE EL VALOR DEL MOVIMIENTO SELECCIONADO
    let movimiento1 = lista_movimientos1JS[nMovimiento]; // OBTIENE EL STRING CON LOS MOVIMIENTOS
    let movimiento2 = lista_movimientos2JS[nMovimiento];
    let movimiento3 = lista_movimientos3JS[nMovimiento];
    let movimiento4 = lista_movimientos4JS[nMovimiento];

    let altura = lista_alturaJS[nMovimiento];   
    let anchura = lista_anchuraJS[nMovimiento];
    let numPts = 1;
 
    if (!anchura || !altura ) { //Comprueba que se hayan introducido ambos valores, en caso contrario saltará una alerta que comunicará que ambos datos son obligatorios
        alert('Introduce los valores de altura Y altura ')
    } else if (altura < 500 || altura > 900 || anchura < 500 || anchura > 900){//Aquí se comprueba que los valores introducidos estén entre 500 y 1000
        alert('Tanto la altura como la anchura tienen que estar entre 500 y 1000')
    } else if ((altura % 50 != 0) || (anchura % 50 != 0)) { //Comprueba que el número sea múltiplo de 50
        alert ('Introduce un número multiplo de 50');
    } else {
        
        //Y aquí se otorgan los estilos que hacen que el lienzo y el punto sean visibles
    /*    document.getElementById('lienzo').style.width = anchura + 'px'
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
        document.getElementById('Instrucciones').style.display = 'block';*/

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

        document.getElementById('form_ver').style.display = 'none';
        document.getElementById('btn-volver').style.display = 'block';

        if (movimiento2.length > 0) {
            numPts = 2;
            document.getElementById('divInterno2').style.display = 'block';
            document.getElementById('divInterno2').style.background = '#FDEFF4'
            document.getElementById('divInterno2').style.height = '5px';
            document.getElementById('divInterno2').style.width ='5px';
            document.getElementById('divInterno2').style.border = '1px solid #FDEFF4';
            document.getElementById('divInterno2').style.top = altura/2 + 'px'
            document.getElementById('divInterno2').style.left = anchura/2 + 'px';
            if (movimiento3.length > 0) {
                numPts = 3;
                document.getElementById('divInterno3').style.display = 'block';
                document.getElementById('divInterno3').style.background = '#F1D00A'
                document.getElementById('divInterno3').style.height = '5px';
                document.getElementById('divInterno3').style.width ='5px';
                document.getElementById('divInterno3').style.border = '1px solid #F1D00A';
                document.getElementById('divInterno3').style.top = altura/2 + 'px'
                document.getElementById('divInterno3').style.left = anchura/2 + 'px';            
                if (movimiento4.length > 0) {
                    numPts = 4;
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

        let arriba1 = parseFloat(document.getElementById('divInterno').style.top); //Estas variables adquieren el valor de los píxeles que le faltan al punto para llegar al borde superior o izquierdo del recipiente
        let izquierda1 = parseFloat(document.getElementById('divInterno').style.left);

        let arriba2 = parseFloat(document.getElementById('divInterno2').style.top); //Estas variables adquieren el valor de los píxeles que le faltan al punto para llegar al borde superior o izquierdo del recipiente
        let izquierda2 = parseFloat(document.getElementById('divInterno2').style.left);

        let arriba3 = parseFloat(document.getElementById('divInterno3').style.top); //Estas variables adquieren el valor de los píxeles que le faltan al punto para llegar al borde superior o izquierdo del recipiente
        let izquierda3 = parseFloat(document.getElementById('divInterno3').style.left);

        let arriba4 = parseFloat(document.getElementById('divInterno4').style.top); //Estas variables adquieren el valor de los píxeles que le faltan al punto para llegar al borde superior o izquierdo del recipiente
        let izquierda4 = parseFloat(document.getElementById('divInterno4').style.left);
        console.log(arriba1);
        
      /*  for(let numMov = 0; numMov < movimiento.length; numMov++){

            console.log(numMov);
            let letra = movimiento.charAt(numMov);
            if(letra == 'w'){
                document.getElementById('divInterno').style.top = arriba - 10 +'px';
                console.log("w");
            }
            else if(letra == 'a'){
                document.getElementById('divInterno').style.left = izquierda - 10  +'px';
                console.log("a");
            }
            else if(letra == 's'){
                document.getElementById('divInterno').style.top = arriba + 10 +'px';
                console.log("s");
            }
            else if(letra == 'd'){
                document.getElementById('divInterno').style.left = izquierda + 10  +'px';
                console.log("d");
            }
        }*/

        var numMov = 0;

        let letra = 'a';
        setInterval(function() {
            if((numMov >= movimiento1.length && numMov >= movimiento2.length && numMov >= movimiento3.length && numMov >= movimiento4.length) && numMov > 0){
                return "salir"; // SALIR DEL BUCLE
            }
            letra = movimiento1.charAt(numMov);
            if(letra == 'w'){
                arriba1 = arriba1 - 10;
                document.getElementById('divInterno').style.top = arriba1 +'px';
            }
            if(letra == 'a'){
                izquierda1 = izquierda1 - 10;
                document.getElementById('divInterno').style.left = izquierda1 +'px';
            }
            if(letra == 's'){
                arriba1 = arriba1 + 10;
                document.getElementById('divInterno').style.top = arriba1 +'px';
            }
            if(letra == 'd'){
                izquierda1 = izquierda1 + 10;
                document.getElementById('divInterno').style.left = izquierda1 +'px';
            }
            // -- MOV 2
            letra = movimiento2.charAt(numMov);
            if(letra == 't'){
                arriba2 = arriba2 - 10;
                document.getElementById('divInterno2').style.top = arriba2 +'px';
            }
            if(letra == 'f'){
                izquierda2 = izquierda2 - 10;
                document.getElementById('divInterno2').style.left = izquierda2 +'px';
            }
            if(letra == 'g'){
                arriba2 = arriba2 + 10;
                document.getElementById('divInterno2').style.top = arriba2 +'px';
            }
            if(letra == 'h'){
                izquierda2 = izquierda2 + 10;
                document.getElementById('divInterno2').style.left = izquierda2 +'px';
            }
            // -- MOV 3
            letra = movimiento3.charAt(numMov);
            if(letra == 'j'){
                arriba3 = arriba3 - 10;
                document.getElementById('divInterno3').style.top = arriba3 +'px';
            }
            if(letra == 'n'){
                izquierda3 = izquierda3 - 10;
                document.getElementById('divInterno3').style.left = izquierda3 +'px';
            }
            if(letra == 'm'){
                arriba3 = arriba3 + 10;
                document.getElementById('divInterno3').style.top = arriba3 +'px';
            }
            if(letra == ','){
                izquierda3 = izquierda3 + 10;
                document.getElementById('divInterno3').style.left = izquierda3 +'px';
            }
            // -- MOV 4
            letra = movimiento4.charAt(numMov);
            if(letra == 'o'){
                arriba4 = arriba4 - 10;
                document.getElementById('divInterno4').style.top = arriba4 +'px';
            }
            if(letra == 'k'){
                izquierda4 = izquierda4 - 10;
                document.getElementById('divInterno4').style.left = izquierda4 +'px';
            }
            if(letra == 'l'){
                arriba4 = arriba4 + 10;
                document.getElementById('divInterno4').style.top = arriba4 +'px';
            }
            if(letra == 'ñ'){
                izquierda4 = izquierda4 + 10;
                document.getElementById('divInterno4').style.left = izquierda4 +'px';
            }
            numMov++;
        }, 100);

        
        

    }

    class CalculoCoordenadas {
        constructor (id) {
            this.id = id;
        }  
        calculoCoordenadas () {
            let abscisas = parseFloat(document.getElementById(this.id).style.left); //Este bloque de código, simula la señal que daría el sensor de distancia,
            let oordenadasOpuestas = parseFloat(document.getElementById(this.id).style.top)+5;//para que más tarde al pasarlo a los sensores el código pueda seguir 
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
            let xArriba = anchura-((anchura**2)-(sensor0y**2)+(sensorxy**2))/(2*anchura); //Para estos puntos, como había dos variables que había dos variables al cuadrado (una se conoce y otra no, en el otro punto al revés)
            let c2 = -(sensorxy**2)+(anchura**2)-(2*anchura*xArriba)+(xArriba**2)+(altura**2);//Tuve que cambiar la fórmula ligeramente. Especialmente la c. Como había muchos datos en esta c lo puse en una variable a parte para simplificar la fórmula siguiente
            let yArriba = (-(-2*altura)-Math.sqrt(((-2*altura)**2)-(4*c2)))/2;//Esto es una ecuación cuadrática. Con esto ya se pueden obtener los puntos más problemáticos
            let yDcha = ((altura**2)-(sensorxy**2)+(sensorx0**2))/(2*altura);
            let c = -(sensorx0**2)+(yDcha**2)+(anchura**2);//Esto es lo mismo, pero para el otro punto cambiando los datos para calcularlo
            let xDcha = (-(-2*anchura)-Math.sqrt(((-2*anchura)**2)-(4*c)))/2;
            
            
            
            let mediaX = media(xAbajo,xArriba,xDcha,xIzda);//Estas líneas hacen una media con los resultados obtenidos, para así si hay alguna discordancia entre medidas poder solucionar
            let mediaY = media(yAbajo,yArriba,yDcha,yIzda);//dicha discordancia cometiendo el mínimo error posible.
            //El procedimiento de hacer la media está más enfocado a los sensores, ya que estos pueden cometer cierto error, sin embargo en el navegador es prácticamente imposible que surja
            
            mediaX = Number(mediaX.toFixed(2))
            mediaY = Number(mediaY.toFixed(2))
            
    
            //Cálculo coordenadas polares
            //Tenemos la hipotenuso y el cateto opuesto del ángulo que queremos calcular
            let alfa = Math.asin(mediaY/sensor00); //Como el seno de un ángulo es el cateto opuesto entre la hipotenusa
            let beta = Math.asin ((anchura-mediaX)/sensorx0);//y tengo el cateto opuesto y la hipotenusa, los dividó
            let gamma = Math.asin ((altura-mediaY)/sensorxy);//Y con su resultado hago el arco seno (arcsen), con el 
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
            return [mediaX,mediaY,sensor00,sensorx0,sensor0y,sensorxy,alfa,beta,gamma,delta];//Aquí se devuelven los valores calculados en forma de matriz, para poder devolver todos los valores
        }
    }
    let punto1 = new CalculoCoordenadas('divInterno'); //Declaración de las instancias de la clase
    let punto2 = new CalculoCoordenadas('divInterno2');
    let punto3 = new CalculoCoordenadas('divInterno3');
    let punto4 = new CalculoCoordenadas('divInterno4');



    // if(verMovimiento == 1){
        
        setInterval(() => {

            if((numMov >= movimiento1.length && numMov >= movimiento2.length && numMov >= movimiento3.length && numMov >= movimiento4.length) && numMov > 0){
                return "salir"; // SALIR DEL BUCLE
            }

            if (document.getElementById('inferior').style.display == 'none' && !comprobarDistancia) {
                let coordenadasPunto1 = punto1.calculoCoordenadas();
                let coordenadasPunto2 = punto2.calculoCoordenadas();//Cálculo de las coordenadas para cada una de las instancias de la clase
                let coordenadasPunto3 = punto3.calculoCoordenadas();
                let coordenadasPunto4 = punto4.calculoCoordenadas();
                
                
                switch (numPts) {//Con este switch se comprueba el número de puntos seleccionados para rastrear para que no salgan las coordenadas de puntos que no se están rastreando
                    case 1:
                        document.getElementById('botonCoordenadas').style.display = 'block'
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
                    `;
                        break;
                    case 2:
                        document.getElementById('botonCoordenadas').style.display = 'block'
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
                        `
                        break;
                    case 3:
                        document.getElementById('botonCoordenadas').style.display = 'block'
                        document.getElementById('Instrucciones').innerHTML = `
                        <div id="izda">
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
                            </ul> 
                            </div>
                            <div id="dcha2">
                            <li>Punto 3:(${coordenadasPunto3[0]}px,${coordenadasPunto3[1]}px)</li>
                                <li class="negrita">Sensor abajo izquierda:</li>
                                <li>(${coordenadasPunto3[2]}px,${coordenadasPunto3[6]}º)</li>
                                <li class="negrita">Sensor abajo derecha:</li>
                                <li>(${coordenadasPunto3[3]}px,${coordenadasPunto3[7]}º)</li>
                                <li class="negrita">Sensor arriba izquierda:</li>
                                <li>(${coordenadasPunto3[4]}px,${coordenadasPunto3[9]}º)</li>
                                <li class="negrita">Sensor arriba derecha:</li>
                                <li>(${coordenadasPunto3[5]}px,${coordenadasPunto3[8]}º)</li>
                            </div><br>
                        `
                        break;
                    case 4://Como sse devuelven los datos en forma de matriz se van escibiendo cada uno en sus respectivos apartados
                        document.getElementById('botonCoordenadas').style.display = 'block'
                        document.getElementById('Instrucciones').innerHTML = `
                        <h1>HOLA</h1>
                        <div id="izda" style="margin-top: 700px;">
                        <ul>
                            <li class="negrita">Coordenadas:</li>
                            <li>1:(${coordenadasPunto1[0]}px,${coordenadasPunto1[1]}px)</li>
                            <li>2:(${coordenadasPunto2[0]}px,${coordenadasPunto2[1]}px)</li>
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
                            
                            </div>
                            <div id="dcha">
                                <ul>
                                    <li style="list-style-type: none;"></li>
                                    <li>3:(${coordenadasPunto3[0]}px,${coordenadasPunto3[1]}px)</li>
                                    <li>4:(${coordenadasPunto4[0]}px,${coordenadasPunto4[1]}px)</li>
                                    <li class="negrita">Coordenadas polares:</li>
                                    <li class="negrita">Punto3:</li>
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
                                    <br>
                                </ul>
                            </div>
                        `;
                        
                        break;
                    default:
                        alert('que has hecho shiquillo?. Búscate un hobby o algo ¿no?, en vez de dedicarte aquí a romper los programas de los demás, sin vergüenza xD')
                        break;
                }
            }
        }, 100);
        }


   // }
    
