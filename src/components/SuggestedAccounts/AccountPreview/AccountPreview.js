import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import classNames from 'classnames/bind';
import styles from './AccountPreview.module.scss';
import Button from '~/components/Button';

const cx = classNames.bind(styles);
function AccountPreview() {
   return (
      <div className={cx('wrapper')}>
         <header className={cx('header')}>
            <img
               className={cx('avatar')}
               src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/eb073870dd21809ca7fbb594c82af0be~c5_100x100.jpeg?x-expires=1662472800&x-signature=strxqsgbRtfdpi1JhbY%2BH7%2BJX9Y%3D"
               alt=""
            />
            <Button className={cx('button')} primary>
               Button
            </Button>
         </header>
         <div className={cx('body')}>
            <h4 className={cx('nickname')}>
               <strong>@thoghecanhanh</strong>
               <FontAwesomeIcon className={cx('check-icon')} icon={faCheckCircle} />
            </h4>
            <p className={cx('name')}>Sỹ lê</p>
            <p className={cx('analytics')}>
               <strong className={cx('value')}>1.2M </strong>
               <span className={cx('label')}>Followers</span>
               <strong className={cx('value')}>12M </strong>
               <span className={cx('label')}>Likes</span>
            </p>
         </div>
      </div>
   );
}

export default AccountPreview;
