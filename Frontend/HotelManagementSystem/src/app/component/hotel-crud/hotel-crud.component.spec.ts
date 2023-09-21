import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelCrudComponent } from './hotel-crud.component';

describe('HotelCrudComponent', () => {
  let component: HotelCrudComponent;
  let fixture: ComponentFixture<HotelCrudComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HotelCrudComponent]
    });
    fixture = TestBed.createComponent(HotelCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
