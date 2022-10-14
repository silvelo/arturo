import { Component, Input, OnInit } from '@angular/core'
import { Experience } from '@app/data/butter/types/experience'

@Component({
  selector: 'app-experience-card',
  templateUrl: './experience-card.component.html',
  styleUrls: ['./experience-card.component.scss']
})
export class ExperienceCardComponent {
  @Input() experience!: Experience
}
