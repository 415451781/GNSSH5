import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayComponentComponent } from './pay-component.component';

describe('PayComponentComponent', () => {
  let component: PayComponentComponent;
  let fixture: ComponentFixture<PayComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
