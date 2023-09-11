import { Component } from '@angular/core';
import { Me } from '@data/me/me';
import { MeService } from '@data/me/me.service';

@Component({
  selector: 'silvelo-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  public me?: Me;

  constructor(private meService: MeService) {
    this.meService.get().subscribe(me => {
      this.me = me[0];
    });
  }
}
