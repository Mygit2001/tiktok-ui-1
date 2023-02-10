import config from '~/config';

//layouts
import { HeaderOnly } from '~/layouts';
//pages
import Home from '~/pages/Home';
import Catergory from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
import Live from '~/pages/Live';
import NhacTre from '~/pages/NhacTre';

const publicRoutes = [
   { path: config.routes.home, component: Home },
   { path: config.routes.following, component: Following },
   { path: config.routes.nhactre, component: NhacTre },
   { path: config.routes.live, component: Live },
   { path: config.routes.profile, component: Profile },
   { path: config.routes.upload, component: Upload, layout: HeaderOnly },
   { path: config.routes.search, component: Search, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
