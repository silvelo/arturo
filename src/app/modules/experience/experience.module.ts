import { NgModule } from '@angular/core'

import { ExperienceRoutingModule } from './experience-routing.module'
import { ExperienceComponent } from './pages/experience/experience.component'
import { SharedModule } from 'src/app/shared/shared.module'
import { ExperienceCardComponent } from './components/experience-card/experience-card.component'
import { PublicationCardComponent } from './components/publication-card/publication-card.component'

@NgModule({
  declarations: [
    ExperienceComponent,
    ExperienceCardComponent,
    PublicationCardComponent
  ],
  imports: [ExperienceRoutingModule, SharedModule]
})
export class ExperienceModule {}
