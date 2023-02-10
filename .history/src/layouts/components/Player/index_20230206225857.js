
import classNames from 'classnames/bind';


import 'tippy.js/dist/tippy.css'; // optional

import styles from './Player.module.scss';
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
