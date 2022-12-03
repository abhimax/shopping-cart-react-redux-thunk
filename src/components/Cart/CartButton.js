import classes from './CartButton.module.css';

const CartButton = (props) => {
  return (
    <button className={classes.button} onClick={props.onCartClick}>
      <span>My Cart</span>
      <span className={classes.badge}>{props.quantity}</span>
    </button>
  );
};

export default CartButton;
