import { useDispatch, useSelector } from 'react-redux';
//import { cartActions } from '../../store/cart-slice';
import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {
  const dispatch = useDispatch();
  //const itemQty = useSelector( state => state.cart.qty);
  // const onDecrementHandler = () => {
  //   dispatch(cartActions.decreaseQty());
  // };
  // const onIncrementHandler = () => {
  //   dispatch(cartActions.increaseQty());
  // }; 
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        <CartItem
          item={{ title: 'Test Item', quantity: 3, total: 18, price: 6 }}
        />
      </ul>
    </Card>
  );
};

export default Cart;
