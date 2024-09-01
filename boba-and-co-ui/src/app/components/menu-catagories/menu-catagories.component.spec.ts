import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuCatagoriesComponent } from './menu-catagories.component';

describe('MenuCatagoriesComponent', () => {
  let component: MenuCatagoriesComponent;
  let fixture: ComponentFixture<MenuCatagoriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuCatagoriesComponent]
    });
    fixture = TestBed.createComponent(MenuCatagoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
