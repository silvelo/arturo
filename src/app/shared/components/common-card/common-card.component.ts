import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'silvelo-common-card',
  templateUrl: './common-card.component.html',
  styleUrls: ['./common-card.component.scss']
})
export class CommonCardComponent {
  @Input() title!: string
}
