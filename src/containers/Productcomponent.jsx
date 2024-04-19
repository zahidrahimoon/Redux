import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { AiOutlineShoppingCart } from 'react-icons/ai';

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;
    return (
      <>
    <div className="product-card" key={id}>
  <Link to={`/product/${id}`} className="product-link">
    <div className="product-image">
      <img src={image} alt={title} />
    </div>
    <div className="product-content">
      <div className="product-title">{title}</div>
      <div className="product-meta price">$ {price}</div>
      <div className="product-meta" id="shopiconcat">
        <span>{category}</span>
        <Link to={`/product/${id}`} className="shopping-icon-link">
          <AiOutlineShoppingCart className="shopping-icon" />
        </Link>
      </div>
    </div>
  </Link>
</div>

      </>
    );
  });
  return <>{renderList}</>;
};

export default ProductComponent;
