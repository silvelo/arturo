import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'silvelo-content-layout',
  templateUrl: './content-layout.component.html',
  styleUrls: ['./content-layout.component.scss'],
  host: { class: 'flex flex-col h-full' },
})
export class ContentLayoutComponent implements OnInit {
  isClosed = false;

  ngOnInit(): void {
    const screenWidth = window.innerWidth;
    if (screenWidth < 768) {
      this.isClosed = true;
    }
  }

  onToggle() {
    this.isClosed = !this.isClosed;
  }

  onClose() {
    const screenWidth = window.innerWidth;
    if (screenWidth < 768) {
      this.isClosed = true;
    }
  }
}
