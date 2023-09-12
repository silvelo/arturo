import { Component, EventEmitter, Output } from '@angular/core';
import { ThemeModeService } from '@core/services/theme-mode.service';

@Component({
  selector: 'silvelo-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  host: { class: 'bg-white dark:bg-slate-800 h-14 flex shadow-xl' },
})
export class HeaderComponent {
  @Output() toggle = new EventEmitter();

  constructor(public themeModeService: ThemeModeService) {}
}
