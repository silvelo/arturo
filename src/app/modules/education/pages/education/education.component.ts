import { Component, OnInit } from '@angular/core'
import { MatTabChangeEvent } from '@angular/material/tabs'
import { Award } from '@app/data/butter/types/award'
import { Certification } from '@app/data/butter/types/certification'
import { ButterService } from '@data/butter/service/butter.service'
import { Education } from '@data/butter/types/education'

import { firstValueFrom } from 'rxjs'

@Component({
  selector: 'silvelo-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  public educationList: Education[] = []
  public awards: Award[] = []
  public certifications: Certification[] = []

  constructor(private butterService: ButterService) {}

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

  onChangeTab(event: MatTabChangeEvent) {}
}
