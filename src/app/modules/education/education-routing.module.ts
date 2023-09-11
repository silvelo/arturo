import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AwardListComponent } from '@education/components/award-list/award-list.component';
import { CertificationListComponent } from '@education/components/certification-list/certification-list.component';
import { EducationListComponent } from '@education/components/education-list/education-list.component';
import { EducationPage } from '@education/pages/education/education.page';

const routes: Routes = [
  {
    path: '',
    component: EducationPage,
    children: [
      {
        path: '',
        component: EducationListComponent,
      },
      {
        path: 'awards',
        component: AwardListComponent,
      },
      {
        path: 'certifications',
        component: CertificationListComponent,
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EducationRoutingModule {}
