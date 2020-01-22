import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenralEngComponent } from './genral-eng.component';

describe('GenralEngComponent', () => {
  let component: GenralEngComponent;
  let fixture: ComponentFixture<GenralEngComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenralEngComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenralEngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
