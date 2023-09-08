import { Component, Input } from '@angular/core';
import { Publication } from '@data/publications/publications';

@Component({
  selector: 'silvelo-publication-card',
  templateUrl: './publication-card.component.html',
  styleUrls: ['./publication-card.component.scss'],
})
export class PublicationCardComponent {
  @Input({ required: true }) publication!: Publication;
}
