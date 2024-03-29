import { Component, Input } from '@angular/core';
import { Certification } from '@data/certifications/certifications';

@Component({
  selector: 'silvelo-certification-card',
  templateUrl: './certification-card.component.html',
  styleUrls: ['./certification-card.component.scss'],
})
export class CertificationCardComponent {
  @Input({ required: true }) certification!: Certification;
}
