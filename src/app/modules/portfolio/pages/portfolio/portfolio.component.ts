import { Component, OnInit } from '@angular/core'
import { ButterService } from '@app/data/butter/service/butter.service'
import { Portfolio } from '@app/data/butter/types/portfolio'
import { firstValueFrom } from 'rxjs'

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: [
    './portfolio.component.scss',
    '../../../../../styles/shared/material-card.scss'
  ]
})
export class PortfolioComponent implements OnInit {
  public portfolioList: Portfolio[] = []

  constructor(private butterService: ButterService) {}

  async ngOnInit() {
    const butterPortfolioResponse = await firstValueFrom(
      this.butterService.getPortfolio()
    )
    this.portfolioList = butterPortfolioResponse.data.portfolio
  }
}
