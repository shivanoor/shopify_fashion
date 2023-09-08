import React from "react";
import "./PageNotFound.scss";
import errorImgPage from "../../assets/404error.png";
import { Link } from "react-router-dom";
const PageNotFound = () => {
	return (
		<div className="PageNotFound">
			<img src={errorImgPage} alt="" />
			<Link to="/" className="link btn " id="home-btn">
				GO TO HOME
			</Link>
		</div>
	);
};

export default PageNotFound;
