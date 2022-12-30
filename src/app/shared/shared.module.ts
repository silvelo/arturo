import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import {
  FaIconLibrary,
  FontAwesomeModule
} from '@fortawesome/angular-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import {
  faBars,
  faBriefcase,
  faCalendar,
  faClipboardList,
  faEnvelope,
  faExternalLink,
  faGraduationCap,
  faHome,
  faMoon,
  faStar,
  faUser
} from '@fortawesome/free-solid-svg-icons';

import { TranslateModule } from '@ngx-translate/core';
import { CommonCardComponent } from './components/common-card/common-card.component';
import { CommonHeaderComponent } from './components/common-header/common-header.component';
import { ContentCardComponent } from './components/content-card/content-card.component';
import { ExpiresDateComponent } from './components/expires-date/expires-date.component';
import { ListLinksComponent } from './components/list-links/list-links.component';
import { RangeDateComponent } from './components/range-date/range-date.component';
import { RateComponent } from './components/rate/rate.component';
import { SkillsComponent } from './components/skills/skills.component';
import { SocialComponent } from './components/social/social.component';
import { TimeDiffPipe } from './pipes/time-diff.pipe';

@NgModule({
  declarations: [
    SocialComponent,
    TimeDiffPipe,
    CommonCardComponent,
    ExpiresDateComponent,
    RangeDateComponent,
    SkillsComponent,
    CommonHeaderComponent,
    ContentCardComponent,
    RateComponent,
    ListLinksComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    MatExpansionModule,
    MatTabsModule,
    MatProgressBarModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatCardModule,
    MatListModule,
    TranslateModule
  ],
  exports: [
    /* COMPONENTS */
    SocialComponent,
    CommonCardComponent,
    ExpiresDateComponent,
    RangeDateComponent,
    SkillsComponent,
    CommonHeaderComponent,
    ContentCardComponent,
    RateComponent,
    ListLinksComponent,
    /* PIPES */
    TimeDiffPipe,
    /* MODULES */
    CommonModule,
    TranslateModule,
    FontAwesomeModule,
    MatExpansionModule,
    MatTabsModule,
    MatProgressBarModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatCardModule,
    MatListModule
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
    );
  }
}
