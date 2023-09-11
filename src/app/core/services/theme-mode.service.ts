import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeModeService {
  private _darkMode = new BehaviorSubject<boolean>(false);
  private _butterImage = new BehaviorSubject<string>('/assets/images/butter-b.png');
  private _logoImage = new BehaviorSubject<string>('/assets/images/logo-black.png');

  constructor() {
    this._darkMode.subscribe(() => {
      this.getButterImage();
      this.getLogoImage();
    });
  }

  get darkMode() {
    return this._darkMode.value;
  }

  get butterImage() {
    return this._butterImage.asObservable();
  }

  get logoImage() {
    return this._logoImage.asObservable();
  }

  toggleDarkMode() {
    this._darkMode.next(!this._darkMode.value);
  }

  getButterImage() {
    const butterImage = this._darkMode.value ? '/assets/images/butter-w.png' : '/assets/images/butter-b.png';
    this._butterImage.next(butterImage);
  }

  getLogoImage() {
    const logoImage = this._darkMode.value ? '/assets/images/logo-white.png' : '/assets/images/logo-black.png';
    this._logoImage.next(logoImage);
  }
}
