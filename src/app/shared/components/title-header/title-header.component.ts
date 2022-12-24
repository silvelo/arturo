import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'silvelo-title-header',
  templateUrl: './title-header.component.html',
  styleUrls: ['./title-header.component.scss']
})
export class TitleHeaderComponent {
  @Input() title!: string
}
