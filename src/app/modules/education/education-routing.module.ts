import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EducationPage } from '@education/pages/education/education.page';

const routes: Routes = [
  {
    path: '',
    component: EducationPage,
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EducationRoutingModule {}
