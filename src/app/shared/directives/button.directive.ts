import { Directive } from '@angular/core';

@Directive({
  selector: 'silvelo-button, [silvelo-button],[silveloButton]',
  host: { class: 'border-2 p-2  rounded-xl border-gray-800 text-slate-900 dark:text-slate-400 dark:border-slate-400  hover:bg-gray-200' },
})
export class ButtonDirective {}
