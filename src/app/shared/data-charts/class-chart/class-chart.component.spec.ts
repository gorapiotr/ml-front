import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassChartComponent } from './class-chart.component';

describe('ClassChartComponent', () => {
  let component: ClassChartComponent;
  let fixture: ComponentFixture<ClassChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
