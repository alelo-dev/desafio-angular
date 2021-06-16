import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaymentsComponent } from './pages/payments.component';
import { PromotionWidgetComponent } from './pages/components/promotion-widget.component';

@NgModule({
  declarations: [
    AppComponent,
    PaymentsComponent,
    PromotionWidgetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    PaymentsComponent
  ]
})
export class AppModule { }
