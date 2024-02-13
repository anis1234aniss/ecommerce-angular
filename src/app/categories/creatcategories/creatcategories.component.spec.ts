import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatcategoriesComponent } from './creatcategories.component';

describe('CreatcategoriesComponent', () => {
  let component: CreatcategoriesComponent;
  let fixture: ComponentFixture<CreatcategoriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreatcategoriesComponent]
    });
    fixture = TestBed.createComponent(CreatcategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
