const generarLienzo = () => {
    let anchura = parseInt(document.getElementById('width').value);
    let altura = parseInt(document.getElementById('height').value);
    document.getElementById('lienzo').style.width = anchura + 'px'
    document.getElementById('lienzo').style.height = altura +'px'
    document.getElementById('lienzo').style.border = '5px solid black'
    document.getElementById('inferior').style.display = 'none'
}

