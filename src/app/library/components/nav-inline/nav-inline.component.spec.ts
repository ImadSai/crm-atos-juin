import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavInlineComponent } from './nav-inline.component';

describe('NavInlineComponent', () => {
  let component: NavInlineComponent;
  let fixture: ComponentFixture<NavInlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavInlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavInlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
