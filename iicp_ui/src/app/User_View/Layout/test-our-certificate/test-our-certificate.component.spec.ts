import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestOurCertificateComponent } from './test-our-certificate.component';

describe('TestOurCertificateComponent', () => {
  let component: TestOurCertificateComponent;
  let fixture: ComponentFixture<TestOurCertificateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestOurCertificateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestOurCertificateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
