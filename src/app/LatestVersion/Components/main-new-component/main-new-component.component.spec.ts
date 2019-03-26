import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainNewComponentComponent } from './main-new-component.component';

describe('MainNewComponentComponent', () => {
  let component: MainNewComponentComponent;
  let fixture: ComponentFixture<MainNewComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainNewComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainNewComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
