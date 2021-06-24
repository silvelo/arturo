import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-title',
  templateUrl: './info-title.component.html',
  styleUrls: ['./info-title.component.scss']
})
export class InfoTitleComponent {
  @Input() title: string;
  @Input() icon: string[];
}
