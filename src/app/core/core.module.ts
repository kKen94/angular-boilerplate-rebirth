import { APP_INITIALIZER, NgModule, Optional, SkipSelf } from '@angular/core';
import { ConfigService } from './service/config.service';
import {
  HTTP_INTERCEPTORS,
  HttpClient,
  HttpClientModule,
} from '@angular/common/http';
import { RoutingModule } from './routing/routing.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { LanguageService } from './service/language.service';
import { CommonModule } from '@angular/common';
import { NgxProgressHttpModule } from '@kken94/ngx-progress';
import { ErrorInterceptor } from './interceptor/error.interceptor';

const initConfigs = (appConfig: ConfigService) => (): Promise<void> =>
  appConfig.load();

const initLang = (lang: LanguageService) => (): Promise<void> => lang.load();

const httpLoaderFactory = (http: HttpClient): TranslateHttpLoader =>
  new TranslateHttpLoader(http);

@NgModule({
  imports: [
    CommonModule,
    NgxProgressHttpModule,
    HttpClientModule,
    RoutingModule,
    TranslateModule.forRoot({
      defaultLanguage: 'it',
      loader: {
        provide: TranslateLoader,
        useFactory: httpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  exports: [
    NgxProgressHttpModule,
    HttpClientModule,
    RoutingModule,
    TranslateModule,
  ],
  providers: [
    ConfigService,
    LanguageService,
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    // { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    {
      provide: APP_INITIALIZER,
      useFactory: initConfigs,
      deps: [ConfigService],
      multi: true,
    },
    {
      provide: APP_INITIALIZER,
      useFactory: initLang,
      deps: [LanguageService],
      multi: true,
    },
  ],
})
export class CoreModule {
  // Make sure CoreModule is imported only by one NgModule the AppModule
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import only in AppModule');
    }
  }
}
