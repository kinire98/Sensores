let comprobarDistancia = false
setInterval(() => {addEventListener('keydown', () => {
    let tecla = event.key;
    let arriba = parseFloat(document.getElementById('divInterno').style.top);
    let izquierda = parseFloat(document.getElementById('divInterno').style.left);
    let anchura = parseInt(document.getElementById('width').value);
    let altura = parseInt(document.getElementById('height').value);
    if (tecla == 'w' && !comprobarDistancia) {
        if (arriba >= 0) {
            document.getElementById('divInterno').style.top = arriba - 1 +'px'
        }
    }  
    if (tecla == 'a'  && !comprobarDistancia) {
        if (izquierda >= 0) {
            document.getElementById('divInterno').style.left = izquierda - 1 +'px'
        }
    }  
    if (tecla == 's'  && !comprobarDistancia) {
        if (arriba <= altura - 6) {
            document.getElementById('divInterno').style.top = arriba + 1 +'px'
        }    
        console.log(arriba)
    }  
    if (tecla == 'd'  && !comprobarDistancia) {
        if (izquierda <= anchura - 6) {
            document.getElementById('divInterno').style.left = izquierda + 1 +'px';
        }
    }
    if (tecla == 'Enter' && !comprobarDistancia) {
        comprobarDistancia = true
    }
})},500)