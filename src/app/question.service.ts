import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, Timestamp, catchError, throwError } from 'rxjs';
import { Question } from './question';
import { Login } from './login';
import { Quiz } from './quiz';
import { TimeStamps } from './time-stamps';
@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  
  
  private baseURL = "http://localhost:8080/first/registration";
  private loginURL = "http://localhost:8080/first/login";
  private baseUrl = 'http://localhost:8080/quiz/getstud';
  // private baseUrl1 = 'http://localhost:8080/timestamp';

  constructor(private http: HttpClient) { }

  createStudent(question: any): Observable<Object> {
    return this.http.post(`${this.baseURL}`, question);
  }

 

  

  loginUser(email: string, password: string): Observable<Login> {
    const loginData = { email, password };
    console.log(loginData)
    return this.http.post<Login>(this.loginURL, loginData)
    
      // .pipe(
      //   catchError(this.handleError)
      // );
  }

  // private handleError(error: any) {
  //   console.error('An error occurred:', error);
  //   return throwError(error);
  // }

  
  getAllQiuzzes(): Observable<Quiz[]> {
    return this.http.get<Quiz[]>(this.baseUrl);
  }

  private apiUrl = 'http://localhost:8080/quiz/saveQuestions'; 

  // submitQuestion(): Observable<any> {
  //   return this.http.post(this.apiUrl, questionData);
  // }



 

  private baseUrl1 = 'http://localhost:8080/timestamp/store'; 

  httpRequest(score: any, username: string): Observable<any> {
    const scoreDetail = { score, username };
    
    return this.http.post<any>(this.baseUrl1, scoreDetail)
    
      // .pipe(
      //   catchError(this.handleError)
      // );
  }

  // storeTimestamp(timestampData: any): Observable<any> {
  //   return this.http.post(`${this.baseUrl1}/store`, timestampData);
  // }
  private baseUrl2 = 'http://localhost:8080/timestamp'; 
  getTimestamps(): Observable<TimeStamps[]> {
    return this.http.get<TimeStamps[]>(`${this.baseUrl2}/getTimestamps`);
  }
  
  
}
