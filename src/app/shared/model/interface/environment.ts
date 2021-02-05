import { KeycloakConfig, KeycloakLoginOptions } from 'keycloak-js';

export interface Environment {
  development: boolean;
  name: string;
  production: boolean;
  staging: boolean;
  apiBasePath: string;
  keycloackConfig: KeycloakConfig;
  keycloackTokenUrl: string;
  keycloakLoginOptions: KeycloakLoginOptions;
}
