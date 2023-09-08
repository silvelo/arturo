import { Component, Input } from '@angular/core';
import { Experience } from '@data/experience/experience';

@Component({
  selector: 'silvelo-experience-card',
  templateUrl: './experience-card.component.html',
  styleUrls: ['./experience-card.component.scss'],
})
export class ExperienceCardComponent {
  @Input({ required: true }) experience!: Experience;
}
