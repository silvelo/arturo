import { NgModule } from '@angular/core';
import { HomeRoutingModule } from '@home/home-routing.module';
import { HomeComponent } from '@home/pages/home/home.component';
import { LazySharedModule } from '@shared/lazy-shared.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [HomeRoutingModule, LazySharedModule],
})
export class HomeModule {}
