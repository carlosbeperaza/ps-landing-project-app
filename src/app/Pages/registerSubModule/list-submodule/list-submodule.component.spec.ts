import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSubmoduleComponent } from './list-submodule.component';

describe('ListSubmoduleComponent', () => {
  let component: ListSubmoduleComponent;
  let fixture: ComponentFixture<ListSubmoduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListSubmoduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSubmoduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
