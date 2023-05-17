import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FruitButtonComponent } from './fruit-button.component';

describe('FruitButtonComponent', () => {
  let component: FruitButtonComponent;
  let fixture: ComponentFixture<FruitButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FruitButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FruitButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
