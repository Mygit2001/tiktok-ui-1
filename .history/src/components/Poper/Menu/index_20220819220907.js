import PropTypes from 'prop-types';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { useState } from 'react';
import styles from './Menu.module.scss';
import { Wrapper as PoperWrapper } from '~/components/Poper';
import MenuItem from './MenuItem';
import Header from './Header';
const cx = classNames.bind(styles);

const defaultFucn = () => {};
function Menu({ children, items = [], hideOnClick = false, onChange = defaultFucn }) {
   const [history, setHistory] = useState([{ data: items }]);
   const current = history[history.length - 1];

   const renderItems = () => {
      return current.data.map((item, index) => {
         const isParent = !!item.children;
         return (
            <MenuItem
               key={index}
               data={item}
               onClick={() => {
                  if (isParent) {
                     setHistory((prev) => [...prev, item.children]);
                  } else {
                     onChange(item);
                  }
               }}
            />
         );
      });
   };
   const handleBack = () => {
      setHistory((prev) => prev.slice(0, prev.length - 1));
   }
   const renderResult = (attrs) => (
      <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
         <PoperWrapper className={cx('menu-popper')}>
            {history.length > 1 && (
               <Header
                  title={current.title}
                  onBack={handleBack}
               />
            )}
            <div className={cx('menu-body')}>{renderItems()}</div>
         </PoperWrapper>
      </div>
   );

   
   const handleResetFirstPage = () => {
      setHistory((prev) => prev.slice(0, 1));
   };
   return (
      <Tippy
         interactive
         delay={[0, 600]}
         offset={[16, 8]}
         hideOnClick={hideOnClick}
         placement="bottom-end"
         render={renderResult}
         onHide={handleResetFirstPage}
      >
         {children}
      </Tippy>
   );
}

Menu.propTypes = {
   children: PropTypes.node.isRequired,
   items: PropTypes.array,
   hideOnClick: PropTypes.bool,
   onChange: PropTypes.func,
};
export default Menu;
