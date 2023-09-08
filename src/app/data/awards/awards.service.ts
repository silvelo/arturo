import { Injectable } from '@angular/core';
import { Award } from '@data/awards/awards';
import { ButterService } from '@data/butter/services/butter.service';

@Injectable({ providedIn: 'root' })
export class AwardsService extends ButterService<Award> {
  constructor() {
    super('awards');
  }
}
