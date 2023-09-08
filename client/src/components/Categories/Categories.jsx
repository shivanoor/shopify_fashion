import React from "react";
import "./Categories.scss";
import { Link } from "react-router-dom";
import men from "../../assets/Categories/men.jpg";
import women from "../../assets/Categories/women.jpg";
import newseason from "../../assets/Categories/new.jpg";
import accessories from "../../assets/Categories/access.jpg";
import shoes from "../../assets/Categories/shoes.jpg";
import sale from "../../assets/Categories/sale.jpg";
const Categories = () => {
	return (
		<div className="categories">
			<div className="col">
				<div className="row">
					<img src={accessories} alt="" />
					<button>
						<Link className="link" to="/products/3">
							accessories
						</Link>
					</button>
				</div>
				<div className="row">
					<img src={shoes} alt="" />
					<button>
						<Link className="link" to="/products/3">
							shoes
						</Link>
					</button>
				</div>
			</div>
			<div className="col">
				<div className="row row-big">
					<img src={women} alt="" />
					<button>
						<Link className="link" to="/products/3">
							women
						</Link>
					</button>
				</div>
			</div>
			<div className="col col-big">
				<div className="row">
					<div className="col">
						<div className="row">
							<img src={newseason} alt="" />
							<button>
								<Link className="link" to="/products/2">
									Trending
								</Link>
							</button>
						</div>
					</div>
					<div className="col">
						<div className="row">
							<img src={men} alt="" />
							<button>
								<Link className="link" to="/products/2">
									men
								</Link>
							</button>
						</div>
					</div>
				</div>
				<div className="row">
					<img src={sale} alt="" />
					<button>
						<Link className="link" to="/products/2">
							sale
						</Link>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Categories;
