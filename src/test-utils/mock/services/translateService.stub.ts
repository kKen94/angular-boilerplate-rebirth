import { LangChangeEvent } from '@ngx-translate/core';
import { Observable, of } from 'rxjs';

export class TranslateServiceStub {
  public get(key: string): Observable<string> {
    return of(key);
  }

  setDefaultLang(lang: string): void {}
  use(lang: string): void {}
  get onLangChange(): Observable<LangChangeEvent> {
    return of({ lang: 'en', translations: [] });
  }
}
