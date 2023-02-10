import classNames from 'classnames/bind';

import styles from './Player.module.scss';
const cx = classNames.bind(styles);
function Player() {
   return (
      <div className={cx('wrapper')}>
         <div className={cx('inner')}>
            <div className={cx('media')}></div>
            <div className={cx('b')}></div>
            <div className={cx('c')}></div>
            <div className={cx('actions')}></div>
         </div>
      </div>
   );
}

export default Player;
