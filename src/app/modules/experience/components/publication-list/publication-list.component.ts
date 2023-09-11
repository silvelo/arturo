import { Component } from '@angular/core';
import { Publication } from '@data/publications/publications';
import { PublicationsService } from '@data/publications/publications.service';

@Component({
  selector: 'silvelo-publication-list',
  templateUrl: './publication-list.component.html',
  styleUrls: ['./publication-list.component.scss'],
})
export class PublicationListComponent {
  public publications: Publication[] = [];

  constructor(private publicationsService: PublicationsService) {
    this.publicationsService.get().subscribe(publications => {
      this.publications = publications;
    });
  }
}
