import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExperienceComponent } from '@experience/pages/experience/experience.component';

const routes: Routes = [
  {
    path: '',
    component: ExperienceComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExperienceRoutingModule {}
