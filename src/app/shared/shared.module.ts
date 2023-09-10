import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslocoModule } from '@ngneat/transloco';
import { CardComponent } from '@shared/components/card/card.component';
import { CardTitleDirective } from '@shared/directives/card-title.directive';

import { IconsModule } from '@shared/icons/icons.module';
import { MaterialModule } from '@shared/material/material.module';
import { ButtonComponent } from './components/button/button.component';

@NgModule({
  declarations: [CardComponent, CardTitleDirective, ButtonComponent],
  exports: [CardComponent, CardTitleDirective, CommonModule, /* FIXME: Reduce 66k*/ IconsModule, /*FIXME: Reduce: 127k  */ MaterialModule, TranslocoModule],
})
export class SharedModule {}
