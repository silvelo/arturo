import { Directive } from '@angular/core';

@Directive({
  selector: 'silvelo-icon-button, [silvelo-icon-button],[silveloIconButton]',
  host: { class: 'flex items-center justify-center m-1 p-1 w-8 h-8 hover:bg-gray-200' },
})
export class IconButtonDirective {}
