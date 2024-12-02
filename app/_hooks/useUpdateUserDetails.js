import { useState } from "react";
import Notification from "../_components/Notification";

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
    photo: {
      url: photo?.url || "",
      publicId: photo?.publicId || "",
    },
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
        setFormData((prev) => ({
          ...prev,
          photo: {
            file, // Include the actual file
            url: "",
            publicId: "",
          },
        }));
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
    const updatedUser = await UpdateDetails(formData, token, setLoading);

    if (updatedUser) {
      setFormData((prev) => ({
        ...prev,
        ...updatedUser,
      }));
    }
  };

  return {
    handleChangeBasicDetails,
    handleSubmit,
  };
}
