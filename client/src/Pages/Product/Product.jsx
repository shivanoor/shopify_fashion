import React, { useState } from "react";
import "./Product.scss";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import BalanceIcon from "@mui/icons-material/Balance";
import List from "../../components/List/List";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { ListItem } from "@mui/material";
import { useDispatch } from  "react-redux";
import { addToCart } from "../../redux/cartReducer";
const Product = () => {
	const productId = parseInt(useParams().id);
	const [idx, setIdx] = useState(0);
	const [quantity, setQuantity] = useState(1);
	const dispatch = useDispatch();
	const { data, loading, error } = useFetch(
		`/products/${productId}?populate=*`
	);
	return (
		<div className="product">
			{loading ? (
				"loading"
			) : (
				<>
					<div className="left">
						<div className="images">
							<img
								src={
									process.env.REACT_APP_UPLOAD_URL +
									data?.attributes?.img?.data?.attributes?.url
								}
								alt=""
								onClick={(e) => setIdx(0)}
							/>
							<img
								src={
									process.env.REACT_APP_UPLOAD_URL +
									data?.attributes?.img2?.data?.attributes?.url
								}
								alt=""
								onClick={(e) => setIdx(1)}
							/>
						</div>
						<div className="mainImg">
							{idx === 0 ? (
								<img
									src={
										process.env.REACT_APP_UPLOAD_URL +
										data?.attributes?.img?.data?.attributes?.url
									}
								/>
							) : (
								<img
									src={
										process.env.REACT_APP_UPLOAD_URL +
										data?.attributes?.img2.data?.attributes?.url
									}
								/>
							)}
						</div>
					</div>

					<div className="right">
						<h3>{data?.attributes?.title}</h3>
						<span class="price">${data?.attributes?.price}</span>
						<p>{data?.attributes?.desc}</p>
						<div className="quantity">
							<button
								className="btn"
								onClick={(e) =>
									setQuantity((prev) => (prev === 0 ? 0 : prev - 1))
								}
							>
								-
							</button>
							<span className="btn btn-light">{quantity}</span>
							<button
								className="btn"
								onClick={(e) => setQuantity((prev) => prev + 1)}
							>
								+
							</button>
						</div>
						<div>
							<button
								className="btn add-cart"
								onClick={() =>
									dispatch(
										addToCart({
											id: data.id,
											title: data.attributes.title,
											desc: data.attributes.description,
											price: data.attributes.price,
											img:
												data?.attributes?.img?.data?.attributes?.url,
											quantity,
										})
									)
								}
							>
								<AddShoppingCartIcon className="cart-icon" />
								ADD TO CArt
							</button>
						</div>
						<div className="icons">
							<div className="item">
								<FavoriteIcon className="icon" />
								ADD to wishlist
							</div>
							<div className="item">
								<BalanceIcon className="icon" /> add to compare
							</div>
						</div>
						<div className="info">
							<span>Vendor : {data?.attributes?.vendor}</span>
							<span>
								Product Type :{" "}
								{data?.attributes?.sub_categories?.data[0].attributes?.title}
							</span>
							<span>
								Tag : {data?.attributes?.categories?.data[0].attributes?.title}
							</span>
						</div>
						<hr />
						<div className="info">
							<h3>Description </h3>
							<span>{data?.attributes?.desc}</span>
							<h3>Additional Information </h3>
							<h3>FAQs</h3>
						</div>
					</div>
				</>
			)}
		</div>
	);
};

export default Product;
