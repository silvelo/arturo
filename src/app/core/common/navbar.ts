import { RouteNames } from './routes'
import { IconName } from '@fortawesome/fontawesome-svg-core'

export interface Sidenav {
  link: string
  name: string
  icon: IconName
}

export const sidenav: Sidenav[] = [
  { link: '/', name: RouteNames.HOME, icon: 'home' },
  { link: '/education', name: RouteNames.EDUCATION, icon: 'graduation-cap' },
  { link: '/experience', name: RouteNames.EXPERIENCE, icon: 'briefcase' },
  { link: '/portfolio', name: RouteNames.PORTFOLIO, icon: 'clipboard-list' },
  { link: '/about', name: RouteNames.ABOUT, icon: 'user' }
]
