import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
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

  languageControl: FormControl<string>;

  constructor(private translateService: TranslateService) {
    this.languageControl = new FormControl(this.translateService.currentLang || 'es', { nonNullable: true });

    this.languageControl.valueChanges.subscribe(language => {
      this.translateService.use(language);
      Settings.defaultLocale = language;
    });
  }
}
