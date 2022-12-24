import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'silvelo-common-header',
  templateUrl: './common-header.component.html',
  styleUrls: ['./common-header.component.scss']
})
export class CommonHeaderComponent {
  @Input() title!: string
  @Input() subtitle: string | undefined
}
