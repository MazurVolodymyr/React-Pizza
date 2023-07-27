import React from 'react';
import style from './Search.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';

import debounce from 'lodash.debounce';
const Search = ({ setSearchValue }) => {
   const inputRef = React.useRef();

   const [value, setValue] = React.useState('')

   const updateSearchValue = React.useCallback(
      debounce((event)=>{
         setSearchValue(event);
      }, 300),
      [],
   )
   const onChangeInput = (event) =>{
      setValue(event.target.value)
      updateSearchValue(event.target.value)
   }

   return (
      <div className={style.search}>
         <input
            ref={inputRef}
            value={value}
            onChange={onChangeInput}
            type="text"
            placeholder="Пошук"
         />
         {value ? (
            <FontAwesomeIcon
               icon={faXmark}
               style={{ marginLeft: '10px', cursor: 'pointer' }}
               onClick={() => setValue('')}
            />
         ) : (
            <FontAwesomeIcon icon={faMagnifyingGlass} style={{ marginLeft: '10px' }} />
         )}
      </div>
   );
};
export default Search;
