import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowMyProductListComponent } from './show-my-product-list.component';

describe('ShowMyProductListComponent', () => {
  let component: ShowMyProductListComponent;
  let fixture: ComponentFixture<ShowMyProductListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowMyProductListComponent]
    });
    fixture = TestBed.createComponent(ShowMyProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
