import style from './Selection.module.scss';
import React from 'react';

const Selection = () => {
   //! при кліку на любу категорію вона стає в позицію вибраної категорії
   const [point, setPoint] = React.useState(0);
   const changeSetPoint = (index) => {
      setPoint(index);
   };

   const categories = ['Всі', "М'ясні", 'Гриль', 'Гострі', 'Сирні'];

   return (
      <div className={style.flex_contain}>
         <ul>
            {categories.map((value, id) => ( 
               <li onClick={() => changeSetPoint(id)} className={point === id ? style.active : ''}>
                  {value}
               </li>
            ))}
         </ul>
         <div>Сортування по: популярності</div>
      </div>
   );
};

export default Selection;
