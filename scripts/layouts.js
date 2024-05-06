const navSelector = document.getElementById("nav")

const options = [
    { title: "Ofertas", linkTo: "./index.html",opts: ["Laptops", "Audio", "Auticulares"]},
    { title: "Productos", linkTo: "./index.html", opts: ["Formas de pago", "Envios", "Devoluciones"]},
    { title: "Marcas", linkTo: "./index.html",opts: ["Impuestos","Facturacion"]},
    { title: "Acerca de", linkTo: "./index.html" , opts: ["Pedidos", "Lista de deseo"]},
    { title: "Favoritos", linkTo: "./favoritos.html", opts: ["Acerca de ","Email"]  },
];

//ELEMENTOS DOM DEL NAV
const ul = document.createElement("ul");
for (let option of options) {
    
    const li = document.createElement("li"); // crea el elemento li
    const anchor = document.createElement("a"); // Crear un enlace y configurar sus propiedades
    anchor.textContent = option.title;
    anchor.style.margin="20px";
    anchor.href = option.linkTo;

    li.appendChild(anchor); // Agregar el enlace al elemento de lista    
    ul.appendChild(li);// Agregar el elemento de lista a la lista ordenada
}
navSelector.appendChild(ul);

//ELEMENTOS DOM DEL FOOTER
const footerSelector = document.querySelector("footer");

for (const option of options) {
    const col = document.createElement("div");
    col.classList.add("col");

    const ul = document.createElement("ul");
    col.appendChild(ul);

    const titleLi = document.createElement("li");
    titleLi.classList.add("col-main-item");
    const titleLink = document.createElement("a");
    titleLink.href = option.linkTo;
    titleLink.textContent = option.title;
    titleLi.appendChild(titleLink);
    ul.appendChild(titleLi);

    for (const opt of option.opts) {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = "#"; // Esto debería cambiar a la URL correspondiente
        a.textContent = opt;
        li.appendChild(a);
        ul.appendChild(li);
    }

    footerSelector.querySelector(".columns-container").appendChild(col);
}

//ELEMENTOS DEL SEARCH
const searchSelectorDom = document.getElementById("search");

// Crear el elemento input
const searchInput = document.createElement("input");
searchInput.setAttribute("type", "text");
searchInput.setAttribute("placeholder", "Search");

// Agregar el input al formulario
searchSelectorDom.appendChild(searchInput);