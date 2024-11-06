import { useContext, useState } from "react";
import createVendor from "@/app/actions/createVendor";
import { UserContext } from "@/app/_context/usersManagement";
const useCreateVendor = () => {
  const { token } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    storeName: "",
    description: "",
    name: "",
    email: "",
    phone: "",
    country: "",
    storeLogo: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files && files.length > 0) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    createVendor(formData, token, setIsLoading, setFormData);
  };

  const getInputStyle = (value) => ({
    border: value ? "2px solid green" : "2px solid red",
    transition: "border-color 0.3s ease",
  });

  return [isLoading, handleSubmit, getInputStyle, handleChange, formData];
};

export default useCreateVendor;
