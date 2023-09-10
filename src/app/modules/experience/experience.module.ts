import { NgModule } from '@angular/core';

import { ExperienceCardComponent } from '@experience/components/experience-card/experience-card.component';
import { PublicationCardComponent } from '@experience/components/publication-card/publication-card.component';
import { ExperienceRoutingModule } from '@experience/experience-routing.module';
import { ExperiencePage } from '@experience/pages/experience/experience.page';
import { LazySharedModule } from '@lazy-shared/lazy-shared.module';

@NgModule({
  declarations: [ExperiencePage, ExperienceCardComponent, PublicationCardComponent],
  imports: [ExperienceRoutingModule, LazySharedModule],
})
export class ExperienceModule {}
