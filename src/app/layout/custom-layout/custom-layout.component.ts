import { MediaMatcher } from '@angular/cdk/layout'
import {
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
  Renderer2
} from '@angular/core'
import { MatDrawer, MatSidenav } from '@angular/material/sidenav'

import { ThemeService } from '@app/core/services/theme.service'
import { ButterService } from '@data/butter/service/butter.service'

import { map, Observable } from 'rxjs'
import packageJson from '../../../../package.json'
@Component({
  selector: 'silvelo-custom-layout',
  templateUrl: './custom-layout.component.html',
  styleUrls: ['./custom-layout.component.scss']
})
export class CustomLayoutComponent implements OnDestroy {
  public version: string = packageJson.version
  public theme$: Observable<any> | undefined
  public mobileQuery: MediaQueryList

  private _mobileQueryListener: () => void

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private media: MediaMatcher,
    private renderer: Renderer2,
    private themeService: ThemeService
  ) {
    this.mobileQuery = this.media.matchMedia('(min-width: 960px)')
    this._mobileQueryListener = () => this.changeDetectorRef.detectChanges()
    this.mobileQuery.addListener(this._mobileQueryListener)

    this.theme$ = this.themeService.getDarkTheme().pipe(
      map((isDarkTheme: boolean) => {
        if (isDarkTheme) {
          this.renderer.addClass(document.body, 'dark-theme')
          this.renderer.removeClass(document.body, 'light-theme')
          return {
            butter: '/assets/images/butter-w.png',
            logo: '/assets/images/logo-white.png'
          }
        } else {
          this.renderer.removeClass(document.body, 'dark-theme')
          this.renderer.addClass(document.body, 'light-theme')
          return {
            butter: '/assets/images/butter-b.png',
            logo: '/assets/images/logo-black.png'
          }
        }
      })
    )
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener)
  }

  toggleTheme(checked: boolean) {
    this.themeService.setDarkTheme(checked)
  }

  closeSidenav(sidenav: MatDrawer) {
    console.log(this.mobileQuery.matches)
    if (!this.mobileQuery.matches) {
      sidenav.toggle()
    }
  }
}
