import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermcondComponent } from './termcond.component';

describe('TermcondComponent', () => {
  let component: TermcondComponent;
  let fixture: ComponentFixture<TermcondComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TermcondComponent]
    });
    fixture = TestBed.createComponent(TermcondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
