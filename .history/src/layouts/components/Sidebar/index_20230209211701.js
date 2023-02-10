import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import config from '~/config';
import Menu, { MenuItem } from './Menu';
import {
   HomeIcon,
   HomeActiveIcon,
   UserGroupIcon,
   UserGroupActiveIcon,
   LiveIcon,
   LiveActiveIcon,
} from '~/components/Icons';
import { BsFileEarmarkPerson } from 'react-icons/md';
// import SuggestedAccounts from '~/components/SuggestedAccounts';
const cx = classNames.bind(styles);

function Sidebar() {
   return (
      <aside className={cx('wrapper')}>
         <Menu>
            <MenuItem
               title="Dành cho bạn"
               to={config.routes.home}
               icon={<BsFileEarmarkPerson />}
               activeIcon={<HomeActiveIcon />}
            />
            <MenuItem
               title="Thể loại"
               to={config.routes.catergory}
               icon={<UserGroupIcon />}
               activeIcon={<UserGroupActiveIcon />}
            />
            <MenuItem
               title="Nhạc trẻ"
               to={config.routes.nhactre}
               icon={<LiveIcon />}
               activeIcon={<LiveActiveIcon />}
            />
         </Menu>
         {/* <SuggestedAccounts label="Suggested accounts" />
         <SuggestedAccounts label="Following accounts" /> */}
      </aside>
   );
}

export default Sidebar;
