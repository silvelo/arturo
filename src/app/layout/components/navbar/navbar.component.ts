import { Component, EventEmitter, Output } from '@angular/core';
import { SIDENAV } from '@core/common/navbar';
import { Sidenav } from '@data/butter/types/butter';
import packageJson from '@root/package.json';

@Component({
  selector: 'silvelo-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  @Output() toggle = new EventEmitter();

  public version: string = packageJson.version;
  public sidenav: Sidenav[] = SIDENAV;
}
