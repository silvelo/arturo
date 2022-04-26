import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { ExperienceRoutingModule } from './experience-routing.module'
import { ExperienceComponent } from './pages/experience/experience.component'
import { SharedModule } from 'src/app/shared/shared.module'
import { LuxonModule } from 'luxon-angular'

@NgModule({
  declarations: [ExperienceComponent],
  imports: [ExperienceRoutingModule, SharedModule, LuxonModule]
})
export class ExperienceModule {}
