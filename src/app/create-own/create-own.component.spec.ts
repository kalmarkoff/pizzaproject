import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOwnComponent } from './create-own.component';

describe('CreateOwnComponent', () => {
  let component: CreateOwnComponent;
  let fixture: ComponentFixture<CreateOwnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateOwnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateOwnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
