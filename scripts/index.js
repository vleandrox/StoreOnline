/* let totalProducto = Number(prompt("Cuantos productos diferentes desea llevar :"));

const comprar = () =>{
    let totalApagar = 0;
    for (let i = 1; i <= totalProducto; i++) {  
        const nombre = prompt("Que producto desea llevar ? ");
        const cantidad = prompt("Cuantas unidades ? ");
        const precio = prompt("Cuanto sale cada unidad ? ");
        const subtotal = cantidad * precio;    
        totalApagar = totalApagar + subtotal;
        console.log("Has llevado " + cantidad + " unidades de " + nombre + "que costaron : "+ precio);
        console.log("El pago total es : " + totalApagar);
    }
    console.log("El Pago Total es : " + totalApagar);
}

const total1 = comprar();
const total2 = comprar();
const total3 = comprar();
const total = total1 + total2 + total3;
console.log(total); */

const comprar = ()=> {
    const totalApagar = 0
    for (let index = 1; index <= 3; index++)  {
    const nombre =prompt("¿Qué producto desea llevar?");
    const cantidad = Number(prompt("¿Cuántas unidades?"));
    const precio = Number(prompt("¿Cuánto sale cada unidad?"));
    const subtotal = cantidad * precio;
    totalApagar = totalApagar + subtotal;
    }
    console.log(totalApagar);
    return totalApagar;
}
const total1 = comprar();
const total2 = comprar();
const total3 = comprar();
const total = total1 + total2 + total3;

 