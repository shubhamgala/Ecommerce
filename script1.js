// Array to store items in the cart
var cartItems = [];

// Function to add an item to the cart
function addToCart(title, price) {
    cartItems.push({ title: title, price: price });
    updateCart();
}

// Function to update the cart display
function updateCart() {
    var cartContainer = document.getElementById('cart-items');
    var totalPriceContainer = document.getElementById('total-price');
    
    // Clear the cart display
    cartContainer.innerHTML = '';
    
    // Initialize total price
    var totalPrice = 0;
    
    // Loop through each item in the cart
    cartItems.forEach(function(item) {
        var itemElement = document.createElement('div');
        itemElement.textContent = item.title + ' - ₹' + item.price;
        cartContainer.appendChild(itemElement);
        
        // Add item price to total price
        totalPrice += parseFloat(item.price);
    });
    
    // Update total price display
    totalPriceContainer.textContent = 'Total Price: ₹' + totalPrice.toFixed(2);
}

// Example usage:
addToCart('Karma: A Yogis Guide to Crafting', 680); // Add an item to the cart
addToCart('The Accidental President', 795);
// You can call addToCart function whenever the user adds an item from the main page.
