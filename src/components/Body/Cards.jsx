import style from './Cards.module.scss';
import React from 'react';

const Cards = (props) => {
   //! при натисканні на кнопку бачимо як добавляється значення
   const [countOfPizza, setCountOfPizza] = React.useState(0);
   const changeCountOfPizza = () => {
      setCountOfPizza(countOfPizza + 1);
   };
   //__________________________________________________________//
   const type = ['тонка', 'класична'];

   //! цей стейт слугує що коли при натискані на кнопку вибору грубини піци кнопка стає активною(білою)
   const [selectPizzaRude, setSelectPizzaRude] = React.useState(0);
   //__________________________________________________________//

   //! цей стейт слугує що коли при натискані на кнопку вибору розміру піци кнопка стає активною(білою)
   const [selectPizzaSize, setSelectPizzaSize] = React.useState(0);
   //__________________________________________________________//
   return (
      <div className={style.card}>
         <div>
            <img src={props.imageUrl} alt="img" className={style.card__img} />
         </div>
         <p className={style.card__name}>{props.title}</p>
         <div className={style.card__btn}>
            <div className={style.card__btn_choose}>
               {props.types.map((val) => (
                  <button
                     key={val}
                     onClick={() => setSelectPizzaRude(val)}
                     className={selectPizzaRude === val ? style.active : ''}
                  >
                     {type[val]}
                  </button>
               ))}
            </div>
            <div className={style.card__btn_size}>
               {props.sizes.map((val, id) => (
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
            <p style={{ fontSize: '22px', fontWeight: '600' }}>{props.price} грн</p>
            <button onClick={changeCountOfPizza}>
               + Добавити <span>{countOfPizza}</span>
            </button>
         </div>
      </div>
   );
};

export default Cards;
