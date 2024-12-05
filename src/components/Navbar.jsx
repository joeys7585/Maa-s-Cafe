// src/components/Navbar.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"; // Ensure logo path is correct
import "./Navbar.css"; // Import the CSS for navbar

const Navbar = () => {
	const [isMenuOpen, setMenuOpen] = useState(false);

	const toggleMenu = () => {
		setMenuOpen(!isMenuOpen);
	};

	return (
		<nav className="navbar">
			<div className="navbar-container">
				<Link to="/" className="navbar-logo">
					<img src={logo} alt="Logo" className="navbar-logo-img" />
					<span className="navbar-business-name">Maa's Cafe</span>
				</Link>

				<div className={`navbar-links ${isMenuOpen ? "active" : ""}`}>
					<Link to="/" className="navbar-link">
						Home
					</Link>
					<Link to="/menu" className="navbar-link">
						Menu
					</Link>
					<Link to="/about-us" className="navbar-link">
						About Us
					</Link>
				</div>

				<div className="navbar-hamburger" onClick={toggleMenu}>
					<span className="hamburger-icon">&#9776;</span> {/* Hamburger icon */}
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
