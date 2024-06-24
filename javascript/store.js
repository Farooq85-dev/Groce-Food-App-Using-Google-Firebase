let products = [
  {
    id: 1,
    title: "Tasty Noodles",
    image: "../images/card-1.jpg",
    description: `Noodles are a type of food made from unleavened dough which is either
        rolled flat and cut, stretched, or extruded, into long strips or strings.`,
    quantity: 7,
    price: 2000,
  },
  {
    id: 2,
    title: "Burger with Soos",
    image: "../images/card-2.jpg",
    description: `A hamburger, also called a burger, is a dish consisting of fillings—usually
        a patty of ground meat. A hamburger, also called a burger,`,
    quantity: 5,
    price: 4000,
  },
  {
    id: 3,
    title: "Glass Noodles",
    image: "../images/card-3.jpg",
    description: `Cellophane noodles, or fensi, sometimes called glass noodles, are a type of
    transparent noodle made from starch and water.`,
    quantity: 10,
    price: 1500,
  },
  {
    id: 4,
    title: "Burger with Cream",
    image: "../images/card-4.jpg",
    description: `This burger combines juicy beef patties with a rich, flavorful cream sauce
    that adds a delicious twist to your regular burger.`,
    quantity: 15,
    price: 2400,
  },
  {
    id: 5,
    title: "Finger Chips",
    image: "../images/card-5.jpg",
    description: `A potato chip or crisp is a thin slice of potato that has been deep fried,
    baked, or air fried until crunchy. They are commonly served as a snack, side dish, or
    appetizer.`,
    quantity: 4,
    price: 2600,
  },
  {
    id: 6,
    title: "Ketchup Burger",
    image: "../images/card-6.jpg",
    description: `Ketchup Premium Burger Bar was found by people, just like you, who LOVE
    burgers. When we opened our doors, we had one goal in mind: Fair prices, fresh.`,
    quantity: 14,
    price: 7800,
  },
  {
    id: 7,
    title: "Circle Chips",
    image: "../images/card-7.jpg",
    description: `we recommend using a maincrop floury potato, like a Maris Piper, which will
    give you a fluffy inside and crisp outer coating. They will absorb the oil when fried to
    give.`,
    quantity: 11,
    price: 800,
  },
  {
    id: 8,
    title: "Tasty Pizza",
    image: "../images/card-8.jpg",
    description: `Pizza is a traditional Italian dish typically consisting of a flat base of
    leavened wheat-based dough topped with tomato, cheese, and other ingredients.`,
    quantity: 18,
    price: 700,
  },
];

products.forEach((product, index) => {
  let { id, image, title, description, quantity, price } = product;
  let productsAppended = document.getElementById("productsAppended");
  productsAppended.innerHTML += `
<div class="col-12 col-sm-12 col-lg-6 col-xl-3 col-xxl-3">
  <div class="card1">
    <img src=${image} style="border-radius: 5px;" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${title}</h5>
      <p class="card-text">${description}</p>
      <h6 class="card-title">PKR ${price}</h6>
      <button href="#" class="cardsBtn" onclick='addToCart(${JSON.stringify(
        product
      )});'>Add to Cart</button>
    </div>
  </div>
</div>
  `;
});

let cartItems = JSON.parse(localStorage.getItem("cart")) || [];
let addToCart = (product) => {
  let productExists = cartItems.find(
    (storageProducts) => storageProducts.id === product.id
  );
  if (productExists) {
    alert("This product is already in the cart.");
    return;
  }
  cartItems.push(product);
  localStorage.setItem("cart", JSON.stringify(cartItems));
  let cartLength = document.getElementById("cartLength");
  cartLength.innerHTML = cartItems.length;
};

document.addEventListener("DOMContentLoaded", () => {
  let cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  updateCartLengthDisplay(cartItems.length);
});

function updateCartLengthDisplay(length) {
  document.getElementById("cartLength").innerHTML = length;
}

const cartProductsDisplay = () => {
  let modalBody = document.getElementById("modalBody");
  modalBody.innerHTML = "";
  if (cartItems.length === 0) {
    modalBody.innerHTML = "Please! Add products first.";
  } else {
    cartItems.forEach((storageData) => {
      modalBody.innerHTML += `
      <div class="productsMain" style="margin-bottom: 10px;" >
      <div class="productImage">
      <img src=${storageData.image} class="productsDislplayImg" width="100px" height="100px" style="border-radius: 50px; " alt="Loading...">
      </div>
      <div class="productCnt">
      <div class="productTitle">
      <h4>${storageData.title}</h4>
      </div>
      <div class="productPrice">
      <h5>PKR ${storageData.price}</h5>
      </div>
      <div class="productsQuantity">
      <svg  onclick="decreaseQuantity(${storageData.id});" xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-minus"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l14 0" /></svg>
      <h4 id="quantityLength" >1</h4>
      <svg onclick="increaseQuantity(${storageData.id});" xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-plus"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 5l0 14" /><path d="M5 12l14 0" /></svg>
      </div>
      </div>
      </div>
      `;
    });
  }
};
let cartIcon = document.getElementById("cartIcon");
cartIcon.addEventListener("click", cartProductsDisplay);

const decreaseQuantity = (id) => {
  console.log(id);
};
const increaseQuantity = (id) => {
  console.log(id);
};
