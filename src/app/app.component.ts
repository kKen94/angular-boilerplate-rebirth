import { Component } from '@angular/core';
import { LanguageService } from './core/service/language.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private languageService: LanguageService) {}

  selectLanguage(language: string): void {
    this.languageService.useRaw(language);
  }
}
