import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsScienceComponent } from './news-science.component';

describe('NewsScienceComponent', () => {
  let component: NewsScienceComponent;
  let fixture: ComponentFixture<NewsScienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsScienceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsScienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
