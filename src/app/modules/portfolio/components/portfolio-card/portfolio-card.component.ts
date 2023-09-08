import { Component, Input } from '@angular/core';
import { Portfolio } from '@data/portfolio/portfolio';

@Component({
  selector: 'silvelo-portfolio-card',
  templateUrl: './portfolio-card.component.html',
  styleUrls: ['./portfolio-card.component.scss'],
})
export class PortfolioCardComponent {
  @Input({ required: true }) portfolio!: Portfolio;
}
