document.addEventListener('DOMContentLoaded', function() {
  // Function to toggle dropdown
  function toggleDropdown(titleId, contentId) {
    const title = document.getElementById(titleId);
    const content = document.getElementById(contentId);
    const arrow = title.querySelector(".arrow-indicator");

    title.addEventListener("click", function () {
      if (content.style.display === "none") {
        content.style.display = "flex";
        arrow.style.transform = "rotate(180deg)";
      } else {
        content.style.display = "none";
        arrow.style.transform = "rotate(0deg)";
      }
    });
  }

  // Initialize all dropdowns
  toggleDropdown("colors-title", "color-options");
  toggleDropdown("size-title", "size-options");
  toggleDropdown("dress-style-title", "clothing-options");

  // Initialize variables
  const minRange = document.getElementById("price-range-min");
  const maxRange = document.getElementById("price-range-max");
  const minLabel = document.getElementById("min-price-label");
  const maxLabel = document.getElementById("max-price-label");
  const dressStyleOptions = document.querySelectorAll(".clothing-item");
  const products = document.querySelectorAll(".product-card");
  const paginationNumbers = document.querySelectorAll(".page-number");
  const sortDropdown = document.querySelector(".sort-dropdown");
  const colorOptions = document.querySelectorAll(".color-circle");
  const sizeOptions = document.querySelectorAll(".size-box");

  let selectedColors = [];
  let selectedSizes = [];
  let selectedDressStyles = [];
  let currentPage = 1;
  const productsPerPage = 9;

  // Price range functionality
  function updatePriceLabels() {
    minLabel.textContent = `RM${minRange.value}`;
    maxLabel.textContent = `RM${maxRange.value}`;
  }

  function updateRangeProgress() {
    const container = document.querySelector(".price-range-container");
    const min = parseInt(minRange.value);
    const max = parseInt(maxRange.value);
    const leftPercent = (min / parseInt(minRange.max)) * 100;
    const rightPercent = 100 - (max / parseInt(maxRange.max)) * 100;
    container.style.setProperty("--left", `${leftPercent}%`);
    container.style.setProperty("--right", `${rightPercent}%`);
  }

  minRange.addEventListener("input", function () {
    if (parseInt(maxRange.value) - parseInt(this.value) <= 0) {
      this.value = parseInt(maxRange.value) - 10;
    }
    updatePriceLabels();
    updateRangeProgress();
  });

  maxRange.addEventListener("input", function () {
    if (parseInt(this.value) - parseInt(minRange.value) <= 0) {
      this.value = parseInt(minRange.value) + 10;
    }
    updatePriceLabels();
    updateRangeProgress();
  });

  // Initialize the range progress
  updateRangeProgress();

  // Color selection
  colorOptions.forEach((color) => {
    color.addEventListener("click", function () {
      this.classList.toggle("selected");
    });
  });

  // Size selection
  sizeOptions.forEach((size) => {
    size.addEventListener("click", function () {
      this.classList.toggle("selected");
    });
  });

  // Dress style selection
  dressStyleOptions.forEach((style) => {
    style.addEventListener("click", function () {
      const styleValue = style.textContent.replace(">", "").trim();
      if (selectedDressStyles.includes(styleValue)) {
        selectedDressStyles = selectedDressStyles.filter(
          (s) => s !== styleValue
        );
        style.style.backgroundColor = "";
        style.style.color = "#666";
      } else {
        selectedDressStyles = [styleValue];
        dressStyleOptions.forEach((s) => {
          s.style.backgroundColor = "";
          s.style.color = "#666";
        });
        style.style.backgroundColor = "#000080";
        style.style.color = "#fff";
      }
    });
  });

  // Product data array
  const productData = [
    // New Arrivals Products
    {
      id: 1,
      title: "Baju Melayu Brick Orange",
      rating: 4.5,
      price: 189,
      originalPrice: 95,
      image: "images/bm-brickorange.jpg",
      color: "orange",
      style: "Baju Melayu",
      sizes: ["Small", "Medium", "Large"],
      popularity: 112,
      category: "Top Selling",
    },
    {
      id: 2,
      title: "Baju Melayu Mocha",
      rating: 4.5,
      price: 189,
      originalPrice: 210,
      image: "images/bm-mocha.jpg",
      color: "brown",
      style: "Baju Melayu",
      sizes: ["Small", "Medium", "Large", "X-Large"],
      popularity: 98,
      category: "New Arrivals",
    },
    {
      id: 3,
      title: "Batik Angsana Lilac",
      rating: 4.5,
      price: 80,
      originalPrice: 95,
      image: "images/batik-angsana-lilac.jpg",
      color: "purple",
      style: "Batik",
      sizes: ["Small", "Medium", "Large"],
      popularity: 145,
      category: "New Arrivals",
    },
    {
      id: 4,
      title: "Baju Kurung Melati",
      rating: 4.5,
      price: 189,
      originalPrice: 210,
      image: "images/melati-blushpink.jpg",
      color: "pink",
      style: "Baju Kurung",
      sizes: ["Small", "Medium", "Large", "X-Large"],
      popularity: 167,
      category: "New Arrivals",
    },
    // Top Selling Products
    {
      id: 5,
      title: "Baju Melayu Golden Yellow",
      rating: 5.0,
      price: 189,
      originalPrice: 210,
      image: "images/bm-goldenyellow.jpg",
      color: "yellow",
      style: "Baju Melayu",
      sizes: ["Small", "Medium", "Large"],
      popularity: 234,
      category: "Top Selling",
    },
    {
      id: 6,
      title: "Batik Angsana Monochrome",
      rating: 5.0,
      price: 80,
      originalPrice: 95,
      image: "images/batik-angsana-monochrome.jpg",
      color: "black",
      style: "Batik",
      sizes: ["X-Small", "Small", "Medium", "Large"],
      popularity: 189,
      category: "Top Selling",
    },
    {
      id: 7,
      title: "Baju Kurung Liana Platinum Blue",
      rating: 5.0,
      price: 189,
      originalPrice: 210,
      image: "images/liana-platinumblue.jpg",
      color: "blue",
      style: "Baju Kurung",
      sizes: ["Small", "Medium", "Large", "X-Large"],
      popularity: 178,
      category: "Top Selling",
    },
    {
      id: 8,
      title: "Baju Melayu Teluk Belanga Corn Yellow",
      rating: 5.0,
      price: 189,
      originalPrice: 210,
      image: "images/bm-teluk-cornyellow.jpg",
      color: "yellow",
      style: "Baju Melayu",
      sizes: ["Small", "Medium", "Large"],
      popularity: 123,
      category: "Top Selling",
    },
    {
      id: 9,
      title: "Baju Melayu Teluk Belanga Rose Gold",
      rating: 4.5,
      price: 189,
      originalPrice: 210,
      image: "images/bm-teluk-rosegold.jpg",
      color: "pink",
      style: "Baju Melayu",
      sizes: ["Small", "Medium", "Large"],
      popularity: 134,
      category: "New Arrivals",
    },
    {
      id: 10,
      title: "Baju Melayu Golden Brown",
      rating: 4.8,
      price: 189,
      originalPrice: 210,
      image: "images/bm-goldenbrown.jpg",
      color: "brown",
      style: "Baju Melayu",
      sizes: ["Small", "Medium", "Large", "X-Large"],
      popularity: 145,
      category: "Top Selling",
    },
    {
      id: 11,
      title: "Baju Melayu Powder Blue",
      rating: 4.7,
      price: 189,
      originalPrice: 210,
      image: "images/bm-powderblue.jpg",
      color: "blue",
      style: "Baju Melayu",
      sizes: ["Small", "Medium", "Large"],
      popularity: 167,
      category: "Top Selling",
    },
    {
      id: 12,
      title: "Baju Melayu Air Force Blue",
      rating: 4.6,
      price: 189,
      originalPrice: 210,
      image: "images/bm-airforceblue.jpg",
      color: "blue",
      style: "Baju Melayu",
      sizes: ["Small", "Medium", "Large"],
      popularity: 156,
      category: "New Arrivals",
    },
    {
      id: 13,
      title: "Batik Angsana Stoneblack",
      rating: 4.4,
      price: 80,
      originalPrice: 95,
      image: "images/batik-angsana-stoneblack.jpg",
      color: "black",
      style: "Batik",
      sizes: ["X-Small", "Small", "Medium", "Large"],
      popularity: 123,
      category: "New Arrivals",
    },
    {
      id: 14,
      title: "Baju Melayu Teluk Belanga Baby Blue",
      rating: 4.5,
      price: 189,
      originalPrice: 210,
      image: "images/bm-teluk-babyblue.jpg",
      color: "blue",
      style: "Baju Melayu",
      sizes: ["X-Small", "Small", "Medium", "Large"],
      popularity: 156,
      category: "New Arrivals",
    },
  ];

  // Function to render products dynamically
  function renderProducts(products) {
    const container = document.querySelector(".products");
    container.innerHTML = ""; // Clear container

    products.forEach((product, index) => {
      const discount = product.originalPrice
        ? Math.round(
            ((product.originalPrice - product.price) / product.originalPrice) *
              100
          )
        : 0;
      const stars =
        "★".repeat(Math.floor(product.rating)) +
        "☆".repeat(5 - Math.floor(product.rating));

      // Determine the URL based on whether it's the first product
      const productURL =
        index === 0
          ? `ProductDetails.html?id=${product.id}`
          : `ProductDetailsNew.html?id=${product.id}`;

      const productHTML = `
      <div class="product-card" data-color="${product.color}" data-style="${
        product.style
      }" 
           data-sizes="${product.sizes.join(",")}" data-popularity="${
        product.popularity
      }"
           onclick="window.location.href='${productURL}'">
          <div class="product-image">
              <img src="${product.image}" alt="${
        product.title
      }" class="product-img">
          </div>
          <div class="product-title">${product.title}</div>
          <div class="rating">
              <span class="star">${stars}</span>
          </div>
          <div class="product-price">
              <span class="current-price">RM${product.price}</span>
              ${
                product.originalPrice
                  ? `
                  <span class="original-price">RM${product.originalPrice}</span>
                  <span class="discount">-${discount}%</span>
              `
                  : ""
              }
          </div>
      </div>
    `;
      container.innerHTML += productHTML;
    });
  }

  // Filter products function
  function filterProducts() {
    const selectedColors = Array.from(
      document.querySelectorAll(".color-circle.selected")
    ).map((color) => color.style.backgroundColor);
    const selectedSizes = Array.from(
      document.querySelectorAll(".size-box.selected")
    ).map((size) => size.textContent.toLowerCase());
    const minPrice = parseInt(minRange.value);
    const maxPrice = parseInt(maxRange.value);

    // Filter products based on criteria
    const filteredProducts = productData.filter((product) => {
      const matchesPrice =
        product.price >= minPrice && product.price <= maxPrice;
      const matchesColor =
        selectedColors.length === 0 || selectedColors.includes(product.color);
      const matchesSize =
        selectedSizes.length === 0 ||
        product.sizes.some((size) =>
          selectedSizes.includes(size.toLowerCase())
        );
      const matchesStyle =
        selectedDressStyles.length === 0 ||
        selectedDressStyles.includes(product.style);

      return matchesPrice && matchesColor && matchesSize && matchesStyle;
    });

    // Get start and end index for current page
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const paginatedProducts = filteredProducts.slice(startIndex, endIndex);

    renderProducts(paginatedProducts);

    // Update product count and pagination
    const productCount = document.querySelector(".product-count");
    productCount.textContent = `Showing ${startIndex + 1}-${Math.min(
      endIndex,
      filteredProducts.length
    )} of ${filteredProducts.length} products`;

    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
    updatePagination(totalPages);
  }

  // Apply filters button
  document
    .getElementById("apply-filters")
    .addEventListener("click", function () {
      currentPage = 1;
      filterProducts();
      updatePagination();
    });

  // Initialize the page
  updatePriceLabels();
  filterProducts();

  // Enhanced sorting functionality
  sortDropdown.addEventListener("change", function () {
    const sortedProducts = [...productData];

    switch (this.value) {
      case "price-low":
        sortedProducts.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        sortedProducts.sort((a, b) => b.price - a.price);
        break;
      case "popular":
        sortedProducts.sort((a, b) => b.popularity - a.popularity);
        break;
      case "newest":
        // Implement if you add date fields to products
        break;
    }

    currentPage = 1;
    renderProducts(sortedProducts.slice(0, productsPerPage));
    updatePagination(Math.ceil(sortedProducts.length / productsPerPage));
  });

  function updatePagination(totalPages = 10) {
    // Set default to 10 pages
    const paginationContainer = document.querySelector(".pagination");
    paginationContainer.innerHTML = "";

    // Add "Previous" button with arrow
    const prevButton = document.createElement("div");
    prevButton.className = `page-number prev${
      currentPage === 1 ? " disabled" : ""
    }`;
    prevButton.innerHTML =
      '<ion-icon name="chevron-back-outline"></ion-icon> Previous';
    prevButton.addEventListener("click", () => {
      if (currentPage > 1) {
        currentPage--;
        filterProducts();
      }
    });
    paginationContainer.appendChild(prevButton);

    // Add page numbers with ellipsis
    function addPageNumber(i) {
      const pageNum = document.createElement("div");
      pageNum.className = `page-number${currentPage === i ? " active" : ""}`;
      pageNum.textContent = i;
      pageNum.addEventListener("click", () => {
        if (currentPage !== i) {
          currentPage = i;
          filterProducts();
        }
      });
      return pageNum;
    }

    // First 3 pages
    for (let i = 1; i <= 3; i++) {
      paginationContainer.appendChild(addPageNumber(i));
    }

    // Add ellipsis
    const ellipsis = document.createElement("div");
    ellipsis.className = "page-number ellipsis";
    ellipsis.textContent = "...";
    ellipsis.style.cursor = "default";
    paginationContainer.appendChild(ellipsis);

    // Last 3 pages
    for (let i = 8; i <= 10; i++) {
      paginationContainer.appendChild(addPageNumber(i));
    }

    // Add "Next" button with arrow
    const nextButton = document.createElement("div");
    nextButton.className = `page-number next${
      currentPage === 10 ? " disabled" : ""
    }`;
    nextButton.innerHTML =
      'Next <ion-icon name="chevron-forward-outline"></ion-icon>';
    nextButton.addEventListener("click", () => {
      if (currentPage < 10) {
        currentPage++;
        filterProducts();
      }
    });
    paginationContainer.appendChild(nextButton);
  }

  // Add this CSS class
  document.head.insertAdjacentHTML(
    "beforeend",
    `
        <style>
            .page-number.disabled {
                opacity: 0.5;
                cursor: not-allowed;
            }
        </style>
    `
  );

  filterProducts();

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

  // Add URL parameter handling for filtering by occasion
  function handleUrlParams() {
    const urlParams = new URLSearchParams(window.location.search);
    const occasion = urlParams.get("occasion");
    if (occasion) {
      selectedDressStyles = [occasion];
      document.querySelectorAll(".clothing-item").forEach((item) => {
        if (item.textContent.toLowerCase().includes(occasion.toLowerCase())) {
          item.style.backgroundColor = "#000080";
          item.style.color = "#fff";
        }
      });
      filterProducts();
    }
  }

  // Initialize the page with paginated products
  handleUrlParams();
  filterProducts(); // This will handle pagination correctly from the start

  // Optional: Add this right after DOMContentLoaded to ensure initial state
  document.addEventListener("DOMContentLoaded", function () {
    currentPage = 1;
    filterProducts();
  });

  // Select the div
  const brandName = document.querySelector(".brand-name-1");

  // Add a click event listener
  brandName.addEventListener("click", () => {
    window.location.href = "index.html";
  });
});



