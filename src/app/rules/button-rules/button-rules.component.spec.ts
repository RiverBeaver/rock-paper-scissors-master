import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonRulesComponent } from './button-rules.component';

describe('ButtonRulesComponent', () => {
  let component: ButtonRulesComponent;
  let fixture: ComponentFixture<ButtonRulesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonRulesComponent]
    });
    fixture = TestBed.createComponent(ButtonRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
