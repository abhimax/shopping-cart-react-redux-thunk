import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification';
import { uiAction } from './store/ui-slice';
let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const showCart = useSelector( state => state.ui.isCartVisible);
  const cart = useSelector(state => state.cart);
  const notification = useSelector(state => state.ui.notification);

  useEffect(()=>{
    const sendCardData = async () => {
      dispatch(uiAction.showNotification({
        status : 'pending',
        title: 'Sending...',
        message: 'Sending card data!'
      }));
    const response = await fetch('https://movie-http-c62a0-default-rtdb.firebaseio.com/cart.json',{
      method: 'PUT',
      body: JSON.stringify(cart),
    });

    if( !response.ok){
      throw new Error('Sending card Data Failed.');
    }

    dispatch(uiAction.showNotification({
      status : 'success',
      title: 'Success!',
      message: 'Sent card data successfully!'
    }));
  };

  if (isInitial) {
    isInitial = false;
    return;
  }
    sendCardData().catch( error => {
      dispatch(uiAction.showNotification({
        status : 'error',
        title: 'Error!',
        message: 'Sent card data failed!'
      }))
    });
    
  },[cart]);
  return (
    <>
    { notification && <Notification status={notification.status} title={notification.title} message={notification.message}/>}
    <Layout>
    { showCart && <Cart />}
    <Products />
  </Layout>
  </>
  );
}

export default App;
