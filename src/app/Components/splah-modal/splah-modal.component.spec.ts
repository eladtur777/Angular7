import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SplahModalComponent } from './splah-modal.component';

describe('SplahModalComponent', () => {
  let component: SplahModalComponent;
  let fixture: ComponentFixture<SplahModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SplahModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SplahModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
