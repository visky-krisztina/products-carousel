/* eslint-disable react/prop-types */
import "../styles/modal.styles.css";
import { FaShoppingCart } from "react-icons/fa";

const Modal = ({ isOpen, onClose, product }) => {
	if (!isOpen) return null;

	return (
		<div className='modal-overlay' onClick={onClose}>
			<div className='modal-content' onClick={(e) => e.stopPropagation()}>
				<button className='modal-close' onClick={onClose}>
					X
				</button>
				<div className='modal-body'>
					<div className='modal-image'>
						<img src={product.image} alt={product.name} />
					</div>
					<div className='modal-details'>
						<div className='next-to-each-other margins'>
							<h2 className='tag-styles'>Name: </h2>
							<h2 className='smaller'>{product.name}</h2>
						</div>
						<div className='next-to-each-other margins'>
							<h2 className='tag-styles'>Price: </h2>
							<div style={{ display: "flex", flexDirection: "column" }}>
								<div className='next-to-each-other' style={{ margin: "0.3rem 0" }}>
									<p className='p-style'>Original Price:</p>
									<p id='original-price' style={{ marginTop: "0.15rem" }}>
										{product.original_price}
									</p>
								</div>

								<div className='next-to-each-other margins'>
									<p className='p-style'>Discounted price: </p>
									<p id='discounted-price' style={{ marginTop: "-0.6rem" }}>
										{product.discounted_price}
									</p>
								</div>
							</div>
						</div>
						<div className='next-to-each-other margins'>
							<h2 className='tag-styles'>Description: </h2>
							<p style={{ fontSize: "0.9rem", paddingRight: "0.8rem" }}>
								Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
								industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
								scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
								into electronic typesetting, remaining essentially unchanged.
							</p>
						</div>
						<div className='next-to-each-other margins'>
							<h2 className='tag-styles'>Alcohol: </h2>

							<p className='p-style' style={{ marginTop: "0.3rem" }}>
								5.9%
							</p>
						</div>
						<button className='add-cart-modal'>
							<FaShoppingCart />
							<p id='cart-text'>Add to cart</p>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Modal;
