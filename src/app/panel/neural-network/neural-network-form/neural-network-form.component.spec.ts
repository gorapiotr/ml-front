import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NeuralNetworkFormComponent } from './neural-network-form.component';

describe('NeuralNetworkFormComponent', () => {
  let component: NeuralNetworkFormComponent;
  let fixture: ComponentFixture<NeuralNetworkFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NeuralNetworkFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NeuralNetworkFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
