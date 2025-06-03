import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhoItsComponent } from './who-its.component';

describe('WhoItsComponent', () => {
  let component: WhoItsComponent;
  let fixture: ComponentFixture<WhoItsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WhoItsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhoItsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
