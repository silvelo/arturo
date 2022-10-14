import { NgModule, Optional, SkipSelf } from '@angular/core'
import {
  HttpClient,
  HttpClientModule,
  HTTP_INTERCEPTORS
} from '@angular/common/http'
import { OverlayModule } from '@angular/cdk/overlay'
import { LoaderInterceptor } from './interceptors/loader.interceptor'
import { throwIfAlreadyLoaded } from './guard/module-import.guard'
import { TranslateModule, TranslateLoader } from '@ngx-translate/core'
import { jsonTranslateLoader } from './common/translate'

@NgModule({
  declarations: [],
  imports: [
    HttpClientModule,
    OverlayModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: jsonTranslateLoader,
        deps: [HttpClient]
      }
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
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule')
  }
}
