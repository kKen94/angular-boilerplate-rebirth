import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { KeycloakService } from 'keycloak-angular';
import { KeycloakServiceStub } from 'src/test-utils';
import { NavbarVerticalComponent } from './navbar-vertical.component';

describe('NavbarVerticalComponent', () => {
  let component: NavbarVerticalComponent;
  let fixture: ComponentFixture<NavbarVerticalComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [NavbarVerticalComponent],
        providers: [
          { provide: KeycloakService, useClass: KeycloakServiceStub },
        ],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarVerticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
