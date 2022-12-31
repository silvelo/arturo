import { Component, OnInit } from '@angular/core';
import { RouteNames } from '@core/common/routes';
import { ButterService } from '@data/butter/service/butter.service';
import { Portfolio } from '@data/butter/types/portfolio';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'silvelo-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  public portfolioList: Portfolio[] = [];
  public routeNames = RouteNames;
  constructor(private butterService: ButterService) {}

  async ngOnInit() {
    this.portfolioList = await firstValueFrom(
      this.butterService.getPortfolio()
    );

    this.portfolioList.forEach(this.getImage.bind(this));
  }

  private getImage(portfolio: Portfolio, index: number) {
    portfolio.photo = portfolio.photo
      ? portfolio.photo
      : `/assets/images/g${(index % 3) + 1}.png`;
  }
}
