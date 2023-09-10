import { Component } from '@angular/core';
import { Certification } from '@data/certifications/certifications';
import { CertificationsService } from '@data/certifications/certifications.service';

@Component({
  selector: 'silvelo-certification-list',
  templateUrl: './certification-list.component.html',
  styleUrls: ['./certification-list.component.scss'],
})
export class CertificationListComponent {
  public certifications: Certification[] = [];

  constructor(private certificationsService: CertificationsService) {
    this.certificationsService.get().subscribe(certifications => {
      this.certifications = certifications;
    });
  }
}
