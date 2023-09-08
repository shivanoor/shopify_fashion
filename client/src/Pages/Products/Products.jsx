import React, { useState } from "react";
import { useParams } from "react-router-dom";
import List from "../../components/List/List";
import useFetch from "../../hooks/useFetch";
import "./Products.scss";
import menImg from "../../assets/products/cover_men.jpg";
import womenImg from "../../assets/products/cover_women.jpg";
const Products = () => {
	const catId = parseInt(useParams().id);
	const [maxPrice, setMaxPrice] = useState(1000);
	const [sort, setSort] = useState(null);
	const [selectedSubCategories, setSelectedSubCategories] = useState([]);
	const coverImages = [menImg, womenImg, menImg, womenImg];
	const { data, loading, error } = useFetch(
		`/sub-categories?[filters][categories][id][$eq]=${catId}`
	);
	const handleChange = (e) => {
		const value = e.target.value;
		const isChecked = e.target.checked;

		setSelectedSubCategories(
			isChecked
				? [...selectedSubCategories, value]
				: selectedSubCategories.filter((item) => item !== value)
		);
	};
	return (
		<div className="products">
			<div className="left">
				<div className="filter-item">
					<h4>Product Categories</h4>
					{data?.map((item) => (
						<div className="inputItem" key={item?.id}>
							<input
								type="checkbox"
								name=""
								id={item?.id}
								value={item?.id}
								onChange={handleChange}
							/>
							<label htmlFor={item?.id}>{item?.attributes.title}</label>
						</div>
					))}
				</div>
				<div className="filter-item">
					<h4>Filter BY price</h4>
					<div className="inputItem">
						<span>0</span>
						<input
							type="range"
							name=""
							id=""
							min={0}
							max={100}
							onChange={(e) => setMaxPrice(e.target.value)}
						/>
						<span>{maxPrice}</span>
					</div>
				</div>
				<div className="filter-item">
					<h4>Sort by</h4>
					<div className="inputItem">
						<input
							type="radio"
							name="price"
							id="asc"
							value="asc"
							onChange={(e) => setSort("asc")}
						/>
						<label htmlFor="asc"> Price (Lowest First)</label>
					</div>
					<div className="inputItem">
						<input
							type="radio"
							name="price"
							id="desc"
							value="desc"
							onChange={(e) => setSort("desc")}
						/>
						<label htmlFor="desc"> Price (Highest first)</label>
					</div>
				</div>
			</div>
			<div className="right">
				<img className="coverImage" src={coverImages[catId]} alt="" />
				<List
					catId={catId}
					maxPrice={maxPrice}
					sort={sort}
					subCats={selectedSubCategories}
				/>
			</div>
		</div>
	);
};

export default Products;
