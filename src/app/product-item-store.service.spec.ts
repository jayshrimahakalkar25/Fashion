import { TestBed } from '@angular/core/testing';

import { ProductItemStoreService } from './product-item-store.service';

describe('ProductItemStoreService', () => {
  let service: ProductItemStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductItemStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
