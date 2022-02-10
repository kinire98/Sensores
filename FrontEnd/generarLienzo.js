const generarLienzo = () => {
    let anchura = parseInt(document.getElementById('width').value);
    let altura = parseInt(document.getElementById('height').value);
    if (!anchura || !altura) {
        alert('Introduce los valores de altura Y altura ')
    } else {
        document.getElementById('lienzo').style.width = anchura + 'px'
        document.getElementById('lienzo').style.height = altura +'px'
        document.getElementById('lienzo').style.border = '5px solid black'
        document.getElementById('inferior').style.display = 'none';
        document.getElementById('divInterno').style.display = 'block';
        document.getElementById('divInterno').style.background = '#000'
        document.getElementById('divInterno').style.height = '5px';
        document.getElementById('divInterno').style.width ='5px';
        document.getElementById('divInterno').style.border = '1px solid #000';
        document.getElementById('divInterno').style.top = altura/2 + 'px'
        document.getElementById('divInterno').style.left = anchura/2 + 'px';
    }
}

