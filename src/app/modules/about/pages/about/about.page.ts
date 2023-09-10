import { Component } from '@angular/core';
import { RouteNames } from '@core/common/routes';
import { Me } from '@data/me/me';
import { MeService } from '@data/me/me.service';
import { Skill } from '@data/skills/skills';
import { SkillsService } from '@data/skills/skills.service';
import { Social } from '@data/socials/socials';
import { SocialsService } from '@data/socials/socials.service';
import { IconName } from '@fortawesome/fontawesome-svg-core';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'silvelo-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage {
  public me?: Me;
  public skills: Skill[] = [];
  public socials: Social[] = [];

  public routeNames = RouteNames;

  constructor(
    private meService: MeService,
    private skillsService: SkillsService,
    private socialsService: SocialsService
  ) {
    forkJoin({
      me: this.meService.get(),
      skills: this.skillsService.get(),
      socials: this.socialsService.get(),
    }).subscribe(({ me, skills, socials }) => {
      this.me = me[0];
      this.skills = skills;
      this.socials = socials;
    });
  }

  getStarts(skill: Skill) {
    if (skill.level) {
      const level = Math.floor(skill.level);
      const hasHalfStar = skill.level % 1 !== 0;

      return Array.from({ length: level + (hasHalfStar ? 1 : 0) }, (_, index) => (index === level ? ('star-half' as IconName) : ('star' as IconName)));
    } else {
      return [];
    }
  }
}
