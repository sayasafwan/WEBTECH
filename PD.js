document.addEventListener("DOMContentLoaded", () => {
  // Close promo banner
  const closePromoButton = document.querySelector(".close-promo ion-icon");
  const promoBanner = document.querySelector(".promo");

  if (closePromoButton && promoBanner) {
    closePromoButton.addEventListener("click", () => {
      promoBanner.style.display = "none";
    });
  }

  // Selecting color options
  const colorOptions = document.querySelectorAll(".color-option");
  const selectedColorText = document.getElementById("selected-color");

  colorOptions.forEach((option) => {
    option.addEventListener("click", () => {
      // Remove previous selection
      colorOptions.forEach((opt) => opt.classList.remove("selected"));

      // Mark as selected
      option.classList.add("selected");

      // Update selected color text
      selectedColorText.textContent = option.getAttribute("data-color");
    });
  });

  // Selecting size options
  const sizeButtons = document.querySelectorAll(".size-options button");
  const selectedSizeText = document.getElementById("selected-size");

  sizeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Remove previous selection
      sizeButtons.forEach((btn) => btn.classList.remove("selected"));

      // Mark as selected
      button.classList.add("selected");

      // Update selected size text
      selectedSizeText.textContent = button.getAttribute("data-size");
    });
  });

  //Quantitiy select
  const buttons = document.querySelectorAll(".quantity-btn");
  const quantityValue = document.querySelector(".quantity-value");

  let quantity = 1;

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      if (button.textContent === "+") {
        quantity++;
      } else if (button.textContent === "-" && quantity > 1) {
        quantity--;
      }
      quantityValue.textContent = quantity;
    });
  });

  // Tab section
  const tabs = document.querySelectorAll(".tab-item");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      document.querySelector(".tab-item.active").classList.remove("active");
      tab.classList.add("active");
    });
  });

  // Reviews section
  const reviews = [
    {
      name: "Natasha",
      verified: true,
      rating: 5,
      text: "I absolutely love this!",
      date: "Posted on August 14, 2023",
    },
    {
      name: "Hairul",
      verified: false,
      rating: 4,
      text: "Great quality, very happy with my purchase.",
      date: "Posted on July 22, 2023",
    },
    {
      name: "Alif",
      verified: false,
      rating: 4,
      text: "Great quality, but the size runs a little small. Still, very happy with my purchase.",
      date: "Posted on July 29, 2023",
    },
  ];

  // Load reviews to the page
  function loadReviews() {
    const reviewsGrid = document.querySelector(".reviews-grid");

    reviews.forEach((review) => {
      const article = document.createElement("article");
      article.classList.add("review-card", "top-row");

      const header = document.createElement("header");
      header.classList.add("review-header");
      header.innerHTML = `
      <h3>${review.name} <span class="verified-badge">${
        review.verified ? "✔" : ""
      }</span></h3>
      <div class="rating">${"⭐".repeat(review.rating)}</div>
    `;

      const reviewText = document.createElement("p");
      reviewText.classList.add("review-text");
      reviewText.textContent = review.text;

      const reviewDate = document.createElement("p");
      reviewDate.classList.add("review-date");
      reviewDate.textContent = review.date;

      article.appendChild(header);
      article.appendChild(reviewText);
      article.appendChild(reviewDate);

      reviewsGrid.appendChild(article);
    });
  }

  // Load reviews when the page is ready
  window.onload = loadReviews;

  // Load more reviews
  const Reviews = [
    {
      name: "Kamarul",
      verified: true,
      rating: 5,
      text: "Great quality, very happy with my purchase.",
      date: "Just now",
    },
    {
      name: "Aisha",
      verified: false,
      rating: 4,
      text: "Good value for money, will buy again.",
      date: "5 minutes ago",
    },
    {
      name: "Fatimah",
      verified: false,
      rating: 4,
      text: "Quick delivery and great customer service.",
      date: "15 minutes ago",
    },
  ];

  const loadMoreButton = document.querySelector(".load-more-btn");
  const reviewsGrid = document.querySelector(".reviews-grid");

  if (loadMoreButton && reviewsGrid) {
    loadMoreButton.addEventListener("click", () => {
      // Select a random review from the Reviews array
      const randomReview = Reviews[Math.floor(Math.random() * Reviews.length)];

      // Generate the new review HTML
      const newReview = `
      <article class="review-card top-row">
        <header class="review-header">
          <h3>${randomReview.name} <span class="verified-badge">${
        randomReview.verified ? "✔" : ""
      }</span></h3>
          <div class="rating">${"⭐".repeat(randomReview.rating)}</div>
        </header>
        <p class="review-text">${randomReview.text}</p>
        <p class="review-date">${randomReview.date}</p>
      </article>
    `;

      // Append the new review to the reviews grid
      reviewsGrid.insertAdjacentHTML("beforeend", newReview);
    });
  }

  // Suggestion section horizontal scrolling
  const products = [
    {
      img: "images/batik-angsana-lilac.jpg",
      alt: "Batik Agsana Lilac",
      name: "Batik Agsana Lilac",
      rating: 5,
      price: 189,
      discountPrice: 240,
      discountPercent: "-20%",
    },
    {
      img: "images/batik-angsana-monochrome.jpg",
      alt: "Batik Agsana Monochrome",
      name: "Batik Agsana Mono...",
      rating: 4,
      price: 189,
      discount: null,
    },
    {
      img: "images/batik-angsana-stoneblack.jpg",
      alt: "Batik Agsana Stoneblack",
      name: "Batik Agsana Stone...",
      rating: 5,
      price: 189,
      discountPrice: 210,
      discountPercent: "-10%",
    },
  ];

  // Select the product container
  const productContainer = document.querySelector(".product-container");

  // Function to generate star ratings
  function getStars(rating, maxRating = 5) {
    return "★".repeat(rating) + "☆".repeat(maxRating - rating);
  }

  // Function to generate product HTML
  function generateProducts() {
    productContainer.innerHTML = ""; // Clear existing content

    const fragment = document.createDocumentFragment();

    products.forEach((product) => {
      const productDiv = document.createElement("div");
      productDiv.classList.add("product");
      productDiv.innerHTML = `
              <img src="${product.img}" alt="${product.alt}">
              <h3>${product.name}</h3>
              <div class="rating" aria-label="${product.rating} out of 5 stars">
                  ${getStars(product.rating, 5)}
              </div>
              <div class="price">
                  RM ${product.price}
                  ${
                    product.discountPrice
                      ? `<span class="discount">RM${product.discountPrice} ${product.discountPercent}</span>`
                      : ""
                  }
              </div>
          `;
      fragment.appendChild(productDiv);
    });

    productContainer.appendChild(fragment); // Append all products at once
  }

  // Initial call to generate products
  generateProducts();

  // Run the function when the page loads
  document.addEventListener("DOMContentLoaded", generateProducts);

  // Newsletter subscription
  const subscribeButton = document.querySelector(".subscribe-button");
  const emailInput = document.querySelector(".email-input");

  if (subscribeButton && emailInput) {
    subscribeButton.addEventListener("click", () => {
      const email = emailInput.value.trim();
      if (email) {
        alert(`Thank you for subscribing with ${email}!`);
        emailInput.value = "";
      } else {
        alert("Please enter a valid email address.");
      }
    });
  }
  // Select the div
  const brandName = document.querySelector(".brand-name-1");

  // Add a click event listener
  brandName.addEventListener("click", () => {
    window.location.href = "index.html";
  });
});
  



