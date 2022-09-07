import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChecksubscriptionComponent } from './checksubscription.component';

describe('ChecksubscriptionComponent', () => {
  let component: ChecksubscriptionComponent;
  let fixture: ComponentFixture<ChecksubscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChecksubscriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChecksubscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
