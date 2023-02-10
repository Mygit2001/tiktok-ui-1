import classNames from 'classnames/bind';

import styles from './Player.module.scss';
const cx = classNames.bind(styles);
function Player() {
   return (
      <div className={cx('wrapper')}>
         <div className={cx('inner')}>
            <div className={cx('media')}>
               
            </div>
            <div className={cx('control-center')}></div>
            <div className={cx('control-right')}></div>
         </div>
      </div>
   );
}

export default Player;
