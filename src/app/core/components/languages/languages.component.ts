import { Component } from '@angular/core';
import { LANGUAGES } from '@core/common/languages';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'silvelo-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.scss'],
  host: { class: 'flex border divide-x cursor-pointer' },
})
export class LanguagesComponent {
  public languages = LANGUAGES;

  constructor(private translocoService: TranslocoService) {}

  changeLanguage(language: string) {
    this.translocoService.setActiveLang(language);
  }

  isSelected(language: string): boolean {
    return language === this.translocoService.getActiveLang();
  }
}
