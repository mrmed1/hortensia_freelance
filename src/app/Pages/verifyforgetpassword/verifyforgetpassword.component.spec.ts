import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyforgetpasswordComponent } from './verifyforgetpassword.component';

describe('VerifyforgetpasswordComponent', () => {
  let component: VerifyforgetpasswordComponent;
  let fixture: ComponentFixture<VerifyforgetpasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerifyforgetpasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifyforgetpasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
