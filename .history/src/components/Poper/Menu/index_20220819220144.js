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
   const han
   return (
      <Tippy
         interactive
         delay={[0, 600]}
         offset={[16, 8]}
         hideOnClick={hideOnClick}
         placement="bottom-end"
         render={handleResult}
         onHide={() => setHistory((prev) => prev.slice(0, 1))}
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
