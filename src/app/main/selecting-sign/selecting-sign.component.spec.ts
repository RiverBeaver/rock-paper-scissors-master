import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectingSignComponent } from './selecting-sign.component';

describe('SelectingSignComponent', () => {
  let component: SelectingSignComponent;
  let fixture: ComponentFixture<SelectingSignComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectingSignComponent]
    });
    fixture = TestBed.createComponent(SelectingSignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
