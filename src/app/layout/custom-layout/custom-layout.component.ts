import { OverlayContainer } from '@angular/cdk/overlay'
import { Component, OnInit, Renderer2 } from '@angular/core'
import { themes } from '@app/core/constants/themes'
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
export class CustomLayoutComponent implements OnInit {
  public sidenav: Sidenav[] = []
  public version: string = packageJson.version
  public theme$: Observable<string> | undefined
  constructor(
    private renderer: Renderer2,
    private themeService: ThemeService,
    private butterService: ButterService
  ) {
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

  toggleTheme(checked: boolean) {
    this.themeService.setDarkTheme(checked)
  }
}
