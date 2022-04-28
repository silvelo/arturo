import { NgModule } from '@angular/core'

import { ExperienceRoutingModule } from './experience-routing.module'
import { ExperienceComponent } from './pages/experience/experience.component'
import { SharedModule } from 'src/app/shared/shared.module'
import { LuxonModule } from 'luxon-angular'
import { MatTabsModule } from '@angular/material/tabs'

@NgModule({
  declarations: [ExperienceComponent],
  imports: [ExperienceRoutingModule, SharedModule, LuxonModule, MatTabsModule]
})
export class ExperienceModule {}
