import { Injectable } from '@angular/core';
import { BehaviorSubject, delay, distinctUntilChanged } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  private isLoading = new BehaviorSubject<boolean>(false);
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

  get loading() {
    return this.isLoading.asObservable().pipe(delay(0), distinctUntilChanged());
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
