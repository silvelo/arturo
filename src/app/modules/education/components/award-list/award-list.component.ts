import { Component } from '@angular/core';
import { Award } from '@data/awards/awards';
import { AwardsService } from '@data/awards/awards.service';

@Component({
  selector: 'silvelo-award-list',
  templateUrl: './award-list.component.html',
  styleUrls: ['./award-list.component.scss'],
})
export class AwardListComponent {
  public awards: Award[] = [];

  constructor(private awardsService: AwardsService) {
    this.awardsService.get().subscribe(awards => {
      this.awards = awards;
    });
  }
}
