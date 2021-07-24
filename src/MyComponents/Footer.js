import React from 'react'
import './main.css';
const Footer = () => {
let footerstyle={
	position:'relative',
	top:'100vh',
	width:'100%'
}
	return (
		<footer className="bg-dark text-light py-1" style={footerstyle}>
		<p className="text-center">copy Rights: nikhil patil</p>
		</footer>
		);

	}


export default Footer;
