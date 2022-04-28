import { Component, OnInit } from '@angular/core'

import { ButterService } from '@data/butter/service/butter.service'
import { Social } from '@data/butter/types/social'

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss']
})
export class SocialComponent implements OnInit {
  public socialList: Social[] = []

  constructor(private butterService: ButterService) {}

  async ngOnInit() {
    const butterResponse = await this.butterService.getSocial()
    this.socialList = butterResponse.data.social
  }

  onClick(link: string) {
    window.open(link)
  }
}
