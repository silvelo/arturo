import { Component, OnInit } from '@angular/core'
import { Publication } from '@app/data/butter/types/publication'
import { ButterService } from '@data/butter/service/butter.service'
import { Experience } from '@data/butter/types/experience'
import { faExternalLink } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  public experienceList: Experience[] = []
  public publications: Publication[] = []
  public faExternalLink = faExternalLink
  constructor(private butterService: ButterService) {}

  async ngOnInit() {
    const butterExperienceResponse = await this.butterService.getExperience()
    const butterPublicationResponse = await this.butterService.getPublications()

    this.experienceList = butterExperienceResponse.data.experience
    this.publications = butterPublicationResponse.data.publications
  }
}
