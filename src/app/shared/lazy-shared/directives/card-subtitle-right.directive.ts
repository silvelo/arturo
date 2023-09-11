import { Directive } from '@angular/core';

@Directive({
  selector: `silvelo-card-subtitle-right, [silvelo-card-subtitle-right], [silveloCardSubtitleRight]`,
  host: { class: 'text-sm dark:text-slate-400 text-slate-500' },
})
export class CardSubtitleRightDirective {}
