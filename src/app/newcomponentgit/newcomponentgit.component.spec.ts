import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewcomponentgitComponent } from './newcomponentgit.component';

describe('NewcomponentgitComponent', () => {
  let component: NewcomponentgitComponent;
  let fixture: ComponentFixture<NewcomponentgitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewcomponentgitComponent]
    });
    fixture = TestBed.createComponent(NewcomponentgitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
