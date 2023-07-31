import React from 'react';
import style from './Sort.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { setSort } from '../../redux/slices/filterSlice';

const list = [
   { name: 'Популярності', sortProperty: 'raiting' },
   { name: 'Ціні', sortProperty: 'price' },
   { name: 'Алфавіту', sortProperty: 'title' },
];

const Sort = () => {
   const [open, setOpen] = React.useState(false);

   const sort = useSelector((state) => state.filterSlice.sort);
   const dispatch = useDispatch();

   const onClickListCloseItem = (obj) => {
      dispatch(setSort(obj));
      setOpen(false);
   };


   return (
      <div className={style.sortt}>
         <div className={style.sortt__label}>
            <b>Сортування по:</b>
            <span onClick={() => setOpen(!open)}>{sort.name}</span>
         </div>
         {open && (
            <div className={style.sortt__popup}>
               <ul>
                  {list.map((val, id) => (
                     <li
                        key={id}
                        onClick={() => onClickListCloseItem(val)}
                        className={sort.sortProperty === val.sortProperty ? style.active : ''}
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
