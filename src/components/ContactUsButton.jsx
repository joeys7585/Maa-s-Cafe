import React, { useState } from "react";
import {
	FaPhoneAlt,
	FaEnvelope,
	FaWhatsapp,
	FaMapMarkedAlt,
	FaPlus,
} from "react-icons/fa"; // Using react-icons for icons
import "./ContactUsButton.css";

const ContactUsButton = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className="contact-us-container">
			<div
				className={`contact-us-button ${isOpen ? "active" : ""}`}
				onClick={toggleMenu}
			>
				<span className="contact-us-icon">
					<FaPlus /> {/* Placeholder icon for main button */}
				</span>
			</div>

			<div className={`contact-options ${isOpen ? "show" : ""}`}>
				<a
					href="tel:+918097011945"
					target="_blank"
					rel="noopener noreferrer"
					className="contact-option"
				>
					<FaPhoneAlt /> {/* Placeholder for Call icon */}
				</a>
				<a
					href="mailto:joecasillas001@gmail.com"
					target="_blank"
					rel="noopener noreferrer"
					className="contact-option"
				>
					<FaEnvelope /> {/* Placeholder for Email icon */}
				</a>
				<a
					href="https://wa.me/+918097011945"
					target="_blank"
					rel="noopener noreferrer"
					className="contact-option"
				>
					<FaWhatsapp /> {/* Placeholder for WhatsApp icon */}
				</a>
				<a
					href="https://maps.app.goo.gl/M9Z4QsBCn5cKPKPU6"
					target="_blank"
					rel="noopener noreferrer"
					className="contact-option"
				>
					<FaMapMarkedAlt /> {/* Placeholder for Google Maps icon */}
				</a>
			</div>
		</div>
	);
};

export default ContactUsButton;
