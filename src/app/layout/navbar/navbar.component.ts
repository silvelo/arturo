import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core'
import { TranslateService } from '@ngx-translate/core'
import { ButterService } from '@data/butter/service/butter.service'
import { Sidenav } from '@data/butter/types/sidenav'
import { firstValueFrom } from 'rxjs'
import packageJson from '../../../../package.json'
import { Settings, DateTime } from 'luxon'

@Component({
  selector: 'silvelo-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input() theme: string | null = null
  @Output() toggle = new EventEmitter()

  public sidenav: Sidenav[] = []
  public version: string = packageJson.version

  public languages = [
    { code: 'en', label: 'EN' },
    { code: 'es', label: 'ES' }
  ]

  constructor(
    private butterService: ButterService,
    private translateService: TranslateService
  ) {}

  async ngOnInit() {
    const butterResponse = await firstValueFrom(this.butterService.getSidenav())
    this.sidenav = butterResponse.data.sidenav
  }

  onSelectLanguage(language: string) {
    this.translateService.use(language)
    Settings.defaultLocale = language
  }
}
