import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Language } from '@model';

@Injectable()
export class LanguageService {
  constructor(private translate: TranslateService) {}

  load(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.use(Language.IT);
      // TODO: inserire logica per recuperare eventualmente dalla session storage la lingua
      resolve();
    });
  }

  use(language: Language): void {
    this.translate.use(language);
  }

  useRaw(language: string): void {
    this.translate.use(language);
  }
}
