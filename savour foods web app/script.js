/* =====================================================
   SAVOUR FOODS STYLE CLONE
   Frontend Demo
===================================================== */

const products = [

    {
        id: 1,
        name: "Chicken Pulao Single",
        category: "Chicken Pulao",
        price: 707,
        image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=900&q=90",
        description: "A delicious platter of pulao with chicken, shami kabab, salad and traditional raita.",
        popular: true
    },

    {
        id: 2,
        name: "Pulao Kabab",
        category: "Chicken Pulao",
        price: 490,
        image: "https://images.unsplash.com/photo-1563379091339-03246963d96c?auto=format&fit=crop&w=900&q=90",
        description: "Fragrant pulao served with two traditional shami kababs and raita.",
        popular: true
    },

    {
        id: 3,
        name: "Pulao",
        category: "Chicken Pulao",
        price: 365,
        image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=900&q=90",
        description: "Traditional fragrant rice served with salad and raita."
    },

    {
        id: 4,
        name: "Chicken Pulao Special",
        category: "Chicken Pulao",
        price: 935,
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=90",
        description: "Two chicken pieces with pulao, shami kababs, salad and raita.",
        popular: true
    },

    {
        id: 5,
        name: "Chicken Roast",
        category: "Chicken Roast",
        price: 912,
        image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=900&q=90",
        description: "Juicy roasted chicken prepared with aromatic spices."
    },

    {
        id: 6,
        name: "Chicken Piece",
        category: "Chicken Roast",
        price: 222,
        image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?auto=format&fit=crop&w=900&q=90",
        description: "Tender chicken piece prepared with traditional spices."
    },

    {
        id: 7,
        name: "Chicken Burger & Fries",
        category: "Burgers",
        price: 787,
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=90",
        description: "Chicken burger with fresh vegetables, sauce and crispy fries."
    },

    {
        id: 8,
        name: "Krispo Burger & Fries",
        category: "Burgers",
        price: 895,
        image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=900&q=90",
        description: "Crunchy chicken burger served with crispy potato fries."
    },

    {
        id: 9,
        name: "Krispo Burger & Cheese",
        category: "Burgers",
        price: 735,
        image: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?auto=format&fit=crop&w=900&q=90",
        description: "Crispy chicken fillet with cheese, vegetables and spicy mayo."
    },

    {
        id: 10,
        name: "Krispo Broast",
        category: "Broast",
        price: 1283,
        image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=900&q=90",
        description: "Crispy juicy broast chicken prepared for sharing.",
        popular: true
    },

    {
        id: 11,
        name: "Tangy Sticks",
        category: "Broast",
        price: 627,
        image: "https://images.unsplash.com/photo-1562967916-eb82221dfb92?auto=format&fit=crop&w=900&q=90",
        description: "Crispy chicken pieces coated in a tangy flavourful sauce."
    },

    {
        id: 12,
        name: "Zarda",
        category: "Sweets",
        price: 228,
        image: "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=900&q=90",
        description: "Traditional sweet rice prepared with colourful ingredients.",
        popular: true
    },

    {
        id: 13,
        name: "Kheer",
        category: "Sweets",
        price: 228,
        image: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?auto=format&fit=crop&w=900&q=90",
        description: "Creamy traditional rice pudding prepared with milk and khoya."
    },

    {
        id: 14,
        name: "Shami Kabab",
        category: "Fried Items",
        price: 68,
        image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=900&q=90",
        description: "Traditional savour-style shami kabab.",
        popular: true
    },

    {
        id: 15,
        name: "French Fries",
        category: "Fried Items",
        price: 302,
        image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=900&q=90",
        description: "Crispy golden potato fries."
    },

    {
        id: 16,
        name: "Krispo Wings",
        category: "Fried Items",
        price: 496,
        image: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=900&q=90",
        description: "Crispy spicy chicken wings."
    },

    {
        id: 17,
        name: "Raita",
        category: "Sides",
        price: 30,
        image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=900&q=90",
        description: "Refreshing yoghurt raita seasoned with traditional spices."
    },

    {
        id: 18,
        name: "Fresh Salad",
        category: "Sides",
        price: 30,
        image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=900&q=90",
        description: "Fresh cucumber, tomato, onion, lemon and herbs."
    },

    {
        id: 19,
        name: "Pepsi Can 250ml",
        category: "Beverages",
        price: 143,
        image: "https://images.unsplash.com/photo-1629203849820-fdd70d49c38e?auto=format&fit=crop&w=900&q=90",
        description: "Chilled soft drink to enjoy with your meal."
    },

    {
        id: 20,
        name: "Aquafina Water 500ml",
        category: "Beverages",
        price: 74,
        image: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&w=900&q=90",
        description: "Refreshing bottled water."
    }

];


