import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import Image from '~/components/Image';
const cx = classNames.bind(styles);
function AccountItem() {
   return (
      <div className={cx('wrapper')}>
         <Image
            className={cx('avatar')}
            src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/19f0d1dc66ffbfa814f54fad9440c4a3~c5_100x100.jpeg?x-expires=1659229200&x-signature=%2BiI16JKZfnWkHRTq0RmxmiTk4Vs%3D"
            alt="syx"
         />
         <div className={cx('info')}>
            <h4 className={cx('name')}>
               <span>Sylemoi choi tiktok</span>
               <FontAwesomeIcon className={cx('icon-check')} icon={faCheckCircle} />
            </h4>
            <span className={cx('username')}>piii821</span>
         </div>
      </div>
   );
}

export default AccountItem;
