// ===============================
// Product Database (Part 3A)
// ===============================

const products = [

{
    id:1,
    name:"Apple iPhone 15 Pro",
    price:129999,
    category:"Electronics",
    rating:4.9,
    image:"assets/images/iphone15.jpg",
    description:"Latest Apple flagship smartphone."
},

{
    id:2,
    name:"Samsung Galaxy S24 Ultra",
    price:119999,
    category:"Electronics",
    rating:4.8,
    image:"assets/images/s24.jpg",
    description:"Premium Android flagship."
},

{
    id:3,
    name:"Sony WH-1000XM5",
    price:29999,
    category:"Electronics",
    rating:4.8,
    image:"assets/images/headphone.jpg",
    description:"Noise cancelling wireless headphones."
},

{
    id:4,
    name:"Dell XPS 15",
    price:159999,
    category:"Electronics",
    rating:4.7,
    image:"assets/images/laptop.jpg",
    description:"Powerful laptop for professionals."
},

{
    id:5,
    name:"Nike Air Max",
    price:8999,
    category:"Shoes",
    rating:4.6,
    image:"assets/images/shoes1.jpg",
    description:"Comfortable running shoes."
},

{
    id:6,
    name:"Adidas Ultraboost",
    price:9999,
    category:"Shoes",
    rating:4.7,
    image:"assets/images/shoes2.jpg",
    description:"Premium sports shoes."
},

{
    id:7,
    name:"Men's Denim Jacket",
    price:2499,
    category:"Fashion",
    rating:4.5,
    image:"assets/images/jacket.jpg",
    description:"Stylish denim jacket."
},

{
    id:8,
    name:"Women's Handbag",
    price:3499,
    category:"Fashion",
    rating:4.6,
    image:"assets/images/handbag.jpg",
    description:"Elegant leather handbag."
},

{
    id:9,
    name:"Wooden Study Table",
    price:6999,
    category:"Home",
    rating:4.4,
    image:"assets/images/table.jpg",
    description:"Modern wooden study table."
},

{
    id:10,
    name:"Office Chair",
    price:5499,
    category:"Home",
    rating:4.5,
    image:"assets/images/chair.jpg",
    description:"Ergonomic office chair."
}

,
{
    id:11,
    name:"Apple Watch Series 10",
    price:45999,
    category:"Electronics",
    rating:4.8,
    image:"assets/images/watch.jpg",
    description:"Premium smartwatch with health tracking."
},

{
    id:12,
    name:"Samsung Galaxy Tab S9",
    price:68999,
    category:"Electronics",
    rating:4.7,
    image:"assets/images/tablet.jpg",
    description:"Powerful Android tablet."
},

{
    id:13,
    name:"Logitech G502 Gaming Mouse",
    price:4999,
    category:"Electronics",
    rating:4.8,
    image:"assets/images/mouse.jpg",
    description:"High-performance gaming mouse."
},

{
    id:14,
    name:"Mechanical RGB Keyboard",
    price:5999,
    category:"Electronics",
    rating:4.7,
    image:"assets/images/keyboard.jpg",
    description:"RGB mechanical keyboard."
},

{
    id:15,
    name:"Canon EOS R50 Camera",
    price:74999,
    category:"Electronics",
    rating:4.9,
    image:"assets/images/camera.jpg",
    description:"Mirrorless camera for creators."
},

{
    id:16,
    name:"Men's Cotton T-Shirt",
    price:899,
    category:"Fashion",
    rating:4.5,
    image:"assets/images/tshirt.jpg",
    description:"Comfortable cotton T-shirt."
},

{
    id:17,
    name:"Women's Casual Dress",
    price:1999,
    category:"Fashion",
    rating:4.6,
    image:"assets/images/dress.jpg",
    description:"Elegant casual wear."
},

{
    id:18,
    name:"Luxury Sofa Set",
    price:35999,
    category:"Home",
    rating:4.7,
    image:"assets/images/sofa.jpg",
    description:"Comfortable modern sofa."
},

{
    id:19,
    name:"Samsung 55-inch Smart TV",
    price:54999,
    category:"Electronics",
    rating:4.8,
    image:"assets/images/tv.jpg",
    description:"4K Ultra HD Smart TV."
},

{
    id:20,
    name:"JBL Bluetooth Speaker",
    price:6999,
    category:"Electronics",
    rating:4.7,
    image:"assets/images/speaker.jpg",
    description:"Portable wireless speaker."
}

];
const productContainer = document.getElementById("product-container");

if (productContainer) {
    products.forEach(product => {
        productContainer.innerHTML += `
            <div class="product-card">
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <h4>₹${product.price}</h4>
                <button>Add to Cart</button>
            </div>
        `;
    });
}