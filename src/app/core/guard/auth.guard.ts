import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor() {}

  canActivate(): boolean {
    const result = true; // check if authenticated
    if (result) {
      return true;
    } else {
      // logout if needed and redirect to login
      return false;
    }
  }
}
