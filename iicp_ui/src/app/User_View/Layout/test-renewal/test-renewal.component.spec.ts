import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestRenewalComponent } from './test-renewal.component';

describe('TestRenewalComponent', () => {
  let component: TestRenewalComponent;
  let fixture: ComponentFixture<TestRenewalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestRenewalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestRenewalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
