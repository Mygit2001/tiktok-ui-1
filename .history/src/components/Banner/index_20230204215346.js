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
         <div className="">
            <div class="carousel">
               <div class="image-one"></div>
               <div class="image-two"></div>
               <div class="image-three"></div>
            </div>
         </div>
      </div>
   );
}
Banner.propTypes = {
   data: PropTypes.object.isRequired,
};

export default Banner;
