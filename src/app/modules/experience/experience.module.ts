import { NgModule } from '@angular/core';

import { ExperiencesService } from '@data/experience/experience.service';
import { PublicationsService } from '@data/publications/publications.service';
import { ExperienceCardComponent } from '@experience/components/experience-card/experience-card.component';
import { PublicationCardComponent } from '@experience/components/publication-card/publication-card.component';
import { ExperienceRoutingModule } from '@experience/experience-routing.module';
import { ExperiencePage } from '@experience/pages/experience/experience.page';
import { LazySharedModule } from '@lazy-shared/lazy-shared.module';
import { ExperienceListComponent } from './components/experience-list/experience-list.component';
import { PublicationListComponent } from './components/publication-list/publication-list.component';

@NgModule({
  declarations: [ExperiencePage, ExperienceCardComponent, PublicationCardComponent, ExperienceListComponent, PublicationListComponent],
  imports: [ExperienceRoutingModule, LazySharedModule],
  providers: [ExperiencesService, PublicationsService],
})
export class ExperienceModule {}
