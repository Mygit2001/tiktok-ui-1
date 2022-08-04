import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);
function Button({
   to,
   href,
   children,
   primary = false,
   outline = false,
   disabled = false,
   rounded = false,
   text = true,
   small = false,
   large = false,
   leftIcon,
   rightIcon,
   className,
   onClick,
   ...passProps
}) {
   let Comp = 'button';
   const classes = cx('wrapper', {
      primary,
      outline,
      small,
      rounded,
      disabled,
      large,
      text,
      [className]: className,
   });
   const props = {
      onClick,
      ...passProps,
   };
   if (disabled) {
      Object.keys(props).forEach((key) => {
         if (key.startsWith('on') && typeof props[key] === 'function') {
            delete props[key];
         }
      });
   }

   if (to) {
      Comp = Link;
      props.to = to;
   } else if (href) {
      Comp = 'a';
      props.href = href;
   }
   return (
      <Comp className={classes} {...props}>
         {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
         <span className={cx('title')}>{children}</span>
         {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
      </Comp>
   );
}

export default Button;
