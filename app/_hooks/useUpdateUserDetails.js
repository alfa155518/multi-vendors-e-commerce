import { useState } from "react";

export default function useUpdateUserDetails(
  name,
  email,
  photo,
  role,
  token,
  setLoading,
  UpdateDetails
) {
  const [formData, setFormData] = useState({
    name,
    email,
    role,
    photo,
  });

  // Handle changes in the input fields
  const handleChangeBasicDetails = (e) => {
    const { name, value, files } = e.target;
    if (name === "photo") {
      handleFileChange(files);
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

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

  const validateFile = (file) => {
    return file.type.startsWith("image/") && file.size <= 5 * 1024 * 1024; // Allow only image files of size <= 5MB
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await UpdateDetails(formData, token, setLoading);
  };
  return {
    handleChangeBasicDetails,
    handleSubmit,
  };
}
