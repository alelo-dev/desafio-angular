import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { PaymentsComponent } from './payments.component';
import { AleloTableComponent } from 'src/app/shared/components/alelo-table/alelo-table.component';
import { AleloCardActionComponent } from 'src/app/shared/components/alelo-card-action/alelo-card-action.component';
import { AleloCardInfoComponent } from 'src/app/shared/components/alelo-card-info/alelo-card-info.component';
import { AleloButtonComponent } from 'src/app/shared/components/alelo-button/alelo-button.component';
import { ProductsService } from '../../services/products/products.service';
import { ProductsServiceMock } from '../../services/mocks/payments/payments.service.mock';

import { MockComponent } from 'ng-mocks';

describe('PaymentsComponent', () => {
    let component: PaymentsComponent;
    let fixture: ComponentFixture<PaymentsComponent>;
    let productsService: ProductsService;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [
                PaymentsComponent,
                MockComponent(AleloTableComponent),
                MockComponent(AleloCardActionComponent),
                MockComponent(AleloCardInfoComponent),
                MockComponent(AleloButtonComponent)
            ],
            imports: [HttpClientModule],
            providers: [{ provide: ProductsService, useClass: ProductsServiceMock }]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(PaymentsComponent);
        component = fixture.componentInstance;

        productsService = TestBed.inject(ProductsService);

        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should have call onGetProducts function in ngOnInit', () => {
        const onGetProductsSpy = spyOn(component, 'onGetProducts');

        component.ngOnInit();

        expect(onGetProductsSpy).toHaveBeenCalledTimes(1);
    });

    it('should have call onGetProducts function with service', () => {
        const productsServiceSpy = spyOn(productsService, 'getProducts').and.callThrough();

        component.onGetProducts();

        expect(component.isLoading).toBe(false);
        expect(productsServiceSpy).toHaveBeenCalledTimes(1);
    });
});
