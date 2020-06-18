import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateTwoColsComponent } from './template-two-cols.component';

describe('TemplateTwoColsComponent', () => {
  let component: TemplateTwoColsComponent;
  let fixture: ComponentFixture<TemplateTwoColsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateTwoColsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateTwoColsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
