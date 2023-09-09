import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslocoModule } from '@ngneat/transloco';

import { IconsModule } from '@root/src/app/shared/icons/icons.module';
import { MaterialModule } from '@shared/material/material.module';

@NgModule({
  exports: [CommonModule, /* FIXME: Reduce 66k*/ IconsModule, /*FIXME: Reduce: 127k  */ MaterialModule, TranslocoModule],
})
export class SharedModule {}
