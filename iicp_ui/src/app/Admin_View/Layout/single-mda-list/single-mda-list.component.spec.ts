import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleMdaListComponent } from './single-mda-list.component';

describe('SingleMdaListComponent', () => {
  let component: SingleMdaListComponent;
  let fixture: ComponentFixture<SingleMdaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleMdaListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleMdaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
