import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';

import { IconsModule } from '@root/src/app/shared/icons/icons.module';
import { SocialComponent } from './components/social/social.component';

@NgModule({
  declarations: [SocialComponent],
  imports: [
    CommonModule,
    IconsModule,
    MatExpansionModule,
    MatTabsModule,
    MatProgressBarModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatCardModule,
    MatListModule,
  ],
  exports: [
    SocialComponent,
    CommonModule,
    IconsModule,
    MatTabsModule,
    MatProgressBarModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonToggleModule,
  ],
})
export class SharedModule {}
