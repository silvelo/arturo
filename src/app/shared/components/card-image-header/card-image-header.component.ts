import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'silvelo-card-image-header',
  templateUrl: './card-image-header.component.html',
  styleUrls: ['./card-image-header.component.scss']
})
export class CardImageHeaderComponent {
  @Input() image!: string
  @Input() title!: string
  @Input() subtitle!: string
}
