import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { QuickPanelComponent } from './quick-panel.component';

describe('QuickPanelComponent', () => {
  let component: QuickPanelComponent;
  let fixture: ComponentFixture<QuickPanelComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [QuickPanelComponent],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
