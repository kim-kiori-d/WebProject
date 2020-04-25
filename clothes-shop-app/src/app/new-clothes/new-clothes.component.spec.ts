import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewClothesComponent } from './new-clothes.component';

describe('NewClothesComponent', () => {
  let component: NewClothesComponent;
  let fixture: ComponentFixture<NewClothesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewClothesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewClothesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
