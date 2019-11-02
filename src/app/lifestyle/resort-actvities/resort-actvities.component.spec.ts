import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResortActvitiesComponent } from './resort-actvities.component';

describe('ResortActvitiesComponent', () => {
  let component: ResortActvitiesComponent;
  let fixture: ComponentFixture<ResortActvitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResortActvitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResortActvitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
