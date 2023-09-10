import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  public isLoading = new BehaviorSubject<boolean>(false);
  private pendingRequest = new BehaviorSubject<number>(0);

  constructor() {
    this.pendingRequest.subscribe(numOfRequest => {
      if (numOfRequest > 0) {
        this.showOverlay();
      }

      if (numOfRequest <= 0) {
        this.hideOverlay();
      }
    });
  }

  addRequest() {
    this.pendingRequest.next(this.pendingRequest.value + 1);
  }

  removeRequest() {
    this.pendingRequest.next(this.pendingRequest.value - 1);
  }

  private showOverlay() {
    this.isLoading.next(true);
  }

  private hideOverlay() {
    this.isLoading.next(false);
  }
}
