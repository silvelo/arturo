import { Sidenav } from '@data/butter/types/butter';
import { ROUTE_NAMES } from './routes';

export const SIDENAV: Sidenav[] = [
  { link: '/', name: ROUTE_NAMES.home, icon: 'home' },
  { link: '/education', name: ROUTE_NAMES.education, icon: 'graduation-cap' },
  { link: '/experience', name: ROUTE_NAMES.experience, icon: 'briefcase' },
  { link: '/portfolio', name: ROUTE_NAMES.portfolio, icon: 'clipboard-list' },
  { link: '/about', name: ROUTE_NAMES.about, icon: 'user' },
];
