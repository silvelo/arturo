import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';
import { PortfolioCardComponent } from './components/portfolio-card/portfolio-card.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { PortfolioRoutingModule } from './portfolio-routing.module';

@NgModule({
  declarations: [PortfolioComponent, PortfolioCardComponent],
  imports: [PortfolioRoutingModule, SharedModule]
})
export class PortfolioModule {}
