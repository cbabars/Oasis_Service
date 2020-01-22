import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeavyEngineeringComponent } from './heavy-engineering.component';

describe('HeavyEngineeringComponent', () => {
  let component: HeavyEngineeringComponent;
  let fixture: ComponentFixture<HeavyEngineeringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeavyEngineeringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeavyEngineeringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
