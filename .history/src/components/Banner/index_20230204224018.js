import React from 'react';
import PropTypes from 'prop-types';
//import { Swiper, SwiperSlide } from 'swiper/react';

import classNames from 'classnames/bind';
import styles from './Banner.module.scss';

// import 'swiper/css';
// import 'swiper/css/pagination';
// import { Pagination } from 'swiper';
const cx = classNames.bind(styles);

function Banner() {
   return (
      <div className={cx('carousel-wrapper')}>
         <div className={cx('carousel-container')}>
            <div className={cx('carousel')}>
               <div className={cx('image-one')}>{data.}</div>
               <div className={cx('image-two')}></div>
               <div className={cx('image-three')}></div>
            </div>
         </div>
      </div>
   );
}
Banner.propTypes = {
   data: PropTypes.object.isRequired,
};

export default Banner;
