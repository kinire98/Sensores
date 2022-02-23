# SensoresAweb
## Proyecto de David e Iker Sensores Aplicaciones Web
Este proyecto propuesto por nuestra profesora trata de una especie de **lienzo**, en el cuál hay unos **puntos** de los cuáles hay que hallar su **posición** con unos **sensores** que se encuentran en las **esquinas**. 
*Como en el navegador no hay ninguna manera de simular dichos sensores, se simularon midiendo la distancia a los bordes del recipiente* de cada uno de los puntos.
Tras eso se obtuvo la distancia a cada una de las esquinas, la cual se utilizó para el resto de las operaciones.
Con estas **_Se calcularon las coordenadas estándar para los puntos y las coordenadas polares desde cada una de las esquinas_**, tomando su esquina como si fuera el origen de coordenadas.

***Instrucciones de uso:***
**Para generar un nuevo movimiento:**
- **1 Seleccionar las medidas del lienzo, tanto alto como ancho _Solo se puede poner un alto o ancho de un mínimo de 500 píxeles y un máximo de 900 píxeles. Además tiene que ser múltiplo de 50_. También tendrás que seleccionar el número de puntos que quieres que aparezcan en el lienzo**
- *2 Ponerle una referencia a dicho movimiento**NO SE PUEDE UTILIZAR UNA REFERENCIA YA EN USO***
- *3 Presionar botón de generar lienzo. Si los pasos anteriores son correctos se generará el lienzo con el movmiento*
- **4 Para mover el punto 1:**
    - ***W-> ARRIBA***
    - ***A-> IZQUIERDA***
    - ***S -> ABAJO***
    - ***D -> DERECHA***
- **5 Para mover el punto 2:**
    - ***T-> ARRIBA***
    - ***F-> IZQUIERDA***
    - ***G -> ABAJO***
    - ***H -> DERECHA***
- **6 Para mover el punto 3:**
    - ***J-> ARRIBA***
    - ***N-> IZQUIERDA***
    - ***M -> ABAJO***
    - ***, -> DERECHA***
- **7 Para mover el punto 4:**
    - ***O-> ARRIBA***
    - ***K-> IZQUIERDA***
    - ***L -> ABAJO***
    - ***Ñ -> DERECHA***
- **8 Para guardar el movimiento en la base de datos se debe presionar Enter._Cuando se presione Enter ya no se podrán mover los puntos_**
- **Para importar un movimiento:**
- **1 Escribir la referencia del movimiento en el cuadro de texto que pone _Referencia_ y pulsar el botón**


Para poder utilizar el programa, sirve cualquier ordenador que soporte un navegador que de ***soporte al estándar ES6***, debido a la clase que está en el código ya que si se pone a funcionar en*IE11*, no funcionará de manera correcta el código ya que no podrá calcular las coordenadas. 
Si se pone a funcionar en un ordenador con un navegador que soporte ES6 no debería haber ningún problema. **(Ejemplos de navegadores que soportan ES6, _Google Chrome, Microsoft Edge, Opera, Mozilla Firefox o Brave_)**