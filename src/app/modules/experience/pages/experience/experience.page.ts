import { Component } from '@angular/core';
import { ROUTE_NAMES } from '@core/common/routes';
import { Experience } from '@data/experience/experience';
import { ExperiencesService } from '@data/experience/experience.service';
import { Publication } from '@data/publications/publications';
import { PublicationsService } from '@data/publications/publications.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'silvelo-experience',
  templateUrl: './experience.page.html',
  styleUrls: ['./experience.page.scss'],
})
export class ExperiencePage {
  public experienceList: Experience[] = [];
  public publications: Publication[] = [];
  public routeNames = ROUTE_NAMES;

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
