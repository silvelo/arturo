import { Component, Input, OnInit } from '@angular/core'
import { Certification } from '@app/data/butter/types/certification'

@Component({
  selector: 'app-certification-card',
  templateUrl: './certification-card.component.html',
  styleUrls: ['./certification-card.component.scss']
})
export class CertificationCardComponent {
  @Input() certification: Certification | undefined = undefined
}
