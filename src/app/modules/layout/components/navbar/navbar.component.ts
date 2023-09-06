import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Sidenav, sidenav } from '@core/common/navbar';

@Component({
  selector: 'silvelo-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @Input() theme?: any;
  @Output() toggle = new EventEmitter();

  public sidenav: Sidenav[] = sidenav;
}
