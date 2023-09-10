import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { AppRoutingModule } from '@app/app-routing.module';
import { AppComponent } from '@app/app.component';
import { HeaderComponent } from '@app/layout/components/header/header.component';
import { LanguagesComponent } from '@app/layout/components/languages/languages.component';
import { NavbarComponent } from '@app/layout/components/navbar/navbar.component';
import { ContentLayoutComponent } from '@app/layout/content-layout/content-layout.component';
import { CoreModule } from '@core/core.module';
import { environment } from '@env';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [AppComponent, ContentLayoutComponent, HeaderComponent, LanguagesComponent, NavbarComponent],
  imports: [
    BrowserModule,
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
