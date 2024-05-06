const productsSelector = document.getElementById("products");

function createCard(product){
  return `<a class="product-card" href="./details.html?id=${product.id}">
  <img class="product-img" src="${product.images[0]}" alt="${product.title}" />
  <div class="product-info">
    <span class="product-title">${product.title}</span>
    <span class="product-description">${product.description}</span>
    <div class="product-price-block">
      <span class="price">$/.${product.price}</span>
      <span class="discount">50% Off</span>
    </div>
    <div class="product-tax-policy">Incluye impuesto País y percepción AFIP</div>
  </div>
  </a>`
}

let productsTemplate = "";
for(const element of products){
  productsTemplate = productsTemplate + createCard(element)
}

productsSelector.innerHTML = productsTemplate