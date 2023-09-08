import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule, isDevMode } from '@angular/core';
import { LoaderComponent } from '@core/components/loader/loader.component';
import { LoaderInterceptor } from '@core/interceptors/loader.interceptor';
import { TranslocoHttpLoader } from '@core/services/transloco-loader.service';
import { DataModule } from '@data/data.module';
import { TranslocoModule, provideTransloco } from '@ngneat/transloco';
import { SharedModule } from '@shared/shared.module';
@NgModule({
  declarations: [LoaderComponent],
  imports: [HttpClientModule, SharedModule, TranslocoModule, DataModule],
  exports: [DataModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptor,
      multi: true,
    },
    provideTransloco({
      config: {
        availableLangs: ['en', 'es'],
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
