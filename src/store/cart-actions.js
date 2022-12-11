import { uiAction } from "./ui-slice";
export const sendCartData = (cart) => {
    return async (dispatch) => {
      dispatch(
        uiAction.showNotification({
          status: "pending",
          title: "Sending...",
          message: "Sending card data!",
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
            message: "Sent card data successfully!",
          })
        );
      } catch (error) {
        dispatch(
          uiAction.showNotification({
            status: "error",
            title: "Error!",
            message: "Sent card data failed!",
          })
        );
      }
    };
  };