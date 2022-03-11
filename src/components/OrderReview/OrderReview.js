import React from "react";
import useProducts from "../../hooks/useProducts";
import useCart from "../../hooks/useCart";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";
import { removeFromDb } from "../../utilities/fakedb";
import { useNavigate } from "react-router-dom";

const OrderReview = () => {
  const [cart, setCart] = useCart();
  const history = useNavigate();

  const handleRemove = (key) => {
    const newCart = cart.filter((product) => product.key !== key);
    setCart(newCart);
    removeFromDb(key);
  };

  const handlePlaceOrder = () => {
    // setCart([]);
    // clearTheCart();
    history("/shipping");
  };

  return (
    <div className="shop-container">
      <div className="product-container">
        {cart.map((product) => (
          <ReviewItem
            key={product.key}
            product={product}
            handleRemove={handleRemove}
          ></ReviewItem>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}>
          <button onClick={handlePlaceOrder} className="btn-regular">
            Go For Shipping
          </button>
        </Cart>
      </div>
    </div>
  );
};

export default OrderReview;
