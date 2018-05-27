
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutdashComponent } from './aboutdash.component';

describe('AboutdashComponent', () => {
  let component: AboutdashComponent;
  let fixture: ComponentFixture<AboutdashComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutdashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutdashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
