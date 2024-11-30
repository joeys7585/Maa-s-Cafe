let menuData = {
	categories: [],
	items: [],
};

let currentPage = 1;
const itemsPerPage = 9;

// Load menu data from menu.json
fetch("menu.json")
	.then((response) => response.json())
	.then((data) => {
		menuData = data;
		loadCategories();
		loadMenu(); // Initially load all items (All category)
	})
	.catch((error) => console.error("Error loading menu data:", error));

// Load the categories dynamically from the JSON file
function loadCategories() {
	const categoriesSection = document.getElementById("categories");
	const categoryList = document.querySelector(".category-list");

	// Create category buttons
	menuData.categories.forEach((category) => {
		const button = document.createElement("button");
		button.classList.add("category-btn");
		button.textContent = category;
		button.onclick = () => filterMenu(category.toLowerCase());
		categoryList.appendChild(button);
	});
}

// Load menu items into the menu section
function loadMenu(category = "all") {
	const menuList = document.getElementById("menu-list");
	menuList.innerHTML = ""; // Clear the menu list

	// Filter menu items based on selected category
	const filteredItems =
		category === "all"
			? menuData.items
			: menuData.items.filter(
					(item) => item.category.toLowerCase() === category
			  );

	// Get the items for the current page
	const pageItems = filteredItems.slice(
		(currentPage - 1) * itemsPerPage,
		currentPage * itemsPerPage
	);

	pageItems.forEach((item) => {
		const li = document.createElement("div");
		li.classList.add("menu-item");
		li.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <div class="name">${item.name}</div>
      <div class="price">₹${item.price.toFixed(2)}</div>
      <button onclick="addToOrder(${item.id})">Add</button>
    `;
		menuList.appendChild(li);
	});
}

// Filter menu by category
function filterMenu(category) {
	currentPage = 1; // Reset to the first page when changing categories
	loadMenu(category);
}

// Initialize order data
let order = [];

// Add an item to the order
function addToOrder(itemId) {
	const item = menuData.items.find((item) => item.id === itemId);
	if (item) {
		const orderItem = order.find((o) => o.id === item.id);
		if (orderItem) {
			orderItem.quantity++;
		} else {
			order.push({ ...item, quantity: 1 });
		}
		renderOrder();
	}
}

// Render the order list
function renderOrder() {
	const orderList = document.getElementById("order-list");
	orderList.innerHTML = ""; // Clear the order list
	order.forEach((item) => {
		const li = document.createElement("li");
		li.innerHTML = `
      ${item.name} - $${item.price.toFixed(2)}
      <div class="quantity-controls">
        <button onclick="changeQuantity(${item.id}, -1)">-</button>
        <span>${item.quantity}</span>
        <button onclick="changeQuantity(${item.id}, 1)">+</button>
      </div>
    `;
		orderList.appendChild(li);
	});
	calculateTotal();
}

// Change the quantity of an item
function changeQuantity(itemId, change) {
	const orderItem = order.find((o) => o.id === itemId);
	if (orderItem) {
		orderItem.quantity += change;
		if (orderItem.quantity <= 0) {
			order = order.filter((o) => o.id !== itemId); // Remove the item if quantity is 0 or less
		}
		renderOrder();
	}
}

// Calculate and display the total price
function calculateTotal() {
	const total = order.reduce(
		(sum, item) => sum + item.price * item.quantity,
		0
	);
	document.getElementById("total-price").textContent = total.toFixed(2);
}

// Confirm the order by showing the modal
function confirmOrder() {
	if (order.length === 0) {
		alert("Please add some items to your order before confirming.");
		return; // Exit the function if the order is empty
	}

	const totalAmount = order
		.reduce((sum, item) => sum + item.price * item.quantity, 0)
		.toFixed(2);
	document.getElementById("modal-total").textContent = `Total: ₹${totalAmount}`;
	document.getElementById("confirmation-modal").style.display = "flex"; // Show modal
}

// Finalize the order and reset data
function finalizeOrder() {
	alert("Order confirmed!");
	order = []; // Clear the order
	renderOrder(); // Update the UI
	closeModal(); // Close the modal
}

// Close the confirmation modal without confirming the order
function closeModal() {
	document.getElementById("confirmation-modal").style.display = "none"; // Hide modal
}

// Initialize the app
loadCategories();
// Scroll to the bottom of the page
function scrollToBottom() {
	window.scrollTo({
		top: document.body.scrollHeight,
		behavior: "smooth",
	});
}

// Show the button when the user scrolls down
window.addEventListener("scroll", function () {
	const button = document.getElementById("scroll-to-bottom-btn");
	if (window.scrollY < document.body.scrollHeight - window.innerHeight) {
		button.style.display = "block"; // Show button
	} else {
		button.style.display = "none"; // Hide button when at the bottom
	}
});
