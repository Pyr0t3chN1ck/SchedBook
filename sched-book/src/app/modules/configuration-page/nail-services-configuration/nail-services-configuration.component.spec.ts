import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NailServicesConfigurationComponent } from './nail-services-configuration.component';

describe('NailServicesConfigurationComponent', () => {
  let component: NailServicesConfigurationComponent;
  let fixture: ComponentFixture<NailServicesConfigurationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NailServicesConfigurationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NailServicesConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
