import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'app-range-date',
  templateUrl: './range-date.component.html',
  styleUrls: ['./range-date.component.scss']
})
export class RangeDateComponent {
  @Input() start_date!: string
  @Input() end_date!: string
}
