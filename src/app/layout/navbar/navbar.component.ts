import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core'
import { Sidenav, sidenav } from '@app/core/common/navbar'

import { ButterService } from '@data/butter/service/butter.service'

@Component({
  selector: 'silvelo-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  @Input() theme: string | null = null
  @Output() toggle = new EventEmitter()

  public sidenav: Sidenav[] = sidenav

  constructor() {}
}
