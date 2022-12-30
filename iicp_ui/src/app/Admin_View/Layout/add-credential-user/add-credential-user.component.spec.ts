import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCredentialUserComponent } from './add-credential-user.component';

describe('AddCredentialUserComponent', () => {
  let component: AddCredentialUserComponent;
  let fixture: ComponentFixture<AddCredentialUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCredentialUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCredentialUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
