import style from './Selection.module.scss';
import React from 'react';
import Sort from '../Sort/Sort';

const Selection = (props) => {
   const categories = ['Всі', "М'ясні", 'Гриль', 'Гострі', 'Сирні'];
   const valueSort = props.valueSort;
   const onChangeSort = props.onChangeSort;
   return (
      <div className={style.flex_contain}>
         <ul>
            {categories.map((categoryName, id) => (
               <li
                  key={id}
                  onClick={() => props.onClickCategory(id)}
                  className={props.value === id ? style.active : ''}
               >
                  {categoryName}
               </li>
            ))}
         </ul>
         <div>
            <Sort value={valueSort} onChangeSort={(i) => onChangeSort(i)}></Sort>
         </div>
      </div>
   );
};

export default Selection;
