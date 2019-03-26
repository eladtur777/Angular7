import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardHoldersTblComponent } from './card-holders-tbl.component';

describe('CardHoldersTblComponent', () => {
  let component: CardHoldersTblComponent;
  let fixture: ComponentFixture<CardHoldersTblComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardHoldersTblComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardHoldersTblComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
