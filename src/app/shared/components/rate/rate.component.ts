import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'silvelo-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.scss']
})
export class RateComponent {
  @Input() rate!: number
  @Input() showIcon: boolean = false
}