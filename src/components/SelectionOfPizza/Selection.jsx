import style from './Selection.module.scss';
import React from 'react';
import Sort from '../Sort/Sort';

const Selection = () => {
   //! при кліку на любу категорію вона стає в позицію вибраної категорії
   const [point, setPoint] = React.useState(0);
   //__________________________________________________________//

   const categories = ['Всі', "М'ясні", 'Гриль', 'Гострі', 'Сирні'];

   return (
      <div className={style.flex_contain}>
         <ul>
            {categories.map((value, id) => (
               <li
                  key={id}
                  onClick={() => setPoint(id)}
                  className={point === id ? style.active : ''}
               >
                  {value}
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
