import { Component } from '@angular/core';
import { Education } from '@data/education/education';
import { EducationsService } from '@data/education/education.service';

@Component({
  selector: 'silvelo-education-list',
  templateUrl: './education-list.component.html',
  styleUrls: ['./education-list.component.scss'],
})
export class EducationListComponent {
  public educationList: Education[] = [];
  constructor(private educationsService: EducationsService) {
    this.educationsService.get().subscribe(educationList => {
      this.educationList = educationList;
    });
  }
}
