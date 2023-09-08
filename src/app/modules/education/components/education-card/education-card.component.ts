import { Component, Input } from '@angular/core';
import { Education } from '@data/education/education';

@Component({
  selector: 'silvelo-education-card',
  templateUrl: './education-card.component.html',
  styleUrls: ['./education-card.component.scss'],
})
export class EducationCardComponent {
  @Input({ required: true }) education!: Education;
}
