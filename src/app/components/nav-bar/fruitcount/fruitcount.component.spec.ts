import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FruitcountComponent } from './fruitcount.component';

describe('FruitcountComponent', () => {
  let component: FruitcountComponent;
  let fixture: ComponentFixture<FruitcountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FruitcountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FruitcountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
