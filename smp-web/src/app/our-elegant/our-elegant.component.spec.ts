import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurElegantComponent } from './our-elegant.component';

describe('OurElegantComponent', () => {
  let component: OurElegantComponent;
  let fixture: ComponentFixture<OurElegantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OurElegantComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurElegantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
