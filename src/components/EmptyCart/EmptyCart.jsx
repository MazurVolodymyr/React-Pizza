import { Link } from 'react-router-dom';
import s from './EmptyCart.module.scss'
const EmptyCart = () => {
   return (
      <div className={s.wrap}>
         <h1>Кошик порожній</h1>
         <p>Можливо ви ще не замоволи піцу. Поверніться на головну щоб замовити піцу </p>
         <div>
            <img src="../images/cart/emptycart.svg" alt="emptycart" />
         </div>
         <Link to={'/'}>
            <button>Назад</button>
         </Link>
      </div>
   );
};

export default EmptyCart;
