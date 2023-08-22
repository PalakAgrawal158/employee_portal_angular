import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutBarComponent } from './layout-bar.component';

describe('LayoutBarComponent', () => {
  let component: LayoutBarComponent;
  let fixture: ComponentFixture<LayoutBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LayoutBarComponent]
    });
    fixture = TestBed.createComponent(LayoutBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
