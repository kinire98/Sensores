let oordenada1 = parseInt(prompt('Introduce la oordenada del primer punto'));
let abscisa1 = parseInt(prompt('Introduce la abscisa del primer punto'));
let oordenada2 =parseInt(prompt('Introduce la oordenada del segundo punto'));
let abscisa2 = parseInt(prompt('Introduce la abscisa del segundo punto'));

document.write(`La distancia entre los dos puntos introducidos es ${Math.sqrt((oordenada1-oordenada2)**2+(abscisa1-abscisa2)**2)}. Su aproximación es ${Math.round(Math.sqrt((oordenada1-oordenada2)**2+(abscisa1-abscisa2)**2))}`)


/*

NO TE RAYES SARDI, ESTE CÓDIGO LO HE COPIADO PARA HACER COSAS EN LAS QUE HAY QUE UTILIZAR MATEMÁTICAS

    var box = document.querySelector('#box');
    var innerbox = document.querySelector('#inner-box');
 
    box.onmouseenter = function (e) {
        var wrapperBoxWidth = box.offsetWidth; // Obtener el ancho del contenedor primario
                 var wrapperBoxHeight = box.offsetHeight; // Obtener la altura del contenedor primario
 
                 var innerBoxWidth = innerbox.offsetWidth; // Obtener el ancho del cuadro de viñetas
                 var innerBoxHeight = innerbox.offsetHeight; // Obtener la altura del cuadro de viñetas
                 var innerBoxLeft = innerbox.offsetLeft; // Obtener el ancho del cuadro de viñeta desde la izquierda
                 var innerBoxTop = innerbox.offsetTop; // Obtenga la altura del cuadro de viñetas desde la parte superior
 
                 innerbox.style.visibility = 'visible' // Muestra el cuadro emergente cuando se mueve el mouse
        
                 // Si el ancho del marco de viñetas + el ancho del lado izquierdo es mayor que el ancho del elemento externo, el lado derecho se desborda
        if (innerBoxLeft + innerBoxWidth > wrapperBoxWidth) {
            innerbox.style.left = 'auto'
            innerbox.style.right = '10px'
        }
 
                 // Si la altura del marco de viñeta + la altura desde la parte superior es mayor que la altura del elemento externo, la parte inferior se desborda
        if (innerBoxTop + innerBoxHeight > wrapperBoxHeight) {
            innerbox.style.top = 'auto'
            innerbox.style.bottom = '10px'
        }
    }
    box.onmouseleave = function () {
                 innerbox.style.visibility = 'hidden' // Ocultar la ventana emergente cuando el mouse se aleja
    }
*/