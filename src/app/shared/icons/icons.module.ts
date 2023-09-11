import { NgModule } from '@angular/core';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faMoon, faSun } from '@fortawesome/free-regular-svg-icons';
import {
  faBars,
  faBookmark,
  faBriefcase,
  faCalendar,
  faCertificate,
  faCircleNotch,
  faClipboardList,
  faExternalLink,
  faFileLines,
  faGraduationCap,
  faHome,
  faShareFromSquare,
  faStar,
  faStarHalf,
  faTrophy,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

@NgModule({
  imports: [FontAwesomeModule],
  exports: [FontAwesomeModule],
})
export class IconsModule {
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
      faClipboardList,
      faUser,
      faBars,
      faStar,
      faStarHalf,
      faCalendar,
      faCertificate,
      faShareFromSquare,
      faBookmark,
      faFileLines,
      faCircleNotch,
      faSun,
      faMoon
    );
  }
}
