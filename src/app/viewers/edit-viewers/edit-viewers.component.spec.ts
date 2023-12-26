import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditViewersComponent } from './edit-viewers.component';

describe('EditViewersComponent', () => {
  let component: EditViewersComponent;
  let fixture: ComponentFixture<EditViewersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditViewersComponent]
    });
    fixture = TestBed.createComponent(EditViewersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
