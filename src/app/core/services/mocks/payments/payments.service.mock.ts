import { Product } from 'src/app/models/products/product.model';

import { of, Observable } from 'rxjs';

export const getProductsResponseMock: Product[] = [
    {
        product: 'Chair gamer RAZER',
        price: 300,
        category: 'Informatics',
        description: 'Whatever description for chair',
        image: ''
    },
    {
        product: 'Mouse gamer HyperX',
        price: 200,
        category: 'Informatics',
        description: 'Whatever description for mouse',
        image: ''
    }
]

export class ProductsServiceMock {
    getProducts(limit = 2): Observable<Product[]> {
        return of(getProductsResponseMock);
    }

    createProduct(body: Product): Observable<Product> {
        return of(body);
    }

    updateProduct(id: number, body: Product): Observable<Product> {
        return of(body);
    }

    deleteProduct(id: number): Observable<Product> {
        return of({
            product: 'Mouse gamer HyperX',
            price: 200,
            category: 'Informatics',
            description: 'Whatever description for mouse',
            image: ''
        })
    }
} 