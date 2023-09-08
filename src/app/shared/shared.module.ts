import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslocoModule } from '@ngneat/transloco';

import { IconsModule } from '@root/src/app/shared/icons/icons.module';
import { MaterialModule } from '@shared/material/material.module';
import { SocialComponent } from './components/social/social.component';

@NgModule({
  declarations: [SocialComponent],
  imports: [CommonModule, IconsModule, MaterialModule, TranslocoModule],
  exports: [SocialComponent, CommonModule, IconsModule, TranslocoModule, MaterialModule],
})
export class SharedModule {}
