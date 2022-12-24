import { Component, Input } from '@angular/core'

@Component({
  selector: 'silvelo-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() image!: string
  @Input() title!: string
  @Input() subtitle!: string
  @Input() description!: string
  @Input() link!: string
  @Input() descriptionHide: boolean = false
  @Input() linkText!: string

  public panelOpenState = false
}
