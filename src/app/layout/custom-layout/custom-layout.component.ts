import { MediaMatcher } from '@angular/cdk/layout'
import {
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
  Renderer2
} from '@angular/core'
import { MatSidenav } from '@angular/material/sidenav'
import { ThemeService } from '@app/core/services/theme.service'
import { ButterService } from '@data/butter/service/butter.service'
import { Sidenav } from '@data/butter/types/sidenav'
import { firstValueFrom, map, Observable, tap } from 'rxjs'
import packageJson from '../../../../package.json'
@Component({
  selector: 'app-custom-layout',
  templateUrl: './custom-layout.component.html',
  styleUrls: ['./custom-layout.component.scss']
})
export class CustomLayoutComponent implements OnInit, OnDestroy {
  public sidenav: Sidenav[] = []
  public version: string = packageJson.version
  public theme$: Observable<string> | undefined
  public mobileQuery: MediaQueryList

  private _mobileQueryListener: () => void

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private media: MediaMatcher,
    private renderer: Renderer2,
    private themeService: ThemeService,
    private butterService: ButterService
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)')
    this._mobileQueryListener = () => changeDetectorRef.detectChanges()
    this.mobileQuery.addListener(this._mobileQueryListener)

    this.theme$ = this.themeService.getDarkTheme().pipe(
      map((isDarkTheme: boolean) => {
        if (isDarkTheme) {
          this.renderer.addClass(document.body, 'dark-theme')
          this.renderer.removeClass(document.body, 'light-theme')
          return './assets/images/butter-w.png'
        } else {
          this.renderer.removeClass(document.body, 'dark-theme')
          this.renderer.addClass(document.body, 'light-theme')
          return './assets/images/butter-b.png'
        }
      })
    )
  }

  async ngOnInit() {
    const butterResponse = await firstValueFrom(this.butterService.getSidenav())
    this.sidenav = butterResponse.data.sidenav
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener)
  }

  toggleTheme(checked: boolean) {
    this.themeService.setDarkTheme(checked)
  }

  closeSidenav(sidenav: MatSidenav) {
    if (this.mobileQuery.matches) {
      sidenav.toggle()
    }
  }
}
