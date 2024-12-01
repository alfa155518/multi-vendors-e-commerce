import { useContext, useState } from "react";
import { addProduct } from "../actions/products";
import Notification from "@/app/_components/Notification";
import { ProductContext } from "@/app/_context/manageProducts";
const useAddProduct = () => {
  const { vendorToken } = useContext(ProductContext);
  const [loading, setLoading] = useState(false);

  //   State Of Data
  const [productData, setProductData] = useState({
    name: "",
    description: "",
    category: "",
    photo: null,
    price: 0,
    stock: 0,
  });

  // Save Data When Change Input Value
  const handleFormChange = (e) => {
    const { name, type } = e.target;

    if (type === "file") {
      const file = e.target.files[0];
      setProductData((prevData) => ({
        ...prevData,
        [name]: file,
      }));
    } else {
      const { value } = e.target;
      setProductData((prevData) => ({
        ...prevData,
        [name]: name === "price" || name === "stock" ? Number(value) : value,
      }));
    }
  };

  // Submit Function
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await addProduct(productData, vendorToken, Notification, setLoading);
    window.location.href = "/vendor/products";
  };

  return {
    productData,
    handleFormChange,
    handleFormSubmit,
    loading,
  };
};

export default useAddProduct;
