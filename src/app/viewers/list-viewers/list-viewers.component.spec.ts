import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListViewersComponent } from './list-viewers.component';

describe('ListViewersComponent', () => {
  let component: ListViewersComponent;
  let fixture: ComponentFixture<ListViewersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListViewersComponent]
    });
    fixture = TestBed.createComponent(ListViewersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
