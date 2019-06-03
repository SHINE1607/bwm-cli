import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyFormNotificationComponent } from './empty-form-notification.component';

describe('EmptyFormNotificationComponent', () => {
  let component: EmptyFormNotificationComponent;
  let fixture: ComponentFixture<EmptyFormNotificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmptyFormNotificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmptyFormNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
