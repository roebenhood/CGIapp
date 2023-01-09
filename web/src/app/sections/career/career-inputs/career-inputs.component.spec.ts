import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareerInputsComponent } from './career-inputs.component';

describe('CareerInputsComponent', () => {
  let component: CareerInputsComponent;
  let fixture: ComponentFixture<CareerInputsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CareerInputsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CareerInputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
