import { onAuthStateChanged, auth, setDoc, doc, db } from "../firebase.js";

//Initialize Toastr;
toastr.options = {
  closeButton: true,
  debug: false,
  newestOnTop: false,
  progressBar: false,
  positionClass: "toast-top-full-width",
  preventDuplicates: true,
  onclick: null,
  showDuration: "300",
  hideDuration: "1000",
  timeOut: "2000",
  extendedTimeOut: "1000",
  showEasing: "swing",
  hideEasing: "linear",
  showMethod: "fadeIn",
  hideMethod: "fadeOut",
};

let products = [
  {
    id: 1,
    title: "Tasty Noodles",
    image: "../images/card-1.jpg",
    description: `Noodles are a type of food made from unleavened dough which is either
          rolled flat and cut, stretched, or extruded, into long strips or strings.`,
    quantity: 1,
    price: 200,
  },
  {
    id: 2,
    title: "Burger with Soos",
    image: "../images/card-2.jpg",
    description: `A hamburger, also called a burger, is a dish consisting of fillings—usually
          a patty of ground meat. A hamburger, also called a burger,`,
    quantity: 1,
    price: 400,
  },
  {
    id: 3,
    title: "Glass Noodles",
    image: "../images/card-3.jpg",
    description: `Cellophane noodles, or fensi, sometimes called glass noodles, are a type of
      transparent noodle made from starch and water.`,
    quantity: 1,
    price: 150,
  },
  {
    id: 4,
    title: "Burger with Cream",
    image: "../images/card-4.jpg",
    description: `This burger combines juicy beef patties with a rich, flavorful cream sauce
      that adds a delicious twist to your regular burger.`,
    quantity: 1,
    price: 240,
  },
  {
    id: 5,
    title: "Finger Chips",
    image: "../images/card-5.jpg",
    description: `A potato chip or crisp is a thin slice of potato that has been deep fried,
      baked, or air fried until crunchy. They are commonly served as a snack, side dish, or
      appetizer.`,
    quantity: 1,
    price: 800,
  },
  {
    id: 6,
    title: "Ketchup Burger",
    image: "../images/card-6.jpg",
    description: `Ketchup Premium Burger Bar was found by people, just like you, who LOVE
      burgers. When we opened our doors, we had one goal in mind: Fair prices, fresh.`,
    quantity: 1,
    price: 470,
  },
  {
    id: 7,
    title: "Circle Chips",
    image: "../images/card-7.jpg",
    description: `we recommend using a maincrop floury potato, like a Maris Piper, which will
      give you a fluffy inside and crisp outer coating. They will absorb the oil when fried to
      give.`,
    quantity: 1,
    price: 550,
  },
  {
    id: 8,
    title: "Tasty Pizza",
    image: "../images/card-8.jpg",
    description: `Pizza is a traditional Italian dish typically consisting of a flat base of
      leavened wheat-based dough topped with tomato, cheese, and other ingredients.`,
    quantity: 1,
    price: 710,
  },
];

//On Auth State Changed
let userId;
onAuthStateChanged(auth, async (user) => {
  if (user) {
    userId = user.uid;
  } else {
    toastr.info("Please Login!");
  }
});

//Appending the Products
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
let cartLength = document.getElementById("cartLength");

//Adding products to localStorage
let addToCart = (product) => {
  let productExists = cartItems.find(
    (storageProducts) => storageProducts.id === product.id
  );

  //Checking the if products are already existing
  if (productExists) {
    toastr.error("This product is already in the cart.");
    return;
  }
  //pushing the priducts
  cartItems.push(product);
  localStorage.setItem("cart", JSON.stringify(cartItems));
  cartLength.innerHTML = cartItems.length;
};

//Cart length will remain
document.addEventListener("DOMContentLoaded", () => {
  updateCartLengthDisplay(cartItems.length);
});

const updateCartLengthDisplay = (length) => {
  document.getElementById("cartLength").innerHTML = length;
};

//Displaying localStorage added products in cart-Modal
const cartProductsDisplay = () => {
  let plus = "+";
  let minus = "-";
  let cartProducts = document.getElementById("cartProducts");
  cartProducts.innerHTML = "";

  if (cartItems.length === 0) {
    cartProducts.innerHTML = "Please! Add products first.";
  } else {
    cartItems.forEach((storageData) => {
      let { image, title, price, id, quantity } = storageData;
      let total = price * quantity;
      cartProducts.innerHTML += `
        <div class="productsMain" style="margin-bottom: 10px;" >
        <div class="productImage">
        <img src=${image} class="productsDislplayImg" width="100px" height="100px" style="border-radius: 50px; " alt="Loading...">
        </div>
        <div class="productCnt">
        <div class="productTitle">
        <h4>${title}</h4>
        </div>
        <div class="productPrice">
        <h5>PKR ${total}</h5>
        </div>
        <div class="productsQuantity">
        <svg style="cursor: pointer;"  onclick="decreaseQuantity('${minus}',${id});" xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-minus"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l14 0" /></svg>
        <h4 id="quantityLength">${quantity}</h4>
        <svg style="cursor: pointer;" onclick="increaseQuantity('${plus}',${id});" xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-plus"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 5l0 14" /><path d="M5 12l14 0" /></svg>
        <svg style="color: red; cursor: pointer;" onclick="deleteProduct(${id});"  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-trash-off"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 3l18 18" /><path d="M4 7h3m4 0h9" /><path d="M10 11l0 6" /><path d="M14 14l0 3" /><path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l.077 -.923" /><path d="M18.384 14.373l.616 -7.373" /><path d="M9 5v-1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" /></svg>
        </div>
        </div>
        </div>
        `;
    });
    updateTotalPrice();
    placeOrderFieldsHidingDisplaying();
  }
};
let cartIcon = document.getElementById("cartIcon");
cartIcon.addEventListener("click", cartProductsDisplay);

