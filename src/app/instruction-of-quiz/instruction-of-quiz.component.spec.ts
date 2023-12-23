import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructionOfQuizComponent } from './instruction-of-quiz.component';

describe('InstructionOfQuizComponent', () => {
  let component: InstructionOfQuizComponent;
  let fixture: ComponentFixture<InstructionOfQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstructionOfQuizComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructionOfQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
