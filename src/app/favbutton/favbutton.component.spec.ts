import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavbuttonComponent } from './favbutton.component';

describe('FavbuttonComponent', () => {
  let component: FavbuttonComponent;
  let fixture: ComponentFixture<FavbuttonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavbuttonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
