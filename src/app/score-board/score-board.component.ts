import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { QuestionService } from '../question.service';
import { TimeStamps } from '../time-stamps';

@Component({
  selector: 'app-score-board',
  templateUrl: './score-board.component.html',
  styleUrls: ['./score-board.component.css']
})
export class ScoreBoardComponent implements OnInit {

  timestampData: any;
  constructor(private router:Router,private timestampService: QuestionService) { }

  logout()
  {
    this.router.navigate([''])
  }





  ngOnInit(): void {
    this.getTimestamps();
  }

  getTimestamps(): void {
    console.log("component initialized")
    this.timestampService.getTimestamps()
      .subscribe(
        data => {
          console.log(this.timestampData)
          console.log(data);
          this.timestampData = data;
        }
      );
  }

}
