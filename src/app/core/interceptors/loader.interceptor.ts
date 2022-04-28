import { Injectable } from '@angular/core'
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http'
import { finalize, Observable } from 'rxjs'
import { LoaderService } from '@app/core/services/loader.service'

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
  constructor(private loaderService: LoaderService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    console.log('Interceptor')
    this.loaderService.addRequest()

    return next
      .handle(request)
      .pipe(finalize(() => this.loaderService.removeRequest()))
  }
}
