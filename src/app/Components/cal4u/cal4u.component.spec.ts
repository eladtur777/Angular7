import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cal4uComponent } from './cal4u.component';

describe('Cal4uComponent', () => {
  let component: Cal4uComponent;
  let fixture: ComponentFixture<Cal4uComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cal4uComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cal4uComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
