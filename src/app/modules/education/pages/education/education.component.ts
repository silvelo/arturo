import { Component, OnInit } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { RouteNames } from '@core/common/routes';
import { ButterService } from '@data/butter/service/butter.service';
import { Award } from '@data/butter/types/award';
import { Certification } from '@data/butter/types/certification';
import { Education } from '@data/butter/types/education';

import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'silvelo-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  public educationList: Education[] = [];
  public awards: Award[] = [];
  public certifications: Certification[] = [];
  public routeNames = RouteNames;

  constructor(private butterService: ButterService) {}

  async ngOnInit() {
    [this.educationList, this.certifications, this.awards] = await Promise.all([
      firstValueFrom(this.butterService.getEducation()),
      firstValueFrom(this.butterService.getCertifications()),
      firstValueFrom(this.butterService.getAwards())
    ]);
  }

  onChangeTab(event: MatTabChangeEvent) {}
}
