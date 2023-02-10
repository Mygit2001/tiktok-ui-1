import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import classNames from 'classnames/bind';
import styles from './Banner.module.scss';
import 'swiper/css';
const cx = classNames.bind(styles);

function Banner() {
   return (
      <Swiper
         spaceBetween={50}
         slidesPerView={3}
         onSlideChange={() => console.log('slide change')}
         onSwiper={(swiper) => console.log(swiper)}
      >
         <SwiperSlide>Slide 1</SwiperSlide>
         <SwiperSlide>Slide 2</SwiperSlide>
         <SwiperSlide>Slide 3</SwiperSlide>
         <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
   );
}
Banner.propTypes = {
   data: PropTypes.object.isRequired,
};

export default Banner;
