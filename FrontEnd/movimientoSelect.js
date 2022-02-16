
function movimientoSelect(){
    verMovimiento = 1;
    let nMovimiento = document.getElementById("movimientoBBDD").value; // OBTIENE EL VALOR DEL MOVIMIENTO SELECCIONADO
    let movimiento = lista_movimientosJS[nMovimiento]; // OBTIENE EL STRING CON LOS MOVIMIENTOS
    let altura = lista_alturaJS[nMovimiento];
    
    let anchura = lista_anchuraJS[nMovimiento];
    
 
    if (!anchura || !altura ) { //Comprueba que se hayan introducido ambos valores, en caso contrario saltará una alerta que comunicará que ambos datos son obligatorios
        alert('Introduce los valores de altura Y altura ')
    } else if (altura < 500 || altura > 900 || anchura < 500 || anchura > 900){//Aquí se comprueba que los valores introducidos estén entre 500 y 1000
        alert('Tanto la altura como la anchura tienen que estar entre 500 y 1000')
    } else if ((altura % 50 != 0) || (anchura % 50 != 0)) { //Comprueba que el número sea múltiplo de 50
        alert ('Introduce un número multiplo de 50');
    } else { //Y aquí se otorgan los estilos que hacen que el lienzo y el punto sean visibles
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
        document.getElementById('Instrucciones').style.display = 'none';

        document.getElementById('form_ver').style.display = 'none';
        document.getElementById('btn-volver').style.display = 'block';


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

        let arriba = parseFloat(document.getElementById('divInterno').style.top); //Estas variables adquieren el valor de los píxeles que le faltan al punto para llegar al borde superior o izquierdo del recipiente
        let izquierda = parseFloat(document.getElementById('divInterno').style.left);
        
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

        let numMov = 0;
        let letra = 'a';
        setInterval(function() {
            if(numMov == movimiento.length){
                return "salir"; // SALIR DEL BUCLE
            }
            letra = movimiento.charAt(numMov);
            if(letra == 'w'){
                arriba = arriba - 10;
                document.getElementById('divInterno').style.top = arriba +'px';
            }
            if(letra == 'a'){
                izquierda = izquierda - 10;
                document.getElementById('divInterno').style.left = izquierda +'px';
            }
            if(letra == 's'){
                arriba = arriba + 10;
                document.getElementById('divInterno').style.top = arriba +'px';
            }
            if(letra == 'd'){
                izquierda = izquierda + 10;
                document.getElementById('divInterno').style.left = izquierda + 10  +'px';
            }
            numMov++;
        }, 100);

        
        

    }
    }
    
