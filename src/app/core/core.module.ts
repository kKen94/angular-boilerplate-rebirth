import { APP_INITIALIZER, NgModule, Optional, SkipSelf } from '@angular/core';
import {
  HTTP_INTERCEPTORS,
  HttpClient,
  HttpClientModule,
} from '@angular/common/http';
import { CoreRoutingModule } from './routing/core-routing.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { LanguageService } from './service/language.service';
import { CommonModule } from '@angular/common';
import { NgxProgressHttpModule } from '@kken94/ngx-progress';
import { ErrorInterceptor } from './interceptor/error.interceptor';
import { AuthGuard } from './guard/auth.guard';
import { LayoutModule } from '../layout';

import { IconsService } from './service/icons.service';
import { KeycloakService } from 'keycloak-angular';
import { KeycloakCustomService } from './service/keycloak-custom.service';

const initLang = (lang: LanguageService) => (): Promise<void> => lang.load();

const initIcon = (icon: IconsService) => (): Promise<void> => icon.load();

const initKeycloak = (
  keycloak: KeycloakCustomService,
) => (): Promise<boolean> => keycloak.load();

const httpLoaderFactory = (http: HttpClient): TranslateHttpLoader =>
  new TranslateHttpLoader(http);

@NgModule({
  imports: [
    CommonModule,
    LayoutModule,
    NgxProgressHttpModule,
    HttpClientModule,
    CoreRoutingModule,
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
    TranslateModule,
    CoreRoutingModule,
    LayoutModule,
  ],
  providers: [
    KeycloakService,
    KeycloakCustomService,
    AuthGuard,
    LanguageService,
    IconsService,
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    {
      provide: APP_INITIALIZER,
      useFactory: initLang,
      deps: [LanguageService],
      multi: true,
    },
    {
      provide: APP_INITIALIZER,
      useFactory: initIcon,
      deps: [IconsService],
      multi: true,
    },
    {
      provide: APP_INITIALIZER,
      useFactory: initKeycloak,
      deps: [KeycloakCustomService],
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
