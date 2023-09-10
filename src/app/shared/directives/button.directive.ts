import { Directive } from '@angular/core';

@Directive({
  selector: 'silvelo-button, [silvelo-button],[silveloButton]',
  host: { class: 'border-2 p-2 rounded-xl border-gray-800 text-gray-800 hover:bg-gray-200' },
})
export class ButtonDirective {}
