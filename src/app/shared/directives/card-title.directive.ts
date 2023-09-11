import { Directive } from '@angular/core';

@Directive({
  selector: `silvelo-card-title, [silvelo-card-title], [silveloCardTitle]`,
  host: { class: 'flex-1 text-lg dark:text-white text-slate-900 font-bold leading-none' },
})
export class CardTitleDirective {}
