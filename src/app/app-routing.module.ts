import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { CustomLayoutComponent } from './layout/custom-layout/custom-layout.component'

const routes: Routes = [
  {
    path: '',
    component: CustomLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./modules/home/home.module').then((m) => m.HomeModule)
      },
      {
        path: 'education',
        loadChildren: () =>
          import('./modules/education/education.module').then(
            (m) => m.EducationModule
          )
      },
      {
        path: 'experience',
        loadChildren: () =>
          import('./modules/experience/experience.module').then(
            (m) => m.ExperienceModule
          )
      },
      {
        path: 'portfolio',
        loadChildren: () =>
          import('./modules/portfolio/portfolio.module').then(
            (m) => m.PortfolioModule
          )
      },
      {
        path: 'about',
        loadChildren: () =>
          import('./modules/about/about.module').then((m) => m.AboutModule)
      }
    ]
  },
  { path: '**', redirectTo: '', pathMatch: 'full' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
