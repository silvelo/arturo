import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';
import { HeaderComponent } from './components/header/header.component';
import { LanguagesComponent } from './components/languages/languages.component';
import { LogoComponent } from './components/logo/logo.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ToggleThemeComponent } from './components/toggle-theme/toggle-theme.component';
import { VersionComponent } from './components/version/version.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './pages/layout/layout.component';

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
  imports: [LayoutRoutingModule, SharedModule],
  exports: []
})
export class LayoutModule {}
