import { NgModule } from '@angular/core';

import { AboutRoutingModule } from '@about/about-routing.module';
import { AboutPage } from '@about/pages/about/about.page';
import { LazySharedModule } from '@lazy-shared/lazy-shared.module';

@NgModule({
  declarations: [AboutPage],
  imports: [AboutRoutingModule, LazySharedModule],
})
export class AboutModule {}
