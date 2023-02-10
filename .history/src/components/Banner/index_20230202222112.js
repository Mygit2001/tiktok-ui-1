import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Banner.module.scss';
const cx = classNames.bind(styles);

function Banner() {
   return (
      <h1 style={{ height: 2000 }}>
         <div>Banner</div>
      </h1>
   );
}

export default Banner;
