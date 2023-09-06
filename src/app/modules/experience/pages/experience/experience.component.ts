import { Component, OnInit } from '@angular/core';
import { RouteNames } from '@core/common/routes';
import { ButterService } from '@data/butter/service/butter.service';
import { Experience } from '@data/butter/types/experience';
import { Publication } from '@data/butter/types/publication';

import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'silvelo-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent implements OnInit {
  public experienceList: Experience[] = [];
  public publications: Publication[] = [];
  public routeNames = RouteNames;

  constructor(private butterService: ButterService) {}

  async ngOnInit() {
    [this.experienceList, this.publications] = await Promise.all([
      firstValueFrom(this.butterService.getExperience()),
      firstValueFrom(this.butterService.getPublications()),
    ]);
  }

  onChangeTab() {}
}
