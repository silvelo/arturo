import { NgModule } from '@angular/core'
import { MaterialModule } from './material/material.module'
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
import { CardComponent } from './components/card/card.component'
import { ExpiresDateComponent } from './components/expires-date/expires-date.component'
import { RangeDateComponent } from './components/range-date/range-date.component'
import { TranslateModule } from '@ngx-translate/core'
import { LanguagesComponent } from './components/languages/languages.component'
import { VersionComponent } from './components/version/version.component'
import { ToggleThemeComponent } from './components/toggle-theme/toggle-theme.component'
import { LogoComponent } from './components/logo/logo.component'
import { SkillsComponent } from './components/skills/skills.component'

@NgModule({
  declarations: [
    SocialComponent,
    TimeDiffPipe,
    LoaderComponent,
    CardComponent,
    ExpiresDateComponent,
    RangeDateComponent,
    LanguagesComponent,
    VersionComponent,
    ToggleThemeComponent,
    LogoComponent,
    SkillsComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    MaterialModule,
    FlexLayoutModule,
    TranslateModule
  ],
  exports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    TranslateModule,
    SocialComponent,
    FontAwesomeModule,
    TimeDiffPipe,
    LoaderComponent,
    CardComponent,
    ExpiresDateComponent,
    RangeDateComponent,
    LanguagesComponent,
    VersionComponent,
    ToggleThemeComponent,
    LogoComponent,
    SkillsComponent
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
