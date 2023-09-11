import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslocoModule } from '@ngneat/transloco';
import { CardComponent } from '@shared/components/card/card.component';
import { CardTitleDirective } from '@shared/directives/card-title.directive';

import { RouterModule } from '@angular/router';
import { IconsModule } from '@shared/icons/icons.module';
import { ButtonDirective } from './directives/button.directive';

@NgModule({
  declarations: [CardComponent, ButtonDirective, CardTitleDirective, ButtonDirective],
  exports: [CardComponent, ButtonDirective, CardTitleDirective, CommonModule, RouterModule, /* FIXME: Reduce 66k*/ IconsModule, TranslocoModule],
})
export class SharedModule {}
