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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CustomLayoutComponent
  ],
  imports: [
    // angular
    BrowserModule,
    // app
    AppRoutingModule,
    BrowserAnimationsModule,
    // core & shared
    CoreModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
