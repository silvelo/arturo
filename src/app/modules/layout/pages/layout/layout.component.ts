import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy, Renderer2 } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

import { ThemeService } from '@core/services/theme.service';

import { map, Observable } from 'rxjs';
@Component({
  selector: 'silvelo-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnDestroy {
  public theme$: Observable<unknown> | undefined;
  public mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private media: MediaMatcher,
    private renderer: Renderer2,
    private themeService: ThemeService
  ) {
    this.mobileQuery = this.media.matchMedia('(min-width: 768px)');
    this._mobileQueryListener = () => this.changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);

    this.theme$ = this.themeService.getDarkTheme().pipe(
      map((isDarkTheme: boolean) => {
        if (isDarkTheme) {
          this.renderer.addClass(document.body, 'dark-theme');
          this.renderer.removeClass(document.body, 'light-theme');
          return {
            butter: '/assets/images/butter-w.png',
            logo: '/assets/images/logo-white.png',
          };
        } else {
          this.renderer.removeClass(document.body, 'dark-theme');
          this.renderer.addClass(document.body, 'light-theme');
          return {
            butter: '/assets/images/butter-b.png',
            logo: '/assets/images/logo-black.png',
          };
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  toggleTheme(checked: boolean) {
    this.themeService.setDarkTheme(checked);
  }

  closeSidenav(sidenav: MatDrawer) {
    if (!this.mobileQuery.matches) {
      sidenav.toggle();
    }
  }
}
