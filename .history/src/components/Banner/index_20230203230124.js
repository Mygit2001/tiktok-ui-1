import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import classNames from 'classnames/bind';
import styles from './Banner.module.scss';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const cx = classNames.bind(styles);

function Banner() {
   return (
      <Swiper
         modules={[Navigation, Pagination, Scrollbar, A11y]}
         spaceBetween={30}
         slidesPerView={3}
         navigation
         pagination={{ clickable: true }}
         scrollbar={{ draggable: true }}
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
