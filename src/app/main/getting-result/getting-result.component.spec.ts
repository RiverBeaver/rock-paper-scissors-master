import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GettingResultComponent } from './getting-result.component';

describe('GettingResultComponent', () => {
  let component: GettingResultComponent;
  let fixture: ComponentFixture<GettingResultComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GettingResultComponent]
    });
    fixture = TestBed.createComponent(GettingResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
