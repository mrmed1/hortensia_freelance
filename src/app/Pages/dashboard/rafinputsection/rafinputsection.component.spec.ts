import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RafinputsectionComponent } from './rafinputsection.component';

describe('RafinputsectionComponent', () => {
  let component: RafinputsectionComponent;
  let fixture: ComponentFixture<RafinputsectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RafinputsectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RafinputsectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
