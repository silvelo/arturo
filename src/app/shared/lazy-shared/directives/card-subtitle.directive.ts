import { Directive } from '@angular/core';

@Directive({
  selector: `silvelo-card-subtitle, [silvelo-card-subtitle], [silveloCardSubtitle]`,
  host: { class: 'flex-1 dark:text-slate-400 text-slate-500 my-1' },
})
export class CardSubtitleDirective {}
