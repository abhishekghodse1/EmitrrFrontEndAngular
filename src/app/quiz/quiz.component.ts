import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../question.service';
import { Quiz } from '../quiz';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  quiz: Quiz[] = [];
  questionForm: any = FormGroup;
  userAnswers: { [qid: number]: any } = {};
  score: Number = 0;
  userName : any;
  scoreid: any ;


  constructor(private studentService: QuestionService, private fb: FormBuilder, private router: Router) {
    this.questionForm = this.fb.group({});
  }

  ngOnInit(): void {
    console.log('Component initialized');

    this.studentService.getAllQiuzzes().subscribe(
      (data: Quiz[]) => {
        console.log('Data received:', data);

        this.quiz = data.filter(q => q.answer !== null);

        this.quiz = data;
        this.quiz.forEach(q => {
          this.questionForm.addControl(`q${q.qid}`, new FormControl(''));
        });
        console.log("hii", this.quiz);
      }
    );
  }

  onSubmit() {
    if (this.questionForm.valid) {


      this.quiz.forEach(q => {
        const selectedOption = this.questionForm.get(`q${q.qid}`).value;

        console.log(`Question: ${q.question}`);
        console.log(`Selected Option: ${selectedOption}`);
        this.userAnswers[q.qid] = selectedOption;
        console.log(this.userAnswers)
        console.log('-------------------');

        // let sqid=selectedOption.qid
        // console.log(sqid)
        // let sans=selectedOption.userAnswers
        // console.log(sans)
        // let fqid=this.questionForm.qid
        // console.log(fqid)
        // let fans=this.questionForm.answer
        // console.log(fans)
        // console.log(selectedOption,q.correct_option)
        console.log(`User's Answer: ${selectedOption}`, `Correct Answer: ${q.correct_option}`);









      });


      let score = 0;
      this.quiz.forEach(q => {
        const selectedOption = this.userAnswers[q.qid];
        if (selectedOption == q.correct_option) {
          
          score += (q.questionMarks);
        }
      });

      console.log(`Total Score: ${score}`);

      const submissionData = {
        userAnswers: this.userAnswers,
        totalScore: score
      };

      let totalScoreString = score.toString(); 
      
       let sum :number=0;
       
      for (let i = 0; i < totalScoreString.length; i++) {
        sum += parseInt(totalScoreString[i]);
      }
       this.scoreid = sum;
      localStorage.setItem('score',this.scoreid);


      this.userName = localStorage.getItem('userEmail');
      
      
      this.studentService.httpRequest(sum,this.userName).subscribe(
        response => {
          console.log('Question submitted successfully:', response);
          
          this.router.navigate(['leadership'])
        },
        
      );
      this.router.navigate(['leadership'])





    }




  }

  onNext() {
    
    
  }
}
