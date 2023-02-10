import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Banner.module.scss';
const cx = classNames.bind(styles);

function Banner() {
   return (
      <h1 style={{color: }}>
         <div>Banner</div>
      </h1>
   );
}
Banner.propTypes = {
   data: PropTypes.object.isRequired,
};

export default Banner;
