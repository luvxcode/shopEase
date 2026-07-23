// ===============================
// ShopEase App
// Part 4A
// ===============================

// Product Container
const productContainer = document.getElementById("product-container");

// Search Input (Future use)
const searchInput = document.getElementById("search");
const categorySelect = document.getElementById("category");
const sortSelect = document.getElementById("sort");


// Current Products
let filteredProducts = [...products];
// ===========================
// CART
// ===========================

let cart = JSON.parse(localStorage.getItem("cart")) || [];

// ===============================
// Display Products
// ===============================

function displayProducts(productList){

    if(!productContainer) return;
    if(productList.length===0){

productContainer.innerHTML="<h2>No Products Found</h2>";

return;

}

    productContainer.innerHTML = "";

    productList.forEach(product => {

        const card = document.createElement("div");

        card.className = "product-card";

        card.innerHTML = `

            <img src="${product.image}" alt="${product.name}">

            <div class="product-info">

                <h3>${product.name}</h3>

                <p class="price">₹${product.price}</p>

                <p>⭐ ${product.rating}</p>

                <p>${product.category}</p>

                <button class="cart-btn"
                        data-id="${product.id}">
                        Add To Cart
                </button>

            </div>

        `;

        productContainer.appendChild(card);

    });

}

// ===============================
// Initial Load
// ===============================

displayProducts(filteredProducts);
updateCartCount();

// ===============================
// Search Products
// ===============================

if(searchInput){

searchInput.addEventListener("keyup", function(){

    const keyword = this.value.toLowerCase();

    filteredProducts = products.filter(product => {

        return product.name
            .toLowerCase()
            .includes(keyword);

    });

    displayProducts(filteredProducts);

});

}
// =========================
// CATEGORY FILTER
// =========================

if(categorySelect){

categorySelect.addEventListener("change",()=>{

let value=categorySelect.value;

if(value==="All"){

filteredProducts=[...products];

}else{

filteredProducts=products.filter(product=>{

return product.category===value;

});

}

displayProducts(filteredProducts);

});

}

// =========================
// PRICE SORT
// =========================

if(sortSelect){

sortSelect.addEventListener("change",()=>{

let value=sortSelect.value;

if(value==="low-high"){

filteredProducts.sort((a,b)=>a.price-b.price);

}

else if(value==="high-low"){

filteredProducts.sort((a,b)=>b.price-a.price);

}

displayProducts(filteredProducts);

});

}
// ===========================
// ADD TO CART
// ===========================

document.addEventListener("click", function(e){

    if(e.target.classList.contains("cart-btn")){

        const id = Number(e.target.dataset.id);

        addToCart(id);

    }

});
function updateCartCount(){

    const count = document.getElementById("cart-count");

    if(count){

        count.textContent = cart.length;

    }

}
function addToCart(id){

    const product = products.find(item => item.id === id);

    if(!product){

        return;

    }

    const alreadyExists = cart.find(item => item.id === id);

    if(alreadyExists){

        alert("Product already added to cart.");

        return;

    }

    cart.push(product);

    localStorage.setItem("cart", JSON.stringify(cart));

    alert(product.name + " added to cart.");

}
updateCartCount();