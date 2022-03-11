import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectoppComponent } from './selectopp.component';

describe('SelectoppComponent', () => {
  let component: SelectoppComponent;
  let fixture: ComponentFixture<SelectoppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectoppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectoppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
