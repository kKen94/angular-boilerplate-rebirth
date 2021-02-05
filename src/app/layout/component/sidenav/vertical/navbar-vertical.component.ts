import { Component } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { environment } from '@env';

@Component({
  selector: 'app-navbar-vertical',
  templateUrl: './navbar-vertical.component.html',
})
export class NavbarVerticalComponent {
  constructor(protected readonly keycloakAngular: KeycloakService) {}

  async logout(): Promise<void> {
    await this.keycloakAngular.logout(
      environment.keycloakLoginOptions.redirectUri,
    );
  }
}
