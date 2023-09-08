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
  public languages: {
    code: string;
    icon: string;
  }[] = [
    { code: 'es', icon: './assets/icons/es.svg' },
    { code: 'en', icon: './assets/icons/us.svg' },
    { code: 'ga', icon: './assets/icons/es-ga.svg' },
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
