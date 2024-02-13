import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListecategoriesComponent } from './listecategories.component';

describe('ListecategoriesComponent', () => {
  let component: ListecategoriesComponent;
  let fixture: ComponentFixture<ListecategoriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListecategoriesComponent]
    });
    fixture = TestBed.createComponent(ListecategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
