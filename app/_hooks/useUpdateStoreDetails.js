import Cookies from "js-cookie";
import { updateStoreDetails } from "../actions/vendor";

export default function useUpdateStoreDetails(
  storeDetails,
  singleVendor,
  setLoading,
  Notification,
  setStoreDetails
) {
  // Handle change Input
  const handelChangeStoreDetails = (e) => {
    const { name, value } = e.target;
    setStoreDetails((prev) => ({ ...prev, [name]: value }));
  };

  // Submit Data
  const handelSubmitStoreDetails = async (
    e,
    tokenVendor,
    id = singleVendor._id
  ) => {
    e.preventDefault();
    setLoading(true);
    try {
      const data = await updateStoreDetails(
        storeDetails,
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
    handelChangeStoreDetails,
    handelSubmitStoreDetails,
  };
}
