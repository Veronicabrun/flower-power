const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');
const productDetailContainer = document.querySelector(".product-details");

async function getProductDetail(productId) {
    const url = `https://veronicabp.com/ecommerce/wp-json/wc/store/products/${productId}`;
    try {
        const response = await fetch(url);
        const product = await response.json();
        
        // Update the HTML content with the product information
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

/*https://my-first-site.local/wp-json/wc/store/products/*/