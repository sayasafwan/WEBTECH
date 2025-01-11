// JSON data for "New Arrivals" products
const newArrivals = [
  {
    id: 1,
    title: "Baju Melayu Teluk Belanga",
    rating: 4.5,
    price: 189,
    image: "images/bm-teluk-babyblue.jpg",
  },
  {
    id: 2,
    title: "Baju Melayu",
    rating: 4.5,
    price: 189,
    image: "images/bm-mocha.jpg",
  },
  {
    id: 3,
    title: "Batik Angsana",
    rating: 4.5,
    price: 80,
    image: "images/batik-angsana-lilac.jpg",
  },
  {
    id: 4,
    title: "Baju Kurung Melati ",
    rating: 4.5,
    price: 189,
    image: "images/melati-blushpink.jpg",
  },
];

// JSON data for "Top Selling" products
const topSelling = [
  {
    id: 1,
    title: "Baju Melayu Golden Yellow",
    rating: 5.0,
    price: 189,
    image: "images/bm-goldenyellow.jpg",
  },
  {
    id: 2,
    title: "Batik Angsana Mono Chrome",
    rating: 5.0,
    price: 80,
    image: "images/batik-angsana-monochrome.jpg",
  },
  {
    id: 3,
    title: "Baju Kurung Liana",
    rating: 5.0,
    price: 189,
    image: "images/liana-platinumblue.jpg",
  },
  {
    id: 4,
    title: "Baju Melayu Teluk Belanga",
    rating: 5.0,
    price: 189,
    image: "images/bm-teluk-cornyellow.jpg",
  },
];

const occasionData = [
  {
    name: "KURTA",
    type: "square",
    image: "images/kurta-offwhite.jpg",
  },
  {
    name: "BAJU KURUNG",
    type: "rectangular",
    image: "images/melati-blushpink.jpg",
  },
  {
    name: "BAJU MELAYU",
    type: "square",
    image: "images/bm-powderblue.jpg",
  },
  {
    name: "BATIK",
    type: "rectangular",
    image: "images/batik-angsana-stoneblack.jpg",
  },
];


// Function to render products dynamically
function renderProducts(containerId, products) {
  const container = document.getElementById(containerId);
  container.innerHTML = ""; // Clear container

  products.forEach((product) => {
    const stars = generateStars(product.rating);
    const productHTML = `
            <div class="product-card">
                <div class="product-image">
                    <img src="${product.image}" alt="${product.title}">
                </div>
                <h2 class="product-title">${product.title}</h2>
                <div class="rating-container">
                    <div class="stars-wrapper">${stars}</div>
                    <div class="rating-text">${product.rating}/<span class="black-text">5</span></div>
                </div>
                <div class="price">RM ${product.price}</div>
            </div>
        `;
    container.innerHTML += productHTML;
  });
}

// Function to generate star icons based on rating
function generateStars(rating) {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  let starsHTML = "";
  for (let i = 0; i < fullStars; i++) {
    starsHTML += `<ion-icon name="star"></ion-icon>`;
  }
  if (halfStar) {
    starsHTML += `<ion-icon name="star-half"></ion-icon>`;
  }
  for (let i = 0; i < emptyStars; i++) {
    starsHTML += `<ion-icon name="star-outline"></ion-icon>`;
  }
  return starsHTML;
}

// Render "New Arrivals" and "Top Selling" sections
renderProducts("new-arrival-container", newArrivals);
renderProducts("top-selling-container", topSelling);

// Event listeners for "View All" buttons
document
  .getElementById("viewAll-new-arrivals").addEventListener("click", () => {
    window.location.href = "category.html";// Add your "View All" logic here
  });

document.getElementById("viewAll-top-selling").addEventListener("click", () => {
  window.location.href="category.html";// Add your "View All" logic here
});

const reviews = [
  {
    name: "Sarah M.",
    text: "I was blown away by the variety of fragrances and the helpful descriptions on the site. Shipping was super fast, and the scent I picked was exactly what I was looking for. It came in a stunning package that made it feel like a gift to myself. Highly recommend to anyone looking for quality fragrances online!",
    rating: 5,
  },
  {
    name: "John D.",
    text: "Amazing products! The customer service was very responsive, and the delivery was on time. The fragrances are unique and last long. Will definitely buy again!",
    rating: 5,
  },
  {
    name: "Aisha K.",
    text: "The fragrance collection is excellent. I had a minor issue with my order, but the support team resolved it quickly. Highly satisfied!",
    rating: 4,
  },
  {
    name: "Michael L.",
    text: "I love the quality of the products. The prices are reasonable, and the packaging is luxurious. Great experience overall!",
    rating: 5,
  },
  {
    name: "Fatimah A.",
    text: "I found the perfect fragrance for myself. The website is easy to navigate, and the delivery was fast. Highly recommend!",
    rating: 5,
  },
  {
    name: "Emily R.",
    text: "Great service! The fragrance was just what I wanted. The website was easy to use, and my order arrived in perfect condition. Very pleased with the experience.",
    rating: 4,
  },
  {
    name: "David W.",
    text: "Excellent products and customer service. The fragrance lasted all day, and the delivery was on time. Will definitely purchase again.",
    rating: 5,
  },
];

