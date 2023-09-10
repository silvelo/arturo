import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule, isDevMode } from '@angular/core';
import { ContentLayoutComponent } from '@core/components/content-layout/content-layout.component';
import { HeaderComponent } from '@core/components/header/header.component';
import { LanguagesComponent } from '@core/components/languages/languages.component';
import { LoaderComponent } from '@core/components/loader/loader.component';
import { NavbarComponent } from '@core/components/navbar/navbar.component';
import { LoaderInterceptor } from '@core/interceptors/loader.interceptor';
import { TranslocoHttpLoader } from '@core/services/transloco-loader.service';
import { DataModule } from '@data/data.module';
import { TranslocoModule, provideTransloco } from '@ngneat/transloco';
import { SharedModule } from '@shared/shared.module';

const LAYOUT_COMPONENTS = [ContentLayoutComponent, HeaderComponent, LanguagesComponent, NavbarComponent, LoaderComponent];
@NgModule({
  declarations: [LAYOUT_COMPONENTS],
  imports: [HttpClientModule, SharedModule, TranslocoModule, DataModule],
  exports: [DataModule, LAYOUT_COMPONENTS],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptor,
      multi: true,
    },
    provideTransloco({
      config: {
        availableLangs: ['en', 'es', 'ga'],
        defaultLang: 'es',
        // Remove this option if your application doesn't support changing language in runtime.
        reRenderOnLangChange: true,
        prodMode: !isDevMode(),
      },
      loader: TranslocoHttpLoader,
    }),
  ],
})
export class CoreModule {}
