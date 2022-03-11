import { useEffect } from "react";
import { useState } from "react";

const useProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://serene-plains-10501.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);
  return [products, setProducts];
};

export default useProducts;
