import { useState } from "react";
import LoginUser from "@/app/actions/LoginUser";

const useLogin = () => {
  // State to hold form data (email and password)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  // Function to handle input changes in the form
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await LoginUser(formData, setLoading, setFormData);
    } catch (error) {
      console.log(error);
    }
  };

  // Function to determine the input class based on the value
  const getInputClass = (value) => {
    return value ? "input-valid" : "input-invalid";
  };

  return {
    formData,
    loading,
    handleChange,
    handleSubmit,
    getInputClass,
  };
};

export default useLogin; // Exporting the useLogin hook
