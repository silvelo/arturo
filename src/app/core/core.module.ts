import { NgModule, Optional, SkipSelf } from '@angular/core'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { OverlayModule } from '@angular/cdk/overlay'
import { LoaderInterceptor } from './interceptors/loader.interceptor'
import { throwIfAlreadyLoaded } from './guard/module-import.guard'
import { SharedModule } from '@app/shared/shared.module'
@NgModule({
  declarations: [],
  imports: [HttpClientModule, SharedModule, OverlayModule],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true }
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule')
  }
}
