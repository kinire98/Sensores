let comprobarDistancia = false;
let cadenaDeTxtBDD = '';
setInterval(() => {addEventListener('keypress', () => {
    let tecla = event.key;
    let arriba = parseFloat(document.getElementById('divInterno').style.top);
    let izquierda = parseFloat(document.getElementById('divInterno').style.left);
    let anchura = parseInt(document.getElementById('width').value);
    let altura = parseInt(document.getElementById('height').value);
    if (tecla == 'w' && !comprobarDistancia) {
        if (arriba >= 0) {
            document.getElementById('divInterno').style.top = arriba - 5 +'px';
            cadenaDeTxtBDD += 'w';

        }
    }  
    if (tecla == 'a'  && !comprobarDistancia) {
        if (izquierda >= 0) {
            document.getElementById('divInterno').style.left = izquierda - 5  +'px';
            cadenaDeTxtBDD += 'a';
        }
    }  
    if (tecla == 's'  && !comprobarDistancia) {
        if (arriba <= altura - 6) {
            document.getElementById('divInterno').style.top = arriba + 5 +'px';
            cadenaDeTxtBDD += 's';
        }    
        
    }  
    if (tecla == 'd'  && !comprobarDistancia) {
        if (izquierda <= anchura - 6) {
            document.getElementById('divInterno').style.left = izquierda + 5  +'px';
            cadenaDeTxtBDD += 'd';
        }
    }
    console.log(cadenaDeTxtBDD);
    if (tecla == 'Enter' && !comprobarDistancia) {
        comprobarDistancia = true;
        console.log(cadenaDeTxtBDD);
    }
    
})},4000)

var datos = {
    'longitud1': longitud1,
    'longitud2': longitud2,
    'longitud3': longitud3,
    'longitud4': longitud4,
    'movimientos': movimientos,
    'angulo1': angulo1,
    'angulo2': angulo2,
    'angulo3': angulo3,
    'angulo4': angulo4,
    'referencia': referencia
    
};
var url = '../BackEnd/agregarBBDD.php';
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