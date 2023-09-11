import { Sidenav } from '@data/butter/types/butter';
import { ROUTE_NAMES } from './routes';

export const SIDENAV: Sidenav[] = [
  { exact: true, link: '/', name: ROUTE_NAMES.home, icon: 'home' },
  { exact: false, link: '/education', name: ROUTE_NAMES.education, icon: 'graduation-cap' },
  { exact: false, link: '/experience', name: ROUTE_NAMES.experience, icon: 'briefcase' },
  { exact: false, link: '/portfolio', name: ROUTE_NAMES.portfolio, icon: 'clipboard-list' },
  { exact: false, link: '/about', name: ROUTE_NAMES.about, icon: 'user' },
];
