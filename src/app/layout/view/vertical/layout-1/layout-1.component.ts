import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { LayoutService } from '../../../layout.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-vertical-layout-1',
  templateUrl: './layout-1.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class VerticalLayout1Component implements OnInit, OnDestroy {
  isPanelOpen!: boolean;
  subscriptions = new Subscription();

  constructor(private layoutService: LayoutService) {}

  ngOnInit(): void {
    const panelSub = this.layoutService.isPanelOpen$.subscribe(
      (isOpen: boolean | undefined) =>
        (this.isPanelOpen = isOpen ?? !this.isPanelOpen),
    );
    this.subscriptions.add(panelSub);
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
