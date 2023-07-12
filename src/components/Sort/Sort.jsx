import React from 'react';
import style from './Sort.module.scss';
const Sort = (props) => {
   const [open, setOpen] = React.useState(false);
   const list = [
      { name: 'Популярності', sortProperty: 'raiting' },
      { name: 'Ціні', sortProperty: 'price' },
      { name: 'Алфавіту', sortProperty: 'title' },
   ];


   const onClickListClose = (id) => {
      props.onChangeSort(id);
      setOpen(false);
   };
   return (
      <div className={style.sortt}>
         <div className={style.sortt__label}>
            <b>Сортування по:</b>
            <span onClick={() => setOpen(!open)}>{props.value.name}</span>
         </div>
         {open && (
            <div className={style.sortt__popup}>
               <ul>
                  {list.map((val, id) => (
                     <li
                        key={id}
                        onClick={() => onClickListClose(val)}
                        className={props.value.sortProperty === val.sortProperty ? style.active : ''}
                     >
                        {val.name}
                     </li>
                  ))}
               </ul>
            </div>
         )}
      </div>
   );
};

export default Sort;
