import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertiesChartComponent } from './properties-chart.component';

describe('PropertiesChartComponent', () => {
  let component: PropertiesChartComponent;
  let fixture: ComponentFixture<PropertiesChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertiesChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertiesChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
