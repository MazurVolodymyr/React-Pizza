import React from 'react';
import style from './Search.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';
const Search = ({ searchValue, setSearchValue }) => {
   const inputRef = React.useRef();

   const onClickClearFocus = () => {
      setSearchValue('')
      inputRef.current.focus();
   };
   console.log(inputRef);
   return (
      <div className={style.search}>
         <input
            ref={inputRef}
            value={searchValue}
            onChange={(event) => setSearchValue(event.target.value)}
            type="text"
            placeholder="Пошук"
         />
         {searchValue ? (
            <FontAwesomeIcon
               icon={faXmark}
               style={{ marginLeft: '10px', cursor: 'pointer' }}
               onClick={() => onClickClearFocus}
            />
         ) : (
            <FontAwesomeIcon icon={faMagnifyingGlass} style={{ marginLeft: '10px' }} />
         )}
      </div>
   );
};
export default Search;
