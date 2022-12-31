import { NgModule } from '@angular/core';
import { LayoutComponent } from '@layout//pages/layout/layout.component';
import { HeaderComponent } from '@layout/components/header/header.component';
import { LanguagesComponent } from '@layout/components/languages/languages.component';
import { LogoComponent } from '@layout/components/logo/logo.component';
import { NavbarComponent } from '@layout/components/navbar/navbar.component';
import { ToggleThemeComponent } from '@layout/components/toggle-theme/toggle-theme.component';
import { VersionComponent } from '@layout/components/version/version.component';
import { LayoutRoutingModule } from '@layout/layout-routing.module';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    LanguagesComponent,
    LogoComponent,
    NavbarComponent,
    ToggleThemeComponent,
    VersionComponent
  ],
  imports: [LayoutRoutingModule, SharedModule]
})
export class LayoutModule {}
