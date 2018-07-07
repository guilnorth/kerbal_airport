import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPassageiroComponent } from './list-passageiro.component';

describe('ListPassageiroComponent', () => {
  let component: ListPassageiroComponent;
  let fixture: ComponentFixture<ListPassageiroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPassageiroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPassageiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
