import classNames from 'classnames/bind';

import styles from './Player.module.scss';
const cx = classNames.bind(styles);
function Player() {
   return (
      <div className={cx('wrapper')}>
         <div className={cx('inner')}>
            <div className= {}></div>
            <div></div>
            <div></div>
            <div className={cx('actions')}></div>
         </div>
      </div>
   );
}

export default Player;