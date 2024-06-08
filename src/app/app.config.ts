import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { loadingInterceptor } from './shared/interceptors/loading.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withInterceptors([loadingInterceptor])),
    provideRouter(routes),
    provideAnimationsAsync(),
    importProvidersFrom(
      TranslateModule.forRoot({
        defaultLanguage: 'tr',
        useDefaultLang: true,
        loader: {
          provide: TranslateLoader,
          useFactory: (httpClient: HttpClient) => {
            return new TranslateHttpLoader(
              httpClient,
              './assets/i18n/',
              '.json',
            );
          },
          deps: [HttpClient],
        },
      }),
    ),
  ],
};
