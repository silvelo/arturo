import { Component, Input, OnInit } from '@angular/core'
import { Education } from '@app/data/butter/types/education'

@Component({
  selector: 'app-education-card',
  templateUrl: './education-card.component.html',
  styleUrls: ['./education-card.component.scss']
})
export class EducationCardComponent {
  @Input() education: Education | undefined = undefined
}
