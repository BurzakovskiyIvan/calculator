import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsFieldComponent } from './buttons-field.component';

describe('ButtonsFieldComponent', () => {
  let component: ButtonsFieldComponent;
  let fixture: ComponentFixture<ButtonsFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonsFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonsFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
