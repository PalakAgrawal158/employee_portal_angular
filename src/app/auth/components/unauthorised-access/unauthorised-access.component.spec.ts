import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnauthorisedAccessComponent } from './unauthorised-access.component';

describe('UnauthorisedAccessComponent', () => {
  let component: UnauthorisedAccessComponent;
  let fixture: ComponentFixture<UnauthorisedAccessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UnauthorisedAccessComponent]
    });
    fixture = TestBed.createComponent(UnauthorisedAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
