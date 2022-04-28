import { Component } from '@angular/core'
import { Title } from '@angular/platform-browser'
import { Overlay } from '@angular/cdk/overlay'
import { LoaderComponent } from './loader/loader.component'
import { ComponentPortal } from '@angular/cdk/portal'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public constructor(private titleService: Title, private overlay: Overlay) {
    this.titleService.setTitle('Silvelo Portfolio')
    this.showOverlay()
  }

  showOverlay() {
    const overlayRef = this.overlay.create({
      positionStrategy: this.overlay
        .position()
        .global()
        .centerHorizontally()
        .centerVertically(),
      hasBackdrop: true
    })
    overlayRef.attach(new ComponentPortal(LoaderComponent))
  }
}
