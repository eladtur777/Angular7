import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsTblComponent } from './clients-tbl.component';

describe('ClientsTblComponent', () => {
  let component: ClientsTblComponent;
  let fixture: ComponentFixture<ClientsTblComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientsTblComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientsTblComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
