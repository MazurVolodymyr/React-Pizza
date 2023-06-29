import React from 'react';
import style from './Sort.module.scss';
const Sort = () => {
   const [open, setOpen] = React.useState(false);
   const [selected, setSelected] = React.useState(0);
   const list = ['Популярності', 'Ціні', 'Алфавіту'];

   const onClickListClose = (id) => {
      setSelected(id);
      setOpen(false);
   };
   return (
      <div className={style.sortt}>
         <div className={style.sortt__label}>
            <b>Сортування по:</b>
            <span onClick={() => setOpen(!open)}>{list[selected]}</span>
         </div>
         {open && (
            <div className={style.sortt__popup}>
               <ul>
                  {list.map((val, id) => (
                     <li
                        key={id}
                        onClick={() => onClickListClose(id)}
                        className={selected === id ? style.active : ''}
                     >
                        {val}
                     </li>
                  ))}
               </ul>
            </div>
         )}
      </div>
   );
};

export default Sort;
