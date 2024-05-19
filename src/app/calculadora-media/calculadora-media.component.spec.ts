import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculadoraMediaComponent } from './calculadora-media.component';

describe('CalculadoraMediaComponent', () => {
  let component: CalculadoraMediaComponent;
  let fixture: ComponentFixture<CalculadoraMediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalculadoraMediaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CalculadoraMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
