import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { QuestionService } from '../question.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  myForm:any=FormGroup;
  errorMessage: string='';
  submit: boolean=false;
  darkMode: boolean = false;
  

constructor( private fb:FormBuilder,private router:Router,private  questionService:QuestionService){


  
}
isOnline: boolean = true;

  ngOnInit(): void {
    this.myForm=this.fb.group({
      email:['',Validators.required],
      password:['',[Validators.required, Validators.minLength(8),Validators.maxLength(8),Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/)]]
    
    })


    
  }


  get f()
  {
    return this.myForm.controls;
  }

  onSubmit() {
    this.questionService.loginUser(this.f.email.value, this.f.password.value)
      .subscribe(
        (data: any) => {
          this.submit = true;
          this.errorMessage = 'Login Successfully!';
          if(data.roleId==2){
          this.router.navigate(['/instruction']);
         
          }else{
            this.router.navigate(['/scoreboard']);
          }
          localStorage.setItem('userEmail', data.email);

        }
      );
      let request = {
        username: this.f.firstName.value,  
      };
      // this.questionService.storeTimestamp(request).subscribe(
      //   data =>{
      //     console.log('Data posted successfully', data);
  
      //   });
        console.log()
      
  }

  navigateTosignup() {
    this.router.navigate(['/signup']);
  }

  

}
