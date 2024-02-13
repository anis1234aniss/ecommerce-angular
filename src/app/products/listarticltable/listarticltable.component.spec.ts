import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarticltableComponent } from './listarticltable.component';

describe('ListarticltableComponent', () => {
  let component: ListarticltableComponent;
  let fixture: ComponentFixture<ListarticltableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarticltableComponent]
    });
    fixture = TestBed.createComponent(ListarticltableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
