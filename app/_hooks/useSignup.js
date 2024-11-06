import { useState } from "react";
import SingUpUser from "@/app/actions/SingUpUser";
import Notification from "@/app/_components/Notification";

const useSignUp = () => {
  // State to hold form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    photo: null,
    role: "",
  });
  console.log(formData.role);
  // State to manage loading status
  const [loading, setLoading] = useState(false);

  // Handle changes in the input fields
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "photo") {
      handleFileChange(files);
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  // Handle file input changes
  const handleFileChange = (files) => {
    if (files.length > 0) {
      const file = files[0];
      if (validateFile(file)) {
        setFormData((prev) => ({ ...prev, photo: file }));
      } else {
        Notification(
          "error",
          "Image Not Uploaded",
          "Photo Upload Failed because size is very large"
        );
      }
    }
  };

  // Validate the selected file for type and size
  const validateFile = (file) => {
    return file.type.startsWith("image/") && file.size <= 5 * 1024 * 1024; // Allow only image files of size <= 5MB
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await SingUpUser(formData, setLoading, setFormData);
    } catch (error) {
      setError("An error occurred during sign up. Please try again.");
    }
  };

  // Get class name based on input validity
  const getInputClass = (value) => {
    return value ? "input-valid" : "input-invalid";
  };

  return {
    getInputClass,
    handleSubmit,
    formData,
    handleChange,
    loading,
  };
};

export default useSignUp;
