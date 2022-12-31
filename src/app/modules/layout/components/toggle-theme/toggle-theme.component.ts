import { Component } from '@angular/core';
import { ThemeService } from '@app/core/services/theme.service';

@Component({
  selector: 'silvelo-toggle-theme',
  templateUrl: './toggle-theme.component.html',
  styleUrls: ['./toggle-theme.component.scss']
})
export class ToggleThemeComponent {
  constructor(public themService: ThemeService) {}
}
