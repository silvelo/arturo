import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  exports: [
    MatTabsModule,
    /* FIXME: Remove 20k */ MatButtonModule,
    /* FIXME: Remove 3k */ MatToolbarModule,
    MatSidenavModule,
    /* FIXME: Remove 16k */ MatButtonToggleModule,
  ],
})
export class MaterialModule {}
