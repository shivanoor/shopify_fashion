import React, { useState } from "react";
import "./Navbar.scss";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Cart from "../Cart/Cart";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Navbar = () => {
	const [openCart, setOpenCart] = useState(false);

	const productsInCart = useSelector((state) => state.cart.products);
	return (
		<div className="navbar">
			<div className="wrapper">
				<div className="left">
					<div className="logo">
						<span>LOGO</span>
					</div>
					<Link to="/products/2" className="link category">
						<span id>MEN</span>
						<ArrowDropDownIcon className="arrow" />
					</Link>
					<Link to="/products/3" className="link category">
						<span id>WOMEN</span>
						<ArrowDropDownIcon className="arrow" />
					</Link>
				</div>
				<div className="center">
					<h2>SHOPIFY</h2>
				</div>
				<div className="right">
					<Link className="link" to = "/">HOME</Link>
					<Link className="link" to = "/about">ABOUT US</Link>
					<Link className="link" to = "/contact">CONTACT</Link>
					<div className="cart-icon" onClick={() => setOpenCart(!openCart)}>
						<ShoppingCartOutlinedIcon />
						<span className="noOfItemsInCart">{productsInCart.length}</span>
					</div>
				</div>
			</div>
			{openCart && <Cart />}
		</div>
	);
};

export default Navbar;
