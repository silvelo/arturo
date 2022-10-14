import { Component, Input } from '@angular/core'
import { Portfolio } from '@app/data/butter/types/portfolio'

@Component({
  selector: 'app-portfolio-card',
  templateUrl: './portfolio-card.component.html',
  styleUrls: ['./portfolio-card.component.scss']
})
export class PortfolioCardComponent {
  @Input() portfolio!: Portfolio
}
