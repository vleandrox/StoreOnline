const query = location.search;
console.log(query);
const params = new URLSearchParams(query);
console.log(params);
const id = params.get("id");
console.log(id);

function changeMini(event) {
  const selectedSrc = event.target.src;
  console.log(selectedSrc); 
  const bigSelector = document.querySelector("#bigImg");
  bigSelector.src = selectedSrc;
}

function changeSubtotal(event) {
  //const cantidad = document.getElementById("change").value; //obtener el valor del input
  //console.log(cantidad)
  const cantidad = event.target.value; // Obtener el valor del input
  console.log(cantidad);
  const productoActual = products.find((each) => each.id === id); // Obtener el ID del producto actual
  console.log(productoActual);
  const subtotal = productoActual.price * cantidad; // Calcular el subtotal del producto actual
  console.log(subtotal);
  const inputSelector = document.querySelector("#subtotal"); // Selecionas el elemento para renderizar
  inputSelector.textContent = `S/. ${subtotal}`;
  console.log(inputSelector);
}

function saveProduct(id) {
  const found = products.find((each) => each.id === id);
  const product = {
    id: id,
    title: found.title,
    image: found.images[0],
    color: document.querySelector("#color").value,
    quantity: document.querySelector("#quantity").value,
    price: found.price,
    subtotal: found.price * quantity.value,
    description: found.description,
  };
  console.log(product);
  if (localStorage.getItem("cart")) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    console.log(cart);
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    console.log(localStorage);
  } else {
    let cart = [product];
    console.log(cart);
    localStorage.setItem("cart", JSON.stringify(cart));
    console.log(localStorage);
  }
}

function printDetails(id) {
  const product = products.find((each) => each.id === id);
  const detailsTemplate = `<div class="columns-container">
      <div class="product-images-block">
        <div class="thumbnail-container">
          ${product.images.map((each) =>`<img class="miniImg" src="${each}" alt="mini" onclick="changeMini(event)" />`).join("")}
        </div>                        
        <img class="main-image" id="bigImg" src="${product.images[0]}" alt="${product.title}"/>                  
    </div>
    <div class="product-description-block">
        <h1 class="title">${product.title}</h1>
        <form class="selector">
            <fieldset>
              <label class="label" for="color">Color</label>
              <select type="text" id="color" placeholder="Selecciona un color">
                ${product.colors.map((each) => `<option value=${each}>${each}</option>`).join("")}
              </select>
            </fieldset>
        </form>
        <div class="description">
            <h1>${product.title}</h1>
            <p> ${product.description}</p>
        </div>
    </div>
    <div class="product-checkout-block">
      <div class="checkout-container">
        <span class="checkout-total-label">Total:</span>
        <h2 class="checkout-total-price" id="subtotal">S/.${product.price}</h2>
        <p class="checkout-description">
          Incluye impuesto PAIS y percepción AFIP. Podés recuperar AR$ 50711
          haciendo la solicitud en AFIP.
        </p>                    
        <ul class="checkout-policy-list">
          <li>
            <span class="policy-icon"><img src="assets/truck.png" alt="Truck"/></span>
            <span class="policy-desc">Agrega el producto al carrito para conocer los costos de envío</span>
          </li>
          <li>
            <span class="policy-icon"><img src="assets/plane.png" alt="Plane"/></span>
            <span class="policy-desc">Recibí aproximadamente entre 10 y 15 días hábiles, seleccionando envío normal</span>
          </li>
        </ul>
        <div class="checkout-process">
          <div class="top">
            <input type="number" value="1" id="quantity" onchange=changeSubtotal(event) id="change"/>
            <button class="btn-primary">Comprar</button>
          </div>
          <div class="bottom">
            <button class="btn-outline" id="${product.id}" onclick=saveProduct(id) >Añadir al Carrito</button>
          </div>
        </div>
      </div>                  
    </div>
</div>
    `;
  const detailsSelector = document.querySelector("#details");
  detailsSelector.innerHTML = detailsTemplate;
}
printDetails(id);
