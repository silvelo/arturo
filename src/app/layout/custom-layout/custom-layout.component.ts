import { OverlayContainer } from '@angular/cdk/overlay'
import { Component, OnInit } from '@angular/core'
import { ThemeService } from '@app/core/services/theme.service'
import { ButterService } from '@data/butter/service/butter.service'
import { Sidenav } from '@data/butter/types/sidenav'
import { firstValueFrom } from 'rxjs'
import packageJson from '../../../../package.json'
@Component({
  selector: 'app-custom-layout',
  templateUrl: './custom-layout.component.html',
  styleUrls: ['./custom-layout.component.scss']
})
export class CustomLayoutComponent implements OnInit {
  public sidenav: Sidenav[] = []
  public version: string = packageJson.version

  constructor(
    private butterService: ButterService,
    private themeService: ThemeService
  ) {}

  async ngOnInit() {
    const butterResponse = await firstValueFrom(this.butterService.getSidenav())
    this.sidenav = butterResponse.data.sidenav
  }
}
