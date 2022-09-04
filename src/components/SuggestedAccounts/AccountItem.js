// import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import AccountPreview from './AccountPreview/AccountPreview';
import styles from './SuggestedAccounts.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Poper';
const cx = classNames.bind(styles);

function AccountItem() {
   const renderPreview = (props) => {
      return (
         <div tabIndex="-1" {...props}>
            <PopperWrapper>
               <AccountPreview />
            </PopperWrapper>
         </div>
      );
   };
   return (
      <div>
         <Tippy
            offset={[-20, 0]}
            interactive
            delay={[800, 0]}
            placement="bottom"
            render={renderPreview}
         >
            <div className={cx('account-item')}>
               <img
                  className={cx('avatar')}
                  src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/e7b9db475cba9fa98f1b7e055bf6712d~c5_100x100.jpeg?x-expires=1662472800&x-signature=l18TVBa2aIs%2FHpU8KV%2BhVtElZbQ%3D"
                  alt="avatar"
               />
               <div className={cx('item-info')}>
                  <h4 className={cx('nickname')}>
                     <strong>Sy le 2k1</strong>
                     <FontAwesomeIcon className={cx('check-icon')} icon={faCheckCircle} />
                  </h4>
                  <p className={cx('name')}>Sỹ lê</p>
               </div>
            </div>
         </Tippy>
      </div>
   );
}

AccountItem.propTypes = {};
export default AccountItem;
