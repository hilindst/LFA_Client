import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginFloatComponent } from './login-float.component';

describe('LoginFloatComponent', () => {
  let component: LoginFloatComponent;
  let fixture: ComponentFixture<LoginFloatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginFloatComponent]
    });
    fixture = TestBed.createComponent(LoginFloatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
