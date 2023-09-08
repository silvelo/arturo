import { NgModule } from '@angular/core';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import {
  faArrowUpFromBracket,
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
  faMoon,
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
      faFileLines,
      faCircleNotch
    );
  }
}
