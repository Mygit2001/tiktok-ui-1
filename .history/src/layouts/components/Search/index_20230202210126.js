import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { useEffect, useState, useRef } from 'react';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';

import * as searchService from '~/services/searchService';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SearchIcon } from '~/components/Icons';
import { useDebounce } from '~/hooks';
import { Wrapper as PoperWrapper } from '~/components/Poper';
import AccountItem from '~/components/AccountItem';
import styles from './Search.module.scss';

const cx = classNames.bind(styles);

function Search() {
   const [searchValue, setSearchValue] = useState('');
   const [searchResults, setSearchResults] = useState([]);
   const [showResults, setShowResults] = useState(false);
   const [loading, setLoading] = useState(false);

   const debouncedValue = useDebounce(searchValue, 600);

   const inputRef = useRef();

   useEffect(() => {
      if (!debouncedValue.trim()) {
         setSearchResults([]);
         return;
      }

      const fetchApi = async () => {
         setLoading(true);

         const results = await searchService.search(debouncedValue);
         console.log();
         setSearchResults(results);
         setLoading(false);
      };
      fetchApi();
   }, [debouncedValue]);

   const handleHideResults = () => {
      setShowResults(false);
   };

   const handleChange = (e) => {
      const searchValue = e.target.value;
      if (!searchValue.startsWith(' ')) {
         setSearchValue(searchValue);
      }
   };
   return (
      // Using a wrapper <div>  tag around the reference element solves this by creating a new parentNode context.
      <div>
         <HeadlessTippy
            interactive
            visible={showResults && searchResults.length > 0}
            render={(attrs) => (
               <div className={cx('search-results')} tabIndex="-1" {...attrs}>
                  <PoperWrapper>
                     <h4 className={cx('search-title')}>Tài khoản</h4>
                     {searchResults.map((result) => (
                        <AccountItem key={result.id} data={result} />
                     ))}
                  </PoperWrapper>
               </div>
            )}
            onClickOutside={handleHideResults}
         >
            <div className={cx('search')}>
               <input
                  ref={inputRef}
                  value={searchValue}
                  placeholder="Tìm kiếm tài khoản và video"
                  spellcheck={false}
                  onChange={handleChange}
                  onFocus={() => setShowResults(true)}
               />
               {!!searchValue && !loading && (
                  <button
                     className={cx('clear')}
                     onClick={() => {
                        setSearchValue('');
                        inputRef.current.focus();
                        setSearchResults([]);
                     }}
                  >
                     <FontAwesomeIcon icon={faCircleXmark} />
                  </button>
               )}
               {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
               <button className={cx('search-btn')} onMouseDown={(e) => e.preventDefault()}>
                  <SearchIcon />
               </button>
            </div>
         </HeadlessTippy>
      </div>
   );
}

export default Search;
