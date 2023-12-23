import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { QuestionService } from '../question.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  

  signupForm:any=FormGroup;
  submit:boolean=false;
  isOnline:boolean=true;
  isNotMatch: boolean=false;

  constructor( private fb:FormBuilder,private router:Router, private http:QuestionService){
   }
 
  
  
    ngOnInit(): void {
      this.signupForm=this.fb.group({
        firstName:['',Validators.required],
        lastName:['',Validators.required],
        email:['',[Validators.required, Validators.email]],
        password:['',[Validators.required, Validators.minLength(8),Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/)]],
        confirmPassword:['',[Validators.required, Validators.minLength(8),Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/)]]
      
      });

      
    }
  
    get f()
    {
      return this.signupForm.controls;
    }
  
    onSubmit()
    {
      
      console.log(this.signupForm.value);

      let request={
        firstName:this.f.firstName.value,
        lastName:this.f.lastName.value,
        email:this.f.email.value,
        password:this.f.password.value,
        confirmPassword:this.f.confirmPassword.value
         }
         
         console.log(request);

         this.http.createStudent(request).subscribe(
          data =>{
            console.log('Data posted successfully', data);
            this.router.navigate([''])
          },
          (error) => {
            console.error('Error posting data', error);
            // Handle errors appropriately
          }

         );

        // this.router.navigate(['']);
    }


    passwordMatchValidator() {
      const password = this.f.password.value;
      const confirmPassword = this.f.confirmPassword.value;
  
    if(password===confirmPassword)
    {
      this.isNotMatch=false;
    }
    else{
      this.isNotMatch=true;
    }

      
    }
  

}
