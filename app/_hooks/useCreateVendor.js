import { useContext, useState } from "react";
import createVendor from "@/app/actions/createVendor";
import { UserContext } from "@/app/_context/usersManagement";
import { isValidPhoneNumber } from "react-phone-number-input";
import Notification from "../_components/Notification";

const useCreateVendor = () => {
  const { token } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(false);
  const [isValidPhone, setIsValidPhone] = useState(true);
  const [formData, setFormData] = useState({
    storeName: "",
    description: "",
    name: "",
    email: "",
    phone: "",
    country: "",
    storeLogo: "",
  });

  const handleChange = (name, value, event = null) => {
    if (name === "phone") {
      setIsValidPhone(value && isValidPhoneNumber(value));
      setFormData((prevData) => ({ ...prevData, phone: value }));
    } else if (event?.target?.files && event.target.files.length > 0) {
      setFormData((prevData) => ({
        ...prevData,
        [name]: event.target.files[0],
      }));
    } else {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isValidPhone) {
      Notification(
        "error",
        "Invalid phone number.",
        "Please enter a valid phone number"
      );
      return;
    }
    setIsLoading(true);
    await createVendor(formData, token, setIsLoading, setFormData);
    console.log(formData);
  };

  const getInputStyle = (value) => ({
    border: isValidPhone && value ? "2px solid green" : "2px solid red",
    transition: "border-color 0.3s ease",
  });

  return [isLoading, handleSubmit, getInputStyle, handleChange, formData];
};

export default useCreateVendor;
