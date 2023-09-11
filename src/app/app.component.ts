import { Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { LoaderService } from '@core/services/loader.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'silvelo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public loading$?: Observable<boolean>;
  public constructor(
    private loaderService: LoaderService,
    private swUpdate: SwUpdate
  ) {
    this.loading$ = this.loaderService.loading;
  }

  ngOnInit(): void {
    if (this.swUpdate.isEnabled) {
      this.swUpdate.available.subscribe(() => {
        if (confirm('New version available. Load New Version?')) {
          window.location.reload();
        }
      });
    }
  }
}
