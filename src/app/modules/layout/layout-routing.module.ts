import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '@layout/pages/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import(/* webpackChunkName: "home.module" */ '@modules/home/home.module').then(m => m.HomeModule),
      },
      {
        path: 'education',
        loadChildren: () =>
          import(
            /* webpackChunkName: "education.module" */
            '@modules/education/education.module'
          ).then(m => m.EducationModule),
      },
      {
        path: 'experience',
        loadChildren: () => import(/* webpackChunkName: "experience.module" */ '@modules/experience/experience.module').then(m => m.ExperienceModule),
      },
      {
        path: 'portfolio',
        loadChildren: () => import(/* webpackChunkName: "portfolio.module" */ '@modules/portfolio/portfolio.module').then(m => m.PortfolioModule),
      },
      {
        path: 'about',
        loadChildren: () => import(/* webpackChunkName: "about.module" */ '@modules/about/about.module').then(m => m.AboutModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
