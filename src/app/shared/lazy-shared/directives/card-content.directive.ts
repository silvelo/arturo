import { Directive } from '@angular/core';

@Directive({
  selector: `silvelo-card-content, [silvelo-card-content], [silveloCardContent]`,
  host: { class: 'block dark:text-slate-400 text-slate-500 text-sm mt-3' },
})
export class CardContentDirective {}
