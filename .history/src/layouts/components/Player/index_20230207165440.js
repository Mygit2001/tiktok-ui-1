import classNames from 'classnames/bind';

import styles from './Player.module.scss';
const cx = classNames.bind(styles);
function Player() {
   return (
      <div className={cx('wrapper')}>
         <div className={cx('inner flex')}>
            <div className={cx('media w-[30%] text-center')}>media</div>
            <div className={cx('control-center w-[40%]')}>control center</div>
            <div className={cx('control-right w-[30%]')}>control right</div>
         </div>
      </div>
   );
}

export default Player;
