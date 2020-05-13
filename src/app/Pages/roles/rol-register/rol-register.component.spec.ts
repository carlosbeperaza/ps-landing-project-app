import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RolRegisterComponent } from './rol-register.component';

describe('RolRegisterComponent', () => {
  let component: RolRegisterComponent;
  let fixture: ComponentFixture<RolRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RolRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RolRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
