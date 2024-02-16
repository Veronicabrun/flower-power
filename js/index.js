//const url = "https://my-first-site.local/wp-json/wc/store/products";
//const productContainer = document.querySelector(".products")

//async function getProducts(url){
    //const response = await fetch(url);
    //const products = await response.json();
    //products.forEach(function(product){
        //productContainer.innerHTML += `
        //<div class="product"><h2>${product.name}</h2>
        //<div class="product-image" style="background-image:url('${product.images[0].src}')
        //</div>`
        
    //})
//}

//getProducts(url);

const url = "https://my-first-site.local/wp-json/wc/store/products";
const productContainer = document.querySelector(".products");

async function getProducts(url) {
    try {
        const response = await fetch(url);
        const products = await response.json();
        products.forEach(function(product) {
            const productElement = document.createElement('div');
            productElement.classList.add('product');
            productElement.innerHTML = `
                <h2>${product.name}</h2>
                <img class="product-image" src="${product.images[0].src}" alt="${product.name}"/>
            `;
            productContainer.appendChild(productElement);

 // Legg til klikkbegivenhet for å vise detaljer om produktet
 productElement.addEventListener('click', function() {
    // Bytt ut denne linjen med din ønskede håndtering av klikk
    console.log('Klikket på produkt:', product.name);
});
// ^^^ Legg til denne delen for å legge til en klikkbegivenhet




        });
    } catch (error) {
        console.error('Error fetching products:', error);
    }
}

getProducts(url);
