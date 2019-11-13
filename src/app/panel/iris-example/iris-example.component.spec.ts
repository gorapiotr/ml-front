import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IrisExampleComponent } from './iris-example.component';

describe('IrisExampleComponent', () => {
  let component: IrisExampleComponent;
  let fixture: ComponentFixture<IrisExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IrisExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IrisExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
