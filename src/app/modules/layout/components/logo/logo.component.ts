import { Component, Input } from '@angular/core'

@Component({
  selector: 'silvelo-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent {
  @Input() logo!: string
}
