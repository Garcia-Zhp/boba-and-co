import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeverageComponent } from './beverage.component';

describe('BeverageComponent', () => {
  let component: BeverageComponent;
  let fixture: ComponentFixture<BeverageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BeverageComponent]
    });
    fixture = TestBed.createComponent(BeverageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
