import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  exports: [MatTabsModule, /* FIXME: Remove 3k */ MatToolbarModule, MatSidenavModule],
})
export class MaterialModule {}
