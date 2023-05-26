// Local variables to work with it in this file.
const { products, categories } = window;

// For debugging
console.log({ products, categories }, "Store Data");

// event handlers for when the page gets loaded
window.onload = loadCategories();
window.onload = loadSelectedCategory(0);

// LOAD NAV WITH CATEGORY NAMES
function loadCategories() {
  for (var i = 0; i < window.categories.length; i++) {
    let navButton = document.createElement("button");
    navButton.innerHTML = window.categories[i].name;
    navButton.setAttribute("id", window.categories[i].id);
    document.getElementById("menu").appendChild(navButton);
    navButton.onclick = (a) => {
      updateTitle(a.target.innerHTML);
      loadProducts(a.target.id);
    };
  }
}

// UPDATE CATEGORY TITLE ON CLICK
function updateTitle(title) {
  document.getElementById("selected-category").innerHTML = title;
}

// LOAD SELECTED CATEGORY NAME
function loadCategoryName(i) {
  document.getElementById("selected-category").innerHTML = window.categories[i].name;
}

// LOAD SELECTED CATEGORY PRODUCTS
function loadProducts(catID) {
  let products = document.getElementById("category-products");
  // clear all previously loaded product cards
  while (products.firstChild) {
    products.removeChild(products.firstChild);
  }
  // filtering product list
  const filtered = window.products.filter(
    (element) => element.categories.includes(catID) && !element.discontinued
  );
  // creating a div to hold all product cards
  let container = document.createElement("div");
  container.classList.add("cards");
  // looping through each filtered product and adding the card
  filtered.forEach((element) => {
    container.appendChild(createProductCard(element));
  });
  products.appendChild(container);
}

function loadSelectedCategory(index) {
  loadCategoryName(index);
  let catID = window.categories[index].id;
  loadProducts(catID);
}

function createProductCard(product) {
  // Create a <div> to hold the card
  const card = document.createElement("div");
  // Add the .card class to the <div>
  card.classList.add("card");
  // Create a product image, use the .card-image class
  const productImage = document.createElement("img");
  productImage.src = product.imageUrl;
  productImage.classList.add("card-image");
  card.appendChild(productImage);
  // Product Name
  const productName = document.createElement("header");
  productName.innerHTML = product.title;
  productName.classList.add("card-productname");
  card.appendChild(productName);
  // Product Description
  const productDescription = document.createElement("p");
  productDescription.innerHTML = product.description;
  productDescription.classList.add("card-description");
  card.appendChild(productDescription);
  // Product Price
  const productPrice = document.createElement("footer");
  const formatter = new Intl.NumberFormat("en-CA", { style: "currency", currency: "CAD" });
  let price = product.price / 100;
  productPrice.innerHTML = formatter.format(price);
  productPrice.classList.add("card-price");
  card.appendChild(productPrice);
  // Return the card’s <div> element to the caller
  card.onclick = () => {
    console.log(card);
  };
  return card;
}
