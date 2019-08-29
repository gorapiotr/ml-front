import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NaiveBayesComponent } from './naive-bayes.component';

describe('NaiveBayesComponent', () => {
  let component: NaiveBayesComponent;
  let fixture: ComponentFixture<NaiveBayesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NaiveBayesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NaiveBayesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
