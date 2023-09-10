import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioPage } from '@portfolio/pages/portfolio/portfolio.page';

const routes: Routes = [
  {
    path: '',
    component: PortfolioPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PortfolioRoutingModule {}
