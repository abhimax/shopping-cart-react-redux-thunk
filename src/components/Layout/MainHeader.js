import { useDispatch, useSelector } from 'react-redux';
import { uiAction } from '../../store/ui-slice';
import CartButton from '../Cart/CartButton';
import classes from './MainHeader.module.css';

const MainHeader = (props) => {
  const dispatch = useDispatch();
  const onCartClickHandler = () => {
    dispatch(uiAction.toggle());
  }

  const qty = useSelector(state => state.cart.totalQuantity);
  return (
    <header className={classes.header}>
      <h1>ReduxCart</h1>
      <nav>
        <ul>
          <li>
            <CartButton onCartClick={onCartClickHandler} quantity={qty}/>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
