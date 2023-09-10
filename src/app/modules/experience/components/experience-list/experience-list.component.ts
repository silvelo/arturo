import { Component } from '@angular/core';
import { Experience } from '@data/experience/experience';
import { ExperiencesService } from '@data/experience/experience.service';

@Component({
  selector: 'silvelo-experience-list',
  templateUrl: './experience-list.component.html',
  styleUrls: ['./experience-list.component.scss'],
})
export class ExperienceListComponent {
  public experienceList: Experience[] = [];

  constructor(private experienceService: ExperiencesService) {
    this.experienceService.get().subscribe(experienceList => {
      this.experienceList = experienceList;
    });
  }
}
