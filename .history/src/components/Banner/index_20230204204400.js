import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import classNames from 'classnames/bind';
import styles from './Banner.module.scss';
import 'swiper/css';
import 'swiper/css/pagination';
const cx = classNames.bind(styles);

function Banner() {
   return (
      <Swiper
         spaceBetween={30}
         slidesPerView={2}
         onSwiper={(swiper) => console.log(swiper)}
         onSlideChange={() => console.log('slide change')}
      >
         <SwiperSlide>Slide 1</SwiperSlide>
         <SwiperSlide>Slide 2</SwiperSlide>
      </Swiper>
   );
}
Banner.propTypes = {
   data: PropTypes.object.isRequired,
};

export default Banner;
