import { Component, OnInit } from '@angular/core'

import { ButterService } from '@data/butter/service/butter.service'
import { Social } from '@data/butter/types/social'
import { firstValueFrom } from 'rxjs'

@Component({
  selector: 'silvelo-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss']
})
export class SocialComponent implements OnInit {
  public socialList: Social[] = []

  constructor(private butterService: ButterService) {}

  async ngOnInit() {
    this.socialList = await firstValueFrom(this.butterService.getSocial())
  }
}
