import { NgModule } from '@angular/core'
import { MaterialModule } from './material/material.module'
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
  faBars,
  faStar,
  faCalendar
} from '@fortawesome/free-solid-svg-icons'
import { CommonCardComponent } from './components/common-card/common-card.component'
import { ExpiresDateComponent } from './components/expires-date/expires-date.component'
import { RangeDateComponent } from './components/range-date/range-date.component'
import { TranslateModule } from '@ngx-translate/core'
import { LanguagesComponent } from './components/languages/languages.component'
import { VersionComponent } from './components/version/version.component'
import { ToggleThemeComponent } from './components/toggle-theme/toggle-theme.component'
import { LogoComponent } from './components/logo/logo.component'
import { SkillsComponent } from './components/skills/skills.component'
import { CommonHeaderComponent } from './components/common-header/common-header.component'
import { ContentCardComponent } from './components/content-card/content-card.component'
import { RateComponent } from './components/rate/rate.component'
import { ListLinksComponent } from './components/list-links/list-links.component'

@NgModule({
  declarations: [
    SocialComponent,
    TimeDiffPipe,
    LoaderComponent,
    CommonCardComponent,
    ExpiresDateComponent,
    RangeDateComponent,
    LanguagesComponent,
    VersionComponent,
    ToggleThemeComponent,
    LogoComponent,
    SkillsComponent,
    CommonHeaderComponent,
    ContentCardComponent,
    RateComponent,
    ListLinksComponent
  ],
  imports: [CommonModule, FontAwesomeModule, MaterialModule, TranslateModule],
  exports: [
    CommonModule,
    MaterialModule,

    TranslateModule,
    SocialComponent,
    FontAwesomeModule,
    TimeDiffPipe,
    LoaderComponent,
    CommonCardComponent,
    ExpiresDateComponent,
    RangeDateComponent,
    LanguagesComponent,
    VersionComponent,
    ToggleThemeComponent,
    LogoComponent,
    SkillsComponent,
    CommonHeaderComponent,
    ContentCardComponent,
    RateComponent,
    ListLinksComponent
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
      faBars,
      faStar,
      faCalendar
    )
  }
}
