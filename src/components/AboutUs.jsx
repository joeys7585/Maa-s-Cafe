import React from "react";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group"; // Import CSSTransition for animations
import "./AboutUs.css";
import logo from "../assets/logo.png";
import chef from "../assets/chef.png";

const AboutUs = () => {
	return (
		<CSSTransition in={true} timeout={500} classNames="fade" appear>
			<div className="about-us">
				<header className="about-us-banner">
					<Link to="/" className="logo-link" aria-label="Go to Home">
						<img src={logo} alt="Maa's Cafe Logo" className="home-logo" />
					</Link>
					<h1 className="about-us-title">About Us</h1>
					<p className="about-us-description">
						We are passionate about bringing the freshest, most delicious
						flavors to your plate.
					</p>
					<div className="chef-info">
						<img src={chef} alt="Chef" className="chef-photo" />
						<h3 className="chef-title">Laisa Baby</h3>
						<p className="chef-description">
							Our head chef with over 40 years of culinary experience.
						</p>
					</div>
				</header>
			</div>
		</CSSTransition>
	);
};

export default AboutUs;
