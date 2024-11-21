import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowMyWishlistProductComponent } from './show-my-wishlist-product.component';

describe('ShowMyWishlistProductComponent', () => {
  let component: ShowMyWishlistProductComponent;
  let fixture: ComponentFixture<ShowMyWishlistProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowMyWishlistProductComponent]
    });
    fixture = TestBed.createComponent(ShowMyWishlistProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
