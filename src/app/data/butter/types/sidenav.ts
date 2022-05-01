import { IconName } from '@fortawesome/fontawesome-svg-core'

export interface Sidenav {
  link: string
  name: string
  icon: IconName
}

export interface SidenavObject {
  sidenav: Sidenav[]
}
