import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentsComponent } from './payments.component';
import { ProductsService } from '../../services/products/products.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { PaymentsRoutingModule } from './payments.routing.module';

@NgModule({
  declarations: [PaymentsComponent],
  imports: [
    CommonModule,
    PaymentsRoutingModule,
    SharedModule
  ],
  exports: [PaymentsComponent],
  providers: [ProductsService]
})
export class PaymentsModule { }
