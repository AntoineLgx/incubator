import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartUpFormComponent } from './start-up-form.component';

describe('SignUpComponent', () => {
  let component: StartUpFormComponent;
  let fixture: ComponentFixture<StartUpFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartUpFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartUpFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
