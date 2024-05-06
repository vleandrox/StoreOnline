// Definir variable cartproducts que traiga el array del localStorage
const cartproducts = JSON.parse(localStorage.getItem("cart"));

/** Renderizar dinámicamente los productos del carrito */
// Llamas al id del elemento en el que vas a renderizar
const carritoSelector = document.getElementById("cartproducts");

// Función para crear la plantilla de cada producto en el carrito
function createCarrito(producto) {
  createTotalTemplate(cartproducts);
  return `<div class="product-card">
    <img src="${producto.image}" alt="" class="product-img">
    <div class="product-info">
      <span class="product-title">${producto.title}</span>
      <span class="product-color">${producto.color}</span>
      <span class="product-description">${producto.description}</span>
      <div class="product-quantity">
        <input type="number" onchange=changeQuantity(event) name="quantity" class="btn-outline" id="${producto.id}" value="${producto.quantity}">
      </div>
    </div>
    <div class="product-price">
      <span class="price">Precio : S/.${producto.price}</span>
    </div>
  </div>`;
}

// Renderizar todos los productos del carrito
if (cartproducts && cartproducts.length > 0) {
  // Si hay productos en el carrito, renderiza los productos
  carritoSelector.innerHTML = cartproducts.map(createCarrito).join("");
} else 
{
  // Si no hay productos en el carrito, renderiza la vista de "carrito vacío"
  const ventaTerminada = `
    <article class="detproduct-card" id="cartproducts">
              <div class="product-card">
                <div class="carritovacio"> 
                  <span>NO HAY PRODUCTOS EN SU CARRITO</span>
                </div>
              </div>
            </article>            
            `;
  carritoSelector.innerHTML = ventaTerminada;
}

/***Renderizar el total a pagar*/
//Llamas al id del elmento en le que vas a renderizar
// const totalCartSelector = document.getElementById("totalcart");
// function createTotalTemplate(cartproducts) {
//   let total = 0;
//   cartproducts.forEach((each) => (total = total + each.price * each.quantity));
//   // o tambien puede ser total=total+each.price*each.quantity //each.subtotal
//   return `
//   <span class="titulo-resumen">Resumen del Pedido</span>
//     <div class="totproduct-price">
//       <span class="total-resumen">Total</span>
//       <span class="precio-resumen">$/.${total}</span>
//     </div>
//     <div class="product-tax-policy">Incluye impuesto País y percepción AFIP</div>
//     <div class="product-comprar">
//       <button class="button-comprar" onclick="finalizarCompra(event)" id="buyProducts"> Finalizar la compra </button>
//     </div>`;
// }
// let totalTemplate = "";
// totalTemplate = totalTemplate + createTotalTemplate(cartproducts);
// totalCartSelector.innerHTML = totalTemplate;

/***Renderizar el total a pagar*/
function createTotalTemplate(cartproducts) {
  const totalCartSelector = document.getElementById("totalCarrito");
  let total = 0;
  cartproducts.forEach((each) => (total = total + each.price * each.quantity));
  totalCartSelector.textContent = `S/. ${total}`;
}

/**Evento changeQuantity(event) para cambiar la cantidad de productos en el carrito*/
function changeQuantity(event) {
  //Solo obtienes el id del producto actual
  const found = event.target.id;
  //Obtener el array del producto que cambia
  const productoActual = cartproducts.find((each) => each.id === found);
  //Obtener la cantidad actual del producto en el carrito
  const nuevaCantidad = event.target.value;
  //Otra forma enviar nueva cantidad : const cambio = productActual.quantity.replace(nuevaCantidad)
  //Actualizar la cantidad del producto actual
  productoActual.quantity = nuevaCantidad;
  //Guarda el array actualizado
  localStorage.setItem("cart", JSON.stringify(cartproducts));
  createCarrito(cartproducts);
  createTotalTemplate(cartproducts);
}
