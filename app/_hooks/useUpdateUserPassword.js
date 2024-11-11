import { useState } from "react";

const useUpdateUserPassword = (_id, token, setLoading, UpdatePassword) => {
  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChangePassword = (e) => {
    const { name, value } = e.target;
    setPasswordData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmitPassword = async (e) => {
    e.preventDefault();
    setLoading(true);
    await UpdatePassword(_id, token, passwordData, setLoading);
  };

  return { handleChangePassword, handleSubmitPassword, passwordData };
};

export default useUpdateUserPassword;
