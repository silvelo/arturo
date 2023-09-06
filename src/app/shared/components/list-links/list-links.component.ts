import { Component, Input } from '@angular/core';

@Component({
  selector: 'silvelo-list-links',
  templateUrl: './list-links.component.html',
  styleUrls: ['./list-links.component.scss'],
})
export class ListLinksComponent {
  @Input() links!: string[];
}
