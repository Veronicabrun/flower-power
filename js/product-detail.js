//const url = "https://my-first-site.local/wp-json/wc/store/products";
//const productContainer = document.querySelector(".products");

//async function getProducts(url) {
    //try {
        //const response = await fetch(url);
        //const products = await response.json();
        //products.forEach(function(product) {
            //const productElement = document.createElement('div');
            //productElement.classList.add('product');
            //productElement.innerHTML = `
                //<h2>${product.name}</h2>
                //<img class="product-image" src="${product.images[0].src}" alt="${product.name}"/>
            //`;
            //productContainer.appendChild(productElement);

            // *Legg til klikkbegivenhet for å vise detaljer om produktet
            //productElement.addEventListener('click', function() {
                //* Naviger til enkelt produkt side med produktets ID som parameter
                //window.location.href = `specific_product.html?id=${product.id}`;
            //});
        //});
    //} catch (error) {
        //console.error('Error fetching products:', error);
    //}
//}

//getProducts(url);

const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');
const productDetailContainer = document.querySelector(".product-details");

async function getProductDetail(productId) {
    const url = `https://my-first-site.local/wp-json/wc/store/products/${productId}`;
    try {
        const response = await fetch(url);
        const product = await response.json();
        
        // Oppdater HTML-innholdet med produktinformasjonen
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.innerHTML = `
            <h2>${product.name}</h2>
            <img class="product-image" src="${product.images[0].src}" alt="${product.name}"/>
            <p>Description: ${product.description}</p>
            <p>Price: ${product.price}</p>
        `;
        productDetailContainer.appendChild(productElement);
    } catch (error) {
        console.error('Error fetching product details:', error);
    }
}

getProductDetail(productId);

