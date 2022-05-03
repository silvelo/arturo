import { Component, Input, OnInit } from '@angular/core'
import { Publication } from '@app/data/butter/types/publication'

@Component({
  selector: 'app-publication-card',
  templateUrl: './publication-card.component.html',
  styleUrls: ['./publication-card.component.scss']
})
export class PublicationCardComponent {
  @Input() publication: Publication | undefined = undefined
}
