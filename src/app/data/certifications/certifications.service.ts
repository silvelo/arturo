import { Injectable } from '@angular/core';

import { ButterService } from '@data/butter/services/butter.service';
import { Certification } from '@data/certifications/certifications';

@Injectable({ providedIn: 'root' })
export class CertificationsService extends ButterService<Certification> {
  constructor() {
    super('certifications');
  }
}
