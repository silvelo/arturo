import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core'

import { ButterService } from '@data/butter/service/butter.service'
import { Sidenav } from '@data/butter/types/sidenav'
import { firstValueFrom } from 'rxjs'

@Component({
  selector: 'silvelo-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input() theme: string | null = null
  @Output() toggle = new EventEmitter()

  public sidenav: Sidenav[] = []

  constructor(private butterService: ButterService) {}

  async ngOnInit() {
    const butterResponse = await firstValueFrom(this.butterService.getSidenav())
    this.sidenav = butterResponse.data.sidenav
  }
}
