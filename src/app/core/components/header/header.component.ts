import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'silvelo-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  host: { class: 'flex px-4 bg-white dark:bg-slate-800' },
})
export class HeaderComponent {
  @Output() toggle = new EventEmitter();
}
