import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCommitteeComponent } from './admin-committee.component';

describe('AdminCommitteeComponent', () => {
  let component: AdminCommitteeComponent;
  let fixture: ComponentFixture<AdminCommitteeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCommitteeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminCommitteeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
