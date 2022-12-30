import { Component } from '@angular/core';
import packageJson from '../../../../../../package.json';

@Component({
  selector: 'silvelo-version',
  templateUrl: './version.component.html',
  styleUrls: ['./version.component.scss']
})
export class VersionComponent {
  public version: string = packageJson.version;
}
