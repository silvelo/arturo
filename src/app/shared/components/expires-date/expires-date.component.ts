import { Component, Input } from '@angular/core';

@Component({
  selector: 'silvelo-expires-date',
  templateUrl: './expires-date.component.html',
  styleUrls: ['./expires-date.component.scss'],
})
export class ExpiresDateComponent {
  @Input() expiration_date!: string;
  @Input() expedition_date!: string;
  @Input() expires!: boolean;
}
