import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Banner.module.scss';
const cx = classNames.bind(styles);

function Banner() {
   return (
      <div className={cx('title')} style={{ color: 'white' }}>
         <div>Banner</div>
      </div>
   );
}
Banner.propTypes = {
   data: PropTypes.object.isRequired,
};

export default Banner;
