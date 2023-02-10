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
      <>
         <Swiper
            slidesPerView={3}
            spaceBetween={30}
            pagination={{
               clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
         >
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 5</SwiperSlide>
            <SwiperSlide>Slide 6</SwiperSlide>
            <SwiperSlide>Slide 7</SwiperSlide>
            <SwiperSlide>Slide 8</SwiperSlide>
            <SwiperSlide>Slide 9</SwiperSlide>
         </Swiper>
      </>
   );
}
Banner.propTypes = {
   data: PropTypes.object.isRequired,
};

export default Banner;
