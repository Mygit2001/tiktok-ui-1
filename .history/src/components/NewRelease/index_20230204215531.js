import PropTypes from 'prop-types';
// import classNames from 'classnames/bind';
// import styles from './NewRelease.module.scss';
// const cx = classNames.bind(styles);

function NewRelease() {
   return (
      <h1 style={{ color: 'black' }}>
         <div>NewRelease</div>
      </h1>
   );
}
NewRelease.propTypes = {
   data: PropTypes.object.isRequired,
};

export default NewRelease;
