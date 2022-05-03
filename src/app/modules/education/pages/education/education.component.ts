import { Component, OnInit } from '@angular/core'
import { MatTabChangeEvent } from '@angular/material/tabs'
import { Award } from '@app/data/butter/types/award'
import { Certification } from '@app/data/butter/types/certification'
import { ButterService } from '@data/butter/service/butter.service'
import { Education } from '@data/butter/types/education'
import { GoogleAnalyticsService } from 'ngx-google-analytics'

import { firstValueFrom } from 'rxjs'

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: [
    './education.component.scss',
    '../../../../../styles/shared/material-card.scss',
    '../../../../../styles/shared/material-tab.scss'
  ]
})
export class EducationComponent implements OnInit {
  public educationList: Education[] = []
  public awards: Award[] = []
  public certifications: Certification[] = []

  constructor(
    private gaService: GoogleAnalyticsService,
    private butterService: ButterService
  ) {}

  async ngOnInit() {
    const [
      butterEducationResponse,
      butterCertificationResponse,
      butterAwardResponse
    ] = await Promise.all([
      firstValueFrom(this.butterService.getEducation()),
      firstValueFrom(this.butterService.getCertifications()),
      firstValueFrom(this.butterService.getAwards())
    ])

    this.educationList = butterEducationResponse.data.education
    this.certifications = butterCertificationResponse.data.certification
    this.awards = butterAwardResponse.data.awards
  }

  onChangeTab(event: MatTabChangeEvent) {
    this.gaService.pageView(window.location.pathname, event.tab.textLabel)
  }
}
