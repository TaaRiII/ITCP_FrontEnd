import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperRegisterUserComponent } from './super-register-user.component';

describe('SuperRegisterUserComponent', () => {
  let component: SuperRegisterUserComponent;
  let fixture: ComponentFixture<SuperRegisterUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperRegisterUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuperRegisterUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
