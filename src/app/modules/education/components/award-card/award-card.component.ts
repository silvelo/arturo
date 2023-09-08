import { Component, Input } from '@angular/core';
import { Award } from '@data/awards/awards';

@Component({
  selector: 'silvelo-award-card',
  templateUrl: './award-card.component.html',
  styleUrls: ['./award-card.component.scss'],
})
export class AwardCardComponent {
  @Input({ required: true }) award!: Award;
}
