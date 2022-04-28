import { Component, OnInit } from '@angular/core'
import { Publication } from '@app/data/butter/types/publication'
import { ButterService } from '@data/butter/service/butter.service'
import { Experience } from '@data/butter/types/experience'
import { firstValueFrom } from 'rxjs'

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  public experienceList: Experience[] = []
  public publications: Publication[] = []

  constructor(private butterService: ButterService) {}

  async ngOnInit() {
    const [butterExperienceResponse, butterPublicationResponse] =
      await Promise.all([
        firstValueFrom(this.butterService.getExperience()),
        firstValueFrom(this.butterService.getPublications())
      ])

    this.experienceList = butterExperienceResponse.data.experience
    this.publications = butterPublicationResponse.data.publications
  }
}
