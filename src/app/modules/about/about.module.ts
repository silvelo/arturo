import { NgModule } from '@angular/core';

import { AboutRoutingModule } from '@about/about-routing.module';
import { AboutComponent } from '@about/pages/about/about.component';
import { LazySharedModule } from '@shared/lazy-shared.module';

@NgModule({
  declarations: [AboutComponent],
  imports: [AboutRoutingModule, LazySharedModule],
})
export class AboutModule {}
