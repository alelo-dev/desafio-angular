import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AleloCardActionComponent } from './components/alelo-card-action/alelo-card-action.component';
import { AleloTableComponent } from './components/alelo-table/alelo-table.component';
import { AleloIconComponent } from './components/alelo-icon/alelo-icon.component';
import { AleloButtonComponent } from './components/alelo-button/alelo-button.component';
import { AleloCardInfoComponent } from './components/alelo-card-info/alelo-card-info.component';
import { AleloLoadingComponent } from './components/alelo-loading/alelo-loading.component';

const resources = [
  AleloButtonComponent,
  AleloCardActionComponent,
  AleloCardInfoComponent,
  AleloIconComponent,
  AleloLoadingComponent,
  AleloTableComponent
];

@NgModule({
  declarations: [...resources],
  exports: [...resources],
  imports: [CommonModule]
})
export class SharedModule { }
