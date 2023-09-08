import { Injectable } from '@angular/core';

import { ButterService } from '@data/butter/services/butter.service';
import { Portfolio } from '@data/portfolio/portfolio';

@Injectable()
export class PortfolioService extends ButterService<Portfolio> {
  constructor() {
    super('portfolio');
  }
}
