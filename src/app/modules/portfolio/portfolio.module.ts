import { NgModule } from '@angular/core';
import { PortfolioService } from '@data/portfolio/portfolio.service';
import { LazySharedModule } from '@lazy-shared/lazy-shared.module';
import { PortfolioRoutingModule } from '@portfolio//portfolio-routing.module';
import { PortfolioCardComponent } from '@portfolio/components/portfolio-card/portfolio-card.component';
import { PortfolioPage } from '@portfolio/pages/portfolio/portfolio.page';

@NgModule({
  declarations: [PortfolioPage, PortfolioCardComponent],
  imports: [PortfolioRoutingModule, LazySharedModule],
  providers: [PortfolioService],
})
export class PortfolioModule {}
