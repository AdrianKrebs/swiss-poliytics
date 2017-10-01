import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeatComponent } from './seat.component';

xdescribe('UnitedFederalAssemblyComponent', () => {
  let component: SeatComponent;
  let fixture: ComponentFixture<SeatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeatComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
