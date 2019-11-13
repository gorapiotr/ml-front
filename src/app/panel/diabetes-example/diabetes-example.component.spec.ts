import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiabetesExampleComponent } from './diabetes-example.component';

describe('DiabetesExampleComponent', () => {
  let component: DiabetesExampleComponent;
  let fixture: ComponentFixture<DiabetesExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiabetesExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiabetesExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
