import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import s from './Cart.module.scss';
const Cart = () => {
   const dispatch = useDispatch();
   const items = useSelector((state) => state.cartSlice.items);

   return (
      <div className={s.container}>
         <div className={s.container__head}>
            <div className={s.container__left}>
               <div>
                  <img src="./images/cart/shopping_cart.svg" alt="shopping_cart" />
               </div>
               <h2>Кошик</h2>
            </div>
            <div className={s.container__right}>
               <div>
                  <img src="./images/cart/trash.svg" alt="trash" />
               </div>
               <span>Очистити кошик</span>
            </div>
         </div>
         <div className={s.body}>
            <h1>content</h1>
         </div>
         <div className={s.footer}>
            <div className={s.footer__text}>
               <p>Всього піц: <span style={{fontWeight: 700}}>3 шт</span></p>
               <p>Загальна сума <span style={{color: '#FE5F1E'}}>1000 грн</span></p>
            </div>
            <div className={s.footer__btn}>
               <div>
                  <button className={s.black_btn}>Назад</button>
               </div>
               <div>
                  <button className={s.yellow_btn}>Оплатити</button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Cart;
