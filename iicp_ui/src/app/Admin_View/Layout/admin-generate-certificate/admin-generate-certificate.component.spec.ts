import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminGenerateCertificateComponent } from './admin-generate-certificate.component';

describe('AdminGenerateCertificateComponent', () => {
  let component: AdminGenerateCertificateComponent;
  let fixture: ComponentFixture<AdminGenerateCertificateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminGenerateCertificateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminGenerateCertificateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
