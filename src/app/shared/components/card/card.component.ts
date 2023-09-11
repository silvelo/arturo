import { Component } from '@angular/core';

@Component({
  selector: 'silvelo-card',
  templateUrl: './card.component.html',
  host: { class: 'block bg-white dark:bg-slate-800 shadow-lg ring-1 ring-slate-900/5 rounded-xl p-4' },
})
export class CardComponent {}
