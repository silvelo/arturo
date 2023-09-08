import { Injectable } from '@angular/core';
import { Award } from '@data/awards/awards';
import { ButterService } from '@data/butter/services/butter.service';

@Injectable()
export class AwardsService extends ButterService<Award> {
  constructor() {
    super('awards');
  }
}
