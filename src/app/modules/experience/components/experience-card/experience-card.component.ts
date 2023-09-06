import { Component, Input } from '@angular/core';
import { Experience } from '@data/butter/types/experience';

@Component({
  selector: 'silvelo-experience-card',
  templateUrl: './experience-card.component.html',
  styleUrls: ['./experience-card.component.scss'],
})
export class ExperienceCardComponent {
  @Input() experience!: Experience;
}
