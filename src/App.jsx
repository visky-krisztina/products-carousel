import Carousel from "./components/Carousel";
import TwoProductsCarousel from "./components/TwoProductsCarousel.jsx";
import { products } from "../products.js";

function App() {
	return (
		<div className='app'>
			<div className='section'>
				<TwoProductsCarousel products={products} />
			</div>
			<div className='section'>
				<Carousel products={products} />
			</div>
		</div>
	);
}

export default App;
