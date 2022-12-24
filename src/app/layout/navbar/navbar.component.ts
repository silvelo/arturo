import { Component, Output, Input, EventEmitter } from '@angular/core'
import { Sidenav, sidenav } from '@app/core/common/navbar'

@Component({
  selector: 'silvelo-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  @Input() theme: any | null = null
  @Output() toggle = new EventEmitter()

  public sidenav: Sidenav[] = sidenav
}
