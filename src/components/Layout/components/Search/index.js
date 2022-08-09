import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { useEffect, useState, useRef } from 'react';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SearchIcon } from '~/components/Icons';
import { Wrapper as PoperWrapper } from '~/components/Poper';
import AccountItem from '~/components/AccountItem';
import styles from './Search.module.scss';

const cx = classNames.bind(styles);

function Search() {
   const [searchValue, setSearchValue] = useState('');
   const [searchResults, setSearchResults] = useState([]);
   const [showResults, setShowResults] = useState(true);
   const [loading, setLoading] = useState(false);

   const inputRef = useRef();

   useEffect(() => {
      if (!searchValue.trim()) {
         setSearchResults([]);
         return;
      }
      setLoading(true);
      fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(searchValue)}&type=less`)
         .then((res) => res.json())
         .then((res) => {
            setSearchResults(res.data);
            setLoading(false);
         })
         .catch(() => {
            setLoading(false);
         });
   }, [searchValue]);

   const handleHideResults = () => {
      setShowResults(false);
   };
   return (
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
               onChange={(e) => {
                  setSearchValue(e.target.value);
               }}
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
            <button className={cx('search-btn')}>
               <SearchIcon />
            </button>
         </div>
      </HeadlessTippy>
   );
}

export default Search;
