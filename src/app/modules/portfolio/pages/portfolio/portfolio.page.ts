import { Component } from '@angular/core';
import { ROUTE_NAMES } from '@core/common/routes';
import { Portfolio } from '@data/portfolio/portfolio';
import { PortfolioService } from '@data/portfolio/portfolio.service';

@Component({
  selector: 'silvelo-portfolio',
  templateUrl: './portfolio.page.html',
  styleUrls: ['./portfolio.page.scss'],
  host: { class: 'flex flex-col gap-4 p-4 overflow-auto' },
})
export class PortfolioPage {
  public portfolioList: Portfolio[] = [];
  public routeNames = ROUTE_NAMES;
  constructor(private portfolioService: PortfolioService) {
    this.portfolioService.get().subscribe(portfolios => {
      this.portfolioList = portfolios;
    });
  }
}
