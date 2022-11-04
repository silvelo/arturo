import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HeaderComponent } from './layout/header/header.component'
import { FooterComponent } from './layout/footer/footer.component'
import { CustomLayoutComponent } from './layout/custom-layout/custom-layout.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { SharedModule } from './shared/shared.module'
import { CoreModule } from '@core/core.module'
import { ServiceWorkerModule } from '@angular/service-worker'
import { environment } from '../environments/environment'

import { NavbarComponent } from './layout/navbar/navbar.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CustomLayoutComponent,
    NavbarComponent
  ],
  imports: [
    // angular
    BrowserModule,
    // app
    AppRoutingModule,
    BrowserAnimationsModule,
    // core & shared
    CoreModule,
    SharedModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
