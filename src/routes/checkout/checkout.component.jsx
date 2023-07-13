import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import CheckoutItem from "../../components/checkout-item/checkout-item";

import {
  CheckoutContainer,
  CheckoutHeader,
  CheckoutHeaderContainer,
  CheckoutTotal,
} from "./checkout.styles.jsx";

function Checkout() {
  const { cartItems, cartTotal } = useContext(CartContext);
  return (
    <CheckoutContainer>
      <CheckoutHeaderContainer>
        <CheckoutHeader>
          <span>Product</span>
        </CheckoutHeader>
        <CheckoutHeader>
          <span>Description</span>
        </CheckoutHeader>
        <CheckoutHeader>
          <span>Quantity</span>
        </CheckoutHeader>
        <CheckoutHeader>
          <span>Price</span>
        </CheckoutHeader>
        <CheckoutHeader>
          <span>Remove</span>
        </CheckoutHeader>
      </CheckoutHeaderContainer>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <CheckoutTotal>${cartTotal}</CheckoutTotal>
    </CheckoutContainer>
  );
}

export default Checkout;
