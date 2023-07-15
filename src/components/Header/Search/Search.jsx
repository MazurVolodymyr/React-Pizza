import React from 'react';
import style from './Search.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';
const Search = ({ searchValue, setSearchValue }) => {
   return (
      <div className={style.search}>
         <input
            value={searchValue}
            onChange={(event) => setSearchValue(event.target.value)}
            type="text"
            placeholder="Пошук"
         />
         {searchValue ? (
            <FontAwesomeIcon
               icon={faXmark}
               style={{ marginLeft: '10px', cursor: 'pointer' }}
               onClick={() => setSearchValue('')}
            />
         ) : (
            <FontAwesomeIcon icon={faMagnifyingGlass} style={{ marginLeft: '10px'}} />
         )}
      </div>
   );
};
export default Search;
