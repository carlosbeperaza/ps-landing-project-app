import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterSubmoduleComponent } from './register-submodule.component';

describe('RegisterSubmoduleComponent', () => {
  let component: RegisterSubmoduleComponent;
  let fixture: ComponentFixture<RegisterSubmoduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterSubmoduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterSubmoduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
