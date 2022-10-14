import { Component, Input, OnInit } from '@angular/core'
import { Award } from '@app/data/butter/types/award'

@Component({
  selector: 'app-award-card',
  templateUrl: './award-card.component.html',
  styleUrls: ['./award-card.component.scss']
})
export class AwardCardComponent {
  @Input() award!: Award
}
