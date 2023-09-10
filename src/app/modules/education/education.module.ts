import { NgModule } from '@angular/core';

import { AwardCardComponent } from '@education/components/award-card/award-card.component';
import { CertificationCardComponent } from '@education/components/certification-card/certification-card.component';
import { EducationCardComponent } from '@education/components/education-card/education-card.component';
import { EducationRoutingModule } from '@education/education-routing.module';
import { EducationComponent } from '@education/pages/education/education.component';
import { LazySharedModule } from '@lazy-shared/lazy-shared.module';

@NgModule({
  declarations: [EducationComponent, EducationCardComponent, CertificationCardComponent, AwardCardComponent],
  imports: [EducationRoutingModule, LazySharedModule],
})
export class EducationModule {}
