import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenewCertificateComponent } from './renew-certificate.component';

describe('RenewCertificateComponent', () => {
  let component: RenewCertificateComponent;
  let fixture: ComponentFixture<RenewCertificateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RenewCertificateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RenewCertificateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
