import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsMedicineComponent } from './news-medicine.component';

describe('NewsMedicineComponent', () => {
  let component: NewsMedicineComponent;
  let fixture: ComponentFixture<NewsMedicineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsMedicineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsMedicineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
