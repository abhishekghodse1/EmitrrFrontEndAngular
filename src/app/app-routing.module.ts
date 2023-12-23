import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { QuizComponent } from './quiz/quiz.component';
import { InstructionOfQuizComponent } from './instruction-of-quiz/instruction-of-quiz.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { ScoreBoardComponent } from './score-board/score-board.component';


const routes: Routes = [
  {path:'',component:LoginComponent},
   {path:'signup',component:SignupComponent},
   {path:'quiz',component:QuizComponent},
   {path:'instruction',component:InstructionOfQuizComponent},
   {path:'leadership',component:LeaderboardComponent},
   {path:'scoreboard',component:ScoreBoardComponent}
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
