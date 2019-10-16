import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputFieldComponent } from './output-field.component';

describe('OutputFieldComponent', () => {
  let component: OutputFieldComponent;
  let fixture: ComponentFixture<OutputFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutputFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutputFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
