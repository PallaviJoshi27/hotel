import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WelnessSpaComponent } from './welness-spa.component';

describe('WelnessSpaComponent', () => {
  let component: WelnessSpaComponent;
  let fixture: ComponentFixture<WelnessSpaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WelnessSpaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelnessSpaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
