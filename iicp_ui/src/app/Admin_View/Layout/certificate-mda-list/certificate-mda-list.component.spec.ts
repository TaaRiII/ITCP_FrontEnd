import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificateMdaListComponent } from './certificate-mda-list.component';

describe('CertificateMdaListComponent', () => {
  let component: CertificateMdaListComponent;
  let fixture: ComponentFixture<CertificateMdaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificateMdaListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CertificateMdaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
