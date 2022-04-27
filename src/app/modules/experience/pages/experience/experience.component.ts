import { Component, OnInit } from '@angular/core'
import { ButterService } from '@data/butter/service/butter.service'
import { Experience } from '@data/butter/types/experience'

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  public experienceList: Experience[] = []

  constructor(private butterService: ButterService) {}

  async ngOnInit() {
    const butterResponse = await this.butterService.getExperience()
    this.experienceList = butterResponse.data.experience
  }
}
