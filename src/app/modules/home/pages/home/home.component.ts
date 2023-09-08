import { Component, OnInit } from '@angular/core';
import { ButterService } from '@data/butter/service/butter.service';
import { Me } from '@data/butter/types/me';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'silvelo-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public me: Me | undefined;

  constructor(private butterService: ButterService) {}

  async ngOnInit() {
    this.me = await firstValueFrom(this.butterService.getMe());
  }
}
