import React, { useState } from "react";
import "./Menu.css";
import pakoda from "../assets/pakoda.jpg";
import achha from "../assets/achha.jpg";
import appe from "../assets/appe.jpg";
import croll from "../assets/croll.jpg";
import cultet from "../assets/cultet.jpg";
import dalvada from "../assets/dalvada.jpg";
import dosa from "../assets/dosa.jpg";
import idli from "../assets/idli.jpg";
import kuzha from "../assets/kuzha.jpg";
import manchu from "../assets/manchu.jpg";
import mvada from "../assets/mvada.jpg";
import podi from "../assets/podi.jpg";
import sambar from "../assets/sambar.jpg";
import unni from "../assets/unni.jpg";
import vada from "../assets/vada.jpg";
import c65 from "../assets/c65.jpg";

const Menu = () => {
	const [selectedCategory, setSelectedCategory] = useState("All");

	const menuItems = [
		{
			name: "Moong Dal Pakoda",
			price: "₹40",
			img: pakoda,
			category: "Veg Snacks",
		},
		{
			name: "Batata Vada (2pc)",
			price: "₹30",
			img: vada,
			category: "Veg Snacks",
		},
		{
			name: "Veg Manchurian (6pc)",
			price: "₹40",
			img: manchu,
			category: "Veg Snacks",
		},
		{
			name: "Idli (3pc)",
			price: "₹40",
			img: idli,
			category: "Veg Meals",
		},
		{
			name: "Appe (6pc)",
			price: "₹40",
			img: appe,
			category: "Veg Meals",
		},
		{
			name: "Medu Vada (3pc)",
			price: "₹50",
			img: mvada,
			category: "Veg Meals",
		},
		{
			name: "Dal Vada (2pc)",
			price: "₹20",
			img: dalvada,
			category: "Veg Meals",
		},
		{
			name: "Dosa (3pc)",
			price: "₹40",
			img: dosa,
			category: "Veg Meals",
		},
		{
			name: "Chicken Cutlet (2pc)",
			price: "₹80",
			img: cultet,
			category: "Non Veg Snacks",
		},
		{
			name: "Chicken Spring Roll (2pc)",
			price: "₹60",
			img: croll,
			category: "Non Veg Snacks",
		},
		{
			name: "Chicken 65",
			price: "₹120",
			img: c65,
			category: "Non Veg Snacks",
		},
		{
			name: "Unniappam (8pc)",
			price: "₹40",
			img: unni,
			category: "Tea Time Snacks",
		},
		{
			name: "Achappam (8pc)",
			price: "₹80",
			img: achha,
			category: "Tea Time Snacks",
		},
		{
			name: "Kuzhalappam (8pc)",
			price: "₹60",
			img: kuzha,
			category: "Tea Time Snacks",
		},
		{
			name: "Idli Podi",
			price: "₹20",
			img: podi,
			category: "Masalas",
		},
		{
			name: "Sambar Powder",
			price: "₹30",
			img: sambar,
			category: "Masalas",
		},
	];

	// Filter menu items based on the selected category
	const filteredItems =
		selectedCategory === "All"
			? menuItems
			: menuItems.filter((item) => item.category === selectedCategory);

	return (
		<div className="menu">
			<div className="menu-filter">
				<button
					onClick={() => setSelectedCategory("All")}
					className={`filter-button ${
						selectedCategory === "All" ? "active" : ""
					}`}
				>
					All
				</button>
				<button
					onClick={() => setSelectedCategory("Veg Snacks")}
					className={`filter-button ${
						selectedCategory === "Veg Snacks" ? "active" : ""
					}`}
				>
					Veg Snacks
				</button>
				<button
					onClick={() => setSelectedCategory("Non Veg Snacks")}
					className={`filter-button ${
						selectedCategory === "Non Veg Snacks" ? "active" : ""
					}`}
				>
					Non Veg Snacks
				</button>
				<button
					onClick={() => setSelectedCategory("Veg Meals")}
					className={`filter-button ${
						selectedCategory === "Veg Meals" ? "active" : ""
					}`}
				>
					Veg Meals
				</button>
				<button
					onClick={() => setSelectedCategory("Tea Time Snacks")}
					className={`filter-button ${
						selectedCategory === "Tea Time Snacks" ? "active" : ""
					}`}
				>
					Tea Time Snacks
				</button>
				<button
					onClick={() => setSelectedCategory("Masalas")}
					className={`filter-button ${
						selectedCategory === "Masalas" ? "active" : ""
					}`}
				>
					Masalas
				</button>
			</div>

			<div className="menu-grid">
				{filteredItems.map((item, index) => (
					<div className="menu-item" key={index}>
						<img src={item.img} alt={item.name} className="menu-image" />
						<h3 className="menu-name">{item.name}</h3>
						<p className="menu-price">{item.price}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Menu;
