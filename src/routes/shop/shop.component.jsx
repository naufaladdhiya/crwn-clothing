import { useContext } from 'react';
import './shop.styles.scss';

import { ProductsContext } from '../../components/contexts/products.context';
import ProductCard from '../../components/product-card/product-card.component';

const Shop = () => {
  const { products } = useContext(ProductsContext);
  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
};

export default Shop;
