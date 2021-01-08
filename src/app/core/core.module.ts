import { APP_INITIALIZER, NgModule, Optional, SkipSelf } from '@angular/core';
import { ConfigService } from './service/config.service';
import { HttpClientModule } from '@angular/common/http';
import { RoutingModule } from './routing/routing.module';

const initializeConfigs = (
  appConfig: ConfigService,
): (() => Promise<void>) => () => appConfig.load();

@NgModule({
  imports: [HttpClientModule, RoutingModule],
  exports: [HttpClientModule, RoutingModule],
  providers: [
    ConfigService,
    // { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    // { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    {
      provide: APP_INITIALIZER,
      useFactory: initializeConfigs,
      deps: [ConfigService],
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
