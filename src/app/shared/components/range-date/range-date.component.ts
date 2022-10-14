import { Component, Input } from '@angular/core'

@Component({
  selector: 'silvelo-range-date',
  templateUrl: './range-date.component.html',
  styleUrls: ['./range-date.component.scss']
})
export class RangeDateComponent {
  @Input() start_date!: string
  @Input() end_date!: string
  @Input() current: boolean = false
  @Input() timeDiff: boolean = false
}
