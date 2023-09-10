import { Component } from '@angular/core';

@Component({
  selector: 'silvelo-content-layout',
  templateUrl: './content-layout.component.html',
  styleUrls: ['./content-layout.component.scss'],
})
export class ContentLayoutComponent {
  isClosed = false;

  onToggle() {
    this.isClosed = !this.isClosed;
  }
}