let currentIndex = 0;

// Function to render reviews
function renderReviews() {
  const reviewContainer = document.getElementById("review-container");
  reviewContainer.innerHTML = ""; // Clear existing reviews

  // Display 5 reviews at a time
  for (let i = 0; i < 5; i++) {
    const review = reviews[(currentIndex + i) % reviews.length]; // Wrap around when reaching the end

    const reviewCard = document.createElement("div");
    reviewCard.classList.add("review-card");

    // Stars
    const starsContainer = document.createElement("div");
    starsContainer.classList.add("stars-container");
    const starsWrapper = document.createElement("div");
    starsWrapper.classList.add("stars-wrapper");
    for (let j = 0; j < 5; j++) {
      const star = document.createElement("ion-icon");
      star.setAttribute("name", j < review.rating ? "star" : "star-outline");
      starsWrapper.appendChild(star);
    }
    starsContainer.appendChild(starsWrapper);

    // Reviewer Info
    const reviewerInfo = document.createElement("div");
    reviewerInfo.classList.add("reviewer-info");
    const customerName = document.createElement("div");
    customerName.classList.add("customer-name");
    customerName.textContent = review.name;
    const verificationBadge = document.createElement("div");
    verificationBadge.classList.add("verification-badge");
    const checkmarkIcon = document.createElement("ion-icon");
    checkmarkIcon.setAttribute("name", "checkmark-circle-sharp");
    verificationBadge.appendChild(checkmarkIcon);
    reviewerInfo.appendChild(customerName);
    reviewerInfo.appendChild(verificationBadge);

    // Review Text
    const reviewText = document.createElement("p");
    reviewText.classList.add("review-text");
    reviewText.textContent = review.text;

    // Append to Review Card
    reviewCard.appendChild(starsContainer);
    reviewCard.appendChild(reviewerInfo);
    reviewCard.appendChild(reviewText);

    // Append to Container
    reviewContainer.appendChild(reviewCard);
  }
}

// Function to move to the next set of reviews
function nextReview() {
  currentIndex = (currentIndex + 1) % reviews.length; // Loop back to the first review
  renderReviews();
}

// Function to move to the previous set of reviews
function prevReview() {
  currentIndex = (currentIndex - 1 + reviews.length) % reviews.length; // Loop back to the last review
  renderReviews();
}

// Event listeners for arrow buttons
document
  .querySelector(".arrow-container .arrow:first-child")
  .addEventListener("click", prevReview);
document
  .querySelector(".arrow-container .arrow:last-child")
  .addEventListener("click", nextReview);

// Initial render of the reviews
renderReviews();

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



function renderOccasionCards() {
  const container = document.getElementById("occasion-cards-container");
  container.innerHTML = ""; // Clear existing cards

  // Iterate over each occasion in the JSON data
  occasionData.forEach((occasion) => {
    const occasionCard = document.createElement("a"); // Use <a> tag for navigation
    occasionCard.classList.add("occasion-card", occasion.type);
    // Add a query parameter to the URL to identify the occasion
    occasionCard.href = `category.html?occasion=${encodeURIComponent(occasion.type)}`;
    occasionCard.target = "_self"; // Open the link in the same tab

    // Create a text element for the name
    const occasionName = document.createElement("div");
    occasionName.classList.add("occasion-name");
    occasionName.textContent = occasion.name;

    // Create an image element
    const occasionImage = document.createElement("img");
    occasionImage.src = occasion.image; // Set the image source from JSON
    occasionImage.alt = occasion.name; // Set alt text for accessibility
    occasionImage.classList.add("occasion-image");

    // Append the image and name to the card
    occasionCard.appendChild(occasionName);
    occasionCard.appendChild(occasionImage);

    // Append the card to the container
    container.appendChild(occasionCard);
  });
}

// Call the function to render the occasion cards when the page loads
renderOccasionCards();



    // Select the div
    const brandName = document.querySelector('.brand-name-1');

    // Add a click event listener
    brandName.addEventListener('click', () => {
        window.location.href = 'index.html'; 
    });