/* =====================================================
   APPLICATION STATE
===================================================== */

let cart = JSON.parse(
    localStorage.getItem("savourCart") || "[]"
);

let favorites = JSON.parse(
    localStorage.getItem("savourFavorites") || "[]"
);

let selectedCategory = "All";

let discount = 0;

let signupMode = false;


/* =====================================================
   HELPERS
===================================================== */

function $(selector) {
    return document.querySelector(selector);
}


function money(value) {

    return "Rs. " + Number(value).toLocaleString("en-PK");

}


function saveData() {

    localStorage.setItem(
        "savourCart",
        JSON.stringify(cart)
    );

    localStorage.setItem(
        "savourFavorites",
        JSON.stringify(favorites)
    );

}


/* =====================================================
   CATEGORIES
===================================================== */

function renderCategories() {

    const categories = [
        "All",
        ...new Set(
            products.map(product => product.category)
        )
    ];

    $("#categories").innerHTML =
        categories.map(category => {

            return `
                <button
                    class="category-btn
                    ${category === selectedCategory ? "active" : ""}"
                    data-category="${category}"
                >
                    ${category}
                </button>
            `;

        }).join("");


    document
        .querySelectorAll(".category-btn")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    selectedCategory =
                        button.dataset.category;

                    renderProducts();

                }
            );

        });

}


/* =====================================================
   PRODUCTS
===================================================== */

function renderProducts() {

    renderCategories();

    const search =
        $("#searchInput")
            .value
            .trim()
            .toLowerCase();


    const filtered =
        products.filter(product => {

            const categoryMatch =
                selectedCategory === "All" ||
                product.category === selectedCategory;

            const searchMatch =
                !search ||
                (
                    product.name +
                    " " +
                    product.category +
                    " " +
                    product.description
                )
                    .toLowerCase()
                    .includes(search);

            return categoryMatch && searchMatch;

        });


    $("#emptyState")
        .classList
        .toggle(
            "d-none",
            filtered.length !== 0
        );


    $("#products").innerHTML =
        filtered.map(product => {

            const isFavorite =
                favorites.includes(product.id);


            return `

                <div class="col-sm-6 col-lg-4 col-xl-3">

                    <article class="product-card">

                        <div class="product-image">

                            <img
                                src="${product.image}"
                                alt="${product.name}"
                                loading="lazy"
                            >

                            ${
                                product.popular
                                ?
                                `
                                <span
                                    class="badge bg-danger position-absolute top-0 start-0 m-2"
                                >
                                    Popular
                                </span>
                                `
                                :
                                ""
                            }


                            <button
                                class="favorite-btn
                                ${isFavorite ? "active" : ""}"
                                onclick="toggleFavorite(${product.id})"
                            >

                                <i
                                    class="bi
                                    ${
                                        isFavorite
                                        ?
                                        "bi-heart-fill"
                                        :
                                        "bi-heart"
                                    }"
                                ></i>

                            </button>

                        </div>


                        <div class="product-content">

                            <span class="product-category">
                                ${product.category}
                            </span>

                            <h3>
                                ${product.name}
                            </h3>

                            <p>
                                ${product.description}
                            </p>


                            <div class="product-footer">

                                <span class="product-price">
                                    ${money(product.price)}
                                </span>

                                <button
                                    class="add-btn"
                                    onclick="addToCart(${product.id})"
                                >
                                    <i class="bi bi-plus"></i>
                                    Add
                                </button>

                            </div>

                        </div>

                    </article>

                </div>

            `;

        }).join("");

}


/* =====================================================
   CART
===================================================== */

function addToCart(id) {

    const item =
        cart.find(item => item.id === id);


    if (item) {

        item.quantity++;

    } else {

        cart.push({
            id: id,
            quantity: 1
        });

    }


    saveData();

    updateCart();

    showToast("Item added to cart");

}


function removeFromCart(id) {

    cart =
        cart.filter(
            item => item.id !== id
        );


    saveData();

    updateCart();

}


function changeQuantity(id, change) {

    const item =
        cart.find(item => item.id === id);


    if (!item) {
        return;
    }


    item.quantity += change;


    if (item.quantity <= 0) {

        removeFromCart(id);

        return;

    }


    saveData();

    updateCart();

}


function calculateTotals() {

    const subtotal =
        cart.reduce(
            (total, item) => {

                const product =
                    products.find(
                        product =>
                            product.id === item.id
                    );

                return total +
                    product.price *
                    item.quantity;

            },
            0
        );


    const delivery =
        subtotal === 0
        ?
        0
        :
        subtotal >= 2000
        ?
        0
        :
        150;


    const actualDiscount =
        Math.min(
            discount,
            subtotal
        );


    return {

        subtotal,

        delivery,

        discount: actualDiscount,

        total:
            subtotal +
            delivery -
            actualDiscount

    };

}


