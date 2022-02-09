let oordenada1 = parseInt(prompt('Introduce la oordenada del primer punto'));
let abscisa1 = parseInt(prompt('Introduce la abscisa del primer punto'));
let oordenada2 =parseInt(prompt('Introduce la oordenada del segundo punto'));
let abscisa2 = parseInt(prompt('Introduce la abscisa del segundo punto'));

document.write(`La distancia entre los dos puntos introducidos es ${Math.sqrt((oordenada1-oordenada2)**2+(abscisa1-abscisa2)**2)}. Su aproximación es ${Math.round(Math.sqrt((oordenada1-oordenada2)**2+(abscisa1-abscisa2)**2))}`)