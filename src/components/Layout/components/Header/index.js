import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { useEffect, useState } from 'react';
import {
   faCircleXmark,
   faMagnifyingGlass,
   faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import 'tippy.js/dist/tippy.css'; // optional
import styles from './Header.module.scss';
import images from '~/assets/images';
import { Wrapper as PoperWrapper } from '~/components/Poper';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';
// import { faPlusSquare } from '@fortawesome/free-regular-svg-icons';
const cx = classNames.bind(styles);
function Header() {
   const [searchResults, setSearchResults] = useState([]);
   useEffect(() => {
      setTimeout(() => {
         setSearchResults([]);
      }, 0);
   }, []);
   return (
      <header className={cx('wrapper')}>
         <div className={cx('inner')}>
            <div>
               <img src={images.logo} alt="logo tiktok" />
            </div>
            <Tippy
               interactive
               visible={searchResults.length > 0}
               render={(attrs) => (
                  <div className={cx('search-results')} tabIndex="-1" {...attrs}>
                     <PoperWrapper>
                        <h4 className={cx('search-title')}>Tài khoản</h4>
                        <AccountItem />
                        <AccountItem />
                        <AccountItem />
                        <AccountItem />
                     </PoperWrapper>
                  </div>
               )}
            >
               <div className={cx('search')}>
                  <input placeholder="Tìm kiếm tài khoản và video" spellcheck={false} />
                  <button className={cx('clear')}>
                     <FontAwesomeIcon icon={faCircleXmark} />
                  </button>
                  <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                  <button className={cx('search-btn')}>
                     <FontAwesomeIcon icon={faMagnifyingGlass} />
                  </button>
               </div>
            </Tippy>
            <div className={cx('actions')}>
               <Button Text>Tải lên</Button>
               <Button primary>Đăng nhập</Button>
            </div>
         </div>
      </header>
   );
}

export default Header;
