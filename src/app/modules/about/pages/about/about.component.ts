import { Component, OnInit } from '@angular/core'
import { RouteNames } from '@app/core/common/routes'
import { ButterService } from '@data/butter/service/butter.service'
import { Me } from '@data/butter/types/me'
import { firstValueFrom } from 'rxjs'

@Component({
  selector: 'silvelo-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  public me: Me | undefined = undefined
  public routeNames = RouteNames
  constructor(private butterService: ButterService) {}

  async ngOnInit() {
    const butterResponse = await firstValueFrom(this.butterService.getMe())

    this.me = butterResponse.data.me[0]
  }
}
