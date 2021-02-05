import { TestBed } from '@angular/core/testing';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from './language.service';

describe('LanguageService', () => {
  let service: LanguageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    const fakeTranslateService = { get: (): string => 'fake value' };
    service = new LanguageService(
      (fakeTranslateService as unknown) as TranslateService,
    );
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
