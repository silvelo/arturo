import { Component } from '@angular/core';
import { ROUTE_NAMES } from '@core/common/routes';

@Component({
  selector: 'silvelo-experience',
  templateUrl: './experience.page.html',
  styleUrls: ['./experience.page.scss'],
})
export class ExperiencePage {
  public routeNames = ROUTE_NAMES;
}
