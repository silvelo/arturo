import { Injectable } from '@angular/core'
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http'
import { delay, finalize, Observable } from 'rxjs'
import { LoaderService } from '@app/core/services/loader.service'

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
  constructor(private loaderService: LoaderService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    this.loaderService.addRequest()

    return next.handle(request).pipe(
      delay(500),
      finalize(() => this.loaderService.removeRequest())
    )
  }
}
