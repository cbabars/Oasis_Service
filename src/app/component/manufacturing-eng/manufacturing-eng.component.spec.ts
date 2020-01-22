import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManufacturingEngComponent } from './manufacturing-eng.component';

describe('ManufacturingEngComponent', () => {
  let component: ManufacturingEngComponent;
  let fixture: ComponentFixture<ManufacturingEngComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManufacturingEngComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManufacturingEngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
