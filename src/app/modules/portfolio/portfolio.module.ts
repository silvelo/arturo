import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { PortfolioRoutingModule } from './portfolio-routing.module'
import { PortfolioComponent } from './pages/portfolio/portfolio.component'
import { SharedModule } from '@app/shared/shared.module'

@NgModule({
  declarations: [PortfolioComponent],
  imports: [PortfolioRoutingModule, SharedModule]
})
export class PortfolioModule {}
