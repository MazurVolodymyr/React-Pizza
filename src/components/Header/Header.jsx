import style from './Header.module.scss';

const Header = () => {
   return (
      <div className={style.header}>
         <div className={style.header__left}>
            <div>
               <img src="./images/header/logo.png" alt="logo" style={{ marginRight: '20px' }} />
            </div>
            <div>
               <h2 className={style.header__left_h2}>Вінницька піца</h2>
               <p className={style.header__left_p}>найсмачніша піца в місті</p>
            </div>
         </div>
         <div className={style.header__right}>
            <div className={style.header__right_price}>320 грн</div>
            <div className={style.header__right_cart}>
               <div>
                  <img src="./images/header/cart.svg" alt="cart" style={{ marginRight: '8px' }} />
               </div>
               <div>3</div>
            </div>
         </div>
      </div>
   );
};

export default Header;
