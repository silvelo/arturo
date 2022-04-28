import { Component, OnInit } from '@angular/core'
import { Title } from '@angular/platform-browser'
import { SwUpdate } from '@angular/service-worker'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public constructor(private swUpdate: SwUpdate, private titleService: Title) {}

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
