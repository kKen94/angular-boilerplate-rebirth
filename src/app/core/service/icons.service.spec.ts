import { TestBed } from '@angular/core/testing';
import { IconsService } from './icons.service';
import { FakeMatIconRegistry } from '@angular/material/icon/testing';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

describe('IconsService', () => {
  let service: IconsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    const fakeDomSanitizer = {
      bypassSecurityTrustHtml: (): string => 'safeString',
    };

    service = new IconsService(
      (FakeMatIconRegistry as unknown) as MatIconRegistry,
      (fakeDomSanitizer as unknown) as DomSanitizer,
    );
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
