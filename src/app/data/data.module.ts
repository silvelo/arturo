import { NgModule } from '@angular/core';
import { MeService } from '@data/me/me.service';
import { SocialsService } from '@data/socials/socials.service';
@NgModule({
  providers: [MeService, SocialsService],
})
export class DataModule {}
