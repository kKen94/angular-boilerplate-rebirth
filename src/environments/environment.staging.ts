import { Environment } from '@model';

export const environment: Environment = {
  development: false,
  name: 'staging',
  production: false,
  staging: true,
  apiBasePath: 'https://',
  keycloackConfig: {
    clientId: '',
    realm: '',
    url: '',
  },
  keycloackTokenUrl: '',
  keycloakLoginOptions: {
    redirectUri: '',
  },
};
