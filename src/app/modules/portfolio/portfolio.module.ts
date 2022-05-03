import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { PortfolioRoutingModule } from './portfolio-routing.module'
import { PortfolioComponent } from './pages/portfolio/portfolio.component'
import { SharedModule } from '@app/shared/shared.module';
import { PortfolioCardComponent } from './components/portfolio-card/portfolio-card.component'

@NgModule({
  declarations: [PortfolioComponent, PortfolioCardComponent],
  imports: [PortfolioRoutingModule, SharedModule]
})
export class PortfolioModule {}
