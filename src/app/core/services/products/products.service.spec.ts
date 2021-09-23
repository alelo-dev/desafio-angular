import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { ProductsService } from './products.service';
import { getProductsResponseMock } from '../mocks/payments/payments.service.mock';
import { bodyProductMock } from '../mocks/payments/payments.params.mock';

import { environment } from 'src/environments/environment';

describe('ProductsService', () => {
  let productService: ProductsService;
  let httpMock: HttpTestingController;
  let baseUrl: string;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [ProductsService],
    });

    baseUrl = environment.url;

    productService = TestBed.inject(ProductsService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(productService).toBeTruthy();
  });
  // jest.DoneCallback
  it('should have getProducts function (Success case)', (done: DoneFn) => {
    const limit = 10;
    const url = `${baseUrl}products?limit=${limit}`;

    productService.getProducts().subscribe(() => done());

    const productsRequest = httpMock.expectOne(url);

    productsRequest.flush(getProductsResponseMock);

    expect(productsRequest.request.method).toBe('GET');
    expect(productsRequest.request.url).toBe('https://fakestoreapi.com/products?limit=10');
  });

  it('should have getProducts function (Error case)', (done: DoneFn) => {
    const limit = 10;
    const url = `${baseUrl}products?limit=${limit}`;
    let statusCode: number;

    productService.getProducts().subscribe(
      () => {
        done();
      },
      err => {
        statusCode = err.status;
        done();
      },
    );

    const productsRequest = httpMock.expectOne(url);

    productsRequest.error(new ErrorEvent('unauthorized'), { status: 404, statusText: 'bad request' });

    expect(productsRequest.request.method).toBe('GET');
    expect(statusCode).toBe(404);
  });

  it('should have createProduct function (Success case)', (done: DoneFn) => {
    const url = `${baseUrl}products`;

    productService.createProduct(bodyProductMock).subscribe(() => done());

    const productsRequest = httpMock.expectOne(url);

    productsRequest.flush({});

    expect(productsRequest.request.method).toBe('POST');
    expect(productsRequest.request.url).toBe('https://fakestoreapi.com/products');
  });

  it('should have createProduct function (Error case)', (done: DoneFn) => {
    const url = `${baseUrl}products`;
    let statusCode: number;

    productService.createProduct(bodyProductMock).subscribe(
      () => {
        done();
      },
      err => {
        statusCode = err.status;
        done();
      },
    );

    const productsRequest = httpMock.expectOne(url);

    productsRequest.error(new ErrorEvent('unauthorized'), { status: 404, statusText: 'bad request' });

    expect(productsRequest.request.method).toBe('POST');
    expect(statusCode).toBe(404);
  });

  it('should have updateProduct function (Success case)', (done: DoneFn) => {
    const id = 1;
    const url = `${baseUrl}products/${id}`;

    productService.updateProduct(id, bodyProductMock).subscribe(() => done());

    const productsRequest = httpMock.expectOne(url);

    productsRequest.flush({});

    expect(productsRequest.request.method).toBe('PUT');
    expect(productsRequest.request.url).toBe('https://fakestoreapi.com/products/1');
  });

  it('should have updateProduct function (Error case)', (done: DoneFn) => {
    const id = 1;
    const url = `${baseUrl}products/${id}`;
    let statusCode: number;

    productService.updateProduct(id, bodyProductMock).subscribe(
      () => {
        done();
      },
      err => {
        statusCode = err.status;
        done();
      },
    );

    const productsRequest = httpMock.expectOne(url);

    productsRequest.error(new ErrorEvent('unauthorized'), { status: 404, statusText: 'bad request' });

    expect(productsRequest.request.method).toBe('PUT');
    expect(statusCode).toBe(404);
  });

  it('should have deleteProduct function (Success case)', (done: DoneFn) => {
    const id = 1;
    const url = `${baseUrl}products/${id}`;

    productService.deleteProduct(id).subscribe(() => done());

    const productsRequest = httpMock.expectOne(url);

    productsRequest.flush({});

    expect(productsRequest.request.method).toBe('DELETE');
    expect(productsRequest.request.url).toBe('https://fakestoreapi.com/products/1');
  });

  it('should have deleteProduct function (Error case)', (done: DoneFn) => {
    const id = 1;
    const url = `${baseUrl}products/${id}`;
    let statusCode: number;

    productService.deleteProduct(id).subscribe(
      () => {
        done();
      },
      err => {
        statusCode = err.status;
        done();
      },
    );

    const productsRequest = httpMock.expectOne(url);

    productsRequest.error(new ErrorEvent('unauthorized'), { status: 404, statusText: 'bad request' });

    expect(productsRequest.request.method).toBe('DELETE');
    expect(statusCode).toBe(404);
  });

});
