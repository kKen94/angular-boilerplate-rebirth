import { Component } from '@angular/core';
import { LanguageService } from '@core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
})
export class UserComponent {
  constructor(private languageService: LanguageService) {}

  selectLanguage(language: string): void {
    this.languageService.useRaw(language);
  }
}
