import { NgModule, Optional, SkipSelf } from '@angular/core'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { OverlayModule } from '@angular/cdk/overlay'
import { LoaderInterceptor } from './interceptors/loader.interceptor'
import { throwIfAlreadyLoaded } from './guard/module-import.guard'
import { TranslateModule } from '@ngx-translate/core'

@NgModule({
  declarations: [],
  imports: [
    HttpClientModule,
    OverlayModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en'
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
