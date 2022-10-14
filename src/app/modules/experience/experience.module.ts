import { NgModule } from '@angular/core'

import { ExperienceRoutingModule } from './experience-routing.module'
import { ExperienceComponent } from './pages/experience/experience.component'
import { SharedModule } from 'src/app/shared/shared.module'
import { MatTabsModule } from '@angular/material/tabs'
import { ExperienceCardComponent } from './components/experience-card/experience-card.component'
import { PublicationCardComponent } from './components/publication-card/publication-card.component'

@NgModule({
  declarations: [
    ExperienceComponent,
    ExperienceCardComponent,
    PublicationCardComponent
  ],
  imports: [ExperienceRoutingModule, SharedModule, MatTabsModule]
})
export class ExperienceModule {}