//decreasing product quantity
const decreaseQuantity = (type, id) => {
  const product = cartItems.find((product) => product.id === id);
  if (product.quantity > 1) {
    product.quantity--;
  } else {
    deleteProduct(id);
  }
  localStorage.setItem("cart", JSON.stringify(cartItems));
  cartProductsDisplay();
};

//Increasing product quantity
const increaseQuantity = (type, id) => {
  const product = cartItems.find((product) => product.id === id);
  product.quantity++;
  localStorage.setItem("cart", JSON.stringify(cartItems));
  cartProductsDisplay();
};

//Deleting the Cart products
const deleteProduct = (id) => {
  const index = cartItems.find((product) => product.id === id);
  cartItems.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cartItems));
  cartProductsDisplay();
  updateTotalPrice();
  cartLength.innerHTML = cartItems.length;
};

//Updating the Total Price
const updateTotalPrice = () => {
  let deliverFees = 120;
  if (cartItems.length >= 4) deliverFees = 200;
  if (cartItems.length >= 8) deliverFees = 300;
  let total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  let totalPriceElement = document.getElementById("totalPrice");
  let deliveryCharges = document.getElementById("deliveryCharges");
  totalPriceElement.innerHTML = `Total Price:- PKR ${total + deliverFees}`;
  deliveryCharges.innerHTML = `Deliver Fee:- PKR ${deliverFees}`;

  if (cartItems.length < 1) {
    totalPriceElement.style.display = "none";
    deliveryCharges.style.display = "none";
    cartLength.innerHTML = `0`;
    placeOrderFieldsHidingDisplaying();
  }
};

// Hiding & display the placeorders Fields
const placeOrderFieldsHidingDisplaying = () => {
  if (cartItems.length < 1) {
    let placeOrderFields = document.getElementById("placeOrderFields");
    let paymentMethods = document.getElementById("paymentMethods");
    placeOrderFields.style.display = "none";
    paymentMethods.style.display = "none";
  } else {
    placeOrderFields.style.display = "flex";
    paymentMethods.style.display = "flex";
  }
};
placeOrderFieldsHidingDisplaying();

//Place Order
const placeOrder = async () => {
  let receiverName = document.getElementById("receiverName");
  let receiverEmail = document.getElementById("receiverEmail");
  var emailRegex = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;
  let receiverAddress = document.getElementById("receiverAddress");
  let receiverPhoneNumber = document.getElementById("receiverPhoneNumber");
  let checkoutModalCloseBtn = document.getElementById("checkoutModalCloseBtn");
  let jazzCash = document.getElementById("jazzCash");
  let easyPaisa = document.getElementById("easyPaisa");
  let paymentMethod = null;
  if (!userId) {
    alert("Please first login/Signup to place order.");
    return;
  }

  if (receiverName.value === "") {
    toastr.error("Please Write Name.");
  } else if (receiverEmail.value === "") {
    toastr.error("Please Write email.");
  } else if (!emailRegex.test(receiverEmail.value)) {
    toastr.error("Invalid email.");
  } else if (receiverPhoneNumber.value === "") {
    toastr.error("Please Write Phone Number.");
  } else if (
    receiverPhoneNumber.value.length < 10 ||
    receiverPhoneNumber.value.length > 11
  ) {
    toastr.error("Invalid Phone Number.");
  } else if (receiverAddress.value === "") {
    toastr.error("Please Write Address.");
  } else if (jazzCash.checked && easyPaisa.checked) {
    toastr.error("Please select only one payment method.");
  } else if (!jazzCash.checked && !easyPaisa.checked) {
    toastr.error("Please select at least one payment method.");
  } else {
    paymentMethod = jazzCash.checked ? "JazzCash" : "EasyPaisa";
    await setDoc(doc(db, "userProducts", `${userId}`), {
      receiverName: receiverName.value,
      receiverEmail: receiverEmail.value,
      receiverPhoneNumber: receiverPhoneNumber.value,
      receiverAddress: receiverAddress.value,
      paymentMethod: paymentMethod,
    });
    toastr.success("Your order placed successfully!");
    checkoutModalCloseBtn.click();
    document.getElementById("receiverName").value = "";
    document.getElementById("receiverEmail").value = "";
    document.getElementById("receiverPhoneNumber").value = "";
    document.getElementById("receiverAddress").value = "";
    jazzCash.checked = false;
    easyPaisa.checked = false;
  }
};
const placeOrderBtn = document.getElementById("placeOrderBtn");
placeOrderBtn.addEventListener("click", placeOrder);

window.deleteProduct = deleteProduct;
window.decreaseQuantity = decreaseQuantity;
window.increaseQuantity = increaseQuantity;
window.addToCart = addToCart;
window.placeOrderFieldsHidingDisplaying = placeOrderFieldsHidingDisplaying;
