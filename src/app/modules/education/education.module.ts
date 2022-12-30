import { NgModule } from '@angular/core'

import { EducationRoutingModule } from './education-routing.module'
import { EducationComponent } from './pages/education/education.component'
import { SharedModule } from '@app/shared/shared.module'
import { EducationCardComponent } from './components/education-card/education-card.component'
import { CertificationCardComponent } from './components/certification-card/certification-card.component'
import { AwardCardComponent } from './components/award-card/award-card.component'

@NgModule({
  declarations: [
    EducationComponent,
    EducationCardComponent,
    CertificationCardComponent,
    AwardCardComponent
  ],
  imports: [EducationRoutingModule, SharedModule]
})
export class EducationModule {}
