import { Directive } from '@angular/core';

@Directive({
  selector: `silvelo-card-title-right, [silvelo-card-title-right], [silveloCardTitleRight]`,
  host: { class: 'text-sm dark:text-slate-400 text-slate-500' },
})
export class CardTitleRightDirective {}
