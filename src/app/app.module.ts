import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { HeaderComponent } from '@app/layout/components/header/header.component';
import { LanguagesComponent } from '@app/layout/components/languages/languages.component';
import { NavbarComponent } from '@app/layout/components/navbar/navbar.component';
import { VersionComponent } from '@app/layout/components/version/version.component';
import { LayoutComponent } from '@app/layout/pages/layout/layout.component';
import { CoreModule } from '@core/core.module';
import { environment } from '@env';
import { SharedModule } from '@shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent, LayoutComponent, HeaderComponent, LanguagesComponent, NavbarComponent, VersionComponent],
  imports: [
    // angular
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    SharedModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      registrationStrategy: 'registerWhenStable:30000',
    }),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
