import { NgModule } from '@angular/core';

import { SharedModule } from '@app/shared/shared.module';
import { ExperienceCardComponent } from '@experience/components/experience-card/experience-card.component';
import { PublicationCardComponent } from '@experience/components/publication-card/publication-card.component';
import { ExperienceRoutingModule } from '@experience/experience-routing.module';
import { ExperienceComponent } from '@experience/pages/experience/experience.component';

@NgModule({
  declarations: [
    ExperienceComponent,
    ExperienceCardComponent,
    PublicationCardComponent
  ],
  imports: [ExperienceRoutingModule, SharedModule]
})
export class ExperienceModule {}
