import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../../redux/actions";
import {
  CartWrapper,
  CartTitle,
  CartList,
  CartItem,
  CartDetails,
  CartButton,
  TotalPrice,
} from "./CartPage.styled";

const CartPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Хук для навігації
  const cartItems = useSelector((state) => state.cart);

  const handleRemove = (cartId) => {
    dispatch(removeFromCart(cartId));
  };

  const handleIncrease = (cartId) => {
    dispatch(increaseQuantity(cartId));
  };

  const handleDecrease = (cartId) => {
    dispatch(decreaseQuantity(cartId));
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleProceedToCheckout = () => {
    navigate("/checkout"); // Перенаправлення на сторінку Checkout
  };

  return (
    <CartWrapper>
      <CartTitle>
        <h1>Shopping Cart</h1>
      </CartTitle>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <CartList>
          {cartItems.map((item) => (
            <CartItem key={item.cartId}>
              <CartDetails>
                <h2>{item.name}</h2>
                <p>Price: ${item.price}</p>
                <p>Size: {item.size}</p>
                <p>Quantity: {item.quantity}</p>
              </CartDetails>
              <div>
                <CartButton onClick={() => handleIncrease(item.cartId)}>Increase</CartButton>
                <CartButton onClick={() => handleDecrease(item.cartId)}>Decrease</CartButton>
                <CartButton onClick={() => handleRemove(item.cartId)}>Remove</CartButton>
              </div>
            </CartItem>
          ))}
        </CartList>
      )}
      <TotalPrice>
        <h3>Total: ${calculateTotal()}</h3>
        {cartItems.length > 0 && (
          <CartButton onClick={handleProceedToCheckout}>Proceed to Checkout</CartButton>
        )}
      </TotalPrice>
    </CartWrapper>
  );
};

export default CartPage;
