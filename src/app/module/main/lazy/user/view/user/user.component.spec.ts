import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { LanguageService } from '@core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageServiceStub, TranslateServiceStub } from 'src/test-utils';
import { UserComponent } from './user.component';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [UserComponent],
        providers: [
          {
            provide: LanguageService,
            useClass: LanguageServiceStub,
          },
          { provide: TranslateService, useClass: TranslateServiceStub },
        ],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
