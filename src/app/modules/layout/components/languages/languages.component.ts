import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Settings } from 'luxon';

@Component({
  selector: 'silvelo-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.scss'],
})
export class LanguagesComponent {
  public languages = [
    { code: 'en', label: 'EN' },
    { code: 'es', label: 'ES' },
  ];

  constructor(private translateService: TranslateService) {}

  onSelectLanguage(language: string) {
    this.translateService.use(language);
    Settings.defaultLocale = language;
  }
}
