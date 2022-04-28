import { Component, OnInit } from '@angular/core'
import { ButterService } from '@data/butter/service/butter.service'
import { Me } from '@data/butter/types/me'
import { firstValueFrom } from 'rxjs'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public me: Me | null = null
  constructor(private butterService: ButterService) {}

  async ngOnInit() {
    const butterResponse = await firstValueFrom(this.butterService.getMe())
    this.me = butterResponse.data.me[0]
  }
}
