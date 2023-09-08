import React from "react";
import "./Footer.scss";
const Footer = () => {
	return (
		<div className="footer">
			<div className="container">
				<div className="top">
					<div className="item">
						<h3>CATEGORIES</h3>
						<span>MEN</span>
						<span>WOMEN</span>
						<span>SHOES</span>
						<span>ACCESSORIES</span>
						<span>NEW ARRIVALS</span>
					</div>
					<div className="item">
						<h3>LINKS</h3>
						<span>FAQ</span>
						<span>PAGES</span>
						<span>STORES</span>
						<span>COOKIES</span>
					</div>
					<div className="item">
						<h3>TOP brands</h3>
						<span>ADIDAs</span>
						<span>zara</span>
						<span>bata</span>
						<span>lookmark</span>
						<span>nike</span>
						<span>campus</span>
					</div>
					<div className="item">
						<h3>About US</h3>
						<p>
							shopify Fashion is making every effort to bring sustainable fashion
							into the limelight through its special edit -The Responsible
							Collection. It features a mix of sustainability-focused labels
							from both popular and upcoming labels. 
						</p>
					</div>
				</div>
				<div className="bottom">
					<div className="left">
						<h2>SHOPIFY</h2>
					</div>
					<div className="right">
						<span>
							&copy;<i>shopify.com </i>ALL RIGHTS RESERVED 2023.
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
