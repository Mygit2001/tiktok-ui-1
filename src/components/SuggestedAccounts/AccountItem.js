// import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';
const cx = classNames.bind(styles);

function AccountItem() {
   return (
      <div className={cx('account-item')}>
         <img
            className={cx('avatar')}
            src="https://p16-sign-va.tiktokcdn.com/musically-maliva-obj/1657555751410693~c5_100x100.jpeg?x-expires=1661439600&x-signature=TX0AZAlNYno2EbUhRG1qLra9kRc%3D"
            alt="avatar"
         />
         <div className={cx('item-info')}>
            <h4 className={cx('nickname')}>
               <strong>Syle2k1</strong>
               <FontAwesomeIcon className={cx('check-icon')} icon={faCheckCircle} />
            </h4>
            <p className={cx('name')}>Sỹ lê</p>
         </div>
      </div>
   );
}

AccountItem.propTypes = {};
export default AccountItem;
