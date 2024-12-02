import { useContext, useEffect, useState } from "react";
import { ProductContext } from "@/app/_context/manageProducts";
import { updateProduct } from "@/app/actions/products";
export default function useUpdateProduct(productId) {
  const [isLoading, setIsLoading] = useState(false);
  const [product, setProduct] = useState({});
  const { singleProduct, Notification, vendorToken } =
    useContext(ProductContext);

  // Get Product Data
  useEffect(() => {
    async function getProduct(productId) {
      setIsLoading(true);
      const data = await singleProduct(productId, Notification);
      setProduct(data);
      setIsLoading(false);
    }
    if (productId) {
      getProduct(productId);
    }
  }, [productId, Notification, singleProduct]);

  // Add Default value For Product Data
  useEffect(() => {
    if (product) {
      setProductData({
        name: product.name || "",
        description: product.description || "",
        price: product.price || 0,
        stock: product.stock || 0,
        photo: {
          url: product.photo?.url || "",
          publicId: product.photo?.publicId || "",
        },
      });
    }
  }, [product]);

  // Product Data
  const { name, description, price, stock, photo } = product || {};
  const [productData, setProductData] = useState({
    name,
    description,
    price,
    stock,
    photo: {
      url: photo?.url,
      publicId: photo?.publicId,
    },
  });

  // Manage Input Change
  const handleFormChange = (e) => {
    const { name, type } = e.target;

    if (type === "file") {
      const file = e.target.files[0];
      if (file) {
        setProductData((prevData) => ({
          ...prevData,
          photo: {
            ...prevData.photo,
            file, // Temporary local file for uploading
          },
        }));
      }
    } else {
      const { value } = e.target;
      setProductData((prevData) => ({
        ...prevData,
        [name]: name === "price" || name === "stock" ? Number(value) : value,
      }));
    }
  };

  // Submit Data
  const handelFormSubmit = async (e) => {
    e.preventDefault();
    await updateProduct(
      productData,
      productId,
      vendorToken,
      setIsLoading,
      Notification
    );
  };

  return {
    isLoading,
    productData,
    setProductData,
    handleFormChange,
    handelFormSubmit,
  };
}
