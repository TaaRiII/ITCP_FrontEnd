import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchRegisterAcountsComponent } from './search-register-acounts.component';

describe('SearchRegisterAcountsComponent', () => {
  let component: SearchRegisterAcountsComponent;
  let fixture: ComponentFixture<SearchRegisterAcountsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchRegisterAcountsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchRegisterAcountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
