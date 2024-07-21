/* eslint-disable react/prop-types */
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { FaHeart, FaRegHeart, FaExpandAlt, FaShoppingCart } from "react-icons/fa";
import { LuEuro } from "react-icons/lu";
import Modal from "./Modal";
import "swiper/swiper-bundle.css";
import "../styles/TwoProductsCarousel.styles.css";

const TwoProductsCarousel = ({ products }) => {
	const [liked, setLiked] = useState({});
	const [modalOpen, setModalOpen] = useState(false);
	const [selectedProduct, setSelectedProduct] = useState(null);

	const handleIconClick = (productId) => {
		setLiked((prevLiked) => ({
			...prevLiked,
			[productId]: !prevLiked[productId],
		}));
	};

	const openModal = (product) => {
		setSelectedProduct(product);
		setModalOpen(true);
	};

	const closeModal = () => {
		setModalOpen(false);
		setSelectedProduct(null);
	};

	// Split products into slides with 2 products each
	const slides = [];
	for (let i = 0; i < products.length; i += 2) {
		slides.push(products.slice(i, i + 2));
	}

	return (
		<main className='slider-main-container'>
			<Swiper
				modules={[Pagination, Navigation, Autoplay]}
				navigation={{ nextEl: ".custom-next-button", prevEl: ".custom-prev-button" }}
				pagination={{ clickable: true, dynamicBullets: true }}
				slidesPerView={1}
				spaceBetween={20}
				rewind={true}
				autoplay={{
					delay: 3500,
					disableOnInteraction: false,
				}}
				style={{
					"--swiper-pagination-color": "#b62f2f",
					"--swiper-pagination-bullet-size": "15px",
				}}
			>
				{slides.map((slide, index) => (
					<SwiperSlide key={index} className='slide'>
						<div className='slide-content'>
							{slide.map((product) => {
								const [mainTitle, ...restTitle] = product.name.split(" - ");
								return (
									<div key={product.id} className='card'>
										<div className='img-container'>
											<a href={product.link}>
												<img src={product.image} alt={product.name} />
											</a>
										</div>
										<div className='card-content'>
											<div className='icon-container'>
												<button className='card-icon' onClick={() => handleIconClick(product.id)}>
													{liked[product.id] ? <FaHeart className='icon' /> : <FaRegHeart className='icon' />}
												</button>
												<button className='card-icon' onClick={() => openModal(product)}>
													<FaExpandAlt className='icon' />
												</button>
											</div>
											<div className='product-info'>
												<h2 className='product-title'>{mainTitle}</h2>
												{restTitle.length > 0 && <h4 className='subtitle'>{restTitle.join(" - ")}</h4>}
												<div className='line'></div>
												<div className='product-price'>
													{product.discounted_price === null ? (
														<div>
															<div className='next-to-each-other'>
																<LuEuro id='reduced-euro-icon' />
																<p id='discounted-price'>{product.original_price}</p>
															</div>
															<p id='delivery'>Delivery in 1 - 3 days</p>
														</div>
													) : (
														<>
															<div className='next-to-each-other'>
																<LuEuro id='euro-icon' />
																<p id='original-price'>{product.original_price}</p>
															</div>
															<div className='next-to-each-other'>
																<>
																	<LuEuro id='reduced-euro-icon' />
																	<p id='discounted-price'>{product.discounted_price}</p>
																</>
																<p id='delivery'>Delivery in 1 - 3 days</p>
															</div>
														</>
													)}
												</div>
												<button className='add-cart'>
													<FaShoppingCart />
													<p id='cart-text'>Add to cart</p>
												</button>
											</div>
										</div>
									</div>
								);
							})}
						</div>
					</SwiperSlide>
				))}
			</Swiper>
			<div className='nav-btn custom-prev-button'>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 24 24'
					width='24'
					height='24'
					className='main-grid-item-icon'
					fill='none'
					stroke='#fff'
					strokeLinecap='round'
					strokeLinejoin='round'
					strokeWidth='2'
				>
					<line x1='19' x2='5' y1='12' y2='12' />
					<polyline points='12 19 5 12 12 5' />
				</svg>
			</div>
			<div className='nav-btn custom-next-button'>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 24 24'
					width='24'
					height='24'
					className='main-grid-item-icon'
					fill='none'
					stroke='#fff'
					strokeLinecap='round'
					strokeLinejoin='round'
					strokeWidth='2'
				>
					<line x1='5' x2='19' y1='12' y2='12' />
					<polyline points='12 5 19 12 12 19' />
				</svg>
			</div>
			{selectedProduct && <Modal isOpen={modalOpen} onClose={closeModal} product={selectedProduct} />}
		</main>
	);
};

export default TwoProductsCarousel;
