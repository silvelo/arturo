import { Component, Input } from '@angular/core';

@Component({
  selector: 'silvelo-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss'],
})
export class ContentCardComponent {
  @Input() title!: string;
}
