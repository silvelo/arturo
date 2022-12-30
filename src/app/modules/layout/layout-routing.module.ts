import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './pages/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('../../modules/home/home.module').then((m) => m.HomeModule)
      },
      {
        path: 'education',
        loadChildren: () =>
          import('../../modules/education/education.module').then(
            (m) => m.EducationModule
          )
      },
      {
        path: 'experience',
        loadChildren: () =>
          import('../../modules/experience/experience.module').then(
            (m) => m.ExperienceModule
          )
      },
      {
        path: 'portfolio',
        loadChildren: () =>
          import('../../modules/portfolio/portfolio.module').then(
            (m) => m.PortfolioModule
          )
      },
      {
        path: 'about',
        loadChildren: () =>
          import('../../modules/about/about.module').then((m) => m.AboutModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule {}
