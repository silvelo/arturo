import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Sidenav, sidenav } from '@core/common/navbar';

@Component({
  selector: 'silvelo-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  @Input() theme: unknown | null = null;
  @Output() toggle = new EventEmitter();

  public sidenav: Sidenav[] = sidenav;
}
