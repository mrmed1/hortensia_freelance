import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigmoidinputsectionComponent } from './sigmoidinputsection.component';

describe('SigmoidinputsectionComponent', () => {
  let component: SigmoidinputsectionComponent;
  let fixture: ComponentFixture<SigmoidinputsectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SigmoidinputsectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SigmoidinputsectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
