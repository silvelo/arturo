import { NgModule } from '@angular/core';

import { AwardsService } from '@data/awards/awards.service';
import { CertificationsService } from '@data/certifications/certifications.service';
import { EducationsService } from '@data/education/education.service';
import { AwardCardComponent } from '@education/components/award-card/award-card.component';
import { CertificationCardComponent } from '@education/components/certification-card/certification-card.component';
import { EducationCardComponent } from '@education/components/education-card/education-card.component';
import { EducationRoutingModule } from '@education/education-routing.module';
import { EducationPage } from '@education/pages/education/education.page';
import { LazySharedModule } from '@lazy-shared/lazy-shared.module';
import { AwardListComponent } from './components/award-list/award-list.component';
import { CertificationListComponent } from './components/certification-list/certification-list.component';
import { EducationListComponent } from './components/education-list/education-list.component';

@NgModule({
  declarations: [
    EducationPage,
    EducationCardComponent,
    CertificationCardComponent,
    AwardCardComponent,
    AwardListComponent,
    EducationListComponent,
    CertificationListComponent,
  ],
  imports: [EducationRoutingModule, LazySharedModule],
  providers: [AwardsService, CertificationsService, EducationsService],
})
export class EducationModule {}
