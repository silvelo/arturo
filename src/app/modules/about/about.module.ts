import { NgModule } from '@angular/core';

import { AboutRoutingModule } from '@about/about-routing.module';
import { AboutPage } from '@about/pages/about/about.page';
import { SkillsService } from '@data/skills/skills.service';
import { LazySharedModule } from '@lazy-shared/lazy-shared.module';

@NgModule({
  declarations: [AboutPage],
  imports: [AboutRoutingModule, LazySharedModule],
  providers: [SkillsService],
})
export class AboutModule {}
