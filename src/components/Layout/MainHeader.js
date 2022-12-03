import { useDispatch } from 'react-redux';
//import { cartActions } from '../../store/cart-slice';
import { uiAction } from '../../store/ui-slice';
import CartButton from '../Cart/CartButton';
import classes from './MainHeader.module.css';

const MainHeader = (props) => {
  const dispatch = useDispatch();
  const onCartClickHandler = () => {
    dispatch(uiAction.toggle());
  }
  return (
    <header className={classes.header}>
      <h1>ReduxCart</h1>
      <nav>
        <ul>
          <li>
            <CartButton onCartClick={onCartClickHandler}/>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
