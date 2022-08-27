import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupSSOComponent } from './signup-sso.component';

describe('SignupSSOComponent', () => {
  let component: SignupSSOComponent;
  let fixture: ComponentFixture<SignupSSOComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupSSOComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupSSOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
