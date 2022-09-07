const products = [
    {
      id: 0,
      name: "Tom Ford",
      price: 29.99,
      instock: 100,
      description:
        "Lip Color",
      imgSrc: "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/variant_images-color-000-816248022243-1_550x.jpg?v=1659470993",
    },
    {
      id: 1,
      name: "Surrat",
      price: 24.99,
      instock: 43,
      description:
        "Les Soleils.",
      imgSrc: "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/variant_images-color-31sheerchili-3473311705082-1_235x.jpg?v=1658873503",
    },
    {
      id: 2,
      name: "RMS Beauty",
      price: 19.99,
      instock: 10,
      description:
        "Living Luminizer.",
      imgSrc: "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/variant_images-color-living-816248020355-1-v20220801T180618Z_235x.jpg?v=1659383261",
    },
    {
      id: 3,
      name: "NARS",
      price: 25.99,
      instock: 5,
      description:
        "LIGHT rEFLECTING FOUNDATION.",
      imgSrc: "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/variant_images-color-tan-194250040456-1_235x.jpg?v=1658822768",
    },
    {
      id: 4,
      name: "T-shirt 5",
      price: 29.99,
      instock: 4,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, error.",
      imgSrc: "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/variant_images-color-coupedegeniechaleur-037182654356-1_235x.jpg?v=1661278520",
    },
    {
      id: 5,
      name: "LUN ASTER",
      price: 39.99,
      instock: 40,
      description:
        "Contour duo brush.",
      imgSrc: "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/variant_images-color-living-816248020355-1-v20220801T180618Z_235x.jpg?v=1659383261",
    },
  ];
// SELECT ELEMENTS
const productsEl = document.querySelector(".products");
const cartItemsEl = document.querySelector(".cart-items");
const subtotalEl = document.querySelector(".subtotal");
const totalItemsInCartEl = document.querySelector(".total-items-in-cart");

// RENDER PRODUCTS
function renderProdcuts() {
  products.forEach((product) => {
    productsEl.innerHTML += `
            <div class="item">
                <div class="item-container">
                    <div class="item-img">
                        <img src="${product.imgSrc}" alt="${product.name}">
                    </div>
                    <div class="desc">
                        <h2>${product.name}</h2>
                        <h2><small>$</small>${product.price}</h2>
                        <p>
                            ${product.description}
                        </p>
                    </div>
                    <div class="add-to-wishlist">
                        <img src="./icons/heart.png" alt="add to wish list">
                    </div>
                    <div class="add-to-cart" onclick="addToCart(${product.id})">
                        <img src="./icons/bag-plus.png" alt="add to cart">
                    </div>
                </div>
            </div>
        `;
  });
}
renderProdcuts();

// cart array
let cart = JSON.parse(localStorage.getItem("CART")) || [];
updateCart();

// ADD TO CART
function addToCart(id) {
  // check if prodcut already exist in cart
  if (cart.some((item) => item.id === id)) {
    changeNumberOfUnits("plus", id);
  } else {
    const item = products.find((product) => product.id === id);

    cart.push({
      ...item,
      numberOfUnits: 1,
    });
  }

  updateCart();
}

// update cart
function updateCart() {
  renderCartItems();
  renderSubtotal();

  // save cart to local storage
  localStorage.setItem("CART", JSON.stringify(cart));
}

// calculate and render subtotal
function renderSubtotal() {
  let totalPrice = 0,
    totalItems = 0;

  cart.forEach((item) => {
    totalPrice += item.price * item.numberOfUnits;
    totalItems += item.numberOfUnits;
  });

  subtotalEl.innerHTML = `Subtotal (${totalItems} items): $${totalPrice.toFixed(2)}`;
  totalItemsInCartEl.innerHTML = totalItems;
}

// render cart items
function renderCartItems() {
  cartItemsEl.innerHTML = ""; // clear cart element
  cart.forEach((item) => {
    cartItemsEl.innerHTML += `
        <div class="cart-item">
            <div class="item-info" onclick="removeItemFromCart(${item.id})">
                <img src="${item.imgSrc}" alt="${item.name}">
                <h4>${item.name}</h4>
            </div>
            <div class="unit-price">
                <small>$</small>${item.price}
            </div>
            <div class="units">
                <div class="btn minus" onclick="changeNumberOfUnits('minus', ${item.id})">-</div>
                <div class="number">${item.numberOfUnits}</div>
                <div class="btn plus" onclick="changeNumberOfUnits('plus', ${item.id})">+</div>           
            </div>
        </div>
      `;
  });
}

// remove item from cart
function removeItemFromCart(id) {
  cart = cart.filter((item) => item.id !== id);

  updateCart();
}

// change number of units for an item
function changeNumberOfUnits(action, id) {
  cart = cart.map((item) => {
    let numberOfUnits = item.numberOfUnits;

    if (item.id === id) {
      if (action === "minus" && numberOfUnits > 1) {
        numberOfUnits--;
      } else if (action === "plus" && numberOfUnits < item.instock) {
        numberOfUnits++;
      }
    }

    return {
      ...item,
      numberOfUnits,
    };
  });

  updateCart();
}
