import { Component } from '@angular/core';
import { RouteNames } from '@core/common/routes';
import { Portfolio } from '@data/portfolio/portfolio';
import { PortfolioService } from '@data/portfolio/portfolio.service';

@Component({
  selector: 'silvelo-portfolio',
  templateUrl: './portfolio.page.html',
  styleUrls: ['./portfolio.page.scss'],
})
export class PortfolioPage {
  public portfolioList: Portfolio[] = [];
  public routeNames = RouteNames;
  constructor(private portfolioService: PortfolioService) {
    this.portfolioService.get().subscribe(portfolios => {
      this.portfolioList = portfolios;
    });
  }
}
