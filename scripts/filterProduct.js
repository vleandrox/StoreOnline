// const html = document.getElementById("search");//obtienes el valor del documento con id=search

// ** Actividad: Asignar evento de teclado en línea
// function captureText(event){
//     // console.log("CAPTURADO");
//     console.log("LETRA INGRESADA: ", event.target.value);
//     console.log(event)
//     console.log(html)
// }
// ** Actividad: asignación de evento de teclado con event listener
// const searchSelector = document.querySelector("#search")
// searchSelector.addEventListener("keyup", captureText);
// ** Actividad: Investigación del evento de teclado
// searchSelector.addEventListener("keyup",  event=>captureText(event));


//**--------------------------------------------------------------------------------------**
// *** FILTRA CON EL TECLADO  ***
function actualizarVista(productos) {
    let productsTemplate = ""; // Inicializa vacio
    for (const element of productos) { 
        productsTemplate += createCard(element); // la variable se concatena con el html
    }
    productsSelector.innerHTML = productsTemplate; // reemplazamos el contenido dentro del productSelector
}

function captureText(event){ 
    console.log(event.target.value)    
    const capturado = event.target.value // target.value = devuelve el valor actual del campo de búsqueda
    const productosFiltrados  = products.filter(producto => {                
        return producto.title.toLowerCase().includes(capturado);                
    });
    console.log("Productos filtrados:", productosFiltrados);
    actualizarVista(productosFiltrados);
}
 
const searchSelector = document.querySelector("#search")
searchSelector.addEventListener("keyup", event=>captureText(event));




