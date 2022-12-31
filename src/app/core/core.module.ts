import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import {
  HttpClient,
  HttpClientModule,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { DataModule } from '@data/data.module';
import {
  TranslateLoader,
  TranslateModule,
  TranslateService
} from '@ngx-translate/core';
import { Settings } from 'luxon';
import { jsonTranslateLoader } from './common/translate';
import { LoaderComponent } from './components/loader/loader.component';
import { DEFAULT_LANGUAGE } from './constants/lanuage';
import { throwIfAlreadyLoaded } from './guard/module-import.guard';
import { LoaderInterceptor } from './interceptors/loader.interceptor';

@NgModule({
  declarations: [LoaderComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    OverlayModule,
    DataModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: jsonTranslateLoader,
        deps: [HttpClient]
      },
      isolate: true
    }),
    MatProgressBarModule,
    MatCardModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptor,
      multi: true
    }
  ]
})
export class CoreModule {
  constructor(
    @Optional() @SkipSelf() parentModule: CoreModule,
    private translateService: TranslateService
  ) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
    const language = this.translateService.getBrowserLang() || DEFAULT_LANGUAGE;
    this.translateService.setDefaultLang(language);
    Settings.defaultLocale = language;
  }
}
