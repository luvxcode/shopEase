// ===========================
// ShopEase Cart
// ===========================

// Load Cart Data
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// DOM Elements
const cartItems = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");

// ===========================
// Display Cart
// ===========================

function displayCart(){

    if(!cartItems) return;

    cartItems.innerHTML = "";

    if(cart.length === 0){

        cartItems.innerHTML = `
            <h2>Your Cart is Empty</h2>
            <p>Add some products from the Home page.</p>
        `;

        cartTotal.textContent = 0;

        return;
    }

    let total = 0;

    cart.forEach(product=>{

        total += product.price;

        const item = document.createElement("div");

        item.className = "cart-item";

        item.innerHTML = `

            <img src="${product.image}" alt="${product.name}">

            <div class="cart-info">

                <h3>${product.name}</h3>

                <p>Category : ${product.category}</p>

                <p>Rating : ⭐ ${product.rating}</p>

                <h2>₹${product.price}</h2>

                <button
                    class="remove-btn"
                    data-id="${product.id}">
                    Remove
                </button>

            </div>

        `;

        cartItems.appendChild(item);

    });

    cartTotal.textContent = total;

}

// Initial Load
displayCart();
// ===========================
// REMOVE PRODUCT
// ===========================

document.addEventListener("click", function(e){

    if(e.target.classList.contains("remove-btn")){

        const id = Number(e.target.dataset.id);

        removeFromCart(id);

    }

});
function removeFromCart(id){

    cart = cart.filter(product => product.id !== id);

    localStorage.setItem("cart", JSON.stringify(cart));

    displayCart();

}
// ===========================
// CLEAR CART
// ===========================

const clearCartBtn = document.getElementById("clear-cart");

if(clearCartBtn){

    clearCartBtn.addEventListener("click", function(){

        if(confirm("Are you sure you want to clear the cart?")){

            cart = [];

            localStorage.setItem("cart", JSON.stringify(cart));

            displayCart();

        }

    });

}