import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { NavbarComponent } from '@core/components/navbar/navbar.component';

@Component({
  selector: 'silvelo-content-layout',
  templateUrl: './content-layout.component.html',
  styleUrls: ['./content-layout.component.scss'],
  host: { class: 'flex flex-col h-full' },
})
export class ContentLayoutComponent implements OnInit {
  @ViewChild('sidebar') sidebar!: NavbarComponent;

  isClosed = false;
  private overlay?: HTMLDivElement;

  constructor(@Inject(DOCUMENT) private document: Document) {}

  ngOnInit() {
    const screenWidth = window.innerWidth;
    if (screenWidth < 768) {
      this.isClosed = true;
    }
  }

  onToggle() {
    this.isClosed = !this.isClosed;

    this.checkOverlay();
  }

  onClick() {
    const screenWidth = window.innerWidth;
    if (screenWidth < 768) {
      this.isClosed = true;
      this.checkOverlay();
    }
  }

  private checkOverlay() {
    if (!this.isClosed) {
      this.createContainer();
    } else {
      this.removeContainer();
    }
  }

  private removeContainer() {
    if (this.overlay) {
      this.document.body.removeChild(this.overlay);
      this.overlay = undefined;
    }
  }

  private createContainer() {
    this.overlay = this.document.createElement('div');
    this.overlay.id = 'overlay';
    this.overlay.classList.add('absolute', 'top-0', 'h-full', 'w-full', 'bg-black', 'bg-opacity-70');
    this.document.body.appendChild(this.overlay);
  }
}
