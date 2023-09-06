import { Component, Input } from '@angular/core';

@Component({
  selector: 'silvelo-common-card',
  templateUrl: './common-card.component.html',
  styleUrls: ['./common-card.component.scss'],
})
export class CommonCardComponent {
  @Input() image!: string;
  @Input() title!: string;
  @Input() subtitle!: string;
  @Input() description!: string;
  @Input() link!: string;
  @Input() descriptionHide: boolean = false;
  @Input() linkText!: string;

  public panelOpenState = false;
}
