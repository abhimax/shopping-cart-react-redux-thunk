import { cartActions } from "./cart-slice";
import { uiAction } from "./ui-slice";

export const fetchCardData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://movie-http-c62a0-default-rtdb.firebaseio.com/cart.json"
      );
      const data = await response.json();

      if (!response.ok) {
        throw new Error("Cart data fetching error!");
      }
      return data;
    };

    try {
      const cartData = await fetchData();
      dispatch(cartActions.replaceCart({
        totalQuantity : cartData.totalQuantity,
        items : cartData.items || []
      }));
      dispatch(
        uiAction.showNotification({
          status: "success",
          title: "Success!",
          message: "Fetching cart data Success!",
        })
      );
    } catch (error) {
      dispatch(
        uiAction.showNotification({
          status: "error",
          title: "Error!",
          message: "Fetching cart data failed!",
        })
      );
    }
  };
};

export const sendCartData = (cart) => {
    return async (dispatch) => {
      dispatch(
        uiAction.showNotification({
          status: "pending",
          title: "Sending...",
          message: "Sending cart data!",
        })
      );
  
      const sendRequest = async () => {
        const response = await fetch(
          "https://movie-http-c62a0-default-rtdb.firebaseio.com/cart.json",
          {
            method: "PUT",
            body: JSON.stringify(cart),
          }
        );
  
        if (!response.ok) {
          throw new Error("Sending card Data Failed.");
        }
      };
      try {
        await sendRequest();
        dispatch(
          uiAction.showNotification({
            status: "success",
            title: "Success!",
            message: "Sent cart data successfully!",
          })
        );
      } catch (error) {
        dispatch(
          uiAction.showNotification({
            status: "error",
            title: "Error!",
            message: "Sent cart data failed!",
          })
        );
      }
    };
  };