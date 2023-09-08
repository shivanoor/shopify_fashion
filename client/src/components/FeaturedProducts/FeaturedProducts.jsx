import "./FeaturedProducts.scss";
import Card from "../Card/Card";
import useFetch from "../../hooks/useFetch";
const FeaturedProducts = ({ type }) => {
	const { data, loading, error } = useFetch(
		`/products?populate=*&[filters][type][$eq]=${type}`
	);
	const desc = [
		`🌟 Discover Our Featured Fashion Picks 🌟
		Elevate your style game with
					our handpicked selection of the latest and trendiest fashion
					must-haves. At [shopify], we're passionate about curating the perfect
					wardrobe for fashion-forward individuals like you. Our featured
					products are carefully chosen to bring you the best in fashion, from
					timeless classics to cutting-edge designs. Explore our top picks and
					step into a world of limitless style possibilities.`,
		`🌟 Trending Fashion Must-Haves 🌟

Stay ahead of the fashion curve with our handpicked selection of the hottest and most sought-after trends. At [Your Fashion Website Name], we keep our fingers on the pulse of the fashion world to bring you the latest and most stylish products that are making waves. Explore our trending products and embrace the freshest looks of the season.`,
	];

	return (
		<div className="featuredProducts">
			<div className="top">
				<h2>{type} Products</h2>
				<div className="info">{type === "featured" ? desc[0] : desc[1]}</div>
			</div>
			<div className="bottom">
				{loading ? <></> : data?.map((item) => <Card item={item} />)}
			</div>
		</div>
	);
};

export default FeaturedProducts;
