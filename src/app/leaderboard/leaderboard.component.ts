import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Question } from '../question';
import { QuestionService } from '../question.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {
  signupForm:any=FormGroup;
  score:any;
  constructor(private router:Router,private http:QuestionService,private fb:FormBuilder) { 
  this.score = localStorage.getItem('score');
  }

  ngOnInit(): void {
  }

  get f()
  {
    return this.signupForm.controls;
  }
  onClick()
  {
    this.router.navigate(['scoreboard'])

    let request={
      firstName:this.f.firstName.value,
       }
    // this.http.storeTimestamp(request).subscribe(
    //   data =>{
    //     console.log('Data posted successfully', data);

    //   });
      console.log(request)
    }
  


}
