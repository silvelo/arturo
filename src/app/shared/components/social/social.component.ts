import { Component } from '@angular/core';
import { Social } from '@data/socials/socials';
import { SocialsService } from '@data/socials/socials.service';

@Component({
  selector: 'silvelo-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss'],
})
export class SocialComponent {
  public socialList: Social[] = [];

  constructor(private socialsService: SocialsService) {
    this.socialsService.get().subscribe(socials => {
      this.socialList = socials;
    });
  }
}
