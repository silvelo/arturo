import { Component, OnInit } from '@angular/core'
import { Title } from '@angular/platform-browser'
import { SwUpdate } from '@angular/service-worker'
import { environment } from '@env'
import { Angulartics2GoogleTagManager } from 'angulartics2'

declare let gtag: (property: string, value: any, configs?: any) => {}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public constructor(
    private swUpdate: SwUpdate,
    private titleService: Title,
    private angulartics2GoogleTagManager: Angulartics2GoogleTagManager
  ) {}

  ngOnInit(): void {
    gtag('config', environment.googleAnalyticsId)
    this.angulartics2GoogleTagManager.startTracking()
    this.titleService.setTitle('Silvelo Portfolio')
    if (this.swUpdate.isEnabled) {
      this.swUpdate.available.subscribe(() => {
        if (confirm('New version available. Load New Version?')) {
          window.location.reload()
        }
      })
    }
  }
}
