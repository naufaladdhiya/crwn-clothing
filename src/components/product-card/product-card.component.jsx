import { useContext } from "react";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

import {
  FooterProduct,
  ProductCardContainer,
  ProductName,
  ProductPrice,
} from "./product-card.styles.jsx";

import { CartContext } from "../../contexts/cart.context";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);
  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={`${name}`} />
      <FooterProduct>
        <ProductName>{name}</ProductName>
        <ProductPrice>{price}</ProductPrice>
      </FooterProduct>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCart}
      >
        Add to cart
      </Button>
    </ProductCardContainer>
  );
};

export default ProductCard;
