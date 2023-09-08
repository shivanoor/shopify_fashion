import React from "react";
import "./Cart.scss";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeItem, resetCart } from "../../redux/cartReducer";

const Cart = () => {
	const productsInCart = useSelector((state) => state.cart.products);
	const dispatch = useDispatch();
	const totalPrice = () => {
		let total = 0;
		productsInCart.forEach((item) => (total += item.quantity * item.price));
		return total.toFixed(2);
	};
	return (
		<div className="cart">
			<h3>Products in your cart</h3>
			<div className="items">
				{productsInCart?.map((item) => (
					<div className="item" key={item.id}>
						<div>
							<img src={process.env.REACT_APP_UPLOAD_URL + item.img} alt="" />
						</div>
						<div className="details">
							<div>
								<h4>{item.title}</h4>
								<DeleteOutlinedIcon
									className="delete"
									onClick={() => dispatch(removeItem(item.id))}
								/>
							</div>
							<p>{item.desc?.substring(0, 100)}</p>
							<div className="price">
								{item.quantity} X ${item.newPrice}
							</div>
						</div>
					</div>
				))}
			</div>
			<div className="total">
				<span>Subtotal</span>
				<span>${totalPrice()}</span>
			</div>
			<button className="btn"> PRoceed to checkout</button>
			<span className="reset" onClick={() => dispatch(resetCart())}>
				reset cart
			</span>
		</div>
	);
};

export default Cart;
