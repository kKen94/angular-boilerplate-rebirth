import { Injectable } from '@angular/core';
import {
  KeycloakEventType,
  KeycloakOptions,
  KeycloakService,
} from 'keycloak-angular';
import { environment } from '@env';
import { KeycloakEvent } from 'keycloak-angular/lib/core/interfaces/keycloak-event';
import { Subject } from 'rxjs';

@Injectable()
export class KeycloakCustomService {
  private readonly usernameEmitter: Subject<string> = new Subject();
  username$ = this.usernameEmitter.asObservable();

  private options: KeycloakOptions = {
    config: environment.keycloackConfig,
    initOptions: {
      checkLoginIframe: false,
    },
  };

  constructor(private keycloakAngular: KeycloakService) {
    keycloakAngular.keycloakEvents$.subscribe((event: KeycloakEvent) => {
      switch (event.type) {
        case KeycloakEventType.OnAuthSuccess: {
          this.broadcastUser();
          break;
        }
      }
    });
  }

  load(): Promise<boolean> {
    return this.keycloakAngular.init(this.options);
  }

  private broadcastUser(): void {
    this.usernameEmitter.next(this.keycloakAngular.getUsername());
  }
}
