const url = "https://veronicabp.com/ecommerce/wp-json/wc/store/products";
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

 // Add click event to display product details
 productElement.addEventListener('click', function() {
    // Navigate to the single product page with the product's ID as a parameter
    window.location.href = `product-detail.html?id=${product.id}`;
});

        });
    } catch (error) {
        console.error('Error fetching products:', error);
    }
}

getProducts(url);
