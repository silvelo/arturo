import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  exports: [/* FIXME: Remove 3k */ MatToolbarModule, MatSidenavModule],
})
export class MaterialModule {}
