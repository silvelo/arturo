import { Component, OnInit } from '@angular/core'
import { ButterService } from '@data/butter/service/butter.service'
import { Me } from '@data/butter/types/me'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  public me: Me | null = null
  constructor(private butterService: ButterService) {}

  async ngOnInit() {
    const butterResponse = await this.butterService.getMe()
    this.me = butterResponse.data.me[0]
  }
}
