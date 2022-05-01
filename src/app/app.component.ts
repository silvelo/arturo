import { Component, OnInit } from '@angular/core'
import { Title } from '@angular/platform-browser'
import { NavigationEnd, Router } from '@angular/router'
import { SwUpdate } from '@angular/service-worker'
import { environment } from '@env'

declare let gtag: (property: string, value: any, configs: any) => {}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public constructor(
    private swUpdate: SwUpdate,
    private titleService: Title,
    public router: Router
  ) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        gtag('config', environment.googleAnalyticsId, {
          page_path: event.urlAfterRedirects
        })
      }
    })
  }

  ngOnInit(): void {
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
