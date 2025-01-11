// Sample JSON data for products
const products = [
  {
    id: 1,
    name: "Baju Melayu ",
    size: "Large",
    color: "Brick Orange",
    price: 189,
    image: "images/bm-brickorange.jpg",
    quantity: 1,
  },
  {
    id: 2,
    name: "Kurta",
    size: "Large",
    color: "Offwhite",
    price: 89,
    image: "images/kurta-offwhite.jpg",
    quantity: 1,
  },
  {
    id: 3,
    name: "Baju Kurung Melati",
    size: "Large",
    color: "Blush Pink",
    price: 189,
    image: "images/melati-blushpink.jpg",
    quantity: 1,
  },
];

// Function to render products dynamically
function renderProducts() {
  const itemContainer = document.getElementById("item-container");
  itemContainer.innerHTML = ""; // Clear container

  products.forEach((product) => {
    const itemHTML = `
            <div class="item" data-id="${product.id}">
                <img src="${product.image}" alt="Product Image">
                <div class="item-info">
                    <h3 class="item-name">${product.name}</h3>
                    <div class="item-size">
                        <p>Size:</p>
                        <p>${product.size}</p>
                    </div>
                    <div class="item-color">
                        <p>Color:</p>
                        <p>${product.color}</p>
                    </div>
                    <p class="item-price">RM ${product.price}</p>
                </div>
                <div class="delete-add-button">
                    <i class="fa-solid fa-trash-can trash-icon" onclick="deleteProduct(${product.id})"></i>
                    <div class="add-button">
                        <ion-icon name="remove-outline" onclick="updateQuantity(${product.id}, -1)"></ion-icon>
                        <p id="amount-${product.id}">${product.quantity}</p>
                        <ion-icon name="add-outline" onclick="updateQuantity(${product.id}, 1)"></ion-icon>
                    </div>
                </div>
            </div>
        `;
    itemContainer.innerHTML += itemHTML;
  });

  updateSummary();
}

// Function to update quantity
function updateQuantity(productId, change) {
  const product = products.find((p) => p.id === productId);
  if (product) {
    product.quantity = Math.max(1, product.quantity + change); // Ensure quantity is at least 1
    document.getElementById(`amount-${productId}`).textContent =
      product.quantity;
    updateSummary();
  }
}

// Function to delete a product
function deleteProduct(productId) {
  const productIndex = products.findIndex((p) => p.id === productId);
  if (productIndex !== -1) {
    products.splice(productIndex, 1); // Remove product from array
    renderProducts();
  }
}

// Function to calculate and update the summary
function updateSummary() {
  let subtotal = 0;
  products.forEach((product) => {
    subtotal += product.price * product.quantity;
  });

  const discount = subtotal * 0.2; // 20% discount
  const deliveryFee = 25; // Fixed delivery fee
  const total = subtotal - discount + deliveryFee;

  document.getElementById("subtotal").textContent = `RM${subtotal.toFixed(2)}`;
  document.getElementById("discount").textContent = `-RM${discount.toFixed(2)}`;
  document.getElementById(
    "delivery-fee"
  ).textContent = `RM${deliveryFee.toFixed(2)}`;
  document.getElementById("total-value").textContent = `RM${total.toFixed(2)}`;
}

// Apply promo code
document.getElementById("apply-btn").addEventListener("click", () => {
  alert("Promo code applied!"); // Add actual promo code logic here
});

// Initial rendering
renderProducts();


// Array to store subscribed emails
const subscribedEmails = [];

// Function to handle form submission
function handleNewsletterSubscription(event) {
    event.preventDefault(); // Prevent the form from refreshing the page

    const emailInput = document.getElementById("emailInput");
    const email = emailInput.value.trim(); // Get the email and trim whitespace

    if (!email) {
        alert("Please enter a valid email address.");
        return;
    }

    // Check if the email is already subscribed
    if (subscribedEmails.includes(email)) {
        alert("This email is already subscribed. You will receive updates.");
    } else {
        subscribedEmails.push(email); // Add the email to the subscribed list
        alert("Thank you for subscribing! You will now receive all updates.");
        emailInput.value = ""; // Clear the input field
    }
}

// Attach the event listener to the form
const newsletterForm = document.querySelector(".newsletter-card");
newsletterForm.addEventListener("submit", handleNewsletterSubscription);

// Select the button
    const checkoutButton = document.querySelector('.checkout-btn');

    // Add a click event listener to the button
    checkoutButton.addEventListener('click', () => {
        alert('Thank you for your purchase! Your order is being processed.');
        window.location.href = "contactpage.html";
    });

    // Select the div
    const brandName = document.querySelector('.brand-name-1');

    // Add a click event listener
    brandName.addEventListener('click', () => {
        window.location.href = 'index.html';
    });    
    
