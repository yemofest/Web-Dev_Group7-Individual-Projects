document.addEventListener("DOMContentLoaded", function() {
    const productsContainer = document.getElementById('products-container');
    const cartBtn = document.getElementById('cart-btn');
    const cartModal = document.getElementById('cart-modal');
    const overlay = document.getElementById('overlay');
    const closeBtn = document.getElementById('close-btn');
    const cartItemsDiv = document.getElementById('cart-items');
    const cartTotalDiv = document.getElementById('cart-total');
    const checkoutBtn = document.getElementById('checkout-btn');

    let cartItems = [];
    let total = 0;

    // Sample product data (you can replace this with actual data from a database)
    const products = [
        { id: 1, name: 'Nice Shirt', price: 15 },
        { id: 2, name: 'Cool T-Shirt', price: 8 },
        
    ];

    // Function to display products
    function displayProducts() {
        productsContainer.innerHTML = '';
        products.forEach(product => {
            const productCard = document.createElement('div');
            productCard.classList.add('product');
            productCard.innerHTML = `
                <h3>${product.name}</h3>
                <p>$${product.price}</p>
                <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
            `;
            productsContainer.appendChild(productCard);
        });
    }

    // Event listener for adding to cart
    productsContainer.addEventListener('click', function(e) {
        if (e.target.classList.contains('add-to-cart')) {
            const productId = parseInt(e.target.getAttribute('data-id'));
            const product = products.find(item => item.id === productId);
            if (product) {
                cartItems.push(product);
                total += product.price;
                updateCart();
            }
        }
    });

    // Update cart UI
    function updateCart() {
        cartItemsDiv.innerHTML = '';
        cartItems.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');
            cartItem.textContent = item.name + ' - $' + item.price;
            cartItemsDiv.appendChild(cartItem);
        });
        cartTotalDiv.textContent = 'Total: $' + total.toFixed(2);
        document.getElementById('cart-count').textContent = cartItems.length;
    }

    // Show cart modal
    cartBtn.addEventListener('click', function() {
        cartModal.style.display = 'block';
        overlay.style.display = 'block';
    });

    // Close cart modal
    closeBtn.addEventListener('click', function() {
        cartModal.style.display = 'none';
        overlay.style.display = 'none';
    });

    // Checkout button functionality (in this example, it just clears the cart)
    checkoutBtn.addEventListener('click', function() {
        cartItems = [];
        total = 0;
        updateCart();
        alert('Thank you for your purchase!');
        cartModal.style.display = 'none';
        overlay.style.display = 'none';
    });

    // Initialize the page
    displayProducts();
});
