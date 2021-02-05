import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class LayoutService {
  private readonly panelEmitter = new BehaviorSubject(false);
  isPanelOpen$ = this.panelEmitter.asObservable();

  constructor() {}

  togglePanel(isOpen?: boolean): void {
    this.panelEmitter.next(<boolean>isOpen ?? null);
  }
}
