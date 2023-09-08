import { Injectable } from '@angular/core';
import { ButterService } from '@data/butter/services/butter.service';
import { Experience } from '@data/experience/experience';

@Injectable()
export class ExperiencesService extends ButterService<Experience> {
  constructor() {
    super('experiences');
  }
}
