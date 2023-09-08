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
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import {
  faArrowUpFromBracket,
  faBars,
  faBookmark,
  faBriefcase,
  faCalendar,
  faCertificate,
  faClipboardList,
  faEnvelope,
  faExternalLink,
  faFileLines,
  faGraduationCap,
  faHome,
  faMoon,
  faShareFromSquare,
  faStar,
  faStarHalf,
  faTrophy,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

import { TranslateModule } from '@ngx-translate/core';
import { SocialComponent } from './components/social/social.component';

@NgModule({
  declarations: [SocialComponent],
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
    TranslateModule,
  ],
  exports: [
    /* COMPONENTS */
    SocialComponent,

    /* MODULES */
    CommonModule,
    TranslateModule,
    FontAwesomeModule,
    MatTabsModule,
    MatProgressBarModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
  ],
})
export class SharedModule {
  constructor(faIconLibrary: FaIconLibrary) {
    faIconLibrary.addIcons(
      faEnvelope,
      faGithub,
      faLinkedin,
      faExternalLink,
      faTrophy,
      faHome,
      faGraduationCap,
      faBriefcase,
      faMoon,
      faClipboardList,
      faUser,
      faBars,
      faStar,
      faStarHalf,
      faCalendar,
      faArrowUpFromBracket,
      faCertificate,
      faShareFromSquare,
      faBookmark,
      faFileLines
    );
  }
}
