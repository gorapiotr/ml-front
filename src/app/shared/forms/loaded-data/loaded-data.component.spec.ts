import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadedDataComponent } from './loaded-data.component';

describe('LoadedDataComponent', () => {
  let component: LoadedDataComponent;
  let fixture: ComponentFixture<LoadedDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadedDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadedDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
