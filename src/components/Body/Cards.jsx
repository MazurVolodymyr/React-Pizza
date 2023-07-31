import style from './Cards.module.scss';
import React from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { addItem  } from '../../redux/slices/cartSlice';

const Cards = ({imageUrl, price, title,sizes,types, id}) => {
   //! при натисканні на кнопку бачимо як добавляється значення

   const cartItem = useSelector((state) => state.cartSlice.items.find((obj) => obj.id === id))
   const addedCount = cartItem ? cartItem.count : 0

   //__________________________________________________________//
   const typeNames = ['тонка', 'класична'];
   console.log(cartItem);
   //! цей стейт слугує що коли при натискані на кнопку вибору грубини піци кнопка стає активною(білою)
   const [selectPizzaRude, setSelectPizzaRude] = React.useState(0);
   //__________________________________________________________//

   //! цей стейт слугує що коли при натискані на кнопку вибору розміру піци кнопка стає активною(білою)
   const [selectPizzaSize, setSelectPizzaSize] = React.useState(0);
   //__________________________________________________________//
   const dispatch = useDispatch()

   const onClickAdd = () => {
      const item = {
         id,
         title,
         price,
         imageUrl,
         type: typeNames[selectPizzaRude] ,
         size: selectPizzaSize,
      };
      dispatch(addItem(item))
      
   };

   return (
      <div className={style.card}>
         <div>
            <img src={imageUrl} alt="img" className={style.card__img} />
         </div>
         <p className={style.card__name}>{title}</p>
         <div className={style.card__btn}>
            <div className={style.card__btn_choose}>
               {types.map((val) => (
                  <button
                     key={val}
                     onClick={() => setSelectPizzaRude(val)}
                     className={selectPizzaRude === val ? style.active : ''}
                  >
                     {typeNames[val]}
                  </button>
               ))}
            </div>
            <div className={style.card__btn_size}>
               {sizes.map((val, id) => (
                  <button
                     key={val}
                     onClick={() => setSelectPizzaSize(id)}
                     className={selectPizzaSize === id ? style.active : ''}
                  >
                     {val} см
                  </button>
               ))}
            </div>
         </div>
         <div className={style.card__price_plus}>
            <p style={{ fontSize: '22px', fontWeight: '600' }}>{price} грн</p>
            <button onClick={onClickAdd}>
               + Добавити {addedCount > 0 && <span>{addedCount}</span>}
            </button>
         </div>
      </div>
   );
};

export default Cards;
