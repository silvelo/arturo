import { Component, EventEmitter, OnInit, Output } from '@angular/core'
import { ThemeService } from '@app/core/services/theme.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Output() toggle = new EventEmitter()

  constructor(public themService: ThemeService) {}
}
