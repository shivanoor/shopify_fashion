import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";
import Products from "./Pages/Products/Products";
import Home from "./Pages/Home/Home";
import Product from "./Pages/Product/Product";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import PageNotFound from "./Pages/PageNotFound/PageNotFound";
import './app.scss';

const Layout = ()=>{
	return (<div className="app">
		<Navbar/>
		<Outlet/>
		<Footer/>
	</div>
	)
}


const router = createBrowserRouter([
	{
		path: "/",
		element:<Layout/>,
		children:[
			{
				path: '/',
				element:<Home/>
			},
			{
				path: '/products/:id',
				element:<Products/>
			},{
				path: '/product/:id',
				element:<Product/>
			},{
				path:'*',
				element:<PageNotFound/>
			}
		]
	},
]);


function App() {
	return (
		<div>
			<RouterProvider router={router} />
		</div>
	);
}

export default App;
