import { Component, OnInit } from '@angular/core'
import { MatTabChangeEvent } from '@angular/material/tabs'
import { RouteNames } from '@app/core/common/routes'
import { Publication } from '@app/data/butter/types/publication'
import { ButterService } from '@data/butter/service/butter.service'
import { Experience } from '@data/butter/types/experience'

import { firstValueFrom } from 'rxjs'

@Component({
  selector: 'silvelo-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  public experienceList: Experience[] = []
  public publications: Publication[] = []
  public routeNames = RouteNames

  constructor(private butterService: ButterService) {}

  async ngOnInit() {
    ;[this.experienceList, this.publications] = await Promise.all([
      firstValueFrom(this.butterService.getExperience()),
      firstValueFrom(this.butterService.getPublications())
    ])
  }

  onChangeTab(event: MatTabChangeEvent) {}
}
