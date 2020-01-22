import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductEngComponent } from './product-eng.component';

describe('ProductEngComponent', () => {
  let component: ProductEngComponent;
  let fixture: ComponentFixture<ProductEngComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductEngComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductEngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