function updateCart() {

    const count =
        cart.reduce(
            (total, item) =>
                total + item.quantity,
            0
        );


    $("#cartCount").textContent =
        count;


    $("#favoriteCount").textContent =
        favorites.length;


    $("#cartEmpty")
        .classList
        .toggle(
            "d-none",
            cart.length !== 0
        );


    $("#cartSummary")
        .classList
        .toggle(
            "d-none",
            cart.length === 0
        );


    $("#cartItems").innerHTML =
        cart.map(item => {

            const product =
                products.find(
                    product =>
                        product.id === item.id
                );


            return `

                <div class="cart-item">

                    <img
                        src="${product.image}"
                        alt="${product.name}"
                    >


                    <div class="cart-info">

                        <h6>
                            ${product.name}
                        </h6>

                        <div class="cart-price">
                            ${money(
                                product.price *
                                item.quantity
                            )}
                        </div>


                        <div class="quantity">

                            <button
                                onclick="changeQuantity(${product.id}, -1)"
                            >
                                −
                            </button>

                            <span>
                                ${item.quantity}
                            </span>

                            <button
                                onclick="changeQuantity(${product.id}, 1)"
                            >
                                +
                            </button>

                            <button
                                class="remove-btn"
                                onclick="removeFromCart(${product.id})"
                            >
                                <i class="bi bi-trash"></i>
                            </button>

                        </div>

                    </div>

                </div>

            `;

        }).join("");


    const totals =
        calculateTotals();


    $("#subtotal").textContent =
        money(totals.subtotal);


    $("#delivery").textContent =
        totals.delivery === 0
        ?
        "FREE"
        :
        money(totals.delivery);


    $("#discount").textContent =
        "- " + money(totals.discount);


    $("#total").textContent =
        money(totals.total);


    $("#checkoutTotal").textContent =
        money(totals.total);

}


/* =====================================================
   FAVORITES
===================================================== */

function toggleFavorite(id) {

    if (favorites.includes(id)) {

        favorites =
            favorites.filter(
                item => item !== id
            );

        showToast(
            "Removed from favorites"
        );

    } else {

        favorites.push(id);

        showToast(
            "Added to favorites"
        );

    }


    saveData();

    renderProducts();

    updateCart();

}


/* =====================================================
   PRODUCT DETAILS
===================================================== */

function openProduct(id) {

    const product =
        products.find(
            product =>
                product.id === id
        );


    $("#productDetails").innerHTML = `

        <img
            src="${product.image}"
            alt="${product.name}"
        >


        <div class="product-details">

            <span class="eyebrow red">
                ${product.category}
            </span>

            <h2>
                ${product.name}
            </h2>

            <p>
                ${product.description}
            </p>

            <div class="price">
                ${money(product.price)}
            </div>

            <button
                class="checkout-btn mt-3"
                onclick="
                    addToCart(${product.id});
                    bootstrap.Modal
                        .getInstance(
                            document.getElementById('productModal')
                        )
                        .hide();
                "
            >
                Add To Cart
            </button>

        </div>

    `;


    const modal =
        new bootstrap.Modal(
            $("#productModal")
        );


    modal.show();

}


/* =====================================================
   CHECKOUT
===================================================== */

function openCheckout() {

    if (cart.length === 0) {

        showToast(
            "Your cart is empty",
            true
        );

        return;

    }


    const cartPanel =
        bootstrap.Offcanvas.getInstance(
            $("#cartPanel")
        );


    if (cartPanel) {
        cartPanel.hide();
    }


    $("#checkoutTotal").textContent =
        money(
            calculateTotals().total
        );


    const modal =
        new bootstrap.Modal(
            $("#checkoutModal")
        );


    modal.show();

}


function placeOrder(event) {

    event.preventDefault();


    const orderNumber =
        "SF" +
        Math.floor(
            10000 +
            Math.random() * 90000
        );


    localStorage.setItem(
        "lastSavourOrder",
        orderNumber
    );


    cart = [];

    discount = 0;

    saveData();

    updateCart();


    const checkoutModal =
        bootstrap.Modal.getInstance(
            $("#checkoutModal")
        );


    checkoutModal.hide();


    $("#orderNumber").textContent =
        orderNumber;


    setTimeout(() => {

        new bootstrap.Modal(
            $("#successModal")
        ).show();

    }, 300);

}


/* =====================================================
   PROMO CODE
===================================================== */

