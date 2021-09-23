import { Component, OnInit } from '@angular/core';

import { DetectDeviceService } from 'src/app/shared/services/detect-device.service';
import { Product } from 'src/app/models/products/product.model';
import { ProductsService } from '../../services/products/products.service';

import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'page-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss']
})
export class PaymentsComponent implements OnInit {

  private readonly unsubscribe$: Subject<void>;
  isMobile$: Observable<boolean>;

  products: Product[] = [];
  columns = ['Produto', 'Preço', 'Categoria', 'Descrição'];
  isLoading = true;

  constructor(private productsService: ProductsService, private detectDevice: DetectDeviceService) {
    this.unsubscribe$ = new Subject();
    this.isMobile$ = this.detectDevice.onlyDesktopDevice();
  }

  ngOnInit(): void {
    this.onGetProducts();
  }

  onGetProducts(): void {
    this.productsService.getProducts()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(response => {
        this.products = response;
        this.isLoading = false;
      });
  }

  onCallMe(): void {
    alert('Ligando');
  }

  onSeeProducts(): void {
    alert('Ops, você já esta na página de produtos ;)');
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
