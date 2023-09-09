import { NgModule } from '@angular/core';

import { ExperienceCardComponent } from '@experience/components/experience-card/experience-card.component';
import { PublicationCardComponent } from '@experience/components/publication-card/publication-card.component';
import { ExperienceRoutingModule } from '@experience/experience-routing.module';
import { ExperienceComponent } from '@experience/pages/experience/experience.component';
import { LazySharedModule } from '@shared/lazy-shared.module';

@NgModule({
  declarations: [ExperienceComponent, ExperienceCardComponent, PublicationCardComponent],
  imports: [ExperienceRoutingModule, LazySharedModule],
})
export class ExperienceModule {}
