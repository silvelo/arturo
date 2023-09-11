import { Directive } from '@angular/core';

@Directive({
  selector: `silvelo-card-actions, [silvelo-card-actions], [silveloCardActions]`,
  host: { class: 'flex justify-center gap-4 flex-wrap mt-4' },
})
export class CardActionsDirective {}
