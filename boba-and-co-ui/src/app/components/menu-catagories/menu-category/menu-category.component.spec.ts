import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuCategoryComponent } from './menu-category.component';

describe('MenuCategoryComponent', () => {
  let component: MenuCategoryComponent;
  let fixture: ComponentFixture<MenuCategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuCategoryComponent]
    });
    fixture = TestBed.createComponent(MenuCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
