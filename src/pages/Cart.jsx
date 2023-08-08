import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import s from './Cart.module.scss';
import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem/CartItem';
import { clearItems } from '../redux/slices/cartSlice';
import EmptyCart from '../components/EmptyCart/EmptyCart';

const Cart = () => {
   const dispatch = useDispatch();
   const { totalPrice, items } = useSelector((state) => state.cartSlice);
   const clearCart = () => {
      if (window.confirm('Ви дійсно хочете видалити усі товари з корзини ?')) {
         dispatch(clearItems());
      }
   };
   const totalCount = items.reduce((sum, items) => sum + items.count, 0);

   if(!totalCount){
      return <EmptyCart></EmptyCart>
   }


   return (
      <div className={s.container}>
         <div className={s.container__head}>
            <div className={s.container__left}>
               <div>
                  <img src="./images/cart/shopping_cart.svg" alt="shopping_cart" />
               </div>
               <h2>Кошик</h2>
            </div>
            <div className={s.container__right} onClick={clearCart}>
               <div>
                  <img src="./images/cart/trash.svg" alt="trash" />
               </div>
               <span>Очистити кошик</span>
            </div>
         </div>
         <div className={s.body}>
            {items.map((items) => (
               <CartItem key={items.id} {...items} />
            ))}
         </div>
         <div className={s.footer}>
            <div className={s.footer__text}>
               <p>
                  Всього піц: <span style={{ fontWeight: 700 }}>{totalCount} шт</span>
               </p>
               <p>
                  Загальна сума <span style={{ color: '#FE5F1E' }}>{totalPrice} грн</span>
               </p>
            </div>
            <div className={s.footer__btn}>
               <Link to={'/'}>
                  <div>
                     <button className={s.black_btn}>Назад</button>
                  </div>
               </Link>
               <div>
                  <button className={s.yellow_btn}>Оплатити</button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Cart;
