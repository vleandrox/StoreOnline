const cartfavoritos = JSON.parse(localStorage.getItem("favoritos"));
const favoritosSelector = document.getElementById("favoritos");

function createFavoritos(cartfavoritos){
  return `<a class="product-card" href="./details.html?id=${cartfavoritos.id}">
  <img class="product-img" src="${cartfavoritos.image}" alt="${cartfavoritos.title}" />
  <div class="product-info">
      <span class="product-title">${cartfavoritos.title}</span>
      <span class="product-description">${cartfavoritos.description}</span>
      <div class="product-price-block">
          <span class="price">$/.${cartfavoritos.price}</span>
          <span class="discount">Cantidad:${cartfavoritos.quantity}</span>
      </div>
      <div class="product-tax-policy">Incluye impuesto País y percepción AFIP</div>
  </div>
</a>`
}
let favoritosTemplate = "";
for(const element of cartfavoritos){
    favoritosTemplate = favoritosTemplate + createFavoritos(element)
}
favoritosSelector.innerHTML = favoritosTemplate