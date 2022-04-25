import { ChangeDetectorRef, Component, NgZone, OnInit } from '@angular/core'
import { ButterService } from 'src/app/data/butter/service/butter.service'
import { Sidenav } from 'src/app/data/butter/types/sidenav'

@Component({
  selector: 'app-custom-layout',
  templateUrl: './custom-layout.component.html',
  styleUrls: ['./custom-layout.component.scss']
})
export class CustomLayoutComponent implements OnInit {
  public sidenav: Sidenav[] = []

  constructor(
    private cdf: ChangeDetectorRef,
    private butterService: ButterService
  ) {}

  async ngOnInit() {
    const butterResponse = await this.butterService.getSidenav()
    this.sidenav = butterResponse.data.sidenav
  }
}
