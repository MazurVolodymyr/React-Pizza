import style from './Selection.module.scss';
import React from 'react';
import Sort from '../Sort/Sort';

const Selection = ({ onClickCategory, value }) => {
   const categories = ['Всі', "М'ясні", 'Гриль', 'Гострі', 'Сирні'];

   return (
      <div className={style.flex_contain}>
         <ul>
            {categories.map((categoryName, id) => (
               <li
                  key={id}
                  onClick={() => onClickCategory(id)}
                  className={value === id ? style.active : ''}
               >
                  {categoryName}
               </li>
            ))}
         </ul>
         <div>
            <Sort></Sort>
         </div>
      </div>
   );
};

export default Selection;
