import { NgModule, Optional, SkipSelf } from '@angular/core'
import {
  HttpClient,
  HttpClientModule,
  HTTP_INTERCEPTORS
} from '@angular/common/http'
import { OverlayModule } from '@angular/cdk/overlay'
import { LoaderInterceptor } from './interceptors/loader.interceptor'
import { throwIfAlreadyLoaded } from './guard/module-import.guard'
import {
  TranslateModule,
  TranslateLoader,
  TranslateService
} from '@ngx-translate/core'
import { jsonTranslateLoader } from './common/translate'
import { DEFAULT_LANGUAGE } from './constants/lanuage'
import { Settings } from 'luxon'

@NgModule({
  declarations: [],
  imports: [
    HttpClientModule,
    OverlayModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: jsonTranslateLoader,
        deps: [HttpClient]
      },
      isolate: true
    })
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
    throwIfAlreadyLoaded(parentModule, 'CoreModule')
    const language = this.translateService.getBrowserLang() || DEFAULT_LANGUAGE
    this.translateService.setDefaultLang(language)
    Settings.defaultLocale = language
  }
}
