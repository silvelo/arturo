import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';

import { OverlayModule } from '@angular/cdk/overlay';

@NgModule({
  exports: [
    MatTabsModule,
    MatProgressBarModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonToggleModule,
    MatProgressBarModule,
    OverlayModule,
  ],
})
export class MaterialModule {}
