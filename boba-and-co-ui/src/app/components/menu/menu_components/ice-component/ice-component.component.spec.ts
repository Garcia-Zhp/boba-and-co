import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IceComponentComponent } from './ice-component.component';

describe('IceComponentComponent', () => {
  let component: IceComponentComponent;
  let fixture: ComponentFixture<IceComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IceComponentComponent]
    });
    fixture = TestBed.createComponent(IceComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
