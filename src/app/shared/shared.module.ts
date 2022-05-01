import { NgModule } from '@angular/core'
import { MaterialModule } from './material.module'
import { FlexLayoutModule } from '@angular/flex-layout'
import { SocialComponent } from './components/social/social.component'
import { CommonModule } from '@angular/common'
import {
  FaIconLibrary,
  FontAwesomeModule
} from '@fortawesome/angular-fontawesome'
import { TimeDiffPipe } from './pipes/time-diff.pipe'
import { LoaderComponent } from './components/loader/loader.component'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import {
  faExternalLink,
  faBriefcase,
  faGraduationCap,
  faHome,
  faEnvelope,
  faClipboardList,
  faUser,
  faMoon,
  faBars
} from '@fortawesome/free-solid-svg-icons'

@NgModule({
  declarations: [SocialComponent, TimeDiffPipe, LoaderComponent],
  imports: [CommonModule, FontAwesomeModule, MaterialModule],
  exports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    SocialComponent,
    FontAwesomeModule,
    TimeDiffPipe,
    LoaderComponent
  ]
})
export class SharedModule {
  constructor(faIconLibrary: FaIconLibrary) {
    faIconLibrary.addIcons(
      faEnvelope,
      faGithub,
      faLinkedin,
      faExternalLink,
      faHome,
      faGraduationCap,
      faBriefcase,
      faMoon,
      faClipboardList,
      faUser,
      faBars
    )
  }
}
