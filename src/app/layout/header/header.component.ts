import { Component, EventEmitter, Input, Output } from '@angular/core'
import { ThemeService } from '@app/core/services/theme.service'

@Component({
  selector: 'silvelo-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Output() toggle = new EventEmitter()

  constructor(public themService: ThemeService) {}
}
