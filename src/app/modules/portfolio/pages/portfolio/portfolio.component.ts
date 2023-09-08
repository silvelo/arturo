import { Component } from '@angular/core';
import { RouteNames } from '@core/common/routes';
import { Portfolio } from '@data/portfolio/portfolio';
import { PortfolioService } from '@data/portfolio/portfolio.service';
import { map } from 'rxjs';

@Component({
  selector: 'silvelo-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent {
  public portfolioList: Portfolio[] = [];
  public routeNames = RouteNames;
  constructor(private portfolioService: PortfolioService) {
    this.portfolioService
      .get()
      .pipe(map(portfolios => portfolios.map(this.getImage)))
      .subscribe(portfolios => {
        this.portfolioList = portfolios;
      });

    this.portfolioList.forEach(this.getImage.bind(this));
  }

  private getImage(portfolio: Portfolio, index: number) {
    portfolio.photo = portfolio.photo ? portfolio.photo : `/assets/images/g${(index % 3) + 1}.png`;

    return portfolio;
  }
}
