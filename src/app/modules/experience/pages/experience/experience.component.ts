import { Component } from '@angular/core';
import { RouteNames } from '@core/common/routes';
import { Experience } from '@data/experience/experience';
import { ExperiencesService } from '@data/experience/experience.service';
import { Publication } from '@data/publications/publications';
import { PublicationsService } from '@data/publications/publications.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'silvelo-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent {
  public experienceList: Experience[] = [];
  public publications: Publication[] = [];
  public routeNames = RouteNames;

  constructor(
    private experienceService: ExperiencesService,
    private publicationsService: PublicationsService
  ) {
    forkJoin({
      experience: this.experienceService.get(),
      publications: this.publicationsService.get(),
    }).subscribe(({ experience, publications }) => {
      this.experienceList = experience;
      this.publications = publications;
    });
  }
}
