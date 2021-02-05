import { Component, OnDestroy, OnInit } from '@angular/core';
import { LanguageService } from '../../../core/service/language.service';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { LayoutService } from '../../layout.service';
import { Router } from '@angular/router';
import { KeycloakCustomService } from '../../../core/service/keycloak-custom.service';
import { first } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit, OnDestroy {
  lang = this.translateService.currentLang;
  langs = this.translateService.langs;
  username: string;
  subscriptions = new Subscription();

  constructor(
    private languageService: LanguageService,
    private translateService: TranslateService,
    private layoutService: LayoutService,
    private keycloakService: KeycloakCustomService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    const langSub = this.translateService.onLangChange.subscribe(
      (event: LangChangeEvent) => (this.lang = event.lang),
    );
    this.subscriptions.add(langSub);
    this.keycloakService.username$
      .pipe(first(username => !!username))
      .subscribe(username => (this.username = username));
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  setLang(langToSet: string): void {
    this.languageService.useRaw(langToSet);
  }

  async goHome(): Promise<void> {
    await this.router.navigateByUrl('/');
  }

  openPanel(): void {
    this.layoutService.togglePanel();
  }
}
