import { Component, Input } from '@angular/core';

@Component({
  selector: 'silvelo-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.scss'],
})
export class RateComponent {
  @Input() rate!: number | string;
  @Input() showIcon: boolean = false;
}
