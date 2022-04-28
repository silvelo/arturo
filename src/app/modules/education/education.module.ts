import { NgModule } from '@angular/core'

import { EducationRoutingModule } from './education-routing.module'
import { EducationComponent } from './pages/education/education.component'
import { SharedModule } from 'src/app/shared/shared.module'
import { MatTabsModule } from '@angular/material/tabs'

@NgModule({
  declarations: [EducationComponent],
  imports: [EducationRoutingModule, SharedModule, MatTabsModule]
})
export class EducationModule {}
