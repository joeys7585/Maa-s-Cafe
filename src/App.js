import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import ContactUsButton from "./components/ContactUsButton";

const App = () => {
	return (
		<Router>
			<Navbar /> {/* Add the navbar here */}
			<TransitionGroup>
				<Routes>
					<Route
						path="/"
						element={
							<CSSTransition timeout={500} classNames="fade" key="home">
								<Home />
							</CSSTransition>
						}
					/>
					<Route
						path="/about-us"
						element={
							<CSSTransition timeout={500} classNames="fade" key="about-us">
								<AboutUs />
							</CSSTransition>
						}
					/>
					<Route
						path="/menu"
						element={
							<CSSTransition timeout={500} classNames="fade" key="menu">
								<Menu />
							</CSSTransition>
						}
					/>
				</Routes>
			</TransitionGroup>
			<div>
				{/* Your other components */}
				<ContactUsButton />
			</div>
		</Router>
	);
};

export default App;
