import { Injectable } from '@angular/core';

import { ButterService } from '@data/butter/services/butter.service';
import { Social } from '@data/socials/socials';

@Injectable()
export class SocialsService extends ButterService<Social> {
  constructor() {
    super('socials');
  }
}
