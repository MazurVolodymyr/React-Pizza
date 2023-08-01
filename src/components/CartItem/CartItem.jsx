import { useDispatch } from 'react-redux';
import { addItem, minusItem, removeItem } from '../../redux/slices/cartSlice';
import s from './CartItem.module.scss';

const CartItem = ({ id, title, imageUrl, price, count, type, size }) => {
   const dispatch = useDispatch();

   const onClickPlus = () => {
      dispatch(addItem({ id }));
   };
   const onClickMinus = () => {
      dispatch(minusItem(id));
   };
   const onClickDelete = () => {
      if (window.confirm('Ви точно хочете видалити товар з кошика ?')) {
         dispatch(removeItem(id));
      }
   };

   
   return (
      <div className={s.main}>
         <div className={s.main__left}>
            <div className={s.main__left_img}>
               <img src={imageUrl} alt="pizza" />
            </div>
            <div className={s.main__left_desc}>
               <h2>{title}</h2>
               <p>{type}, тісто {size} см</p>
            </div>
         </div>
         <div className={s.main__center}>
            <img src="./images/cart/minus.svg" alt="" onClick={onClickMinus} />
            <p className={s.main__center_p}> {count} </p>
            <img src="./images/cart/plus.svg" alt="" onClick={onClickPlus} />
         </div>
         <div className={s.main__right}>
            <p className={s.main__right_p}>{price} грн</p>
            <img src="./images/cart/cross.svg" alt="" onClick={onClickDelete} />
         </div>
      </div>
   );
};

export default CartItem;
