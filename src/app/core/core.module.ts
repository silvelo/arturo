import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { LoaderComponent } from '@core/components/loader/loader.component';
import { LoaderInterceptor } from '@core/interceptors/loader.interceptor';

@NgModule({
  declarations: [LoaderComponent],
  imports: [CommonModule, HttpClientModule, OverlayModule, MatProgressBarModule, MatCardModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptor,
      multi: true,
    },
  ],
})
export class CoreModule {}
