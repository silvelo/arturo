import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { EducationRoutingModule } from './education-routing.module'
import { EducationComponent } from './pages/education/education.component'
import { SharedModule } from 'src/app/shared/shared.module'

@NgModule({
  declarations: [EducationComponent],
  imports: [CommonModule, EducationRoutingModule, SharedModule]
})
export class EducationModule {}
