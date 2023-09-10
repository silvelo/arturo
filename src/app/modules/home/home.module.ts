import { NgModule } from '@angular/core';
import { HomeRoutingModule } from '@home/home-routing.module';
import { HomePage } from '@home/pages/home/home.page';
import { LazySharedModule } from '@lazy-shared/lazy-shared.module';

@NgModule({
  declarations: [HomePage],
  imports: [HomeRoutingModule, LazySharedModule],
})
export class HomeModule {}
