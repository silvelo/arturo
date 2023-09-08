import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

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

  constructor() {
    this.languageControl = new FormControl('es', { nonNullable: true });
  }
}
