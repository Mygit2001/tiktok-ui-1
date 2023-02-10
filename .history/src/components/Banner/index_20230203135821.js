import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import classNames from 'classnames/bind';
import styles from './Banner.module.scss';
import 'swiper/css';
const cx = classNames.bind(styles);

function Banner() {
   return (
      <div style={{ color: 'white' }}>
         <h1 className={cx('title')}>Banner</h1>
      </div>
   );
}
Banner.propTypes = {
   data: PropTypes.object.isRequired,
};

export default Banner;
