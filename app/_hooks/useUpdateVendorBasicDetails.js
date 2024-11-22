import Cookies from "js-cookie";
import { updateVendorBasicDetails } from "../actions/vendor";

export default function useUpdateVendorDetails(
  vendorDetails,
  singleVendor,
  setLoading,
  Notification,
  setVendorDetails
) {
  // Handle change Input
  const handleChangeBasicDetails = (e) => {
    const { name, value } = e.target;
    setVendorDetails((prev) => ({ ...prev, [name]: value }));
  };

  // Submit Data
  const handleSubmitDetails = async (e, tokenVendor, id = singleVendor._id) => {
    e.preventDefault();
    setLoading(true);
    try {
      const data = await updateVendorBasicDetails(
        vendorDetails,
        tokenVendor,
        id,
        setLoading,
        Notification
      );
      Cookies.set("vendor", JSON.stringify(data.vendor), {
        sameSite: "Strict",
      });
    } catch (error) {
      console.log(error);
    }
  };
  return {
    handleChangeBasicDetails,
    handleSubmitDetails,
  };
}
