import React, { useEffect, useState } from "react";
import "./Slider.scss";
import slider1 from "../../assets/HomePage/slider1.jpg";
import slider3 from "../../assets/HomePage/slider3.jpg";
import slider4 from "../../assets/HomePage/slider4.jpg";

const Slider = ({ timeGap }) => {
	const images = [slider1,slider3, slider4];
	const [currentIdx, setCurrentIdx] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentIdx((prevIndex) => (prevIndex + 1) % images.length);
		}, timeGap);
		return () => {
			clearInterval(interval);
		};
	}, [images, timeGap]);

	return (
		<div className="slider">
			<div className="container">
				<img src={images[currentIdx]} alt={`Image ${currentIdx + 1}`} />
			</div>
		</div>
	);
};

export default Slider;
