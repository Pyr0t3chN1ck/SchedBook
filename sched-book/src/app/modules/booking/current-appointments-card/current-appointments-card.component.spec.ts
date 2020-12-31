import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentAppointmentsCardComponent } from './current-appointments-card.component';

describe('CurrentAppointmentsCardComponent', () => {
  let component: CurrentAppointmentsCardComponent;
  let fixture: ComponentFixture<CurrentAppointmentsCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentAppointmentsCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentAppointmentsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
