document.addEventListener("DOMContentLoaded", function() {
    // Hent produkt-ID fra URL-parameter
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    // Send GET-forespørsel til WordPress API-et for å hente produktinformasjon basert på produkt-IDen
    fetch(`https://my-first-site.local/wp-json/wc/store/products/${productId}`)
        .then(response => response.json())
        .then(product => {
            // Oppdater innholdet på Product Detail-siden med produktinformasjon fra API-et
            document.getElementById('product-name').innerText = product.name;
            document.getElementById('product-image').src = product.images[0].src;
            document.getElementById('product-description').innerText = product.description;
            document.getElementById('product-price').innerText = "Price: " + product.price;
            document.getElementById('product-availability').innerText = "Availability: " + product.stock_status;
        })
        .catch(error => {
            console.error('Error fetching product details:', error);
        });
});
