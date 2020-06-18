import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateOneColComponent } from './template-one-col.component';

describe('TemplateOneColComponent', () => {
  let component: TemplateOneColComponent;
  let fixture: ComponentFixture<TemplateOneColComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateOneColComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateOneColComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
