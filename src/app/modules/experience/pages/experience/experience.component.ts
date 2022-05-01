import { Component, OnInit } from '@angular/core'
import { MatTabChangeEvent } from '@angular/material/tabs'
import { Publication } from '@app/data/butter/types/publication'
import { ButterService } from '@data/butter/service/butter.service'
import { Experience } from '@data/butter/types/experience'
import { Angulartics2 } from 'angulartics2'
import { firstValueFrom } from 'rxjs'

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  public experienceList: Experience[] = []
  public publications: Publication[] = []

  constructor(
    private angulartics2: Angulartics2,
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
    this.angulartics2.eventTrack.next({
      action: 'click',
      properties: {
        category: event.tab.textLabel,
        label: 'navigate'
      }
    })
  }
}
