import PropTypes from 'prop-types';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './AccountItem.module.scss';
import Image from '~/components/Image';
const cx = classNames.bind(styles);
function AccountItem({ data }) {
   return (
      <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
         <Image className={cx('avatar')} src={data.avatar} alt="{}" />
         <div className={cx('info')}>
            <h4 className={cx('name')}>
               <span> {data.full_name}</span>
               {data.tick && <FontAwesomeIcon className={cx('icon-check')} icon={faCheckCircle} />}
            </h4>
            <span className={cx('username')}> {data.last_name}</span>
         </div>
      </Link>
   );
}
AccountItem.propTypes = {
   data: PropTypes.object.isRequired,
};
export default AccountItem;
