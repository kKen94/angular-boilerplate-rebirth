import { Environment } from '@model';

export const environment: Environment = {
  development: false,
  name: 'prod',
  production: true,
  staging: false,
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
