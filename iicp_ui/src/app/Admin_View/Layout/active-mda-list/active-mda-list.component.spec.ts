import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveMdaListComponent } from './active-mda-list.component';

describe('ActiveMdaListComponent', () => {
  let component: ActiveMdaListComponent;
  let fixture: ComponentFixture<ActiveMdaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActiveMdaListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActiveMdaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
