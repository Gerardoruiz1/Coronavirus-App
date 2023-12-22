import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewersPageComponent } from './viewers-page.component';

describe('ViewersPageComponent', () => {
  let component: ViewersPageComponent;
  let fixture: ComponentFixture<ViewersPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewersPageComponent]
    });
    fixture = TestBed.createComponent(ViewersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
