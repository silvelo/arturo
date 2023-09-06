import { NgModule } from '@angular/core';
import { PortfolioRoutingModule } from '@portfolio//portfolio-routing.module';
import { PortfolioCardComponent } from '@portfolio/components/portfolio-card/portfolio-card.component';
import { PortfolioComponent } from '@portfolio/pages/portfolio/portfolio.component';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [PortfolioComponent, PortfolioCardComponent],
  imports: [PortfolioRoutingModule, SharedModule],
})
export class PortfolioModule {}
