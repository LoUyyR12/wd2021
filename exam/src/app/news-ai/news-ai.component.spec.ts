import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsAiComponent } from './news-ai.component';

describe('NewsAiComponent', () => {
  let component: NewsAiComponent;
  let fixture: ComponentFixture<NewsAiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsAiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsAiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
