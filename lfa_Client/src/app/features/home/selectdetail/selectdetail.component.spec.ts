import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectdetailComponent } from './selectdetail.component';

describe('SelectdetailComponent', () => {
  let component: SelectdetailComponent;
  let fixture: ComponentFixture<SelectdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectdetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SelectdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
