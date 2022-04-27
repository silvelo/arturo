import { Component, OnInit } from '@angular/core'
import { Award } from '@app/data/butter/types/award'
import { Certification } from '@app/data/butter/types/certification'
import { ButterService } from '@data/butter/service/butter.service'
import { Education } from '@data/butter/types/education'
import { faExternalLink } from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  public educationList: Education[] = []
  public awards: Award[] = []
  public certifications: Certification[] = []
  public faExternalLink = faExternalLink

  constructor(private butterService: ButterService) {}

  async ngOnInit() {
    const butterEducationResponse = await this.butterService.getEducation()
    const butterCertificationResponse =
      await this.butterService.getCertifications()
    const butterAwardResponse = await this.butterService.getAwards()
    this.educationList = butterEducationResponse.data.education
    this.certifications = butterCertificationResponse.data.certification
    this.awards = butterAwardResponse.data.awards
  }
}
