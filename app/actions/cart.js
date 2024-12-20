const Api = process.env.NEXT_PUBLIC_API_URL;

// all PRoduct From Cart
export async function productsInCart(userToken, setLoading, Notification) {
  try {
    setLoading(true);
    const res = await fetch(`${Api}/cart`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userToken}`,
      },
      next: {
        revalidate: 1,
      },
    });

    const data = await res.json();

    if (res.ok) {
      return data;
    } else {
      Notification("error", "Fail", data.message);
      return [];
    }
  } catch (error) {
    return [];
  } finally {
    setLoading(false);
  }
}

// Add Product To Cart
export async function addProductToCart(
  userToken,
  productId,
  Notification,
  setLoading
) {
  try {
    const res = await fetch(`${Api}/cart/${productId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userToken}`,
      },
      next: {
        revalidate: 1,
      },
    });

    const data = await res.json();

    if (res.ok) {
      Notification("success", "Done!!", "Product Add To Cart");
    } else {
      Notification("error", "Fail", data.message);
    }
    return data;
  } catch (error) {
    Notification("error", "Fail", error.message);
  } finally {
    setLoading(false);
  }
}

// Remove Product From Cart
export async function removeProductFromCart(
  userToken,
  productId,
  Notification,
  setLoading
) {
  try {
    setLoading(true);

    const res = await fetch(`${Api}/cart/${productId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userToken}`,
      },
      next: {
        revalidate: 1,
      },
    });

    const data = await res.json();

    if (res.ok) {
      Notification("success", "Done!!", "Product Removed From Cart");
    } else {
      Notification("error", "Fail", data.message);
    }
    return data;
  } catch (error) {
    Notification("error", "Fail", error.message);
  } finally {
    setLoading(false);
  }
}

// Plus Product Quantity
export async function plusProductQuantityInCart(
  userToken,
  productId,
  currentQuantity,
  Notification,
  setLoading
) {
  const updatedQuantity = currentQuantity + 1;
  try {
    setLoading(true);

    const res = await fetch(`${Api}/cart/${productId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userToken}`,
      },
      body: JSON.stringify({ quantity: updatedQuantity }),
      next: {
        revalidate: 1,
      },
    });

    const data = await res.json();
    if (res.ok) {
      return data;
    } else {
      Notification("error", "Fail", data.message);
      return;
    }
  } catch (error) {
    return;
  } finally {
    setLoading(false);
  }
}

// Minus Product Quantity
export async function minusProductQuantityInCart(
  userToken,
  productId,
  currentQuantity,
  Notification,
  setLoading
) {
  const updatedQuantity = currentQuantity - 1;
  try {
    setLoading(true);

    const res = await fetch(`${Api}/cart/${productId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userToken}`,
      },
      body: JSON.stringify({ quantity: updatedQuantity }),
      next: {
        revalidate: 1,
      },
    });

    const data = await res.json();
    if (res.ok) {
      return data;
    } else {
      Notification("error", "Fail", data.message);
      return;
    }
  } catch (error) {
    return;
  } finally {
    setLoading(false);
  }
}

// Proceed To Checkout
export async function proceedToCheckout(userToken, Notification) {
  try {
    const res = await fetch(`${Api}/payment`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userToken}`,
      },
      next: {
        revalidate: 1,
      },
    });

    const data = await res.json();
    if (res.ok) {
      Notification("success", "Done!!", "Orders Placed Successfully");
    } else {
      Notification("error", "Fail", data.message);
    }
    return data.url;
  } catch (error) {
    console.log(error);
    Notification("error", "Fail", error.message);
  }
}