function applyPromo() {

    const code =
        $("#promoInput")
            .value
            .trim()
            .toUpperCase();


    if (code === "SAVE10") {

        const subtotal =
            calculateTotals().subtotal;


        discount =
            Math.round(
                subtotal * .10
            );


        updateCart();

        showToast(
            "10% discount applied"
        );

    } else {

        discount = 0;

        updateCart();

        showToast(
            "Invalid promo code",
            false
        );

    }

}


/* =====================================================
   AUTH
===================================================== */

function toggleAuthMode() {

    signupMode =
        !signupMode;


    $("#authTitle").textContent =
        signupMode
        ?
        "Create Account"
        :
        "Sign In";


    $("#nameField")
        .classList
        .toggle(
            "d-none",
            !signupMode
        );


    $("#authSubmit").textContent =
        signupMode
        ?
        "Create Account"
        :
        "Sign In";


    $("#switchAuth").textContent =
        signupMode
        ?
        "Already have an account?"
        :
        "Create an account";

}


function submitAuth(event) {

    event.preventDefault();


    const modal =
        bootstrap.Modal.getInstance(
            $("#authModal")
        );


    modal.hide();


    showToast(
        signupMode
        ?
        "Account created successfully"
        :
        "Signed in successfully"
    );

}


/* =====================================================
   LOCATION
===================================================== */

function changeLocation(city) {

    $("#locationText").textContent =
        city;


    localStorage.setItem(
        "savourLocation",
        city
    );


    const modal =
        bootstrap.Modal.getInstance(
            $("#locationModal")
        );


    modal.hide();


    showToast(
        "Location updated"
    );

}


/* =====================================================
   TOAST
===================================================== */

function showToast(
    message,
    success = true
) {

    const toast =
        document.createElement("div");


    toast.className =
        "toast-message";


    if (!success) {
        toast.classList.add("error");
    }


    toast.textContent =
        message;


    $("#toastContainer")
        .appendChild(toast);


    setTimeout(() => {

        toast.remove();

    }, 2500);

}


/* =====================================================
   INITIALIZATION
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        renderProducts();

        updateCart();


        /* Search */

        $("#searchInput")
            .addEventListener(
                "input",
                renderProducts
            );


        /* Search button */

        $("#searchBtn")
            .addEventListener(
                "click",
                () => {

                    $("#searchInput").focus();

                    $("#menuSection")
                        .scrollIntoView({
                            behavior: "smooth"
                        });

                }
            );


        /* Hero button */

        $("#orderNowBtn")
            .addEventListener(
                "click",
                () => {

                    $("#menuSection")
                        .scrollIntoView({
                            behavior: "smooth"
                        });

                }
            );


        /* Cart */

        $("#cartBtn")
            .addEventListener(
                "click",
                () => {

                    const cart =
                        new bootstrap.Offcanvas(
                            $("#cartPanel")
                        );

                    cart.show();

                }
            );


        /* Favorites */

        $("#favoriteBtn")
            .addEventListener(
                "click",
                () => {

                    selectedCategory =
                        "All";

                    $("#searchInput")
                        .value = "";

                    renderProducts();

                    $("#menuSection")
                        .scrollIntoView({
                            behavior: "smooth"
                        });

                }
            );


        /* Checkout */

        $("#checkoutBtn")
            .addEventListener(
                "click",
                openCheckout
            );


        $("#checkoutForm")
            .addEventListener(
                "submit",
                placeOrder
            );


        /* Promo */

        $("#applyPromo")
            .addEventListener(
                "click",
                applyPromo
            );


        $("#copyPromo")
            .addEventListener(
                "click",
                async () => {

                    try {

                        await navigator.clipboard
                            .writeText("SAVE10");

                    } catch (error) {
                        /* Clipboard may be unavailable */
                    }

                    showToast(
                        "SAVE10 copied"
                    );

                }
            );


        /* Account */

        $("#accountBtn")
            .addEventListener(
                "click",
                () => {

                    new bootstrap.Modal(
                        $("#authModal")
                    ).show();

                }
            );


        $("#switchAuth")
            .addEventListener(
                "click",
                toggleAuthMode
            );


        $("#authForm")
            .addEventListener(
                "submit",
                submitAuth
            );


        /* Location */

        $("#locationBtn")
            .addEventListener(
                "click",
                () => {

                    new bootstrap.Modal(
                        $("#locationModal")
                    ).show();

                }
            );


        document
            .querySelectorAll(
                "[data-city]"
            )
            .forEach(button => {

                button.addEventListener(
                    "click",
                    () => {

                        changeLocation(
                            button.dataset.city
                        );

                    }
                );

            });


        /* Saved location */

        const savedLocation =
            localStorage.getItem(
                "savourLocation"
            );


        if (savedLocation) {

            $("#locationText")
                .textContent =
                savedLocation;

        }

    }
);