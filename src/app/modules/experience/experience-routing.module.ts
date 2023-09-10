import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExperienceListComponent } from '@experience/components/experience-list/experience-list.component';
import { PublicationListComponent } from '@experience/components/publication-list/publication-list.component';
import { ExperiencePage } from '@experience/pages/experience/experience.page';

const routes: Routes = [
  {
    path: '',
    component: ExperiencePage,
    children: [
      { path: '', component: ExperienceListComponent },
      { path: 'publications', component: PublicationListComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExperienceRoutingModule {}
