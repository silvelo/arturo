import { Overlay, OverlayRef } from '@angular/cdk/overlay'
import { ComponentPortal } from '@angular/cdk/portal'
import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'
import { LoaderComponent } from '../../shared/components/loader/loader.component'

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  private overlayRef: OverlayRef
  private pendingRequest = new BehaviorSubject<number>(0)

  constructor(private overlay: Overlay) {
    this.overlayRef = this.overlay.create({
      positionStrategy: this.overlay
        .position()
        .global()
        .centerHorizontally()
        .centerVertically(),
      hasBackdrop: true
    })

    this.pendingRequest.subscribe((numOfRequest) => {
      console.log(`#${numOfRequest}`)
      if (numOfRequest > 0) {
        this.showOverlay()
      } else {
        this.hideOverlay()
      }
    })
  }

  addRequest() {
    this.pendingRequest.next(this.pendingRequest.value + 1)
  }

  removeRequest() {
    this.pendingRequest.next(this.pendingRequest.value - 1)
  }

  private showOverlay() {
    this.overlayRef.attach(new ComponentPortal(LoaderComponent))
  }

  private hideOverlay() {
    this.overlayRef.detach()
  }
}
