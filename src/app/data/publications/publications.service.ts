import { Injectable } from '@angular/core';

import { ButterService } from '@data/butter/services/butter.service';
import { Publication } from '@data/publications/publications';

@Injectable()
export class PublicationsService extends ButterService<Publication> {
  constructor() {
    super('publications');
  }
}
