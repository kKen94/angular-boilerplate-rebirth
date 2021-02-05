export class KeycloakServiceStub {
  public logout(url: string): Promise<void> {
    return new Promise(resolve => resolve());
  }
}
