import { Component, EventEmitter, Output } from '@angular/core';
import { SIDENAV } from '@core/common/navbar';
import { Sidenav } from '@data/butter/types/butter';
import packageJson from '@root/package.json';

@Component({
  selector: 'silvelo-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  host: { class: 'flex flex-col w-[16rem] rounded-r-2xl	 shadow-2xl bg-white' },
})
export class NavbarComponent {
  @Output() toggle = new EventEmitter();

  public version: string = packageJson.version;
  public sidenav: Sidenav[] = SIDENAV;
}
