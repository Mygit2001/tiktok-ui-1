
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import 'tippy.js/dist/tippy.css'; // optional
import images from '~/assets/images';
import Button from '~/components/Button';
import { InboxIcon, MessageIcon, SettingIcon } from '~/components/Icons';
import Image from '~/components/Image';
import Menu from '~/components/Poper/Menu';
import Search from '../Search';
import styles from './Header.module.scss';
import config from '~/config';
const cx = classNames.bind(styles);
function Player() {
   return (
    <header className={cx('wrapper')}>
    <div className={cx('inner')}>
       <div>
          
       </div>
       
       <div className={cx('actions')}>
         
       </div>
    </div>
 </header>
   );
}

export default Player;
