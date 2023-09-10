import { Component } from '@angular/core';
import { ROUTE_NAMES } from '@core/common/routes';

@Component({
  selector: 'silvelo-education',
  templateUrl: './education.page.html',
  styleUrls: ['./education.page.scss'],
})
export class EducationPage {
  public routeNames = ROUTE_NAMES;
}
