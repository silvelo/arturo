import { Component, Input } from '@angular/core';

@Component({
  selector: `silvelo-tab`,
  templateUrl: './tab.component.html',
  host: { class: 'flex flex-auto justify-center' },
})
export class TabComponent {
  @Input({ required: true }) link!: string;
}
