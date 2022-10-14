import { Overlay, OverlayRef } from '@angular/cdk/overlay'
import { ComponentPortal } from '@angular/cdk/portal'
import { Injectable } from '@angular/core'
import { LoaderComponent } from '@app/shared/components/loader/loader.component'
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  public isLoading: boolean = false
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
      if (numOfRequest > 0 && !this.overlayRef.hasAttached()) {
        this.showOverlay()
      }

      if (numOfRequest <= 0 && this.overlayRef.hasAttached()) {
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
    this.isLoading = true
  }

  private hideOverlay() {
    this.overlayRef.detach()
    this.isLoading = false
  }
}
