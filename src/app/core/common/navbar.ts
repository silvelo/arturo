import { Sidenav } from '@data/butter/types/butter';
import { RouteNames } from './routes';

export const sidenav: Sidenav[] = [
  { link: '/', name: RouteNames.home, icon: 'home' },
  { link: '/education', name: RouteNames.education, icon: 'graduation-cap' },
  { link: '/experience', name: RouteNames.experience, icon: 'briefcase' },
  { link: '/portfolio', name: RouteNames.portfolio, icon: 'clipboard-list' },
  { link: '/about', name: RouteNames.about, icon: 'user' },
];
