import { Component } from '@angular/core';
import { ROUTE_NAMES } from '@core/common/routes';
import { Award } from '@data/awards/awards';
import { AwardsService } from '@data/awards/awards.service';
import { Certification } from '@data/certifications/certifications';
import { CertificationsService } from '@data/certifications/certifications.service';
import { Education } from '@data/education/education';
import { EducationsService } from '@data/education/education.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'silvelo-education',
  templateUrl: './education.page.html',
  styleUrls: ['./education.page.scss'],
})
export class EducationPage {
  public educationList: Education[] = [];
  public awards: Award[] = [];
  public certifications: Certification[] = [];
  public routeNames = ROUTE_NAMES;

  constructor(
    private educationsService: EducationsService,
    private certificationsService: CertificationsService,
    private awardsService: AwardsService
  ) {
    forkJoin({
      educationList: this.educationsService.get(),
      certifications: this.certificationsService.get(),
      awards: this.awardsService.get(),
    }).subscribe(({ educationList, certifications, awards }) => {
      this.educationList = educationList;
      this.certifications = certifications;
      this.awards = awards;
    });
  }
}
