import { Component, OnInit } from '@angular/core'
import { ButterService } from '@data/butter/service/butter.service'
import { Sidenav } from '@data/butter/types/sidenav'
import packageJson from '../../../../package.json'
@Component({
  selector: 'app-custom-layout',
  templateUrl: './custom-layout.component.html',
  styleUrls: ['./custom-layout.component.scss']
})
export class CustomLayoutComponent implements OnInit {
  public sidenav: Sidenav[] = []
  public version: string = packageJson.version

  constructor(private butterService: ButterService) {}

  async ngOnInit() {
    const butterResponse = await this.butterService.getSidenav()
    this.sidenav = butterResponse.data.sidenav
  }
}
