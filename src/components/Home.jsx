import React from "react";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group"; // Import CSSTransition for animations
import "./Home.css";
import logo from "../assets/logo.png";

const Home = () => {
	return (
		<CSSTransition in={true} timeout={500} classNames="fade" appear>
			<div className="home">
				<header className="home-banner">
					<Link
						to="/about-us"
						className="logo-link"
						aria-label="Go to About Us"
					>
						<div className="logo-container">
							<img src={logo} alt="Maa's Cafe Logo" className="home-logo" />
							<p className="navigate-message">
								Click on the logo to learn more about us.
							</p>
						</div>
					</Link>
					<h1 className="home-title">Welcome to Maa's Cafe</h1>
					<p className="home-tagline">
						Savor the freshness of homemade food, made with love.
					</p>
					<Link to="/menu" className="cta-button">
						Explore Our Menu
					</Link>
				</header>
			</div>
		</CSSTransition>
	);
};

export default Home;
