import { Component, OnInit } from '@angular/core'
import { MatTabChangeEvent } from '@angular/material/tabs'
import { Publication } from '@app/data/butter/types/publication'
import { ButterService } from '@data/butter/service/butter.service'
import { Experience } from '@data/butter/types/experience'
import { GoogleAnalyticsService } from 'ngx-google-analytics'

import { firstValueFrom } from 'rxjs'

@Component({
  selector: 'silvelo-experience',
  templateUrl: './experience.component.html',
  styleUrls: [
    './experience.component.scss',
    '../../../../../styles/shared/material-card.scss',
    '../../../../../styles/shared/material-tab.scss'
  ]
})
export class ExperienceComponent implements OnInit {
  public experienceList: Experience[] = []
  public publications: Publication[] = []

  constructor(
    private gaService: GoogleAnalyticsService,
    private butterService: ButterService
  ) {}

  async ngOnInit() {
    const [butterExperienceResponse, butterPublicationResponse] =
      await Promise.all([
        firstValueFrom(this.butterService.getExperience()),
        firstValueFrom(this.butterService.getPublications())
      ])

    this.experienceList = butterExperienceResponse.data.experience
    this.publications = butterPublicationResponse.data.publications
  }

  onChangeTab(event: MatTabChangeEvent) {
    this.gaService.pageView(window.location.pathname, event.tab.textLabel)
  }
}
