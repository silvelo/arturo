import { DOCUMENT } from '@angular/common';
import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { SIDENAV } from '@core/common/navbar';
import { ThemeModeService } from '@core/services/theme-mode.service';
import { Sidenav } from '@data/butter/types/butter';
import packageJson from '@root/package.json';

@Component({
  selector: 'silvelo-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  host: { class: 'flex flex-col w-[16rem] rounded-r-2xl	 shadow-2xl bg-white dark:bg-slate-800' },
})
export class NavbarComponent {
  @Output() toggle = new EventEmitter();

  public version: string = packageJson.version;
  public sidenav: Sidenav[] = SIDENAV;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    public themeModeService: ThemeModeService
  ) {}

  toggleDarkMode() {
    this.themeModeService.toggleDarkMode();
    if (this.themeModeService.darkMode) {
      this.document.documentElement.classList.add('dark');
    } else {
      this.document.documentElement.classList.remove('dark');
    }
  }
}
