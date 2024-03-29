import { Injectable } from '@angular/core';

import { ButterService } from '@data/butter/services/butter.service';
import { Education } from '@data/education/education';

@Injectable()
export class EducationsService extends ButterService<Education> {
  constructor() {
    super('educations');
  }
}
