import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationCrudComponent } from './location-crud.component';

describe('LocationCrudComponent', () => {
  let component: LocationCrudComponent;
  let fixture: ComponentFixture<LocationCrudComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LocationCrudComponent]
    });
    fixture = TestBed.createComponent(LocationCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
