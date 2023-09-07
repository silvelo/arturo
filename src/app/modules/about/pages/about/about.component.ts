import { Component, OnInit } from '@angular/core';
import { RouteNames } from '@core/common/routes';
import { ButterService } from '@data/butter/service/butter.service';
import { Me } from '@data/butter/types/me';
import { IconName } from '@fortawesome/fontawesome-svg-core';
import { Skill } from '@root/src/app/data/butter/types/skills';
import { Social } from '@root/src/app/data/butter/types/social';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'silvelo-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  public me: Me | undefined = undefined;
  public skills: Skill[] = [];
  public socials: Social[] = [];

  public routeNames = RouteNames;
  constructor(private butterService: ButterService) {}

  async ngOnInit() {
    this.me = await firstValueFrom(this.butterService.getMe());
    this.skills = await firstValueFrom(this.butterService.getSkills());
    this.socials = await firstValueFrom(this.butterService.getSocial());
  }

  getStarts(skill: Skill) {
    const level = Math.floor(skill.level);
    const hasHalfStar = skill.level % 1 !== 0;

    return Array.from({ length: level + (hasHalfStar ? 1 : 0) }, (_, index) => (index === level ? ('star-half' as IconName) : ('star' as IconName)));
  }
}
