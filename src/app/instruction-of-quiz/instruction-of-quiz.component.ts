import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionService } from '../question.service';

@Component({
  selector: 'app-instruction-of-quiz',
  templateUrl: './instruction-of-quiz.component.html',
  styleUrls: ['./instruction-of-quiz.component.css']
})
export class InstructionOfQuizComponent implements OnInit {

  quiz: any; // Define the type of quiz object

  constructor(private router:Router) {
    
    this.quiz = {
      numberOfQuestions: 10, 
      maxMarks: 100 
    };
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  startQuiz() {
    
    console.log('Quiz started!');
    this.router.navigate(['quiz'])
   
  }
}
   
 
    
  

