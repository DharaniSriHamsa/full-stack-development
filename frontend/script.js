document.addEventListener("DOMContentLoaded", function () {
    // Hero Section Animation
    const title = document.querySelector(".animated-title");
    if (title) {
        title.style.opacity = "1";
        title.style.transform = "translateY(0)";
    }

});
document.addEventListener("DOMContentLoaded", function () {
    const menuItems = [
        { name: "Espresso", desc: "Strong and bold espresso shot.", price: "$3.00", img: "./images/expresso.webp" },
        { name: "Cappuccino", desc: "Creamy, rich coffee with milk foam.", price: "$4.00", img: "./images/capuci.webp" },
        { name: "Latte", desc: "Silky smooth coffee with steamed milk.", price: "$4.50", img: "./images/latte.webp" },
        { name: "Mocha", desc: "Chocolate-infused coffee delight.", price: "$5.00", img: "./images/mocha.webp" },
        { name: "Americano", desc: "Classic black coffee.", price: "$3.50", img: "./images/americano.webp" },
        { name: "Macchiato", desc: "Espresso with a touch of milk foam.", price: "$4.25", img: "./images/mach.webp" },
        
        // Cool Drinks
        { name: "Mango Lassi", desc: "Refreshing mango yogurt drink.", price: "$3.50", img: "./images/mano.webp" },
        { name: "Soda Lime", desc: "Chilled soda with lemon and mint.", price: "$2.50", img: "./images/ds.webp" },
        { name: "Buttermilk", desc: "Spiced cooling buttermilk.", price: "$2.00", img: "./images/milk.webp" },
    
        // Tea for Telugu people
        { name: "Irani Chai", desc: "Thick, sweet, and creamy Hyderabadi tea.", price: "$2.50", img: "./images/masala.webp" },
        { name: "Masala Chai", desc: "Strong spiced tea with ginger and cardamom.", price: "$2.00", img: "./images/chai.webp" },
        { name: "Ginger Tea", desc: "Soothing tea with fresh ginger.", price: "$2.00", img: "./images/ice.webp" },
    
        // Sandwiches
        { name: "Grilled Cheese Sandwich", desc: "Crispy toast with melted cheese.", price: "$4.00", img: "./images/grilled.webp" },
        { name: "Veg Sandwich", desc: "Fresh veggies with cheese and mayo.", price: "$4.50", img: "./images/veg.webp" },
        { name: "Chicken Sandwich", desc: "Juicy grilled chicken with lettuce.", price: "$5.00", img: "./images/chicken.webp" },
    
        // Burgers
        { name: "Veg Burger", desc: "Crispy patty with fresh veggies and sauce.", price: "$5.00", img: "./images/vegbu.webp" },
        { name: "Chicken Burger", desc: "Grilled chicken patty with cheese.", price: "$6.00", img: "./images/chickenbur.webp" },
        { name: "Paneer Burger", desc: "Paneer tikka with spicy sauce.", price: "$5.50", img: "./images/panner.webp" }
    ];
    
    const menuContainer = document.getElementById("menuContainer");
    const loadMoreBtn = document.getElementById("loadMoreBtn");

    let itemsToShow = 3;

    function displayMenu() {
        menuContainer.innerHTML = ""; // Clear existing menu

        for (let i = 0; i < itemsToShow && i < menuItems.length; i++) {
            const item = document.createElement("div");
            item.classList.add("menu-item");
            item.innerHTML = `
                <img src="${menuItems[i].img}" alt="${menuItems[i].name}">
                <h3>${menuItems[i].name}</h3>
                <p>${menuItems[i].desc}</p>
                <span>${menuItems[i].price}</span>
            `;
            menuContainer.appendChild(item);
        }

        if (itemsToShow >= menuItems.length) {
            loadMoreBtn.style.display = "none"; // Hide button when all items are loaded
        }
    }

    if (menuContainer) displayMenu();

    if (loadMoreBtn) {
        loadMoreBtn.addEventListener("click", function () {
            itemsToShow += 3; // Show 3 more items
            displayMenu();
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const text = "Welcome to Brewed Awakening"; // The text to type
    const speed = 100; // Typing speed in milliseconds
    const delayBeforeRestart = 1000; // Delay before restarting (1 second)
    let index = 0;
    const welcomeText = document.getElementById("welcome-text");

    function typeEffect() {
        if (index < text.length) {
            welcomeText.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeEffect, speed);
        } else {
            setTimeout(() => {
                welcomeText.innerHTML = ""; // Clear text
                index = 0; // Reset index
                typeEffect(); // Restart effect
            }, delayBeforeRestart);
        }
    }

    typeEffect(); // Start the typing effect
});
