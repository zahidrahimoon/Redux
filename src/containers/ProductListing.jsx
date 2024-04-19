import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/actions/productAction";
import ProductComponent from "./Productcomponent";
import { FaSpinner } from "react-icons/fa";
import Footer from "./Footer";

const ProductPage = () => {
  const [loading, setLoading] = useState(true);
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    setLoading(true);
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(setProducts(response.data));
    setLoading(false);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log("Products :", products);
  return (
    <>
    <div className="cards-pro">
      {loading ? (
        <div className="loading-container">
            <FaSpinner className="loading-icon" />
            <div>Loading...</div>
          </div>
      ) : (
        <ProductComponent />
      )}
    </div>
      <Footer />
      </>
  );
};

export default ProductPage;
