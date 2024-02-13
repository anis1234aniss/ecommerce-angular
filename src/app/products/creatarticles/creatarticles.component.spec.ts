import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatarticlesComponent } from './creatarticles.component';

describe('CreatarticlesComponent', () => {
  let component: CreatarticlesComponent;
  let fixture: ComponentFixture<CreatarticlesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreatarticlesComponent]
    });
    fixture = TestBed.createComponent(CreatarticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
