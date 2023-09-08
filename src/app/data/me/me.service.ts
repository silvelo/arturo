import { Injectable } from '@angular/core';
import { ButterService } from '@data/butter/services/butter.service';
import { Me } from '@data/me/me';

@Injectable()
export class MeService extends ButterService<Me> {
  constructor() {
    super('me');
  }
}
