import classNames from 'classnames/bind';

import styles from './Player.module.scss';
const cx = classNames.bind(styles);
function Player() {
   return (
      <header className={cx('wrapper')}>
         <div className={cx('inner')}>
            <div>
                
            </div>

            <div className={cx('actions')}></div>
         </div>
      </header>
   );
}

export default Player;
