addEventListener('keypress', () => {
    let tecla = event.key;
    if (tecla == 'Enter'){
        let abscisas = document.getElementById('divInterno').style.left;
        let oordenadas = document.getElementById('divInterno').style.bottom;
        let abscisasOpuestas = document.getElementById('divInterno').style.right;
        let oordenadasOpuestas = document.getElementById('divInterno').style.top;
        export let sensor1 = Math.sqrt((abscisas**2)+(oordenadas**2));
        export let sensor2 = Math.sqrt((abscisasOpuestas**2)+(oordenadas**2));
        export let sensor3 = Math.sqrt((abscisas**2)+(oordenadasOpuestas**2));
        export let sensor4 = Math.sqrt((abscisasOpuestas**2)+(oordenadasOpuestas**2));
    }
})